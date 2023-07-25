const mongoose=require('mongoose')

const SchemaUser=new mongoose.Schema({

    name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    isAdmin:{type: String, default:true}


})

const User=mongoose.model('User',SchemaUser)

module.exports=User