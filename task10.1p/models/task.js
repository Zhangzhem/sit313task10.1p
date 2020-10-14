const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    type: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    setting: {
        type: String,
        required: false
    },
    workers: {
        type: String,
        required: true
    },
    reward: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model('task', taskSchema);