require('dotenv').config()
const express = require('express')
const app = express()
const connectToDatabase = require('./database/index')
const Blog = require('./model/blogModel')

//middleware
app.use(express.json())   //node will understand json
const {multer, storage} = require('./middleware/multerConfig')
const upload = multer({storage : storage})

connectToDatabase()

app.get('/',(req,res)=>{
    res.json({
        message:"Hello World"
    })
})

app.post("/blog", upload.single('image'),(req,res)=>{
    console.log(req.body)
    res.status(200).json({
        message : "Success"
    })
})
    // const title = req.body.title
    // const subtitle = req.body.subtitle
    // const description = req.body.description
//     console.log(req.body)
//     const {title,subtitle,description,image} = req.body
//     if(!title || !description || !image || !subtitle){
//         return res.status(400).json({
//             message:"Please fill all the fields"
//         })
//     }
//     await Blog.create({
//         title:title,
//         subtitle:subtitle,
//         description:description,
//         image:image
//     })
//     res.status(200).json({
//         message:"Blog created"
//     })
// })


app.listen(process.env.PORT,()=>{
    console.log("Server has started")
})

