import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

function Eligibility() {
  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-8">
      <section className="py-16 bg-white">
        <div className="container-xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-dark mb-4">Are You Eligible?</h2>
            <p className="text-lg text-gray-600">
              Check if you meet the requirements to become a blood donor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
        
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Basic Requirements
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold">Age</h4>
                    <p className="text-gray-600">
                      18-65 years old (16-17 with parental consent)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold">Weight</h4>
                    <p className="text-gray-600">Minimum 50 kg</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold">Health</h4>
                    <p className="text-gray-600">Good general health on donation day</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold">Frequency</h4>
                    <p className="text-gray-600">
                      Every 56 days for whole blood donation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Temporary Deferrals
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaClock className="text-yellow-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold">Recent Illness</h4>
                    <p className="text-gray-600">Wait until fully recovered</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaClock className="text-yellow-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold">Travel</h4>
                    <p className="text-gray-600">Some destinations require a waiting period</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaClock className="text-yellow-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold">Medications</h4>
                    <p className="text-gray-600">Certain medicines require a waiting period</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaClock className="text-yellow-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold">Pregnancy</h4>
                    <p className="text-gray-600">Wait 6 weeks after delivery</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Eligibility;
