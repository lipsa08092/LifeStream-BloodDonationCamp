import React , {useEffect} from "react";
import { FaTimes } from "react-icons/fa";


const RegistrationModal = ({ isOpen, onClose }) => {
  
 useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";    
    }
    return () => {
      document.body.style.overflow = "auto";    
    };
  }, [isOpen]);

    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-8 relative 
                max-h-[90%] overflow-y-auto my-6">
        <button
          onClick={onClose}
          className="absolute top-6 right-4 text-gray-600 hover:text-black text-2xl"
        >
        <FaTimes/>
        </button>

        <h2 className="text-3xl font-bold text-dark text-center mb-6">Register as a Donor</h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blood Group *
              </label>
              <select
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Time Slot *
            </label>
            <select
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            >
              <option value="">Select Time Slot</option>
              <option>9:00 AM - 10:00 AM</option>
              <option>10:00 AM - 11:00 AM</option>
              <option>11:00 AM - 12:00 PM</option>
              <option>12:00 PM - 1:00 PM</option>
              <option>1:00 PM - 2:00 PM</option>
              <option>2:00 PM - 3:00 PM</option>
              <option>3:00 PM - 4:00 PM</option>
              <option>4:00 PM - 5:00 PM</option>
            </select>
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" required className="w-5 h-5 mt-1" />
            <label className="text-sm text-gray-600">
              I confirm that I meet the eligibility criteria for blood donation.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg text-lg font-semibold hover:bg-accent transition"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationModal;
