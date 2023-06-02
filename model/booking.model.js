const Booking = require('./booking.schema')

async function createBooking(bookingData){
    
    console.log(bookingData)
    const result = await Booking.create( bookingData )

    return result

}

module.exports = { createBooking }