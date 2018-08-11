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
    console.log(user);
    done(null, user);
});

var localStrategy = new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true,
        //session: false,
    },
    (req, username, password, done) => {
        console.log('Работает LocalStrategy');
        console.log('username: ' + username);
        console.log('password: ' + password);

        // найти и проверить юзера
        // обработать ошибки
        // done('логинопароль ошибочен', false);
        // done(null, userObject);

        db.getOneUserByUsername(username, (err, user) => {
            console.log('user');
            console.log(user);

            if (err) {
                console.log('Ошибка базы данных');
                console.log(err);
                done('Ошибка базы данных', false);
                return;
            }
            if (user == null) {
                console.log('Вход запрещен, нет такого пользователя');
                return done('Нет такого пользователя', false);
            }

            if (user.password !== password) {
                console.log('Вход запрещен, пароль введён некорректно');
                return done('Пароль введён некорректно', false);
            }

            console.log('Вход по логину-паролю разрешен');
            return done(null, user);
        });
    }
);
passport.use('localStrategy', localStrategy);

require('./index.routes')(app, db, passport);

app.get('/getCatalog', (req, res, next) => {
    db.getCatalog({}, (err, docs) => {
        res.end(JSON.stringify({
            catalog: docs
        }));
    })
});

app.get('/getProductByLink:link', (req, res, next) => {
    var link = req.params.link;
    db.getOneProductByLink(link, (err, doc) => {
        res.end(JSON.stringify({
            product: doc
        }));
    });
});







app.get('/*', (req, res, next) => {
    res.sendFile(__dirname + '/angular-app/dist/angular-app/index.html')
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});

