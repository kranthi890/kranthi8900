import  React, { useState } from "react";
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import './SignUp.css';
import Nav from "./Nav";
import NavBar1 from "./NavBar1";
import Footer from "./Footer";
import NavMain from "./NavMain";
function SignUp() {
  const navigate = useNavigate();

  function handleSignClick() {
    navigate('/login');
  }

  return (
    <>
    <NavMain/>
    <Nav/>
    <NavBar1/>
      <div className="signup">
        <section className="vh-100" style={{ backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/309/769/251/technology-bitcoin-blue-cryptocurrency-number-hd-wallpaper-preview.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <div style={{color:'white'}} className="container h-80">
            <div className="row d-flex justify-content-center align-items-center h-80">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: "25px", marginTop: '20px'}}>
                  <div style={{color:'white'}}className="card-body p-md-10">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-8 col-xl-5 order-5 order-lg-2">
                        <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-2 mt-4" style={{ fontFamily: "lora",color:'black' }}>Sign up</p>
                        <form className="mx-1 mx-md-7">
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Enter Your Full Name"
                            name="Name"
                            autoComplete="name"
                            autoFocus
                          />
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                          />
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                          />
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="re-enter your password"
                            label="Re-enter Your Password"
                            type="password"
                            id="re-password"
                            autoComplete="new-password"
                          />
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                          >
                            Sign Up
                          </Button>
                          <FormControlLabel style={{color:'black'}}
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                          />
                          <Link to="/login">
                            Already have an account? Login
                          </Link>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img src="https://img.freepik.com/free-vector/gradient-cryptocurrency-concept_52683-77383.jpg?w=740&t=st=1688533453~exp=1688534053~hmac=dbabddf8e186d87c13ba6d607d10ea37691e019025486cc6ac90503f8abe4b37"
                          style={{ width: '100%', marginLeft: "50px" }} className="img-fluid" alt="Sample" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default SignUp;
