import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Bookings from "./pages/Bookings";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;