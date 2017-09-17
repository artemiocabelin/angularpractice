let mongoose = require('mongoose');
let path = require('path');
let User = mongoose.model('User'); // alter as needed
let users = require('../controllers/users.js') // alter
let items = require('../controllers/items.js') // alter

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
    app.post('/api/items/create', items.createItemForUser);
    app.post('/api/items/undo', items.undoItemForUser);
    app.post('/api/items/complete', items.completeItemForUser);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
    // ------------------------
}
