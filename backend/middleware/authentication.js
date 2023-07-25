const jwt=require('jsonwebtoken')
const HttpError=require('../utils/http-error')

const verifyIsUserIsLoggedIn=(req,res,next)=>{

   
 
    try {
        const token=req.headers.authorization.split(' ')[1] //authorization token 'Bearer':'token'
        if(!token){
            throw new Error('authorization is failed')
            }
   const decodedToken= jwt.verify(token,process.env.JWT_SECRET_KEY)
   req.userData=decodedToken
   next()

    } catch (err) {
        const error=new HttpError('Authorization is failed',401)
        return  next(error)
    } 
   

}






module.exports={verifyIsUserIsLoggedIn}

