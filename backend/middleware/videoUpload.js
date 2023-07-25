const { diskStorage } = require('multer')
const multer=require('multer')
const uid =require('uuid')
const HttpError=require('../utils/http-error')
const MIME_TYPE_FILE={
    'video/mp4':'mp4',
    'video/amv':'amv',
    'video/mpg':'mpg',
    'video/ogg':'ogg',
    'video/webm':'webm',
}
const fileUpload=multer({
    limits:{fileSize:4096 * 4096},
    storage: diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'uploads/videos')
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