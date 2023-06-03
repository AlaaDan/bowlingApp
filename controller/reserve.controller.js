async function checkIfreserved (courseId, date){
    const reservations = await Reservation.find({courseId})
    if (!reservations.dateAndTime.includes(date)){
         reservations
    }
}