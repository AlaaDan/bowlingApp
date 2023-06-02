const moment = require('moment')
const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    bookingDate: {
        required: true,
        type: String,
    },
    bookingEmail: {
        required: true,
        type: String
    },
    bookingTime: {
        required: true,
        type: String,
    },
    numberOfPlayers: {
        required: true,
        type: Number
    },
    numberOfCourses: {
        required: true,
        type: Number
    },
    shoeSizes: {
        required: true,
        type: []
    }
});

module.exports = mongoose.model('Booking', bookingSchema)