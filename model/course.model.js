const Courses = require('./course.schema')

async function getAllCourses(){
    const courses = await Courses.find()
    return courses
    
}

module.exports = {getAllCourses}