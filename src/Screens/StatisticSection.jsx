import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { FaSyringe } from "react-icons/fa";
import { FaHospital } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const  StatisticSection =() => {

  return (
    <section className="bg-white py-17 w-full mt-12">
      <div className="mx-auto px-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="text-center p-8 rounded-2xl  shadow-md hover:shadow-xl hover:bg-secondary/30 transition">
            <BsPeopleFill className="text-4xl text-primary mb-4 mx-auto" />
            <div className="text-3xl font-bold text-dark">2,500+</div>
            <div className="text-sm text-gray-600 mt-1">Donors Registered</div>
          </div>

          <div className="text-center p-8 rounded-2xl shadow-md hover:shadow-xl  hover:bg-secondary/30 transition">
            <FaSyringe className="text-4xl text-primary mb-4 mx-auto" />
            <div className="text-3xl font-bold text-dark">1,800+</div>
            <div className="text-sm text-gray-600 mt-1">Successful Donations</div>
          </div>

          <div className="text-center p-8 rounded-2xl shadow-md hover:shadow-xl  hover:bg-secondary/30 transition">
            <FaHospital className="text-4xl text-primary mb-4 mx-auto" />
            <div className="text-3xl font-bold text-dark">12+</div>
            <div className="text-sm text-gray-600 mt-1">Partner Hospitals</div>
          </div>

          <div className="text-center p-8 rounded-2xl shadow-md hover:shadow-xl  hover:bg-secondary/30 transition">
            <FaHeart className="text-4xl text-primary mb-4 mx-auto" />
            <div className="text-3xl font-bold text-dark">24/7</div>
            <div className="text-sm text-gray-600 mt-1">Emergency Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatisticSection;
