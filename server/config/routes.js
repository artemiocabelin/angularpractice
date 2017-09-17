let mongoose = require('mongoose');
let path = require('path');
let User = mongoose.model('User'); // alter as needed
let users = require('../controllers/users.js') // alter

module.exports = function(app) {
    // route handlers goes here
    // sample
    app.get('/api', users.showSomethings)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
    // ------------------------
}
