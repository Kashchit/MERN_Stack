const mongoose = require('mongoose')

async function connectToDatabase(){
 await mongoose.connect(process.env.MONGODB_URL)
 console.log("Database Connected successfully")
}

module.exports = connectToDatabase