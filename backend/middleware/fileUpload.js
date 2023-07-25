const { diskStorage } = require('multer')
const multer=require('multer')
const uid =require('uuid')
const HttpError=require('../utils/http-error')
const MIME_TYPE_FILE={
    'image/png':'png',
    'image/jpg':'jpg',
    'image/jpeg':'jpeg',
    'image/mp4':'mp4',
    'image/amv':'amv',
    'image/mpg':'mpg',
    'image/ogg':'ogg',
    'image/webm':'webm',
}
const fileUpload=multer({
    limits:500000,
    storage: diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'uploads/images')
        },
        filename: (req,file,cb)=>{
         const ext=MIME_TYPE_FILE[file.mimetype];
         cb(null,uid.v4() + '.'+ ext)
        },

    }),
    fileFilter:(req,file,cb)=>{
        const isValid=!!MIME_TYPE_FILE[file.mimetype]
        const error= isValid? null: new HttpError('invalid format file',501)
        cb(error, isValid)
    }
})

module.exports=fileUpload