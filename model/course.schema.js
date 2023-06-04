const mongoose = require('mongoose')

const coursesSchema = new mongoose.Schema({
    name: {
        required: true, 
        type: String
    }
    
})


module.exports = mongoose.model('Courses', coursesSchema)