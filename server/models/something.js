let mongoose = require('mongoose');

var SomethingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        validate: {
            validator: function( value ) {
                return false;
            },
            message: "{ VALUE } failed this validator"
        }
    }
})

var Something = mongoose.model('Something', SomethingSchema);