const Booking = require('./booking.schema')
const {getAllCourses} = require('../model/course.model')
const courseSchema = require('./course.schema')
const { get } = require('mongoose')

async function createBooking(bookingData){
    //console.log(bookingData)
    const total = bookingData.numberOfPlayers  * 120 + bookingData.numberOfCourses * 100
    //console.log(total)
    bookingData.total = total
    let coursesArray = []
    for(let index = 0; index < bookingData.numberOfCourses; index++){
        //console.log(line)
        const freeCourse = await checkLineAvilibilty(bookingData)
        coursesArray.push(freeCourse)
    }
    bookingData.reseredCourses = coursesArray
    const result = await Booking.create( bookingData )
    return result
}

async function getBookingById(id){
    return booking = await Booking.findById(id).exec()
}

async function deleteBooking(id){
    return isDeleted = await Booking.findByIdAndDelete(id)

}

async function checkLineAvilibilty(data){
    const allcourses = await getAllCourses()
    //console.log(data)
    //console.log(allcourses)
    let isBooked = []
    for (course in allcourses){
        
        const getdates = await Booking.find( {"bookingDateTime": data["bookingDateTime"] })
        console.log(getdates)
        if(allcourses[course] !== getdates.reseredCourses){
            return allcourses[course].name
            
        }else{
            console.log("Should be pushed isBooked")
        }
        //console.log(getdates)

    }


}

module.exports = { createBooking, getBookingById, deleteBooking, checkLineAvilibilty }