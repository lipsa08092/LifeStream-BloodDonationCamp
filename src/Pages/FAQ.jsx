import React from "react";

function FAQ() {
  return (
    <div className="container-xl px-6 py-10">
      <section className="py-16 bg-white">
        <div className="container-xl px-6 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about blood donation.
            </p>
          </div>

          <div className="space-y-4 shadow-lg rounded-2xl">
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">
               1. How often can I donate blood?
              </h3>
              <p className="text-gray-600 text-sm">
                You can donate whole blood every 56 days (8 weeks). Platelet
                donations can be made more frequently - up to 24 times per year.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">
               2. Does it hurt to donate blood?
              </h3>
              <p className="text-gray-600 text-sm">
                You may feel a brief pinch when the needle is inserted, but most
                donors report feeling little to no pain during the donation
                process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">
               3. How long does the process take?
              </h3>
              <p className="text-gray-600 text-sm">
                The entire process takes about 45-60 minutes. The actual blood
                donation usually takes only 8-10 minutes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">
               4. What should I do before donating?
              </h3>
              <p className="text-gray-600 text-sm">
                Eat a healthy meal and drink plenty of fluids beforehand. Get
                enough sleep and avoid fatty foods for 24 hours before donating.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">
               5. Is it safe to donate blood?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes, blood donation is extremely safe. All equipment is sterile,
                used only once, and disposed of immediately after use.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
