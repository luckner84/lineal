
const jwt=require('jsonwebtoken')

const generateAuthToken=(_id,name,email,isAdmin)=>{


    return jwt.sign({_id,name,email,isAdmin},
        process.env.JWT_SECRET_KEY,{expiresIn: process.env.TOKEN_EXP})
}


module.exports={generateAuthToken}