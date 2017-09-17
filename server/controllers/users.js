// alter title of file as needed. Don't forget to change dependent files as well
let mongoose = require('mongoose');
let User = mongoose.model('User'); // change as needed
let Item = mongoose.model('Item'); // change as needed

module.exports = {
    loginUserAndCreateIfNotFound : (request, response) => {
        console.log('server received request for login. Now processing')
        User.findOne({username: request.body.username})
            .populate('items')
            .exec((error, user) => {
                if (error) {
                    console.log('error with finding process');
                    console.log(error);
                } else {
                    if (user) {
                        console.log('found user in db');
                        request.session.username = request.body.username;
                        response.json(user);
                    } else {
                        let newUser = new User(request.body);
                        newUser.save((errorList, savedUser) => {
                            if (errorList) {
                                let errors = {};
                                errors.message = errorList.errors.username.message;
                                response.json(errors);
                            }
                            console.log('created a new user, now saving to session')
                            request.session.username = savedUser.username;
                            response.json(savedUser);
                        });
                    }
                }
            });
    },

    getCurrentUser: (req, res) => {
        console.log('controller getting current user');
        User.findOne({username: req.session.username})
            .populate('items')
            .exec((error, foundUser) => {
                if(error) {
                    console.log('controller error');
                    console.log(error);
                    res.json(error);
                } else {
                    console.log('found user');
                    res.json(foundUser);
                }
            });
    },
    
    logoutCurrentUser: (req, res) => {
        console.log('controller logging user out');
        delete req.session.username;
        res.json(true);
    }
}