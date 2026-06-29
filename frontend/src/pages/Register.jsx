import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaMoon,
  FaSun,
  FaUsers,
  FaBuilding,
  FaChartLine
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa6";

import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import illustration from "../assets/auth-illustration.svg";

import "../styles/Auth.css";

import { registerUser } from "../services/authService";

function Register() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await registerUser(form);

      toast.success(res.data.message);

      setTimeout(() => {
        navigate("/");
      }, 1800);

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Registration Failed"
      );

    }
  };

  return (

<div className={darkMode ? "auth-page dark" : "auth-page"}>

<ToastContainer position="top-right"/>

<div className="floating one"></div>
<div className="floating two"></div>
<div className="floating three"></div>

<div
className="theme-btn"
onClick={()=>setDarkMode(!darkMode)}
>

{
darkMode ?

<FaSun/>

:

<FaMoon/>

}

</div>

{/* LEFT SECTION */}

<div className="left">

<motion.img

src={illustration}

initial={{x:-120,opacity:0}}

animate={{x:0,opacity:1}}

transition={{duration:1}}

className="illustration"

/>

<motion.h1

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:.4}}

>

Create Your Future

</motion.h1>

<motion.p

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:.8}}

>

Join EmployeeHub and securely manage
employees, projects and productivity.

</motion.p>

<div className="stats">

<div className="stat-card">

<FaUsers/>

<h2>12K+</h2>

<p>Employees</p>

</div>

<div className="stat-card">

<FaBuilding/>

<h2>250+</h2>

<p>Companies</p>

</div>

<div className="stat-card">

<FaChartLine/>

<h2>98%</h2>

<p>Satisfaction</p>

</div>

</div>

</div>

{/* RIGHT SECTION */}

<div className="right">

<motion.div

className="card"

initial={{y:80,opacity:0}}

animate={{y:0,opacity:1}}

transition={{duration:1}}

>

<h2>Create Account</h2>

<p>

Start your journey today 🚀

</p>

<form onSubmit={handleSubmit}>
              {/* Username */}

          <div className="input-box">

            <FaUser />

            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={form.username}
              onChange={handleChange}
              required
            />

          </div>

          {/* Email */}

          <div className="input-box">

            <FaEnvelope />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleChange}
              required
            />

          </div>

          {/* Password */}

          <div className="input-box">

            <FaLock />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          <button className="register-btn">

            Create Account

          </button>

        </form>

        <div className="divider">

          <span>OR</span>

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

        <div className="bottom-text">

          Already have an account?

          <Link to="/">

            Login

          </Link>

        </div>

      </motion.div>

    </div>

  </div>

);

}

export default Register;