import React from "react";
import { FaBolt } from "react-icons/fa6";
import { FaBaby } from "react-icons/fa";
import { FaPrescriptionBottleAlt } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className=" px-4 sm:px-6 lg:px-8">
      <section className="py-14 bg-white container-xl mx-auto">
        <div className=" max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-5">
                      Why Your <span className="text-primary">Donation</span> Matters
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
                      Every blood donation can save up to three lives. Your contribution
                      makes a real difference in emergency situations, surgeries, and
                      ongoing medical treatments.
                    </p>
                  </div>
        
                  <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition  hover:bg-gradient-to-b from-secondary/30 to-white shadow-gray-200 text-center flex flex-col items-center "> 
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                        <FaBolt className="text-2xl text-primary" />
                      </div>
        
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center sm:text-left">
                        Emergency Response
                      </h3> 
                      <p className="text-gray-600 text-sm">
                        Blood donations are crucial for accident victims, emergency
                        surgeries, and critical care patients.
                      </p>
                    </div>
        
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition hover:scale-105 hover:bg-gradient-to-b from-secondary/30 to-white shadow-gray-200 text-center flex flex-col items-center ">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                        <FaBaby className="text-2xl text-primary" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center sm:text-left">
                        Maternal Care
                      </h3>
                      <p className="text-gray-600  text-sm">
                        Helps mothers during childbirth complications and supports
                        newborn babies in need.
                      </p>
                    </div>
        
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition  hover:bg-gradient-to-b from-secondary/30 to-white shadow-gray-200 text-center flex flex-col items-center ">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                        <FaPrescriptionBottleAlt className="text-2xl text-primary" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center sm:text-left">
                        Chronic Illness
                      </h3>
                      <p className="text-gray-600 text-sm ">
                        Supports patients with cancer, anemia, and other conditions requiring regular transfusions.
                      </p>
                    </div>
                  </div>
                </div>
      </section>
    </div>
  );
};

export default AboutSection;
