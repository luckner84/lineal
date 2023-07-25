
const HttpError=require('../utils/http-error')
const Video=require('../models/Video')

const newVideo=async(req,res,next)=>{

    try {
            const {title}=req.body
            const video=new Video({title:title,video:req.file.path})
            if(video){
                await video.save()
                res.status(201).json({message:'video is successfully saved'})
            }
        
    } catch (error) {
        next(new HttpError(error.message,401))
    } 
    
}

const editVideo=async(req,res, next)=>{
    try {
        const {title}=req.body
       
            const {videoId}=req.params
            const existingVideo= await Video.findById(videoId)
            existingVideo.title=title || existingVideo.title
          

            if(existingVideo){
                await existingVideo.save()
                res.status(201).json({message:'video is successfully saved'})
            }else{
               return next(new HttpError("video is failed to update", 401))
            }
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

const getVideo=async(req,res,next)=>{
    try {
        const video=await Video.find({})
       
            res.status(201).json(video)
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

const readOne=async(req,res,next)=>{

  
  
    try {
        const video=await Video.findById(req.params.id).orFail()
       
         res.status(201).json(video)
       
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

const deleteVideo=async(req,res,next)=>{
    const video=await Video.findById(req.params.videoId)
    try {
        
        if(video){
            await video.deleteOne()
            res.status(201).json({message:"video is succeffuly deleted"})
        }
    } catch (error) {
         next(new HttpError(error.message,422))
    }
}



const userGetVideo=async(req,res,next)=>{
    try {
        const video=await Video.find({})
       
            res.status(201).json(video)
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

const userReadOne=async(req,res,next)=>{

  
  
    try {
        const video=await Video.findById(req.params.id).orFail()
       
         res.status(201).json(video)
       
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}


module.exports={newVideo,getVideo,deleteVideo,editVideo, userGetVideo,readOne,userReadOne}