const Joi = require('joi')

function shoeChecker(req, res, next) {
    const { numberOfPlayers, shoeSizes } = req.body
    // console.log(numberOfPlayers, shoeSizes.length)
    if (parseInt(numberOfPlayers) === (shoeSizes.length)) {
        next()
    } else {
        res.status(400).json({ success: false, message: "The number of shoes doesn't match the number of players" })
    }

}

function bookingIdCheck(req, res, next) {
    const bookingId = vlidateBookingId(req.body)
    if (bookingId.error) return res.status(400).json({ sucess: false, error: bookingId.error.message })
    next()
}

function vlidateBookingId(id) {
    const schema = Joi.object({
        bookingId: Joi.string().required()
    })
    return schema.validate(id)
}




module.exports = { shoeChecker, bookingIdCheck }