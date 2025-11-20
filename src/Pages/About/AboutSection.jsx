import React from "react";
import { FaBolt } from "react-icons/fa6";
import { FaBaby } from "react-icons/fa";
import { FaPrescriptionBottleAlt } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="pt-10 px-4 sm:px-6 lg:px-8">
      <section className="py-10 sm:py-16 bg-white container-xl mx-auto">
        <div className=" max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Your Donation Matters
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Every blood donation can save up to three lives. Your contribution
              makes a real difference in emergency situations, surgeries, and
              ongoing medical treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition  hover:bg-secondary/30 shadow-gray-200">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <FaBolt className="text-2xl text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center sm:text-left">
                Emergency Response
              </h3>
              <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                Blood donations are crucial for accident victims, emergency
                surgeries, and critical care patients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-secondary/30 transition shadow-gray-200">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <FaBaby className="text-2xl text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center sm:text-left">
                Maternal Care
              </h3>
              <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                Helps mothers during childbirth complications and supports
                newborn babies in need.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-secondary/30 transition shadow-gray-200">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <FaPrescriptionBottleAlt className="text-2xl text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center sm:text-left">
                Chronic Illness
              </h3>
              <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                Supports patients with cancer, anemia, and other conditions
                requiring regular transfusions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
