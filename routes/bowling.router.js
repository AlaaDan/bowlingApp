const { Router } = require('express')
const router = new Router()
const {createBooking} = require('../model/booking.model')

router.get('/', (req, res)=>{
    res.json("TEST")
})

router.post('/book', async (req, res)=>{
    const {bookingDate, bookingEmail, bookingTime, numberOfPlayers, numberOfCourses, shoeSizes} = req.body
    const bookingData = {bookingDate, bookingEmail, bookingTime, numberOfPlayers, numberOfCourses, shoeSizes}
    console.log(bookingData)
    try {
        const bookingDone = await createBooking(bookingData)
        res.json(bookingDone)
        
    } catch (error) {

        console.log(error)
        res.json({success: false, message: error.message})   
    }
})

module.exports = router