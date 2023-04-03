import React from "react";
import Individual from "./pages/Individual";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Gallery from "./components/Gallery/SalonGallery";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";

const App = () => {
  const location = useLocation();

  const hideNavbarAndFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
};
export default App;
