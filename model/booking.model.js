const Booking = require('./booking.schema')

async function createBooking(bookingData){
    console.log(bookingData)
    const total = bookingData.numberOfPlayers  * 120 + bookingData.numberOfCourses * 100
    console.log(total)
    bookingData.total = total
    const result = await Booking.create( bookingData )
    return result
}

async function getBookingById(id){
    return booking = await Booking.findById(id).exec()
}

async function deleteBooking(id){
    return isDeleted = await Booking.findByIdAndDelete(id)

}

module.exports = { createBooking, getBookingById, deleteBooking }