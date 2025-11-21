import React, { useState } from "react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "How often can I donate blood?",
      a: "You can donate whole blood every 56 days (approximately 8 weeks), which allows your body enough time to fully replenish the red blood cells you've given. For those who wish to help more frequently, platelet donations can be made up to 24 times per year, since platelets regenerate much faster than red cells. These guidelines ensure that donors stay healthy while continuing to save lives through regular and safe blood or platelet donations.",
    },
    {
      q: "Does it hurt to donate blood?",
      a: "You may feel a brief pinch when the needle is inserted, but most donors report little to no pain during the donation.Donating blood generally does not hurt, though you may feel a small, quick pinch when the needle goes in—similar to a tiny mosquito bite or a routine injection. After that moment, most donors feel completely fine, and the process becomes comfortable. The entire donation usually takes only 8-10 minutes, and trained professionals ensure that the procedure is safe, clean, and as painless as possible.",
    },
    {
      q: "How long does the process take?",
      a: "The entire blood donation process usually takes 30 to 45 minutes from start to finish. This includes registration, a quick health check, and the donation itself. The actual blood draw is the fastest part—typically only 8 to 10 minutes. After donating, you'll rest for a few minutes, enjoy a snack, and you're good to go. Overall, it's a simple, smooth, and time-efficient process that can help save lives.",
    },
    {
      q: "What should I do before donating?",
      a: "Eat a healthy meal, drink plenty of water, get enough sleep, and avoid fatty foods for 24 hours before donating.Before donating, make sure you are well-hydrated, eat a light and healthy meal, avoid heavy or fatty foods, get a good night's rest, stay calm and relaxed, and arrive prepared so the donation process is smooth and comfortable.",
    },
    {
      q: "Is it safe to donate blood?",
      a: "It is completely safe to donate blood, as the entire process is carried out by trained medical professionals using sterile, single-use equipment, with strict procedures in place to protect your health and ensure that every step from screening to donation is comfortable, hygienic, and risk-free for donors.",
    },
  ];

  return (
    <div className=" px-6 py-10">
      <section className="bg-white">
        <div className="container-xl px-6 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-dark mb-4">
              <span className="text-primary">Fre</span>quently <span className="text-primary">A</span>sked <span className="text-primary">Q</span>uestions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about blood donation.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-primary">
                    {index + 1}. {item.q}
                  </h3>

                  <span className="text-2xl text-primary">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-md">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQSection;
