const router=require('express').Router();
const bcrypt=require('bcrypt');
const {User,validate}=require('../models/user.js');
router.post('/',async(req,res)=>{
    try{
        const{error}=validate(req.body);
        if(error) return res.status(400).send({message:"Validation Error!!"})
        const user=await User.findOne({email:req.body.email});
        if(user) return res.status(409).send({message:"User Already Exists!!"});
        const salt=await bcrypt.genSalt(Number(process.env.SALT));
        const hashedPassword=await bcrypt.hash(req.body.password,salt);
        await User({...req.body,password:hashedPassword}).save();
        // await user.create({...req.body,password:hashedPassword});
        return res.status(200).send({message:"Sign Up Succesful"});
    }catch(error){
        console.log("RG SIGNUP ERROR:-",error);
        res.status(500).send({message:"ERROR!!Server not Working"});
    }
});
module.exports=router;