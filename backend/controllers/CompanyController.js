const Company=require('../models/Company')

const HttpError=require('../utils/http-error')

const AddCompany=async(req,res,next)=>{

    try {
        const {name,address,phone,description,email}=req.body
       
      
            const company=new Company({description:description,name: name,address:address,phone:phone,email: email, logo:req.file.path})
            if(company){
                await company.save()
                res.status(201).json({message:'company is successfully saved'})
            }else{
               return next(new HttpError("company is failed to save", 401))
            }
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    } 
}

const EditCompany=async(req,res, next)=>{
    try {
        const {name,address,phone,description,email}=req.body
       
            const {compId}=req.params
            const existingCompany= await Company.findById(compId)
            existingCompany.name=name||existingCompany.name;
            existingCompany.email=email || existingCompany.email;
            existingCompany.address=address||existingCompany.address;
            existingCompany.phone=phone|| existingCompany.phone;
            existingCompany.description=description || existingCompany.description;

            if(existingCompany){
                await existingCompany.save()
                res.status(201).json({message:'company is successfully saved'})
            }else{
               return next(new HttpError("company is failed to update", 401))
            }
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}




const GetCompany=async(req,res,next)=>{
    try {
        const company=await Company.find({})
       
            res.status(201).json(company)
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

const ReadOne=async(req,res,next)=>{

  
  
    try {
        const company=await Company.findById(req.params.id).orFail()
       
         res.status(201).json(company)
       
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

const deleteCompany=async(req,res,next)=>{
    const company=await Company.findById(req.params.compId)
    try {
        
        if(company){
            await company.deleteOne()
            res.status(201).json({message:"company is succeffuly deleted"})
        }
    } catch (error) {
         next(new HttpError(error.message,422))
    }
}

const editCompanyLogo=async(req,res, next)=>{
    try {
     
       
        const {compId}=req.params
        const existingCompany= await Company.findById(compId)
            existingCompany.logo=req.file.path

            if(existingCompany){
                await existingCompany.save()
                res.status(201).json({message:'image is successfully saved'})
            }else{
               return next(new HttpError("image is failed to update", 401))
            }
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
   
    }
}


const userGetCompany=async(req,res,next)=>{
    try {
        const video=await Company.find({})
       
            res.status(201).json(video)
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

const userReadOne=async(req,res,next)=>{

  
  
    try {
        const company=await Company.findById(req.params.id).orFail()
       
         res.status(201).json(company)
       
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}



module.exports={AddCompany, EditCompany, ReadOne,GetCompany, 
    deleteCompany,editCompanyLogo,userGetCompany,userReadOne}