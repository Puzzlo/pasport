// index.js in routes

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {title: "welkam abroad"});
    });

    app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });
};