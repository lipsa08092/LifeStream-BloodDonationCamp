import React from "react";
import CampDetailsimage from "../assects/SECONDimage.png";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock, FaUtensils } from "react-icons/fa";

const CampSection = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <section className=" bg-white container-xl mx-auto">
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
                className=" shadow-xl w-[800px] sm:w-[700px] md:w-[500px] lg:w-[350px] mt-5"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampSection;
