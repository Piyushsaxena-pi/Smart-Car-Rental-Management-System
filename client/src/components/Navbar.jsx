import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

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

        <Link
          to="/login"
          style={{
            color: isActive("/login") ? "#ffffff" : undefined,
          }}
        >
          Login
        </Link>

        <Link
          to="/register"
          style={{
            padding: "9px 16px",
            borderRadius: "8px",
            background:
              "linear-gradient(135deg, #f97316, #ec4899)",
            color: "#ffffff",
            fontWeight: "700",
          }}
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;