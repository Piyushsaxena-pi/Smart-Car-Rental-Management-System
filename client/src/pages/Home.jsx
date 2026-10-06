import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">

          <p
            style={{
              color: "#93c5fd",
              fontWeight: "700",
              marginBottom: "12px",
              fontSize: "15px",
            }}
          >
            🚗 SMART • FAST • RELIABLE
          </p>

          <h1>
            Find Your
            <br />
            Perfect Car
          </h1>

          <p>
            Rent your favorite car easily, quickly, and safely.
            Choose from our wide range of vehicles and start your
            journey today.
          </p>

          <div className="hero-buttons">
            <Link to="/cars">
              <button>🚗 Browse Cars</button>
            </Link>

            <Link to="/register">
              <button className="secondary-btn">
                Get Started →
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">

        <p
          style={{
            color: "#6366f1",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          WHY CHOOSE US
        </p>

        <h2>
          Everything You Need for a Better Journey
        </h2>

        <div className="features-container">

          <div className="feature-card">
            <h3>🚗 Wide Range of Cars</h3>

            <p>
              Choose from different cars according to your
              travel needs, preferences, and budget.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔒 Safe & Secure</h3>

            <p>
              Your account and booking information are
              handled with security and care.
            </p>
          </div>

          <div className="feature-card">
            <h3>⚡ Easy Booking</h3>

            <p>
              Search for a suitable car and make your
              rental booking quickly and conveniently.
            </p>
          </div>

        </div>

      </section>

      {/* CALL TO ACTION */}
      <section
        style={{
          padding: "70px 6%",
          textAlign: "center",
          background: "white",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "15px",
            color: "#172033",
          }}
        >
          Ready to Start Your Journey?
        </h2>

        <p
          style={{
            color: "#64748b",
            marginBottom: "25px",
            lineHeight: "1.7",
          }}
        >
          Find the perfect car and enjoy a smooth rental experience.
        </p>

        <Link to="/cars">
          <button>
            Explore Cars →
          </button>
        </Link>
      </section>

    </div>
  );
}

export default Home;