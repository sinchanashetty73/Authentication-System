import { useEffect, useState } from "react";
import { getDashboard } from "../services/authService";
import Navbar from "../components/Navbar";
import {
  FaUserCircle,
  FaUserCheck,
  FaShieldAlt,
  FaClock,
  FaRocket,
  FaSignOutAlt
} from "react-icons/fa";
import "./Dashboard.css";

function Dashboard() {

  const [user, setUser] = useState("");

  useEffect(() => {

    const fetchData = async () => {

      try {

        const res = await getDashboard();

        setUser(res.data.user);

      } catch (err) {

        console.log(err);

      }

    };

    fetchData();

  }, []);

  return (

    <>

      <Navbar />

      <div className="dashboard">

        <div className="hero">

          <h1>👋 Welcome Back</h1>

          <p>
            Manage your authentication system securely.
          </p>

        </div>

        <div className="profile-card">

          <FaUserCircle className="profile-icon"/>

          <h2>{user}</h2>

          <p>Authenticated User</p>

        </div>

        <div className="cards">

    <div className="card">

        <FaUserCheck />

        <h2>1</h2>

        <p>Active User</p>

    </div>

    <div className="card">

        <FaShieldAlt />

        <h2>Protected</h2>

        <p>JWT Authentication</p>

    </div>

    <div className="card">

        <FaClock />

        <h2>24 / 7</h2>

        <p>Secure Session</p>

    </div>

</div>

          <div className="card">

            <FaShieldAlt/>

            <h2>Protected</h2>

            <p>JWT Authentication</p>

          </div>

          <div className="card">

            <FaClock/>

            <h2>24/7</h2>

            <p>Secure Session</p>

          </div>

        </div>

        <div className="actions">

          <button>

            <FaRocket/>

            Launch Dashboard

          </button>

          <button>

            <FaSignOutAlt/>

            Secure Logout

          </button>

        </div>

    

    </>

  );

}

export default Dashboard;