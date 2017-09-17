// alter title of file as needed. Don't forget to change dependent files as well
let mongoose = require('mongoose');
let User = mongoose.model('User'); // change as needed

module.exports = {
    showSomethings : function(request, response) {
        Something.find({}, function(error, somethings) {
            if (error) {
                console.log(error);
            } else {
                response.json(true);
            }
        });
    }
}