const mongoose = require('mongoose')
const Schema = mongoose.Schema   //class

const blogSchema = new Schema({     //making column
    title : {
        type: String, //in title only string can be stored
    },
    subtitle : {
        type : String
    },
    description :{
        type : String
    },
    image : {
        type : String
    }
}) 

const Blog = mongoose.model("Blog", blogSchema) //table name and Schema
module.exports = Blog