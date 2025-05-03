import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import hospitalsImg from "../../../src/assets/home/hospitalImg.jpg";
import pharmaciesImg from "../../../src/assets/home/pharmacyImg.jpg";
import ayushImg from "../../../src/assets/home/hospitalImg.jpg";
import strong from "../../assets/home/strong.jpg";

const modules = [
  {
    title: "Hospitals & Clinics",
    description:
      "Integrated hospital management systems and EHR solutions that connect departments, manage patient records, and enhance care coordination.",
    image: hospitalsImg,
  },
  {
    title: "Pharmacies & Diagnostic Centers",
    description:
      "Robust platforms for inventory management, e-prescriptions, and quick, accurate diagnostic reporting for better service delivery.",
    image: pharmaciesImg,
  },
  {
    title: "AYUSH, Dental & Eye Care",
    description:
      "Tailored solutions honoring unique care practices – from traditional AYUSH wellness centers to specialized dental and eye hospitals – improving patient experience and operational efficiency.",
    image: ayushImg,
  },
];

const CoreSolutions = () => {
  return (
    <section className="relative py-16 px-4 md:px-12 bg-[var(--text-light-bg)]">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold text-[var(--bg-text)] mb-10 text-center">
          Empowering the Healthcare Industry
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Carousel: spans 2 columns */}
          <div className="md:col-span-2 bg-white overflow-hidden shadow rounded-lg">
            <a href="/solutions">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4000 }}
                loop
                pagination={{ clickable: true }}
                className="w-full h-full"
              >
                {modules.map((module, i) => (
                  <SwiperSlide key={i}>
                    <div className="flex flex-col md:flex-row h-full bg-[var(--md-bg)]">
                      <img
                        src={module.image}
                        alt={module.title}
                        className="w-full md:w-1/2 h-48 md:h-auto object-cover"
                      />
                      <div className="p-4 md:p-6 md:w-1/2 flex flex-col justify-center">
                        <h3 className="text-lg md:text-2xl font-bold mb-2 text-[var(--text-sub-dark)]">
                          {module.title}
                        </h3>
                        <p className="text-sm md:text-base text-[var(--bg-text)] font-medium">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </a>
          </div>

          {/* Facts Box */}
          <div className="bg-[var(--md-bg)] md:bg-transparent p-4 md:p-6 rounded-lg  flex flex-col justify-center h-full">
            <p className="text-xs uppercase font-medium mb-2">Facts</p>
            <h3 className="text-base md:text-lg font-bold mb-2">Did you know?</h3>
            <p className="text-sm md:text-base">
              Nutryah offers scalable digital solutions for OPD, IPD, pharmacy, diagnostics, and more.
            </p>
          </div>

          {/* CTA Block */}
          <div className="bg-[var(--md-bg)] md:bg-transparent p-4 md:p-6 rounded-lg  flex flex-col justify-center">
            <p className="text-base md:text-xl text-[var(--bg-text)]">
              With Nutryah’s software solutions, healthcare providers can confidently embrace digital transformation.
            </p>
            <div className="mt-4 space-y-4">
              <Link
                to="/contact"
                className="block bg-[var(--bg-secondary)] text-white px-6 py-4 md:py-5 font-bold text-base md:text-lg text-center rounded hover:opacity-90 transition"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                to="/services"
                className="block bg-[var(--md-bg)] text-[var(--bg-text)] border border-[var(--bg-text)] px-6 py-4 md:py-5 rounded-lg font-semibold text-base md:text-lg text-center hover:bg-gray-100 transition"
              >
                Explore All Services
              </Link>
            </div>
          </div>

          {/* Image with overlay */}
          <div className="md:col-span-2 relative h-[200px] md:h-[400px] overflow-hidden rounded-lg shadow">
            <img
              src={strong}
              alt="Healthcare Visual"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 opacity-40" />
            <div className="absolute inset-0 flex justify-center items-center text-center px-4 md:px-6">
              <h3 className="text-white text-base md:text-2xl font-bold max-w-xl">
                Experience Smarter Healthcare Delivery Across All Departments
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave shape */}
      <div className="absolute -bottom-[6px] left-0 w-full overflow-hidden z-0 pointer-events-none">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-[80px]">
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="fill-[var(--bg-text-secondary)]"
          />
        </svg>
      </div>
    </section>
  );
};

export default CoreSolutions;
