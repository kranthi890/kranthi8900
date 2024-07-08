const mongoose=require('mongoose')
module.exports=()=>{
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/login1",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("DB connection Succesful");
        
    }catch(error){
        console.log("DB connection Failed!!");
        console.log("Backend DB ERROR:-",error);
    }
};