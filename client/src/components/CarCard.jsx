import { useNavigate } from "react-router-dom";

function CarCard({ car }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/bookings");
  };

  return (
    <div className="car-card">

      {/* CAR ICON / IMAGE AREA */}
      <div
        style={{
          height: "170px",
          marginBottom: "22px",
          borderRadius: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "70px",
          background:
            "linear-gradient(135deg, #dbeafe, #ede9fe)",
        }}
      >
        🚗
      </div>

      {/* CAR DETAILS */}
      <p
        style={{
          color: "#6366f1",
          fontSize: "13px",
          fontWeight: "700",
          textTransform: "uppercase",
          marginBottom: "6px",
        }}
      >
        {car.type}
      </p>

      <h2>{car.name}</h2>

      <p>
        <strong>Brand:</strong> {car.brand}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "18px",
          paddingTop: "16px",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <div>
          <span
            style={{
              color: "#64748b",
              fontSize: "12px",
              display: "block",
            }}
          >
            Starting from
          </span>

          <strong
            style={{
              color: "#2563eb",
              fontSize: "21px",
            }}
          >
            ₹{car.price}
          </strong>

          <span
            style={{
              color: "#64748b",
              fontSize: "13px",
            }}
          >
            /day
          </span>
        </div>
      </div>

      {/* BOOK BUTTON */}
      <button onClick={handleBooking}>
        Book Now →
      </button>

    </div>
  );
}

export default CarCard;