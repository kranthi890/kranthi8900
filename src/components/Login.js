import React from "react";
// import Footer from './Footer';
import Grid from '@mui/material/Grid';
import {Link, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
 import Checkbox from '@mui/material/Checkbox';
 import FormControlLabel from '@mui/material/FormControlLabel';
 import TextField from '@mui/material/TextField';
 import './login.css'
import Nav from "./Nav";
import NavBar1 from "./NavBar1";
import Footer from "./Footer";
import NavMain from "./NavMain";
function SignIn() {
  const navigate = useNavigate();
  function handleSignupClick(){
    navigate('/signup')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleRegClick = () => {
    navigate("/signin");
  };

 

  return (
   
    <>
    <NavMain/>
    <Nav/>
    <NavBar1/>
    <div div className="signup">

<section class="vh-100" style={{backgroundImage:'url("https://c4.wallpaperflare.com/wallpaper/309/769/251/technology-bitcoin-blue-cryptocurrency-number-hd-wallpaper-preview.jpg")',backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
<div class="container h-100">
<div class="row d-flex justify-content-center align-items-center h-100">
<div class="col-lg-12 col-xl-11">
  <div class="card text-black" style={{borderRadius: "25px",marginTop:'20px'}}>
    <div class="card-body p-md-10">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5 order-2 order-lg-1">

          <p class="text-center h1 fw-bold mb-3 mx-1 mx-md-2 mt-4"style={{fontFamily:"lora",color:'black'}}>Sign In!!</p>

          <form class="mx-1 mx-md-7">
          <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
         
        {/* <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        /> */}
        
        <Grid container justifyContent="space-between" alignItems="center" className="form-links">
                          <Grid item>
                            <Link onClick={handleSignupClick} to='/signup' variant="body2" className="signup-link">
                              Sign Up
                            </Link>
                          </Grid>
                          <Grid item>
                            <Link  variant="body2" className="forgot-password-link">
                              Forgot password?
                            </Link>
                          </Grid>
                        </Grid>

                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          className="signin-button"
                        >
                          Login
                        </Button>

                      </form>

        </div>
        <div class="col-md-7 col-lg-4 col-xl-5 d-flex align-items-center order-1 order-lg-2">
       
        <div className="col-md-10 col-lg-6 col-xl-12 d-flex align-items-center order-1 order-lg-2">
 
          <img src=" https://img.freepik.com/free-vector/crypto-portfolio-concept-illustration_114360-4944.jpg?w=740&t=st=1688534220~exp=1688534820~hmac=d3008c45b42ce431b8c83486c81eacdf88217c812f8ec3afefa7bdeefc1f985a"
            style={{width:'600px',marginLeft:"100px"}}class="img-fluid" alt="Sample image"/>
</div>
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

export default SignIn;
