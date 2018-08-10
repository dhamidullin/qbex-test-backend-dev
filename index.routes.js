module.exports = function (app, db) {

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

    app.get("/isAuthenticated", (req, res, next) => {
        res.end(JSON.stringify({ isAuthenticated: req.isAuthenticated() }));
    });
    
    app.get("/userObject", (req, res, next) => {
        res.end(JSON.stringify({
            user: req.user,
            session: req.session
        }));
    });
};