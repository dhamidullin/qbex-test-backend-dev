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
    done(null, user);
});

passport.deserializeUser((user, done) => {
    // console.log(user);
    done(null, user);
});

passport.use('localStrategy', new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true,
        //session: false,
    },
    (req, username, password, done) => {
        // console.log('Работает LocalStrategy');
        // console.log('username: ' + username);
        // console.log('password: ' + password);

        // найти и проверить юзера
        // обработать ошибки
        // done('логинопароль ошибочен', false);
        // done(null, userObject);

        db.getOneUserByUsername(username, (err, user) => {
            // console.log('user');
            // console.log(user);

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






app.post("/sign-up", (req, res) => {
    if (req.isAuthenticated())
        return res.end(JSON.stringify({ err: "Вы уже выполнили вход." }));
    console.log("Работает app.post /registration");
    db.addUser(req.body, (err) => {
        console.log("console.log here");
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
        console.log("err");
        console.log(err);
        console.log("user");
        console.log(user);

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

app.get('/userObject', (req, res, next) => {
    console.log('getUserObject');
    console.log(req.isAuthenticated());
    console.log(JSON.stringify(req.user));
    if (req.isAuthenticated())
        res.end(JSON.stringify({
            user: {
                username: req.user.username,
                isAdmin: (req.user.access_rights == 'admin')
            }
        }));
    else
        res.end(JSON.stringify({
            user: {
                username: null,
                isAdmin: false
            }
        }));
});

app.get('/getCatalog', (req, res, next) => {
    var query = req.query.query;
    db.getCatalog(query, (err, docs) => {
        res.end(JSON.stringify({
            catalog: docs
        }));
    })
});

app.get('/getProductByLink:link', (req, res, next) => {
    var link = req.params.link;
    db.getOneProductByLink(link, (err, doc) => {
        console.log(link);
        console.log(err);
        console.log(doc);
        res.end(JSON.stringify({
            product: doc
        }));
    });
});

app.delete('/product:link', (req, res, next) => {
    var link = req.params.link;
    console.log('delete ' + link)
    db.deleteOneProductByLink(link, (err) => {
        if (err)
            return console.log(err)
        else
            res.end(JSON.stringify({
                err: false
            }));
    });
});

app.put('/updateProduct', (req, res, next) => {
    var product = req.body.product;
    var link = req.query.link;

    db.updateProduct(link, product, (err) => {
        if (err)
            return console.log(err);
        res.end(JSON.stringify({
            err: false
        }));
    });
});


















app.get('/*', (req, res, next) => {
    res.sendFile(__dirname + '/angular-app/dist/angular-app/index.html')
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});

