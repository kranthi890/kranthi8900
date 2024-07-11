const router=require('express').Router();
const bcrypt=require('bcrypt');
const Joi=require('joi');
const{User}=require('../models/user.js');
router.post("/",async(req,res)=>{
    try{
        const validate=(data)=>{
            const schema=Joi.object({
                email:Joi.string().email().required().label("Email"),
                password:Joi.string().required().label("Password")
            })
            return schema.validate(data);
        }
        const{error}=validate(req.body);
        if(error) return res.status(400).send({message:"Validation Error!!!"});
        const user=await User.findOne({email:req.body.email});
        if(!user) return res.status(410).send ({message:"Invalid Email or Password!!"})
        const valid=await bcrypt.compare(req.body.password,user.password);
        if(!valid) return res.status(410).send({message:"Invalid Email or Password!!"});
        const token =user.generateAuthToken();
        res.status(200).send({message:"login Scuccesfull!!",});
    }catch(error){
        console.log("Ra LOGIN ERROR:-",error);
        return res.status(500).send({message:"login server Error"});
    }
});
module.exports=router;