const mongoose=require('mongoose')
const userModel=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:[true,"Username is required"],
        trim:true,
        minLength:[3,"username is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        lowercase:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password:{
        type:String,
        required:[true, "Password is required"],
        minLength:[3,"password must have atleast 3 char"],
        maxLength:[15,"Passsword have not more than 15 char"],
    }
},{timestamps:true})

module.exports=mongoose.model('user',userModel)