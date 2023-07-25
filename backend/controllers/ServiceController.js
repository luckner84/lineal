const Category=require('../models//Category')
const HttpError=require('../utils/http-error')
const Service=require('../models/Services')

const newService=async(req,res,next)=>{

    try {
        const {title,category,description}=req.body
       
      
            const service=new Service({description:description,title:title,category:category, image:req.file.path})
            if(service){
                await service.save()
                res.status(201).json({message:'service is successfully saved'})
            }else{
               return next(new HttpError("service is failed to save", 401))
            }
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    } 
    
}

const editService=async(req,res, next)=>{
    try {
        const {title,category,description}=req.body
       
            const {serviceId}=req.params
            const existingService= await Service.findById(serviceId)
            existingService.title=title || existingService.title
            existingService.category=category || existingService.category
            existingService.description=description ||  existingService.description;

            if(existingService){
                await existingService.save()
                res.status(201).json({message:'service is successfully saved'})
            }else{
               return next(new HttpError("service is failed to update", 401))
            }
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}


const editImageService=async(req,res, next)=>{
    try {
        
       
            const {serviceId}=req.params
            const existingService= await Service.findById(serviceId)
            existingService.image=req.file.path || existingService.image;

            if(existingService){
                await existingService.save()
                res.status(201).json({message:'image service is successfully saved'})
            }else{
               return next(new HttpError("image service is failed to update", 401))
            }
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

const getService=async(req,res,next)=>{
    try {
        const service=await Service.find({})
       
            res.status(201).json(service)
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

const readOne=async(req,res,next)=>{

  
  
    try {
        const service=await Service.findById(req.params.id).orFail()
       
         res.status(201).json(service)
       
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

const deleteService=async(req,res,next)=>{
    const company=await Service.findById(req.params.serviceId)
    try {
        
        if(company){
            await company.deleteOne()
            res.status(201).json({message:"service is succeffuly deleted"})
        }
    } catch (error) {
         next(new HttpError(error.message,422))
    }
}


const editServiceImage=async(req,res, next)=>{
    try {
     
       
            const {serviceId}=req.params
            const existingService= await Service.findById(serviceId)
           
            existingService.image=req.file.path || existingService.image;

            if(existingService){
                await existingService.save()
                res.status(201).json({message:'image is successfully saved'})
            }else{
               return next(new HttpError("image is failed to update", 401))
            }
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}


const userGetService=async(req,res,next)=>{
    try {
        const video=await Service.find({})
       
            res.status(201).json(video)
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}


const userGetServiceByCatefory=async(req,res,next)=>{
    try {
        const {category}=req.params
        const video=await Service.find({category})
       
            res.status(201).json(video)
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

const userReadOne=async(req,res,next)=>{

  
  
    try {
        const video=await Service.findById(req.params.id).orFail()
       
         res.status(201).json(video)
       
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

module.exports={newService,editService,deleteService,readOne,
    getService,editServiceImage,userGetServiceByCatefory,userGetService,userReadOne, editImageService}