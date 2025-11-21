import React from "react";
import CampDetailsimage from "../assects/SECONDimage.png";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock, FaUtensils, FaCheckCircle } from "react-icons/fa";

const Camp = () => {
  return (
    <div className="pt-12 px-4 sm:px-6 lg:px-8">
      <section className=" py-16 bg-white container-xl mx-auto">
        <div className="max-w-6xl mx-auto px-6 container-xl">
          <div className="w-full text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Bl<span className="text-primary">oo</span>d Donation{" "}
              <span className="text-primary">Camp</span> Details
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 mt-14 gap-10 items-center">
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-xl shadow-sm mt-1">
                  <SlCalender className="text-red-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Date & Time</h4>
                  <p className="text-gray-600">
                    September 10, 2025 | 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-xl shadow-sm mt-1">
                  <FaLocationDot className="text-red-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p className="text-gray-600">Kalathia, Bhubaneswar</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-xl shadow-sm mt-1">
                  <FaClock className="text-red-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Duration</h4>
                  <p className="text-gray-600">
                    Approximately 45-60 minutes per donation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-xl shadow-sm mt-1">
                  <FaUtensils className="text-red-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Refreshments</h4>
                  <p className="text-gray-600">
                    Healthy snacks and drinks provided after donation
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={CampDetailsimage}
                alt="Blood donation camp"
                className=" shadow-xl w-[800px] sm:w-[700px] md:w-[50px] lg:w-[350px] mt-5"
              />
            </div>
          </div>
        </div>
        <div className="py-20 mt-5">
          <h3 className=" md:text-4xl text-dark sm:text-3xl font-bold text-center mb-10">
            What to Expect During the <span className="text-primary">D</span>
            onation <span className="text-primary">P</span>rocess
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto space-y-5">
            <div className="bg-white hover:bg-gradient-to-b from-secondary/30 to-white hover:shadow-lg hover:scale-105 transition-all  p-6 rounded-2xl shadow-md text-center">
              <FaCheckCircle className="text-primary text-4xl mx-auto mb-4" />
              <h4 className="font-semibold mb-2">1. Registration</h4>
              <p className="text-gray-600">
                Fill in basic details and verify identity.
              </p>
            </div>

            <div className="bg-white hover:bg-gradient-to-b from-secondary/30 to-white hover:shadow-lg hover:scale-105 transition-all p-6 rounded-2xl shadow-md text-center">
              <FaCheckCircle className="text-primary text-4xl mx-auto mb-4" />
              <h4 className="font-semibold mb-2">2. Health Check-up</h4>
              <p className="text-gray-600">
                Quick test: BP, pulse, hemoglobin & general fitness.
              </p>
            </div>

            <div className="bg-white hover:bg-gradient-to-b from-secondary/30 to-white hover:shadow-lg hover:scale-105 transition-all p-6 rounded-2xl shadow-md text-center">
              <FaCheckCircle className="text-primary text-4xl mx-auto mb-4" />
              <h4 className="font-semibold mb-2">3. Donation</h4>
              <p className="text-gray-600">
                The actual donation takes 10-15 minutes.
              </p>
            </div>

            <div className="bg-white hover:bg-gradient-to-b from-secondary/30 to-white hover:shadow-lg hover:scale-105 transition-all p-6 rounded-2xl shadow-md text-center">
              <FaCheckCircle className="text-primary text-4xl mx-auto mb-4" />
              <h4 className="font-semibold mb-2">4. Refreshments</h4>
              <p className="text-gray-600">
                Enjoy snacks & rest before leaving.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Camp;
