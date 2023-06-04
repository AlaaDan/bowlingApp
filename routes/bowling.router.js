const { Router } = require('express')
const router = new Router()
const { createBooking, getBookingById, deleteBooking, checkLineAvilibilty, editBooking, getBookingsByDate } = require('../model/booking.model')
const { getAllCourses } = require('../model/course.model')
const { shoeChecker, bookingIdCheck } = require('../middleware/booking.middleware')

router.get('/book/getbooking', bookingIdCheck, async (req, res) => {
    const { bookingId } = req.body
    try {
        const booking = await getBookingById(bookingId)
        //console.log(booking)
        res.status(200).json({
            sccuess: true, Email: booking.bookingEmail,
            Date: booking.bookingDate,
            Time: booking.bookingTime,
            NumberOfPlayers: booking.numberOfPlayers,
            NumberOfCourses: booking.numberOfCourses,
            NumberOfShoes: booking.shoeSizes,
            TotalPrice: booking.total,
            Courses: booking.reservedCourses,
        })

    } catch (error) {
        res.status(404).json({ sccuess: false, message: "Booking not found" })
    }
})

router.post('/book', shoeChecker, async (req, res) => {
    const { bookingDateTime, bookingEmail, numberOfPlayers, numberOfCourses, shoeSizes } = req.body
    const bookingData = { bookingDateTime, bookingEmail, numberOfPlayers, numberOfCourses, shoeSizes }
    //console.log(bookingData)

    try {
        const bookingDone = await createBooking(bookingData)

        res.status(200).json({
            success: true, Booking: {
                BookingID: bookingDone.id,
                Email: bookingDone.bookingEmail,
                Date: bookingDone.bookingDateTime,
                NumberOfPlayers: bookingDone.numberOfPlayers,
                NumberOfCourses: bookingDone.numberOfCourses,
                NumberOfShoes: bookingDone.shoeSizes,
                TotalPrice: bookingDone.total,
                Courses: bookingData.reservedCourses,
            }
        })

    } catch (error) {
        //console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
})

router.put('/book/edit', shoeChecker, async (req, res) => {
    try {
        const changedBooking = await editBooking(req.body);

        res.json({ success: true,  changedBooking})
    } catch (error) {
        console.error(error)

        return res.status(500).json({ success: false, message: error.message })
    }
})

router.delete('/book/delete', async (req, res) => {
    try {
        const deleted = await deleteBooking(req.body.bookingId)
        if (!deleted) {
            return res.status(400).json({ sccuess: false, message: "Invalid booking number or doesn't exit" })
        }
        res.status(200).json({ sccuess: true, message: `Successfully delete the booking with the ID: ${req.body.bookingId}` })
    } catch (error) {
        res.status(500).json({ sccuess: false, message: error.message })
    }
})

router.get('/book/booked', async (req, res) => {
    try {
        const courses = await getBookingsByDate(req.query.from, req.query.to);

        res.json({ success: true, courses })
    } catch (error) {
        res.json({ success: false, message: "FAIL" })
    }
})

module.exports = router