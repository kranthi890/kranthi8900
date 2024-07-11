// import React, { useState } from 'react';
// import HomeIcon from '@mui/icons-material/Home';
// import CallIcon from '@mui/icons-material/Call';
// import EmailIcon from '@mui/icons-material/Email';
// import Button from '@mui/material/Button';
// // import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: [e.target.value] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("/send-email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.log("Front ERROR: -", error));
//   }

//   return (
//        <div>
//         <h1 style={{ paddingRight: '200px', textAlign: 'center',color:'black' }}>Get in touch with us</h1>
//         <div className="image-container">
//           <img style={{width:'50%',height:'50%',flex:'1',margiLeft:'20px'}}
//             src="https://img.freepik.com/free-vector/bitcoin-p2p-concept-illustration_114360-5898.jpg?w=1060&t=st=1688226210~exp=1688226810~hmac=0fb1c5801a344b2be537986c265045a38fd3f6e647a41917f63d88f9424bc909"
//             alt="feedback"
//           />
//           </div>
//         <Grid item xs={12} sm={4}>

//               <h3>Address <HomeIcon /></h3>
//               <h5>abc Street</h5>
//               <h5>Melbourne</h5>
//               <br />
//               <br />
//               <h3>Call Us <CallIcon /></h3>
//               <h5>+031 775 876 903</h5>
//               <h5>+031 775 876 909</h5>
//               <br />
//               <br />
//               <h3>Email Id <EmailIcon /></h3>
//               <h5>contact@coinstorm.com</h5>
//               <Grid container spacing={2} justifyContent="center">

//             <Grid item xs={12} sm={3}>
//                 <Container component="main" maxWidth="xl" paddingRight='60px'>
//                   <h2>FeedBack form</h2>
//                   <Box
//                     sx={{
//                       border: '1px solid black',
//                       // borderRadius: '4px',
//                       padding: '20px',
//                       // backgroundColor: 'black',
//                       color: 'black',
//                       textAlign: 'center',
//                       display:'flex',
//                     }}
//                   >
//                     <div className='feedback' style={{flex:'1'}}>
//                     <form action=""  onSubmit={handleSubmit} sx={{ mt: 3 }}>
//                       <div>
//                       <h3>Name</h3>
//                       <input type="text"
//                         required
//                         name="name"
//                         id="name"
//                         value={formData.name}
//                         placeholder="name"
//                         onChange={handleChange}
//                       />
//                       </div>
//                       <div>
//                       <h3>Email</h3>
//                       <input type="email"
//                         required
//                         name="email"
//                         id="email"
//                         value={formData.email}
//                         placeholder="email"
//                         onChange={handleChange}
//                       />
//                       </div>
//                      <div>
//                       <h3>Message</h3>
//                       <textarea type="text"
//                         required
//                         name="message"
//                         id="message"
//                         value={formData.message}
//                         placeholder="message"
//                         onChange={handleChange}
//                       />
//                       </div>

//                       <br />
//                       <button type="submit">Send Message</button>
//                     </form>
//                     </div>

//                   </Box>
//                 </Container>

//             </Grid>
//              </Grid>
//             </Grid>

//       {/* <div className="content" style={{ paddingLeft: '2px', fontSize: '20px' }}>
//         <div className='style' style={{ color: 'black', paddingTop: '10px' }}> */}

//             <Grid item xs={12} sm={4}>
//               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.1390621677915!2d81.52265607501582!3d16.56950648418487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd48c73a7de9%3A0x864b3f76a5310e9a!2sB%20V%20raju%20college!5e0!3m2!1sen!2sin!4v1688128361027!5m2!1sen!2sin" style={{ width: '100%', height: '450px', border: '0', loading: 'lazy' }}></iframe>
//             </Grid>
//         </div>
//       // </div>
//       // </div>

//   );
// };

// export default Contact;

import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Contact.css";
import "animate.css";
import Footer from "./Footer";
import NavMain from "./NavMain";
import Nav from "./Nav";
import NavBar1 from "./NavBar1";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Front ERROR: -", error));
  }

  return (
    <>
      <NavMain />
      <Nav />
      <NavBar1 />
      <h1
        class="animate__animated animate__fadeInLeft"
        style={{
          paddingRight: "10px",
          textAlign: "center",
          color: "#283b63",
          paddingBottom: "20px",
          fontFamily: "Space Grotesk sans-serif",
          fontSize: "50px",
        }}
      >
        Get In Touch With Us
      </h1>
      <div style={{ display: "flex" }}>
        <div className="image-box">
          <img
            class="animate__animated animate__fadeInLeft"
            style={{ width: "100%", height: "100%" }}
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg&ga=GA1.2.1723921732.1688133809&semt=ais"
            alt="feedback"
          />
        </div>
        <div className="feedback" style={{ alignContent: "baseline" }}>
          <h1 style={{ textAlign: "center" }}>FeedBack Form</h1>
          <form action="" onSubmit={handleSubmit}>
            <h3>Name</h3>
            <input
              type="text"
              required
              name="name"
              id="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
            />
            <h3>Email</h3>
            <input
              type="email"
              required
              name="email"
              id="email"
              value={formData.email}
              placeholder="email"
              onChange={handleChange}
            />
            <h3>Message</h3>
            <textarea
              type="text"
              required
              name="message"
              id="message"
              value={formData.message}
              placeholder="message"
              onChange={handleChange}
            />
            <br />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div>
        <section className="contact">
          <h2 style={{ fontSize: "30px" }}>Contact</h2>
          <div className="contact-details">
            <div className="contact-item">
              <h3 style={{ textAlign: "center", fontSize: "25px" }}>
                Email Id <EmailIcon />
              </h3>
              <h5>contact@coinstorm.com</h5>
            </div>
            <div className="contact-item">
              <h3 style={{ textAlign: "center", fontSize: "25px" }}>
                Call-Us <CallIcon />
              </h3>
              <h5>+031 775 876 903</h5>
              <h5>+031 775 876 909</h5>
            </div>
            <div className="contact-item">
              <h3 style={{ textAlign: "center", fontSize: "25px" }}>
                Address <HomeIcon />
              </h3>
              <h5>abc Street</h5>
              <h5>Melbourne</h5>
            </div>
          </div>
        </section>
        {/* <Grid container spacing={1} justifyContent="center" width="100%"> */}
        <Grid item xs={12} sm={4}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.1390621677915!2d81.52265607501582!3d16.56950648418487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd48c73a7de9%3A0x864b3f76a5310e9a!2sB%20V%20raju%20college!5e0!3m2!1sen!2sin!4v1688128361027!5m2!1sen!2sin"
            style={{
              width: "100%",
              height: "450px",
              border: "5px",
              loading: "lazy",
              marginBottom: "50px",
            }}
          ></iframe>
        </Grid>
        {/* </Grid> */}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
