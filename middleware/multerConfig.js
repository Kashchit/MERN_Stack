const multer = require('multer')

const storage = multer.diskStorage({ //fixed code
    destination: (req, file, cb) => {
        cb(null, './storage') //when there is error it shoes null and when succes it stores in storage folder, cb(error,success)
    },
    filename : function(req,file,cb){
        cb(null,Date.now() + file.originalname) //kashchit + original name
    }
})

module.exports = {
    multer,
    storage
}