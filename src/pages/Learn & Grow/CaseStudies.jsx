import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Hospital, Building2, Pill, FlaskConical, Leaf } from "lucide-react";
import bgHero from "../../assets/case-studies-hero.jpg"; // <-- your hero background image
import Hospitals from "../../assets/casestudy/Hospitals.jpg"; // <-- your hero background image
import Clinics from "../../assets/casestudy/Clinics.jpg"; // <-- your hero background image
import Pharmacies from "../../assets/casestudy/Pharmacies.jpg"; // <-- your hero background image
import Diagnostics from "../../assets/casestudy/Diagnostics.jpg"; // <-- your hero background image
import AYUSH from "../../assets/casestudy/AYUSH.jpg"; // <-- your hero background image

const sectorsData = [
  { label: "Hospitals", icon: <Hospital className="w-6 h-6" /> },
  { label: "Clinics", icon: <Building2 className="w-6 h-6" /> },
  { label: "Pharmacies", icon: <Pill className="w-6 h-6" /> },
  { label: "Diagnostics", icon: <FlaskConical className="w-6 h-6" /> },
  { label: "AYUSH Centers", icon: <Leaf className="w-6 h-6" /> },
];

const caseStudies = [
  {
    sector: "Hospitals",
    title: "Multi-Specialty Hospital – Complete Digital Transformation",
    client: "500-bed Multi-Specialty Hospital (South India)",
    image: Hospitals,
    challenge: "Fragmented workflows, paper-based records, poor NABH readiness.",
    solution: [
      "Implemented integrated HMS: EMR + OPD/IPD + Pharmacy + Billing + Diagnostics",
      "NABH audit-ready modules",
      "Fast staff onboarding",
    ],
    results: [
      "30% faster discharge process",
      "40% better coordination",
      "90% NABH documentation readiness",
    ],
    link: "/case-studies/hospital-digital-transformation",
  },
  {
    sector: "Clinics",
    title: "Chain of Clinics – Centralized Clinic Management",
    client: "Network of 20 Polyclinics",
    image: Clinics,
    challenge: "Disparate systems, revenue leakages, patient data loss.",
    solution: [
      "Centralized Clinic Management Platform",
      "Digital Registration & Invoicing",
      "Patient Portal Integration",
    ],
    results: [
      "Unified EMR records",
      "No-shows reduced by 25%",
      "18% revenue growth",
    ],
    link: "/case-studies/clinic-management-platform",
  },
  {
    sector: "Pharmacies",
    title: "Retail Pharmacy Chain – Inventory & Billing Automation",
    image: Pharmacies,
    client: "Pharmacy Chain with 50+ Outlets",
    challenge: "Stock mismatches, manual billing delays.",
    solution: [
      "Pharmacy Management System + POS integration",
      "Barcode billing & auto reorder",
    ],
    results: [
      "40% faster billing",
      "Stockouts reduced by 80%",
      "Lower inventory carrying costs",
    ],
    link: "/case-studies/pharmacy-inventory-success",
  },
  {
    sector: "Diagnostics",
    title: "Diagnostic Lab Network – LIS and Sample Tracking",
    image: Diagnostics,
    client: "State-wide Diagnostic Chain",
    challenge: "Sample mismanagement, delayed reports.",
    solution: [
      "Laboratory Information System (LIMS)",
      "Barcode-based sample tracking",
      "Online report delivery",
    ],
    results: [
      "Zero sample misplacements",
      "Reporting time down from 48hrs to 8hrs",
      "30% increase in referrals",
    ],
    link: "/case-studies/lab-sample-automation",
  },
  {
    sector: "AYUSH Centers",
    title: "AYUSH Wellness Center – Digitizing Traditional Healing",
    image: AYUSH,
    client: "National Chain of Ayurvedic Centers",
    challenge: "Paper records, herbal stock mismanagement.",
    solution: [
      "AYUSH Practice Management System",
      "Therapy Planning & Progress Tracking",
    ],
    results: [
      "50% better treatment continuity",
      "35% reduction in herbal wastage",
    ],
    link: "/case-studies/ayush-digital-transformation",
  },
];

const CaseStudiesPage = () => {
  const [activeSector, setActiveSector] = useState("Hospitals");

  return (
    <div className="case-studies-page">
      <Helmet>
        <title>Nutryah | Case Studies – Healthcare IT Success Stories</title>
        <meta
          name="description"
          content="Discover how Nutryah’s healthcare software solutions have delivered measurable results across hospitals, clinics, pharmacies, labs, and AYUSH centers."
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="h-screen flex flex-col justify-center items-center text-left px-6 md:px-12 text-white bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg max-w-5xl">
            Real Results. Proven Healthcare IT Success Stories.
          </h1>
          <p className="text-lg md:text-2xl max-w-4xl drop-shadow-md">
            See how healthcare providers achieved operational excellence and improved patient outcomes with Nutryah.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="relative w-full h-auto md:h-screen  text-black overflow-hidden py-16 md:py-5 bg-[var(--md-bg)]">

        {/* SVG Wave Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-1">
          <svg
            className="absolute top-0 left-0 w-full h-full object-cover"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#A0C878"
              d="M0,64L48,96C96,128,192,192,288,202.7C384,213,480,171,576,160C672,149,768,171,864,154.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L0,320Z"
            />
          </svg>
        </div>

        {/* Grid Layout */}
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12 z-10 relative">
          {/* Left: Text Content */}
          <div className="text-center md:text-left flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
              Delivering Measurable Impact Across Healthcare Sectors
            </h2>
            <p className="text-lg md:text-xl text-[var(--bg-text)] max-w-xl mb-8">
              Our solutions have helped optimize workflows, enhance compliance, accelerate patient care, and drive confident digital transformation.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[var(--bg-secondary)] text-center text-white px-8 py-4  font-semibold hover:opacity-90 transition"
            >
              Speak to Our Experts
            </a>
          </div>

          {/* Right: Optional Decorative Image (Optional) */}
          <div className="relative flex justify-center items-center order-1 md:order-2">
            <div
              className="absolute w-[110%] h-[120%] -z-0 bg-[var(--bg-secondary)]"
              style={{
                clipPath: "polygon(0% 0%, 100% 10%, 80% 100%, 0% 80%)",
              }}
            ></div>
            <img
              src={bgHero}
              alt="Decorative visual"
              className="w-full max-w-md md:max-w-lg z-10 relative object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sector Tabs */}
     
        {/* Sector Filter */}
       

  

    {/* Case Studies Grid */}
<section className="  py-16 px-4 sm:px-6 md:px-12  text-center bg-[var(--md-bg)]">

{/* Sticky Horizontal Filter */}
<div className="  top-0  z-20 ">
  <div className="overflow-x-auto whitespace-nowrap px-4 py-3 flex gap-4 md:justify-center">
    {sectorsData.map((sector, index) => (
      <button
        key={index}
        onClick={() => setActiveSector(sector.label)}
        className={`flex items-center gap-2 px-4 py-2   font-semibold whitespace-nowrap transition ${
          activeSector === sector.label
            ? "bg-[var(--bg-text)] text-[var(--bg-secondary)]"
            : "bg-[var(--bg-secondary)] text-[var(--bg-text)] "
        }`}
      >
        {sector.icon}
        {sector.label}
      </button>
    ))}
  </div>
</div>

{/* Case Studies */}
<div className="max-w-7xl mx-auto space-y-12 mt-10">
  {caseStudies
    .filter((study) => study.sector === activeSector)
    .map((study, idx) => (
      <div
        key={idx}
        className="grid grid-cols-1 md:grid-cols-2 items-stretch  overflow-hidden"
      >
        {/* Left: Content */}
        <div className="relative md:static">
          {/* Background image for mobile */}
          <div
            className="absolute inset-0 md:hidden bg-cover bg-center"
            style={{
              backgroundImage: `url(${study.image})`,
            }}
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 md:hidden bg-black/60" />
          <div className="relative p-6 md:p-10 text-left flex flex-col justify-center h-full z-10 text-white md:text-gray-800">
            <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
            <p className="mb-4">
              <strong>Client:</strong> {study.client}
            </p>
            <div className="mb-2">
              <strong>Challenge:</strong> {study.challenge}
            </div>
            <div className="mb-2">
              <strong>Solution:</strong>
              <ul className="list-disc list-inside ml-4">
                {study.solution.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <strong>Results:</strong>
              <ul className="list-disc list-inside ml-4">
                {study.results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
            <a
              href={study.link}
              className="mt-auto  font-semibold bg-[var(--bg-text)] text-[var(--md-bg)] flex  max-w-[250px] justify-center py-3"
            >
              <p className=""> Read Full Case Study &nbsp;</p>
              <Leaf size="24"/>
            </a>
          </div>
        </div>

        {/* Right: Image for desktop only */}
        <div
          className="hidden md:block h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${study.image})`,
          }}
        ></div>
      </div>
    ))}
</div>
</section>





      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 bg-[var(--bg-text)] text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Start Your Success Story?
        </h2>
        <p className="text-lg md:text-2xl mb-10">
          Join healthcare providers who trusted Nutryah for digital transformation.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <a href="/contact" className="bg-white text-[var(--text-sub-dark)] px-8 py-3  font-semibold">
            Book a Free Strategy Call
          </a>
          <a href="/downloads/case-studies-brochure.pdf" className="bg-white text-[var(--text-sub-dark)] px-8 py-3  font-semibold">
            Download Case Studies
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
