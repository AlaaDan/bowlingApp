const Booking = require('./booking.schema')
const { getAllCourses } = require('../model/course.model')
const courseSchema = require('./course.schema')
const { get } = require('mongoose')

async function createBooking(bookingData) {
    let coursesArray = []
    const result = await Booking.create(bookingData)
    for (let index = 0; index < bookingData.numberOfCourses; index++) {
        //console.log(line)
        const freeCourse = await checkLineAvilibilty(bookingData)

        if (freeCourse === undefined) {
            await Booking.findByIdAndDelete(result._id);
            throw new Error("No free courses");
        }

        coursesArray.push(freeCourse)

        bookingData.reservedCourses = coursesArray
        // Update booking with reserved courses
        await Booking.updateOne({ _id: result._id }, { $push: { reservedCourses: freeCourse } });
    }

    return result
}

async function getBookingById(id) {
    return booking = await Booking.findById(id).populate('reservedCourses').exec()
}

async function deleteBooking(id) {
    return isDeleted = await Booking.findByIdAndDelete(id)

}

async function checkLineAvilibilty(data) {
    const allcourses = await getAllCourses()

    for (course in allcourses) {
        const getdates = await Booking.find({ "bookingDateTime": data["bookingDateTime"] })

        // Check if the course is booked
        const isInArray = getdates.some(function (c) {
            return c.reservedCourses.includes(allcourses[course]._id);
        });

        if (!isInArray) {
            //console.log("Course name", allcourses[course].name)
            return allcourses[course]._id;
        }
    }
}

// edit booking with new date 
async function editBooking(body) {
    const booking = await getBookingById(body.bookingId);

    if (!booking) {
        throw new Error("Booking not found");
    }

    for (const property in body) {
        booking[property] = body[property];
    }

    await booking.save();
    return await getBookingById(body.bookingId)
}

async function getBookingsByDate(from, to) {
    return Booking.find({ bookingDateTime: { $gte: from, $lte: to } }).populate('reservedCourses').exec();
}

module.exports = { createBooking, getBookingById, deleteBooking, checkLineAvilibilty, editBooking, getBookingsByDate }