const express = require ('express');
const nodemailer = require('nodemailer');
const app=express();
app.use(express.json());
const PORT=8000;
app.post("/send-email",(req,res)=>{
    const {name,email,message}=req.body;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: 'snehakota039@gmail.com',
          pass: 'owpsznwdmqrcrxvt'
        }
      });
      const mailOptions={
        from:email,
        to:'snehakota039@gmail.com',
        subject:'New Contact Form Submission',
        html:`
        Name:${name}
        Email:${email}
        Message:${message}
        `};
      transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log('Back error:-',error);
            res.status(500).json({success:false,message:'Error Sending Mail!!'})
        }else{
            console.log("Email sent!!",info.response);
            res.status(200).json({success:true,message:'Email sent successfully!!'})
        }
      })
    });
      app.listen(PORT,()=>{
        console.log(`server running successfully at ${PORT}`)
      })
