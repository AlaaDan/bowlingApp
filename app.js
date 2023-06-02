require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 8000;

const bowlingRouter = require('./routes/bowling.router');

app.use(express.json())

app.use('/api/bowling', bowlingRouter)

mongoose.connect(process.env.DATABASE_URL)
const database = mongoose.connection

database.on('error', (error)=>{
    console.log(error)
})

database.once('connected', ()=>{
    console.log("Connected to database")
})

app.listen(PORT, ()=> {
    console.log("Server stated")
})

module.exports - database