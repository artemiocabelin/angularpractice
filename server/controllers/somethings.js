// alter title of file as needed. Don't forget to change dependent files as well
let mongoose = require('mongoose');
let Something = mongoose.model('Something'); // change as needed

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