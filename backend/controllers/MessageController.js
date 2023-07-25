const Message=require('../models/Message')
const HttpError=require('../utils/http-error')
const sendEmail=require('../utils/send-email')


const createMail=async(req,res,next)=>{
    const {name,subject,email,message}=req.body;
    const send=new Message({name:name,email: email,subject: subject,message: message})

    try {
        await send.save();
        
    } catch (error) {
        next(new HttpError(error.message,422))  
    }
  
    try {
       
        await sendEmail(`From: ${send.name}`,send.email,send.message);
        res.status(201).json({message:'you mail is successfully sent!'})
        
    } catch (error) {
        next(new HttpError(error.message,422))
    }
}

module.exports={createMail}