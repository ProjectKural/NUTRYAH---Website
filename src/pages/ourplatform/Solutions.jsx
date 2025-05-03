import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import AOS from 'aos';
import 'aos/dist/aos.css';
import CtaBg from "../../assets/solutions/ask.jpeg";

import {
  Hospital,
  Stethoscope,
  Pill,
  FlaskConical,
  Home,
  Leaf,
  Eye,
  ShieldCheck,
  BarChart2,
  LayoutDashboard,
  SlidersHorizontal,
  FileText,
} from "lucide-react";
import SolutionsHero from "../../assets/solutions/success.jpg";
import NutryahSolution from "../../assets/solutions/Development.jpeg";

const solutions = [
  {
    icon: <Hospital size={40} />,
    title: "Hospitals (Small, Medium, Multispecialty)",
    overview:
      "Comprehensive hospital management solutions that integrate all departments – from registration and appointments to electronic health records, billing, and pharmacy management. Our software improves inter-department communication, reduces waiting times, and enhances care coordination in multi-specialty and general hospitals.",
    benefit:
      "Enhance patient experience, speed up operations, and achieve financial excellence.",
    textColor: "#EEE2DE",
  },
  {
    icon: <Stethoscope size={40} />,
    title: "Clinics & Polyclinics",
    overview:
      "Scalable clinic management software that handles appointments, medical records, billing, and follow-up reminders. Whether you operate a small private practice or a chain of outpatient clinics, our solutions help streamline patient visits, maintain accurate records, and facilitate easy communication with patients (e.g. appointment confirmations or teleconsultations).",
    benefit: "Faster consultations, improved front-desk efficiency.",
    textColor: "#F8F5E9",
  },
  {
    icon: <Pill size={40} />,
    title: "Pharmacies",
    overview:
      "Dedicated pharmacy management systems for both standalone drugstores and hospital dispensaries. We provide tools for real-time inventory tracking, automated reordering, digital prescription processing, and point-of-sale integration. Reduce medication errors and improve service speed with a platform designed for pharmacists’ workflows.",
    benefit: "Reduce stockouts and billing errors.",
    textColor: "#303841",
  },
  {
    icon: <FlaskConical size={40} />,
    title: "Diagnostic Centers and Labs",
    overview:
      " Laboratory information systems to manage test orders, sample tracking, and results reporting. We enable digital requisitions from physicians, barcode tracking of specimens, and secure online report delivery to patients and doctors. Improve accuracy and turnaround time in your lab operations with our integrated, automated workflows.",
    benefit: "Speedy reports and compliance.",
    textColor: "#F4FFC3",
  },
  {
    icon: <Home size={40} />,
    title: "Nursing Homes and Long-Term Care",
    overview:
      "Specialized software for nursing homes, assisted living facilities, and long-term care centers. We focus on tools for resident admissions, daily care plans, medication administration tracking, and family communication portals. Our solutions support caregivers in providing consistent, quality care and ensure compliance with long-term care regulations.",
    benefit: "Better care quality, easy audits.",
    textColor: "#D1F8EF",
  },
  {
    icon: <Leaf size={40} />,
    title: "AYUSH Centers",
    overview:
      " Modern software for traditional wellness centers practicing Ayurveda, Yoga, Unani, Siddha, or Homeopathy (AYUSH). We respect the unique workflows of AYUSH practitioners while introducing digital tools for appointment scheduling, patient record-keeping, treatment plan tracking, and herbal inventory management. Bring the benefits of technology to your traditional practice without compromising its essence.",
    benefit: "Modernize AYUSH, preserve authenticity.",
    textColor: "#FFF2AF",
  },
  {
    icon: <Eye size={40} />,
    title: "Dental & Eye Hospitals",
    overview:
      "Custom solutions for dental clinics, orthodontic centers, eye hospitals, and vision care centers. Manage appointments and treatments with specialized features (like dental charting or optical prescription management). Our systems can integrate with dental X-ray units or ophthalmology devices to store imaging results directly in patient records. Enhance patient experience with automated appointment reminders and streamline billing and insurance claims.",
    benefit: "Simplify specialty workflows.",
    textColor: "#EFB6C8",
  },
];

const commonFeatures = [
  { icon: <ShieldCheck size={32} />, title: "Secure and Compliant" },
  { icon: <BarChart2 size={32} />, title: "Scalable Architecture" },
  { icon: <LayoutDashboard size={32} />, title: "User-Friendly Interfaces" },
  { icon: <SlidersHorizontal size={32} />, title: "Customizable Modules" },
  { icon: <FileText size={32} />, title: "Powerful Reporting & Analytics" },
];
const getColorByIndex = (index) => {
  const colors = [
    "#B31312", // blue
    "#DF6D14", // green
    "#F6C90E", // violet
    "#5D8736", // amber
    "#3674B5", // pink
    "#493D9E", // emerald
    "#441752", // purple
  ];
  return colors[index % colors.length];
};

const SolutionsPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="solutions-page font-sans text-[var(--bg-text)]">
      <Helmet>
        <title>Nutryah | Solutions for Hospitals, Clinics, Pharmacies & More</title>
        <meta
          name="description"
          content="Discover Nutryah’s healthcare software solutions tailored for every sector – hospitals, clinics, pharmacies, nursing homes, diagnostic and AYUSH centers, as well as dental and eye hospitals."
        />
      </Helmet>

      {/* HERO - Full Screen */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center px-6 md:px-12 text-white relative"
        style={{ backgroundImage: `url(${SolutionsHero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Healthcare Solutions Built for Your Success
          </h1>
          <p className="text-lg md:text-2xl">
            Nutryah crafts sector-specific digital solutions for better healthcare delivery, efficiency, and growth.
          </p>
        </div>
      </section>
      <section className="relative w-full h-screen bg-[var(--md-bg)] text-black overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <svg
            className="absolute top-0 left-0 w-full h-full object-cover"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f1f5f9"
              d="M0,64L48,96C96,128,192,192,288,202.7C384,213,480,171,576,160C672,149,768,171,864,154.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--bg-text)]">
              One Vision, Many Solutions
            </h2>
            <p className="text-lg text-[var(--bg-text)] max-w-xl mb-8">
              We don’t believe in one-size-fits-all software. We craft NABH-compliant solutions aligned with your specialty, goals, and growth.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[var(--bg-sub-cold)] text-[var(--bg-text)] px-8 py-3 font-semibold hover:opacity-90 transition"
            >
              Book a Free Consultation
            </a>
          </div>
          <div className="relative flex justify-center items-center">
            <div
              className="absolute w-[110%] h-[120%] -z-0 bg-[var(--bg-sub-cold)]"
              style={{
                clipPath: "polygon(0% 0%, 100% 10%, 80% 100%, 0% 80%)",
              }}
            ></div>
            <img
              src={NutryahSolution}
              alt="Healthcare Visual"
              className="w-full max-w-md md:max-w-lg z-10 relative"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}


      {/* SOLUTION CARDS - Grid Style */}
      <section className="w-full min-h-screen bg-[var(--md-bg)] text-white py-20 px-4 md:px-12 overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[var(--text-dark)] ">
          Sector-Specific Healthcare Software Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 max-w-12xl mx-auto">
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 md:p-8 w-full"
              style={{
                backgroundColor: getColorByIndex(idx),
                color: solution.textColor,
                height: "400px",
              }}
            >
              <div className="text-4xl mb-3">{solution.icon}</div>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold">{solution.title}</h3>
                <p className="text-sm md:text-base opacity-90">{solution.overview}</p>
                <p className="text-sm md:text-base opacity-70">{solution.benefit}</p>
              </div>
              <a
                href="/contact"
                className="text-sm font-semibold underline mt-4 inline-block"
                style={{ color: solution.textColor }}
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>





      {/* COMMON FEATURES */}
      <section className="py-24 px-6 md:px-12 bg-[var(--bg-text)]">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[var(--text-sub-text)] ">
          Every Nutryah Solution Delivers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {commonFeatures.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center bg-gray-100 p-8 rounded-xl">
              {feature.icon}
              <h4 className="text-lg font-bold mt-4">{feature.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[var(--md-bg)] py-16 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative">

        {/* Right side: image with fade-in */}
        <div
          className="relative h-[300px] md:h-[450px] w-full overflow-hidden "
          data-aos="fade-left"
        >
          <img
            src={CtaBg}
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Left: text content with background card */}
        <div
          className="bg-white shadow-2xl rounded-2xl p-8 z-10 md:-ml-20 relative md:w-[90%]"
          data-aos="fade-right"
        >
          <h3 className="text-[var(--bg-special)] text-sm font-semibold uppercase tracking-widest mb-2">
            - NUTRYAH
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Facility?
          </h2>
          <p className="text-gray-700 mb-6 text-base md:text-lg">
            Let’s create a future-ready digital ecosystem for your healthcare organization with Nutryah’s modular, intelligent software built for NABH-aligned growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-[var(--bg-text)] hover:bg-[#1e3c5c] text-white px-6 py-3 rounded-full font-medium transition duration-300"
            >
               Get a Custom Demo
            </a>
            <a
              href="/downloads/solutions-overview.pdf"
              className="border border-[var(--bg-text)] text-[var(--bg-text)] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition duration-300"
            >
               Download Overview
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default SolutionsPage;
