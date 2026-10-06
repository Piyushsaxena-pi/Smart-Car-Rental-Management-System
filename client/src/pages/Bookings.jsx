import { Link } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

function BookingsContent() {
  return (
    <div
      style={{
        minHeight: "650px",
        padding: "60px 6%",
        background:
          "linear-gradient(135deg, #eef2ff, #f8fafc)",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "45px",
        }}
      >
        <p
          style={{
            color: "#6366f1",
            fontWeight: "700",
            marginBottom: "8px",
          }}
        >
          CUSTOMER DASHBOARD
        </p>

        <h1
          style={{
            fontSize: "40px",
            marginBottom: "12px",
          }}
        >
          My Bookings
        </h1>

        <p style={{ color: "#64748b" }}>
          Manage and view your car rental bookings.
        </p>
      </div>

      {/* EMPTY BOOKING CARD */}
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "55px 30px",
          background: "white",
          borderRadius: "20px",
          border: "1px solid #e0e7ff",
          boxShadow:
            "0 15px 40px rgba(30, 41, 59, 0.08)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "65px",
            marginBottom: "20px",
          }}
        >
          📋
        </div>

        <h2
          style={{
            marginBottom: "12px",
            color: "#172033",
          }}
        >
          No Bookings Yet
        </h2>

        <p
          style={{
            color: "#64748b",
            maxWidth: "500px",
            margin: "0 auto 28px",
            lineHeight: "1.7",
          }}
        >
          You haven't made any car rental bookings yet.
          Browse our cars and choose one for your next journey.
        </p>

        <Link to="/cars">
          <button>
            Browse Cars →
          </button>
        </Link>
      </div>
    </div>
  );
}

function Bookings() {
  return (
    <ProtectedRoute>
      <BookingsContent />
    </ProtectedRoute>
  );
}

export default Bookings;