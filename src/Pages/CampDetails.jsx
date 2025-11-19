import React from "react";
import CampDetailsimage from "../assects/SECONDimage.png";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock, FaUtensils } from "react-icons/fa";

const CampDetails = () => {
  return (
    <div className="pt-12 px-4 sm:px-6 lg:px-8">
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Blood Donation Camp Details
              </h2>

              <div className="space-y-5">

                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2.5 rounded-lg">
                    <SlCalender className="text-red-600 text-lg" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Date & Time</h4>
                    <p className="text-gray-600">September 10, 2025 | 9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2.5 rounded-lg">
                    <FaLocationDot className="text-red-600 text-lg" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Location</h4>
                    <p className="text-gray-600">Kalathia, Bhubaneswar</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2.5 rounded-lg">
                    <FaClock className="text-red-600 text-lg" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Duration</h4>
                    <p className="text-gray-600">Approximately 45–60 minutes per donation</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2.5 rounded-lg">
                    <FaUtensils className="text-red-600 text-lg" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Refreshments</h4>
                    <p className="text-gray-600">
                      Healthy snacks and drinks provided after donation
                    </p>
                  </div>
                </div>

              </div>
            </div>

        
            <div className="flex justify-center lg:justify-end">
              <img
                src={CampDetailsimage}
                alt="Blood donation camp"
                className="rounded-lg shadow-lg w-[75%] sm:w-[70%] md:w-[65%] lg:w-[90%]"
              />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default CampDetails;
