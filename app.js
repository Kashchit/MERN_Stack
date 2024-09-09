require('dotenv').config()
const express = require('express')
const app = express()
const connectToDatabase = require('./database/index')

connectToDatabase()

app.get('/',(req,res)=>{
    res.json({
        message:"Hello World"
    })
})

app.get('/about',(req,res)=>{
    res.json({
        message: "Welcome to the about page"
    })
})

app.listen(process.env.PORT,()=>{
    console.log("Server has started")
})

