const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    },


});

const Message = mongoose.model('Massage', messageSchema);


exports.Message = Message;