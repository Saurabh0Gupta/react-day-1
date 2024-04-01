const User=require('../models/userModels')
exports.home=async (req,res,next)=>{
    const user=await User.find()
    console.log("routes active");
    res.status(200).json({
        success:true,
        message:"pahuchan guru"
    })
    console.log(user)
};

exports.createUser=async(req,res)=>{
    try {
        const newUser=new User(req.body)
        await newUser.save();
        res.status(201).json({success:true,
        meassage:newUser})
    } catch (error) {
        res.status(500).json({error})
    }
};

