import React, { useState } from "react";
import { FaHeartbeat, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import RegistrationModal from "../RegistrationModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const toggleMenu = () => 
    setIsOpen(!isOpen);
  const closeMenu = () =>
    setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-bold"
      : "text-gray-700 hover:text-primary";

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
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/camp" className={navLinkClass}>Camp Details</NavLink>
              <NavLink to="/faq" className={navLinkClass}>FAQ</NavLink>

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
            <div className="bg-white py-4 px-4 space-y-4 shadow-lg rounded-b-lg flex flex-col font-semibold">

              <NavLink onClick={closeMenu} to="/" className= {navLinkClass}>Home</NavLink>
              <NavLink onClick={closeMenu} to="/about" className={navLinkClass}>About</NavLink>
              <NavLink onClick={closeMenu} to="/camp" className={navLinkClass}>Camp Details</NavLink>
              <NavLink onClick={closeMenu} to="/faq" className={navLinkClass}>FAQ</NavLink>

              <button
                onClick={() => {
                  closeMenu();
                  setOpenRegisterModal(true);
                }}
                className=" text-gray-700 hover:text-primary text-left"
              >
                Register
              </button>
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
