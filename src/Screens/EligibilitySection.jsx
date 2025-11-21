import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const EligibilitySection = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <section className="py-4 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-dark mb-4">
              Are <span className="text-primary">You</span> Eligible?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find out if you meet the essential criteria to become a
              life-saving blood donor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:bg-gradient-to-b from-secondary/30 to-white hover:scale-95 transition-all duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Basic Requirements
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-sm">
                    <FaCheckCircle size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Age</h4>
                    <p className="text-gray-600">
                      18-65 years old (16-17 with parental consent)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-sm">
                    <FaCheckCircle size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Weight</h4>
                    <p className="text-gray-600">Minimum 50 kg</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-sm">
                    <FaCheckCircle size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Health</h4>
                    <p className="text-gray-600">
                      Must be in good health on the donation day
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-sm">
                    <FaCheckCircle size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Frequency</h4>
                    <p className="text-gray-600">
                      You can donate every 56 days (whole blood)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white hover:bg-gradient-to-b from-secondary/30 to-white  rounded-2xl shadow-sm hover:scale-95 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Temporary Deferrals
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center shadow-sm">
                    <FaClock size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Recent Illness</h4>
                    <p className="text-gray-600">
                      You must wait until fully recovered
                    </p>
                  </div>
                </div>

                <div className="flex  gap-4">
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center shadow-sm">
                    <FaClock size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Travel</h4>
                    <p className="text-gray-600">
                      Certain destinations require a waiting period before
                      donating
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center shadow-sm">
                    <FaClock size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Medications</h4>
                    <p className="text-gray-600">
                      Some medications may temporarily defer donation
                    </p>
                  </div>
                </div>

                <div className="flex  gap-4">
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center shadow-sm">
                    <FaClock size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Pregnancy</h4>
                    <p className="text-gray-600">
                      Donation can resume 6 weeks after delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EligibilitySection;
