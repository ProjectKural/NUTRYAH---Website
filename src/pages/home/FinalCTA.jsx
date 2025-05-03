import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CtaBg from "../../assets/about/about-hero.jpg"; // Replace with your image

export const FinalCTA = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full bg-[var(--bg-text)] py-16 px-6 md:px-20 overflow-hidden ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative">

        {/* Right side background image */}
        <div
          className="relative h-[300px] md:h-[450px] w-full  overflow-hidden"
          data-aos="fade-left"
        >
          <img
            src={CtaBg}
            alt="Hospital CTA"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Left content card - overlays image slightly */}
        <div
          className="bg-white shadow-2xl rounded-2xl p-8 z-10 md:-ml-20 relative md:w-[90%]"
          data-aos="fade-right"
        >
          <h3 className="text-[var(--bg-special)] text-sm font-semibold uppercase tracking-widest mb-2">
            - NUTRYAH 
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Digitize Your Hospital?
          </h2>
          <p className="text-gray-700 mb-6">
          Let Nutryah's smart software solutions drive your journey toward excellence in patient care, operational efficiency, and regulatory compliance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/"
              className="bg-[var(--bg-text)] hover:bg-[#1e3c5c] text-white px-5 py-3 rounded-full font-medium transition duration-300"
            >
              Book Consulting
            </a>
            <a
              href="/"
              className="border border-[var(--bg-text)] text-[var(--bg-text)] px-5 py-3 rounded-full font-medium hover:bg-[#f0f0f0] transition duration-300"
            >
               Download Brochure
            </a>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
