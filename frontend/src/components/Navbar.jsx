import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged Out Successfully");
    navigate("/");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#2563eb",
        color: "white",
      }}
    >
      <h2>Authentication System</h2>

      <button
        onClick={handleLogout}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "8px 16px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;