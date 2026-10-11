import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const { login, logout } = useAuth();
  const isActive = (path) => {
    return location.pathname === path;
  };

  // const checkUserLoggedIn = () => {
  //   if(localStorage.getItem('token')){
  //     logout()
  //   }
  // }
  return (
    <nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2>🚗 Smart Car Rental</h2>
      </Link>

      <div>
        <Link
          to="/"
          style={{
            color: isActive("/") ? "#ffffff" : undefined,
          }}
        >
          Home
        </Link>

        <Link
          to="/cars"
          style={{
            color: isActive("/cars") ? "#ffffff" : undefined,
          }}
        >
          Cars
        </Link>

        <Link
          to="/bookings"
          style={{
            color: isActive("/bookings") ? "#ffffff" : undefined,
          }}
        >
          My Bookings
        </Link>

        {!localStorage.getItem("token") ? (
          <Link
            to="/login"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              padding: "9px 16px",
              borderRadius: "8px",
              fontWeight: "700",
              color: isHovered ? "red" : "white",
              background: isHovered
                ? "white"
                : "linear-gradient(135deg, #f97316, #ec4899)",
            }}
          >
            Login
          </Link>
        ) : (
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => logout()}
            style={{
              padding: "9px 16px",
              borderRadius: "8px",
              fontWeight: "700",
              color: isHovered ? "red" : "white",
              background: isHovered
                ? "white"
                : "linear-gradient(135deg, #f97316, #ec4899)",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
