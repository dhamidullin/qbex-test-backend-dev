global.log = global.console.log

const port = 80;
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db.mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/angular-app/dist/angular-app'));
app.use(cookieParser());
app.use(session({
    secret: '@%#!@#$!@#$!@#',
    saveUninitialized: false,
    resave: true,
    cookie: {
        maxAge: 60 * 60 * 1000
    }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    // определяет какие данные сохраняются в req.user
    done(null, {
        username: user.username,
        _id: user._id,
        status: user.status
    });
});
passport.deserializeUser((user, done) => {
    // console.log(user);
    done(null, user);
});

passport.use('localStrategy', new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    (req, username, password, done) => {

        db.getOneUserByUsername(username, (err, user) => {

            if (err) {
                console.log('Ошибка базы данных');
                console.log(err);
                done('Ошибка базы данных', false);
                return;
            }
            if (user == null) {
                // console.log('Вход запрещен, нет такого пользователя');
                return done('Нет такого пользователя', false);
            }

            if (user.password !== password) {
                // console.log('Вход запрещен, пароль введён некорректно');
                return done('Пароль введён некорректно', false);
            }

            // console.log('Вход по логину-паролю разрешен');
            return done(null, user);
        });
    }
));

app.use((req, res, next) => {
    console.log(req.method + ' ' + req.url);
    req.isAdmin = (req.isAuthenticated()) && (req.user.status == 'admin');
    next();
});

// для юзера
app.post("/sign-up", (req, res) => {
    if (req.isAuthenticated())
        return res.end(JSON.stringify({ err: "Вы уже выполнили вход." }));
    db.addUser(req.body, (err) => {
        if (err)
            console.log(err);
        if (err) {
            if (err.code == 11000)
                return res.end(JSON.stringify({ err: "Такой пользователь уже существует, смените username" }));
            return res.end(JSON.stringify({ err: "Ошибка базы данных, попробуйте позже" }));
        }
        return res.end(JSON.stringify({ err: false }));
    });
});
app.post('/sign-in', (req, res, next) => {
    if (req.isAuthenticated())
        return res.end(JSON.stringify({ err: "Вы уже выполнили вход." }));
    passport.authenticate('localStrategy', (err, user) => {

        if (err)
            return res.end(JSON.stringify({ err: err }));

        // этот метод необходим при использовании кастомной callback функции 
        req.logIn(user, (err) => {
            if (err)
                return res.send(JSON.stringify({ err: 'Error while login, please, try later' }));
            else
                return res.send(JSON.stringify({ err: false }));
        });

        return res.end(JSON.stringify({ err: false }));
    })(req, res, next);
});
app.get("/logout", (req, res, next) => {
    req.session.destroy();
    req.logOut();
    res.end(JSON.stringify({
        err: false
    }));
});
app.get("/isAuthenticated", (req, res, next) => {
    res.end(JSON.stringify({ isAuthenticated: req.isAuthenticated() }));
});
app.get('/username', (req, res, next) => {
    if (!req.isAuthenticated())
        return res.end(JSON.stringify(null));
    res.end(JSON.stringify(req.user.username));
});
app.get('/isAdmin', (req, res, next) => {
    res.end(JSON.stringify(req.isAdmin));
});
app.get('/getBasket', (req, res, next) => {
    if (!req.isAuthenticated())
        return res.end(JSON.stringify({
            basket: []
        }));
    db.getOneUserByUsername(req.user.username, (err, doc) => {
        res.end(JSON.stringify({
            basket: doc.basket
        }));
    });
});
app.get('/howManyInBasket', (req, res, next) => {
    if (!req.isAuthenticated())
        return res.end(JSON.stringify({ n: 0 }));
    db.getUserObject(req.user._id, (err, doc) => {
        if (err)
            return console.log(err);
        var n = 0;
        for (let i = 0; i < doc.basket.length; i++)
            if (req.query.id == (doc.basket[i]))
                n++;
        res.end(JSON.stringify({ n: n }));
    });
});
app.get('/addToBasket', (req, res, next) => {
    if (!req.isAuthenticated())
        return;
    db.addToBasket(req.user._id, req.query.id, (err, raw) => {
        if (err)
            return console.log(err);
        res.end(JSON.stringify({
            err: false
        }));
    });
});
app.get('/remooveFromBasket', (req, res, next) => {
    db.remooveFromBasket(req.user._id, req.query.id, (err, row) => {
        if (err)
            return console.log(err);
        res.end(JSON.stringify({
            err: false
        }));
    });
});
app.get('/remooveAllFromBasket', (req, res, next) => {
    db.remooveAllFromBasket(req.user._id, (err, row) => {
        if (err)
            return console.log(err);
        res.end(JSON.stringify({
            err: false
        }));
    });
});
app.get('/makeOrder', (req, res, next) => {
    db.makeOrder(req.user._id, (err) => {
        if (err)
            return console.log(err);
        console.log('made order');
        res.end(JSON.stringify({
            err: false
        }));
    })
});

// безопасные роуты
app.get('/getCatalog', (req, res, next) => {
    var query = req.query.query;
    db.getCatalog(query, (err, docs) => {
        res.end(JSON.stringify({
            catalog: docs
        }));
    })
});
app.get('/getProductByLink', (req, res, next) => {
    db.getOneProductByLink(req.query.link, (err, doc) => {
        if (err)
            return console.log(err);
        res.end(JSON.stringify({
            product: doc
        }));
    });
});
app.get('/getProductById', (req, res, next) => {
    db.getOneProductById(req.query.id, (err, product) => {
        if (err)
            return console.log(err);
        res.end(JSON.stringify({
            product: product
        }));
    });
});
app.post('/getProductsByManyIds', (req, res, next) => {
    if (!req.isAuthenticated())
        res.end(JSON.stringify({
            products: []
        }));
    db.getProductsByManyIds(req.body.ids, (err, products) => {
        if (err)
            return console.log(err);
        res.end(JSON.stringify({
            products: products
        }));
    });
});

// для админов
app.delete('/deleteProduct', (req, res, next) => {
    if (!req.isAdmin)
        return;
    var link = req.query.link;
    db.deleteOneProductByLink(link, (err) => {
        if (err)
            return console.log(err)
        else
            res.end(JSON.stringify({
                err: false
            }));
    });
});
app.post('/updateProduct', (req, res, next) => {
    if (!req.isAdmin)
        return;
    var product = req.body.product;
    db.updateProduct(product, (err) => {
        if (err)
            console.log(err);
    });
});
app.post('/addProduct', (req, res, next) => {
    if (!req.isAdmin)
        return;
    var product = req.body.product;
    db.addProduct(product, (err) => {
        if (err)
            console.log(err);
    });
});
app.get('/getUserList', (req, res, next) => {
    if (!req.isAdmin)
        return;
    db.getUsersList((err, docs) => {
        if (err)
            return console.log(err);
        res.end(JSON.stringify({
            users: docs
        }));
    });
});
app.delete('/deleteUser', (req, res, next) => {
    if (!req.isAdmin)
        return;
    db.deleteUserById(req.query.id, (err, deletedDoc) => {
        if (err)
            return console.log(err);
        res.end(JSON.stringify({
            err: false
        }));
    });
});
app.get('/getUserObject', (req, res, next) => {
    if (!req.isAdmin)
        return;
    db.getUserObject(req.query.id, (err, user) => {
        if (err)
            return console.log(err);
        res.end(JSON.stringify({
            userObject: user
        }));
    });
});
app.get('/getOrders', (req, res, next) => {
    if (!req.isAdmin)
        return;
    db.getOrders((err, orders) => {
        if (err)
            return console.log(err);
        res.end(JSON.stringify({
            orders: orders
        }))
    });
});
app.get('/getOrder', (req, res, next) => {
    if (!req.isAdmin)
        return;
    db.getOrderById(req.query.id, (err, order) => {
        if (err)
            return console.log(err);
        res.end(JSON.stringify({
            order: order
        }))
    });
});
















app.get('/*', (req, res, next) => {
    res.sendFile(__dirname + '/angular-app/dist/angular-app/index.html')
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});

