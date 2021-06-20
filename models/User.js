const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    birthday: {
        type: Date
    },
    balance: {
        type: Number,
        default: 0,
    },
    email: {
        type: String,
        unique: true
    },
});

module.exports = mongoose.model('Users', userSchema);