const mongoose=require('mongoose')


const databaseConnection= async()=>{
   mongoose.connect(process.env.DB_LOCAL_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   }).then(()=>{
    console.log("database connection is success")

   }).catch((e)=>{
       console.log(`database connection is failed, ${e.message}`)
   })
}


module.exports=databaseConnection