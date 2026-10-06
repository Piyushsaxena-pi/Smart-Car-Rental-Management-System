import { useState } from "react";
import CarCard from "../components/CarCard";

function Cars() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const cars = [
    {
      id: 1,
      name: "Swift Dzire",
      brand: "Maruti Suzuki",
      type: "Sedan",
      price: 1500,
    },
    {
      id: 2,
      name: "Creta",
      brand: "Hyundai",
      type: "SUV",
      price: 2200,
    },
    {
      id: 3,
      name: "Innova Crysta",
      brand: "Toyota",
      type: "MPV",
      price: 3000,
    },
  ];

  const filteredCars = cars.filter((car) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      car.name.toLowerCase().includes(searchText) ||
      car.brand.toLowerCase().includes(searchText);

    const matchesType =
      type === "All" || car.type === type;

    return matchesSearch && matchesType;
  });

  return (
    <div
      style={{
        minHeight: "650px",
        paddingTop: "45px",
      }}
    >
      {/* PAGE HEADER */}
      <div
        style={{
          textAlign: "center",
          padding: "20px 20px 30px",
        }}
      >
        <p
          style={{
            color: "#6366f1",
            fontWeight: "700",
            marginBottom: "8px",
          }}
        >
          OUR FLEET
        </p>

        <h1
          style={{
            fontSize: "40px",
            marginBottom: "12px",
          }}
        >
          Available Cars
        </h1>

        <p
          style={{
            color: "#64748b",
            maxWidth: "600px",
            margin: "auto",
            lineHeight: "1.7",
          }}
        >
          Choose the perfect car for your journey.
          Search and filter our available vehicles below.
        </p>
      </div>

      {/* SEARCH & FILTER */}
      <div className="car-filters">
        <input
          type="text"
          placeholder="🔍 Search by car name or brand..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="MPV">MPV</option>
        </select>
      </div>

      {/* CAR LIST */}
      <div className="cars-container">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))
        ) : (
          <div
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "60px 20px",
              color: "#64748b",
            }}
          >
            <h2>No cars found 🚗</h2>
            <p style={{ marginTop: "10px" }}>
              Try another search or select a different car type.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cars;