const User=require('../models/User')
const HttpError=require('../utils/http-error')
const bcrypt=require('bcryptjs')
const salt='$2a$10$CwTycUXWue0Thq9StjUM0u'
const {generateAuthToken}=require('../utils/generateToken')
const newUser=async(req,res,next)=>{

    const {name,email,password}=req.body


    const hashPassword=bcrypt.hashSync(password,salt)
   

    const user=new User({

        name: name,
        email: email,
        password: hashPassword
    })

    let existingUser
   
    
        existingUser= await User.findOne({email})
        if(existingUser){
            const err=new HttpError(`this user email ${email} already exists`, 404)

        return next(err)
          
        }

   

    try {

      
        await user.save()
        res.status(201).json({message:"registration is success",user})
       
        
    } catch (error) {

        const err=new HttpError(error.message, 422)

        return next(err) 
        
    }
   

  
    
}

const getUser=async(req,res,next)=>{
   const  user= await User.find({})
    try {

        if(!user){
            const err=new HttpError('No user found', 404)
    
            return next(err) 
        } 
        
    } catch (error) {
        const err=new HttpError(error.message, 404)

        return next(err)
    }

  

    res.status(201).json(user)
}

const userLogin=async(req,res,next)=>{
    const {email,password}=req.body
    let user=await User.findOne({email})
    try {
        
        if(!user){
           const result=new HttpError('invalid credential, please try again',402)

            return next(result)
        }
    } catch (error) {
        const err= new HttpError(error.message,402)

        return next(err)
    }


        const isPasswordMatched=bcrypt.compareSync(password,user.password)
       
        if(!isPasswordMatched){
            const result=new HttpError('invalid password, please try again',402)

            return next(result)
        }
        
   

   
     res.status(201).json({message:"login is success", token: generateAuthToken(user._id,user.name,user.email,user.isAdmin)})


}

const updateUserProfile=async(req,res,next)=>{
    const {name,email}=req.body

  
    
   
    
    const  user= await User.findById(req.params.userId)
    
    try {
        if(!user){
            
            const err=new HttpError('invalid user data',404) 
            return next(err) 
        }
        
    } catch (error) {
       const err=new HttpError(error.message,404) 
       return next(err)
    }
    try {
        user.name=name || user.name;
        user.email= email || user.email;
     if(user){
        await user.save()
        res.status(201).json({message:"profile is successfully saved", token: generateAuthToken(user._id,user.name,user.email,user.isAdmin)})
     }
       
   
    } catch (error) {
       const err=new HttpError(error.message,404) 
       next(err)
    }
    



  }

  const singleUser=async(req,res,next)=>{
    
    const userId=req.params.userId;
    const user=await User.findById(userId)

    try {
        if(!user){
          const err= new HttpError('user not found',404)

          return next(err)
        }
        
    } catch (error) {
        const err= new HttpError(error.message,401)

          return next(err)
    }
    res.status(201).json(user)
}

const deleteUser=async(req,res,next)=>{
    try {
        const user=await User.findByIdAndDelete(req.userData._id)
        if(user){
          res.status(201).json({message:'user is succeffuly  deleted'})
        }
    } catch (error) {
        const err= new HttpError(error.message,401)

          return next(err)
    }
}

module.exports={newUser, getUser, userLogin,updateUserProfile,singleUser,deleteUser}
