const mongoose=require('mongoose')

const SchemaVideo=new mongoose.Schema({

    title:{type: String, required: true},
    video:{type: String, required: true}


})

const Video=mongoose.model('Video',SchemaVideo)

module.exports=Video