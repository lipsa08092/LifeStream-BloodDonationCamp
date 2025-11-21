import React from "react";
import { FaUser } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-secondary/20 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-dark mb-4"><span className="text-primary">Heros</span> Among Us</h2>
          <p className="text-lg text-gray-600">
            Hear from our dedicated donors and recipients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg hover:bg-gradient-to-b from-secondary/30 to-white hover:scale-105 transition">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <FaUser className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Mahaprasad Sahu</h4>
                <p className="text-primary text-sm">Regular Donor</p>
              </div>
            </div>
            <p className="text-gray-600 italic text-sm leading-relaxed">
              "Donating blood is my way of giving back. The staff is always
              professional and makes the process comfortable. Knowing I'm
              helping save lives keeps me coming back every 8 weeks."
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition hover:bg-gradient-to-b from-secondary/30 to-white hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <FaUser className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Deepak Kumar Dey</h4>
                <p className="text-primary text-sm">First-time Donor</p>
              </div>
            </div>
            <p className="text-gray-600 italic text-sm leading-relaxed">
              "I was nervous about my first donation, but the team made me feel
              so at ease. The process was quick and painless. I'll definitely be
              donating regularly from now on!"
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition hover:bg-gradient-to-b from-secondary/30 to-white hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <FaUser className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Malaya Panda</h4>
                <p className="text-primary text-sm">Blood Recipient</p>
              </div>
            </div>
            <p className="text-gray-600 italic text-sm leading-relaxed">
              "After my surgery, I needed multiple blood transfusions. Thanks to
              generous donors, I recovered fully. Your donation truly makes a
              difference in people's lives."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
