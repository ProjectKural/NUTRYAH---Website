import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Hospital, Building2, Pill, FlaskConical, Leaf } from "lucide-react";
import bgHero from "../../assets/case-studies-hero.jpg"; // <-- your hero background image

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
        className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 md:px-12 text-white bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Real Results. Proven Healthcare IT Success Stories.
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl drop-shadow-md">
            See how healthcare providers achieved operational excellence and improved patient outcomes with Nutryah.
          </p>
        </div>
      </section>
      {/* Intro */}
      <section className="py-16 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
          Delivering Measurable Impact Across Healthcare Sectors
        </h2>
        <p className="text-lg text-[var(--bg-text-secondary)] max-w-3xl mx-auto">
          Our solutions have helped optimize workflows, enhance compliance, accelerate patient care, and drive confident digital transformation.
        </p>
        <a
          href="/contact"
          className="inline-block mt-8 bg-[var(--bg-secondary)] text-white px-8 py-3 rounded-full font-semibold"
        >
          📩 Speak to Our Experts
        </a>
      </section>
      {/* Sector Tabs */}
      <section className="py-10 bg-gray-100 flex justify-center gap-6 flex-wrap px-4">
        {sectorsData.map((sector, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSector(sector.label)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold border transition ${activeSector === sector.label
                ? "bg-teal-600 text-white"
                : "bg-white text-gray-800 hover:bg-teal-50"
              }`}
          >
            {sector.icon} {sector.label}
          </button>
        ))}
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-6 md:px-12 bg-white text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {caseStudies
            .filter((study) => study.sector === activeSector)
            .map((study, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl shadow-md text-left flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Client:</strong> {study.client}
                </p>
                <div className="text-gray-600 mb-2">
                  <strong>Challenge:</strong> {study.challenge}
                </div>
                <div className="text-gray-600 mb-2">
                  <strong>Solution:</strong>
                  <ul className="list-disc list-inside ml-4">
                    {study.solution.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-gray-600 mb-4">
                  <strong>Results:</strong>
                  <ul className="list-disc list-inside ml-4">
                    {study.results.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={study.link}
                  className="mt-auto text-teal-600 font-semibold hover:underline"
                >
                  📖 Read Full Case Study
                </a>
              </div>
            ))}
        </div>
      </section>

      

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 bg-teal-700 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Start Your Success Story?
        </h2>
        <p className="text-lg md:text-2xl mb-10">
          Join healthcare providers who trusted Nutryah for digital transformation.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <a href="/contact" className="bg-white text-teal-700 px-8 py-3 rounded-full font-semibold">
            🚀 Book a Free Strategy Call
          </a>
          <a href="/downloads/case-studies-brochure.pdf" className="bg-white text-teal-700 px-8 py-3 rounded-full font-semibold">
            📄 Download Case Studies
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
