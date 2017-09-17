const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        minlength: [5, 'Minimum of 5 characters only is required']
    },
    items: [{type: Schema.Types.ObjectId, ref: 'Item'}]
}, {timestamps: true})
const User = mongoose.model('User', UserSchema);