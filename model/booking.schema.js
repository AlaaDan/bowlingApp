const moment = require('moment')
const mongoose = require('mongoose')
const uuid = require('uuid-random')

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
        type: Number ,
        min: 1,
    },
    numberOfCourses: {
        required: true,
        type: Number,
        min: 1,
        max: 8
    },
    shoeSizes: {
        required: true,
        type: []
    },
    total: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model('Booking', bookingSchema)