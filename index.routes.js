module.exports = function (app, db, passport) {

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
};
