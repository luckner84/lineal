const mongoose=require('mongoose')

const SchemaServices=new mongoose.Schema({

    title:{type: String, required: true},
    category:{type: String, required: true},
    image:{type: String, required: true},
    description:{type: String, required: true}


})

const Services=mongoose.model('Services',SchemaServices)

module.exports=Services