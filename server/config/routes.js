let mongoose = require('mongoose');
let path = require('path');
let User = mongoose.model('User'); // alter as needed
let users = require('../controllers/users.js') // alter

function authenticate(req, res, next) {
    if(req.session.username){
        next();
    }else {
        res.sendStatus(401);
    }
}

module.exports = function(app) {
    // route handlers goes here
    // sample
    console.log('ping!!');
    app.post('/api/users/login', users.loginUserAndCreateIfNotFound);
    app.use(authenticate);
    app.get('/api/users/current', users.getCurrentUser);
    app.get('/api/users/logout', users.logoutCurrentUser);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
    // ------------------------
}
