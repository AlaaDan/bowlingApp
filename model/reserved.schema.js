const mongoose = require('mongoose')

const reservedSchema = new mongoose.Schema({
    courseId: {
        required: true,
        type: String
    },
    dateAndTime: {
        required: true,
        type: []
    }
})


module.exports = mongoose.model('Reservation', reservedSchema)