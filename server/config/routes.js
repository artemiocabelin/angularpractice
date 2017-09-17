let mongoose = require('mongoose');
let path = require('path');
let Something = mongoose.model('Something'); // alter as needed
let somethings = require('../controllers/somethings.js') // alter

module.exports = function(app) {
    // route handlers goes here
    // sample
    app.get('/', function(request, response) {
        somethings.showSomethings(request,response);
    })
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
    // ------------------------
}
