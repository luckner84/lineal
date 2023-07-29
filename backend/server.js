const express=require('express')
require('dotenv').config()
const app=express()
const bodyParser=require('body-parser')
const fs=require('fs')
const path=require('path')
const cookieParser = require('cookie-parser')
app.use(bodyParser.json())
app.use(cookieParser())
const HttpError=require('./utils/http-error')
const companyRoutes=require('./routes/companyRoutes')
const userRoutes=require('./routes/userRoutes')
const serviceRoutes=require('./routes/servicesRoutes')
const videoRoutes=require('./routes/videoRoutes')
const categoryRoutes=require('./routes/categoryRoutes')
const messageRoutes=require('./routes/messageRoutes')

app.use('/uploads/images',express.static(path.join('uploads','images')))
app.use('/uploads/videos',express.static(path.join('uploads','videos')))


process.on('uncaughtException',(e)=>{
  console.log(`ERROR: ${e.stack}`)
  console.log("Shutting down the server due to uncaught exception")
 
  process.exit(1)

})

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});
app.use('/api/companies', companyRoutes)
app.use('/api/users', userRoutes)
app.use('/api/services', serviceRoutes)
app.use('/api/videos', videoRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/mails', messageRoutes)

app.use((req,res,next)=>{
  const error= new HttpError('could not find the error', 404)
  next(error)
})


app.use((error,req,res,next)=>{

    if(req.file){
        fs.unlink(req.file.path,(err)=>{
          console.log(err)
        })
    }
    if(res.headerSent){
        return next(new HttpError(error,422))
    }
  res.status(error.code || 500).json({message:error.message || 'somethin went wrong'})
})




const databaseConnection=require('./config/db')
databaseConnection()

const server=app.listen(process.env.PORT,()=>{

 
  if (process.env.NODE_ENV==="development"){
    console.log(`server is running at port number ${process.env.PORT} `," in development mode")
   }else{
    console.log(`server is running at port number ${process.env.PORT} `," in production mode")
   
   }
   
   
    
  
  })

 app.get("/",(req,res)=>{res.json("Hello")})
  app.use(express.static(path.resolve(__dirname, 'frontend', 'build')));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'),function (err) {
        if(err) {
            res.status(500).send(err)
        }
    });
})

 
  process.on('unhandledRejection',(err)=>{
  console.log(`ERROR: ${err.message}`)
  console.log("Shutting down the server due to Unhandled Promise rejection")
  server.close(()=>{
    process.exit(1)
  })
  })



