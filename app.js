require('dotenv').config()
const express = require('express')
const app = express()
const connectToDatabase = require('./database/index')

//middleware
app.use(express.json())   //node will understand json

connectToDatabase()

app.get('/',(req,res)=>{
    res.json({
        message:"Hello World"
    })
})

app.post("/blog", (req,res)=>{
    console.log(req.body)
    res.status(200).json({
        message:"Blog created"
    })
})


app.listen(process.env.PORT,()=>{
    console.log("Server has started")
})

