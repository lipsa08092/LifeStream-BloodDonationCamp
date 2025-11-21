import React from 'react'
import Heroimage from "../assects/FIRSTimage.png"
import { Link} from "react-router-dom";
import { useState } from 'react';
import RegistrationModal from '../Components/RegistrationModal';


const HeroSection = () => {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  return (
    <div>
      <section className="hero-gradient text-white pt-24 pb-16 md:pt-32">
        <div className="container-xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Your Blood Can Save Lives
              </h1>

              <p className="text-base sm:text-lg lg:text-xl mb-8 opacity-90">
                Join our blood donation camp and become a hero in someone's life story.
                Every drop counts towards building a healthier community.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button onClick={() => setOpenRegisterModal(true)}
                  className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition pulse-animation"
                >
                  Register Now
                </button>
                <Link to= "/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition"
                >
                  Learn More
                </Link>
              </div>
            </div>       
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <img
                  src={Heroimage}
                  alt="People donating blood in a clean, modern environment"
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-4 bg-white text-primary p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold">127+</div>
                    <div className="text-sm">Lives Saved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <RegistrationModal
        isOpen={openRegisterModal}
        onClose={() => setOpenRegisterModal(false)}
      />
    </div>
  )
}

export default HeroSection;
