require('dotenv').config({path:"./.env"})
const express=require('express')
const app=express()


//db connection ke liye
require('./models/dbconfig').dbconnection();
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
const userRoutes=require('./routes/useRoute')
app.use("/api/user",userRoutes)
app.all("*",(req,res,next)=>{
    res.status(404).json({
        success:false,
        message:`${req.url} routes not found`
    })
})
app.listen(process.env.PORT,()=>{
    console.log(`Port is running in ${process.env.PORT}`)
})