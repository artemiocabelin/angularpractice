const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session'); // check if needed

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.static(path.join(__dirname, "./public/dist")));

const sessionConfig = {
    secret: 'SecretKey', // change secret key as needed
//     resave: false, // Don't resave session if no changes were made
//     saveUninitialized: true, // Don't save session if there was nothing initialized
//     name: 'myCookie', // Sets a custom cookie name
//     cookie: {
//         secure: false, // This need to be true, but only on HTTPS
//         httpOnly: false, // forces the cookie to only be used over http
//         maxAge: 3600000
//     }
}
app.use(session(sessionConfig));  // change secret key as needed


require('./server/config/mongoose.js');
let routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function() {
 console.log("listening on port 8000");
});

// ---- Socket Code below (uncomment as needed)----
// var server = app.listen(8000, function() {
//     console.log("listening on port 8000");
// });
// var io = require('socket.io').listen(server);
// var messages = [];
// var users = {};
// io.sockets.on('connection', function (socket) {
//     console.log("Client/socket is connected!");
//     console.log("Client/socket id is: ", socket.id);
    // --all the server socket code goes in here


    // -----------------------------------------
// });
