const moment = require('moment')
const mongoose = require('mongoose')
const validator = require('validator');
const { default: isEmail } = require('validator/lib/isEmail');

const bookingSchema = new mongoose.Schema({
    bookingDateTime: {
        type: Date,
        required: true,
        validate: {
          validator: function(value) {
            // Check if the date is in the future
            if (value <= new Date()) {
              return false;
            }
    
            // Check if the time is each hour
            if (value.getMinutes() !== 0) {
              return false;
            }
    
            return true;
          },
          message: 'Date must be in the future and have an hourly time.',
        },
      },
    bookingEmail: {
        required: true,
        type: String,
        validate:{
            validator: validator.isEmail,
            message: 'Not a valid email',
            isAsync: false
          }
    },
    numberOfPlayers: {
        required: true,
        type: Number ,
        min: [1, "At least one person"],
    },
    numberOfCourses: {
        required: true,
        type: Number,
        min: [1, "At least one course"],
        max: [8, "The maximum is 8 courses"]
    },
    shoeSizes: {
        required: true,
        type: []
    },
    total: {
        required: true,
        type: Number
    },
    reseredCourses: {
        required: true,
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('Booking', bookingSchema)