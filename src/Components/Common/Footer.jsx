import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-xl mx-auto px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <div className="flex items-center mb-4">
              <FaHeartbeat className="text-primary mr-2" />
              <span className="font-bold text-lg">LifeStream</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Dedicated to saving lives through blood donation and community
              health initiatives.
            </p>

            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 text-2xl hover:text-blue-600 transition">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 text-2xl hover:text-sky-500 transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 text-2xl hover:text-pink-600 transition">
                <FaSquareInstagram />
              </a>
              <a href="#" className="text-gray-400 text-2xl hover:text-blue-600 transition">
                <BsLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to= "/"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to= "/about"
                
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link to= "/camp"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Camp Details
                </Link>
              </li>
              <li>
                <Link to= "/faq"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaMapMarkedAlt className="text-primary mr-3 text-lg" />
                <span className="text-gray-400 text-sm">
                  Kalothia, Bhubaneswar
                </span>
              </li>
              <li className="flex items-center">
                <IoCall className="text-primary mr-3 text-lg" />
                <span className="text-gray-400 text-sm">+91 98761 54321</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-primary mr-3 text-lg" />
                <span className="text-gray-400 text-sm">
                  info@lifestream.org
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Emergency Contact</h4>
            <p className="text-gray-400 text-sm mb-3 leading-relaxed">
              For urgent blood requirements or emergencies:
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-semibold text-sm">24/7 Hotline</p>
              <p className="font-bold text-lg">180-BLOOD-HELP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 LifeStream Blood Donation Camp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
