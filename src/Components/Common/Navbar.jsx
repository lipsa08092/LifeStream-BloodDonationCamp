import React, { useState } from "react";
import { FaHeartbeat, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import RegistrationModal from "../RegistrationModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const toggleMenu = () => 
    setIsOpen(!isOpen);
  const closeMenu = () =>
    setIsOpen(false);

  return (
    <div>
      <nav className="bg-white shadow-lg fixed w-full z-50 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <FaHeartbeat className="text-primary text-2xl mr-2" />
              <span className="font-bold text-xl text-primary">LifeStream</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 font-bold">
              <Link to="/" className="text-gray-700 hover:text-primary">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-primary">
                About
              </Link>
              <Link to="/camp" className="text-gray-700 hover:text-primary">
                Camp Details
              </Link>

              <Link to="/faq" className="text-gray-700 hover:text-primary">
                FAQ
              </Link>
              <button
                onClick={() => setOpenRegisterModal(true)}
                className="text-gray-700 hover:text-primary"
              >
                Register
              </button>
            </div>

            <button onClick={toggleMenu} className="md:hidden text-gray-700">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden 
            ${isOpen ? "max-h-64" : "max-h-0"}`}
          >
            <div className="bg-white py-4 px-4 space-y-4 shadow-lg rounded-b-lg">

              <Link onClick={closeMenu} to="/" className="block text-gray-700 hover:text-primary">Home</Link>
              <Link onClick={closeMenu} to="/about" className="block text-gray-700 hover:text-primary">About</Link>
              <Link onClick={closeMenu} to="/camp" className="block text-gray-700 hover:text-primary">Camp Details</Link>
              <button
                onClick={() => {
                  closeMenu();
                  setOpenRegisterModal(true);
                }}
                className="block text-gray-700 hover:text-primary"
              >
                Register
              </button>
              <Link onClick={closeMenu} to="/faq" className="block text-gray-700 hover:text-primary">FAQ</Link>
            </div>
          </div>
        </div>
      </nav>
      <RegistrationModal
        isOpen={openRegisterModal}
        onClose={() => setOpenRegisterModal(false)}
      />
    </div>
  );
};

export default Navbar;
