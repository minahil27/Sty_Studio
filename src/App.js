import React from "react";
import Individual from "./pages/Individual";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Gallery from "./components/Gallery/SalonGallery";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import Password from "./pages/ConPassword";
import Booking from "./pages/Booking";

const App = () => {
  const location = useLocation();

  const hideNavbarAndFooter =
    location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/Book" || location.pathname === "/confirmPass";

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/confirmPass" element={<Password />} />
        <Route path="/Book" element={<Booking />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
};
export default App;
