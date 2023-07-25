const mongoose=require('mongoose')

const SchemaCompany=new mongoose.Schema({

    name:{type: String, required: true},
    address:{type: String, required: true},
    phone:{type: String, required: true, unique:true},
    email:{type: String, required: true, unique: true},
    logo:{type: String, required: true},
    description:{type: String, required: true}


})

const Company=mongoose.model('Company',SchemaCompany)

module.exports=Company