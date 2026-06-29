import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaMoon,
  FaSun
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa6";

import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

import { loginUser } from "../services/authService";

import illustration from "../assets/auth-illustration.svg";

import "../styles/Auth.css";

function Login() {

  const navigate = useNavigate();

  const [dark,setDark]=useState(false);

  const [showPassword,setShowPassword]=useState(false);

  const [form,setForm]=useState({

      email:"",
      password:""

  });

  const handleChange=(e)=>{

      setForm({

          ...form,

          [e.target.name]:e.target.value

      })

  }

  const handleSubmit=async(e)=>{

      e.preventDefault();

      try{

          const res=await loginUser(form);

          localStorage.setItem("token",res.data.token);

          toast.success("Login Successful");

          setTimeout(()=>{

              navigate("/dashboard")

          },1500);

      }

      catch(err){

          toast.error(err.response?.data?.message);

      }

  }

  return(

<div className={dark?"auth-page dark":"auth-page"}>

<ToastContainer/>

<div className="floating one"></div>
<div className="floating two"></div>
<div className="floating three"></div>

<div className="theme-btn"

onClick={()=>setDark(!dark)}

>

{dark?<FaSun/>:<FaMoon/>}

</div>

<div className="left">

<motion.img

initial={{x:-100,opacity:0}}

animate={{x:0,opacity:1}}

transition={{duration:1}}

src={illustration}

/>

<h1>

Welcome Back

</h1>

<p>

Manage employees securely with modern authentication.

</p>

</div>

<div className="right">

<motion.div

initial={{y:100,opacity:0}}

animate={{y:0,opacity:1}}

transition={{duration:1}}

className="card"

>

<h2>

Sign In

</h2>

<p>

Continue to EmployeeHub

</p>

<form onSubmit={handleSubmit}>

<div className="input-box">

<FaEnvelope/>

<input

type="email"

name="email"

placeholder="Email"

onChange={handleChange}

/>

</div>

<div className="input-box">

<FaLock/>

<input

type={showPassword?"text":"password"}

name="password"

placeholder="Password"

onChange={handleChange}

/>

<span

onClick={()=>setShowPassword(!showPassword)}

>

{

showPassword?

<FaEyeSlash/>:<FaEye/>

}

</span>

</div>

<button>

Login

</button>

</form>

<div className="divider">

<span>

OR

</span>

</div>

<div className="social">

  <button className="google-btn">

    <FcGoogle className="google-icon" />

    <span>Continue with Google</span>

  </button>

  <button className="microsoft-btn">
<FaMicrosoft className="microsoft-icon" />

    <span>Continue with Microsoft</span>

  </button>

</div>

<p>

Don't have an account?

<Link to="/register">

Register

</Link>

</p>

</motion.div>

</div>

</div>

)

}

export default Login;