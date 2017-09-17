const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [5, 'Minimum of 5 characters only is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [10, 'Minimum of 10 characters only is required']
    },
    complete: {
        type: Boolean,
        default: false
    },
    creator: {
        type: String
    },
    _creator: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})
const Item = mongoose.model('Item', ItemSchema);