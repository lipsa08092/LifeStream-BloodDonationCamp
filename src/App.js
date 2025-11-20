import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import ScrollToTop from "./Components/Common/ScrollToTop";

import Home from "./Screens/Users/home"
import About from "./Pages/About";
import CampDetails from "./Pages/CampDetails";
import Register from "./Components/RegistrationModal";
import FAQ from "./Pages/FAQ";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/camp" element={<CampDetails />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
