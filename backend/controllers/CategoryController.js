const Category=require('../models//Category')

const HttpError=require('../utils/http-error')

const newCategory=async(req,res,next)=>{

    try {
        const {name}=req.body
       
        
       const slugify = text =>
       text
         .toString()
         .normalize('NFD')
         .replace(/[\u0300-\u036f]/g, '')
         .toLowerCase()
         .trim()
         .replace(/\s+/g, '-')
         .replace(/[^\w-]+/g, '')
         .replace(/--+/g, '-')
            const category=new Category({name:name ,slug:slugify(name),image:req.file.path})
            if(category){
                await category.save()
                res.status(201).json({message:'Category is successfully saved'})
            }else{
               return next(new HttpError("Category is failed to save", 401))
            }
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    } 
    
}

const editCategory=async(req,res, next)=>{
    try {
        const {name}=req.body
        
       const slugify = text =>
       text
         .toString()
         .normalize('NFD')
         .replace(/[\u0300-\u036f]/g, '')
         .toLowerCase()
         .trim()
         .replace(/\s+/g, '-')
         .replace(/[^\w-]+/g, '')
         .replace(/--+/g, '-')
       
            const {categoryId}=req.params
            const existingCategory= await Category.findById(categoryId)
            existingCategory.name=name || existingCategory.name
            existingCategory.slug=slugify(name) || existingCategory.slug
          

            if(existingCategory){
                await existingCategory.save()
                res.status(201).json({message:'Category is successfully saved'})
            }else{
               return next(new HttpError("Category is failed to update", 401))
            }
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}


const editImageCategory=async(req,res, next)=>{
    try {
        
       
            const {categoryId}=req.params
            const existingCategory= await Category.findById(categoryId)
            existingCategory.image=req.file.path || existingCategory.image;

            if(existingCategory){
                await existingCategory.save()
                res.status(201).json({message:'image  is successfully saved'})
            }else{
               return next(new HttpError("image  is failed to update", 401))
            }
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

const getCategory=async(req,res,next)=>{
    try {
        const category=await Category.find({})
       
            res.status(201).json(category)
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

const readOne=async(req,res,next)=>{

  
  
    try {
        const category=await Category.findById(req.params.categoryId).orFail()
       
         res.status(201).json(category)
       
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

const deleteCategory=async(req,res,next)=>{
    const category=await Category.findById(req.params.categoryId)
    try {
        
        if(category){
            await category.deleteOne()
            res.status(201).json({message:"Category is succeffuly deleted"})
        }
    } catch (error) {
         next(new HttpError(error.message,422))
    }
}





const userGetCategory=async(req,res,next)=>{
    try {
        const category=await Category.find({})
       
            res.status(201).json(category)
        
        
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}




const userReadOne=async(req,res,next)=>{

  
  
    try {
        const category=await Category.findById(req.params.categoryId).orFail()
       
         res.status(201).json(category)
       
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

const userCount=async(req,res,next)=>{

  
  
    try {
        const category=await Category.count()
       
         res.status(201).json(category)
       
    } catch (error) {
        next(new HttpError(error.message,401))
    }
}

module.exports={newCategory,editCategory,deleteCategory,readOne,
    getCategory,userGetCategory,userReadOne, editImageCategory,userCount}