import React from "react";

function Process() {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="container-xl px-6">
          
        
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-dark mb-4">
              The Donation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, safe, and life-changing. Here's what to expect during your donation.
            </p>
          </div>

        
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
            
    
            <div className="text-center max-w-xs mx-auto">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Registration</h3>
              <p className="text-gray-600">
                Complete quick paperwork and show your ID.
              </p>
            </div>
            <div className="text-center max-w-xs mx-auto">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Health Check</h3>
              <p className="text-gray-600">
                Brief health screening and iron level test.
              </p>
            </div>
            <div className="text-center max-w-xs mx-auto">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Donation</h3>
              <p className="text-gray-600">
                Comfortable donation takes 8–10 minutes.
              </p>
            </div>
            <div className="text-center max-w-xs mx-auto">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Refreshments</h3>
              <p className="text-gray-600">
                Enjoy snacks and drinks while you relax after donation.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Process;
