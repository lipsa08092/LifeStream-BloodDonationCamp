import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import Home from "./Screens/Users/home"
import About from "./Pages/About";
import CampDetails from "./Pages/CampDetails";
import RegistrationForm from "./Pages/RegistrationForm";
import FAQ from "./Pages/FAQ";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/camp" element={<CampDetails />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
