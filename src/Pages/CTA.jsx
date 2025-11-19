import React from "react";

function CTA() {
  return (
    <section className="py-16 sm:py-20 hero-gradient text-white  rounded-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Ready to Make a Difference?
        </h2>

        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-2">
          Your single donation can save up to three lives. Join thousands of
          heroes who have already made the commitment to save lives.
        </p>

        <a
          href="#register"
          className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold 
                     hover:bg-gray-100 transition inline-block text-sm sm:text-base shadow-md"
        >
          Register to Donate Today
        </a>
      </div>
    </section>
  );
}

export default CTA;
