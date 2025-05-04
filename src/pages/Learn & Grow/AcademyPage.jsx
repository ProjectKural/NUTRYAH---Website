import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import AcademyHero from "../../assets/acadamy/learn.jpg"; // Replace with your actual image
import AuditVisual from "../../assets/acadamy/digital.jpg"; // replace with your actual path
import Tools from "../../assets/acadamy/tools.webp"; // replace with your actual path
import Static from "../../assets/acadamy/static.webp"; // replace with your actual path

import TemplateImg from "../../assets/acadamy/NABH.webp";
import WebinarImg from "../../assets/acadamy/webinar.webp";
import CourseImg from "../../assets/acadamy/course.webp";
import NutryahAcademyVisual from "../../assets/acadamy/smart.webp"; // Replace with actual image
import "../../styles/themes.css"

const TABS = ["Templates", "Webinars", "Courses"];
const tabData = {
  Templates: {
    items: [
      { title: "NABH Digital Readiness Checklist", format: "PDF", link: "/downloads/nabh-checklist.pdf" },
      { title: "Standard OPD Workflow SOP", format: "Word Doc", link: "/downloads/opd-sop.docx" },
      { title: "EMR Implementation Timeline Template", format: "Excel", link: "/downloads/emr-timeline.xlsx" },
      { title: "NABH Internal Audit Preparation Form", format: "PDF", link: "/downloads/audit-prep.pdf" },
      { title: "Telemedicine Consultation SOP Template", format: "Word Doc", link: "/downloads/telemedicine-sop.docx" },
    ],
    image: TemplateImg,
  },

  Webinars: {
    items: [
      { title: "How to Digitize Your Clinic in 30 Days", format: "On-Demand Video", link: "/webinars/clinic-digitization" },
      { title: "Common IT Mistakes in Hospital Setups", format: "Live Replay", link: "/webinars/hospital-it-mistakes" },
      { title: "NABH Accreditation: The Digital Advantage", format: "On-Demand", link: "/webinars/nabh-digital-advantage" },
    ],
    image: WebinarImg,
  },
  Courses: {
    items: [
      { title: "EMR Essentials for Small Hospitals", duration: "30 min", link: "/courses/emr-essentials" },
      { title: "Building NABH-Ready Documentation", duration: "45 min", link: "/courses/nabh-documentation" },
      { title: "Launching Telemedicine in 60 Days", duration: "30 min", link: "/courses/telemedicine-launch" },
    ],
    image: CourseImg,
  },
};

const AcademyPage = () => {
  const [activeTab, setActiveTab] = useState("Templates");
  const contentRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="academy-page">
      <Helmet>
        <title>Nutryah Academy | Learn Healthcare Digitalization & NABH Readiness</title>
        <meta
          name="description"
          content="Free resources, templates, webinars, and mini-courses from Nutryah Academy. Learn how to digitize your clinic, prepare for NABH accreditation, and master healthcare IT best practices."
        />
      </Helmet>

      {/* Banner */}


      <section
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center text-white px-6 md:px-12"
        style={{ backgroundImage: `url(${AcademyHero})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0  bg-black/60 z-0" />

        {/* Foreground Content */}
        <div className="relative z-10  text-left max-w-4xl">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 ">
            Nutryah Academy – Empowering Healthcare Through Knowledge
          </h1>

          <p className="text-6sm md:text-2xl text-left   max-w-3xl mx-auto">

            Your free learning hub for mastering healthcare digitalization, NABH compliance,
            operational excellence, and patient care innovation.
          </p>
          <div className="flex flex-wrap  gap-8 mt-8 ">
            <a
              href="/courses"
              className="bg-[var(--text-dark)] text-[var(--bg-sub-cold)] text-sm px-6 py-4  font-semibold hover:bg-opacity-90 transition "
            >
              Explore Courses
            </a>
            <a
              href="/downloads"
              className="bg-[var(--bg-sub-cold)] text-[var(--text-dark)] px-6 py-4  font-semibold hover:bg-gray-100 transition text-sm"
            >
              Download Free Templates
            </a>
          </div>
        </div>
      </section>


      {/* Intro */}


      <section className="relative w-full h-screen bg-[var(--md-bg)] text-black overflow-hidden">
        {/* SVG Wave Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <svg
            className="absolute top-0 left-0 w-full h-full object-cover"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f1f5f9"
              d="M0,64L48,96C96,128,192,192,288,202.7C384,213,480,171,576,160C672,149,768,171,864,154.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L0,320Z"
            />
          </svg>
        </div>

        {/* Grid Layout */}
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12">

          {/* Left: Text Content */}
          <div className="text-center md:text-left flex flex-wrap ">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[var(--text-sub-dark)] text-left">
              Learn Before You Digitize
            </h2>
            <p className="text-sm md:text-lg text-[var(--bg-text)] max-w-xl mb-8 text-left md:w-3/4">
              At Nutryah, we believe education is the first step toward successful digital healthcare transformation.
              Nutryah Academy offers a free platform packed with actionable resources — so you can plan smarter, digitize faster, and succeed easier.
              Our goal? Make you confident and prepared, not confused and overwhelmed.
            </p>
            <a
              href="/audit"
              className=" text-sm inline-block bg-[var(--bg-sub-cold)] text-[var(--text-dark)] px-5 py-4  font-semibold hover:opacity-90 transition"
            >
              Take the Free Digital Readiness Audit &nbsp; →
            </a>
          </div>

          {/* Right: Clip-path with Image */}
          <div className="relative flex justify-center items-center">
            <div
              className="absolute w-[110%] h-[120%] -z-0 bg-[var(--text-dark)]"
              style={{
                clipPath: "polygon(0% 0%, 100% 10%, 80% 100%, 0% 80%)",
              }}
            ></div>
            <img
              src={AuditVisual}
              alt="Nutryah Academy"
              className="w-full max-w-md md:max-w-lg z-10 relative"
            />
          </div>
        </div>
      </section>


      <section className="py-20 px-4 bg-[var(--bg-text-cold)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[var(--bg-text)]">
            Your Free Tools for Healthcare Success
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 md:min-h-[500px]">
            {/* Row 1: Col 1+2 - Large Card */}
            <div className="md:col-span-2 bg-[#493D9E] text-white overflow-hidden shadow-md flex flex-col md:flex-row">
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                {/* <div className="text-4xl mb-4"></div> */}
                <h3 className="text-xl font-bold mb-2 text-[#FFF2AF] ">Webinars & Tutorials</h3>
                <p className="text-sm text-[#DAD2FF]">
                  Live sessions and on-demand videos by healthcare IT experts to help you digitize with confidence.
                </p>
              </div>
              <img
                src={Tools} // replace with your actual image
                alt="Webinar"
                className="w-full md:w-1/2 h-48 md:h-auto object-cover"
              />
            </div>

            {/* Row 1: Col 3 */}
            <div className="bg-[#433878] p-6 shadow-md flex flex-col justify-center">
              {/* <div className="text-4xl mb-4">📚</div> */}
              <h3 className="text-lg font-bold mb-2 text-[#E4B1F0]">Expert Articles</h3>
              <p className="text-sm text-[#FFE1FF]">
                Step-by-step guides on digitization, NABH, IT workflows.
              </p>
            </div>

            {/* Row 2: Col 1 */}
            <div className="bg-[#FFAF45] text-white p-6 shadow-md flex flex-col justify-center">
              {/* <div className="text-4xl mb-4"></div> */}
              <h3 className="text-lg font-bold mb-2 text-[#D74B76] ">Templates & Checklists</h3>
              <p className="text-sm text-[#673F69] ">SOPs, audit checklists, policy templates ready for your team.</p>
            </div>

            {/* Row 2: Col 2 */}
            <div className="bg-[#1D267D] text-white p-6 shadow-md flex flex-col justify-center">
              {/* <div className="text-4xl mb-4"></div> */}
              <h3 className="text-lg font-bold mb-2 text-[#8696FE]">Micro-Courses</h3>
              <p className="text-sm text-[#C4B0FF]">Mini-courses like ‘Digitize Your Hospital in 30 Days’ with real-world tasks.</p>
            </div>

            {/* Row 2: Col 3 - Background Image Card */}
            <div className="relative overflow-hidden shadow-md">
              <img
                src={Static} // replace with your actual image
                alt="Benchmark Reports"
                className="w-full h-100 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end">
                <div>
                  {/* <div className="text-4xl mb-2"></div> */}
                  <h3 className="text-white font-bold text-lg">Benchmark Reports</h3>
                  <p className="text-white text-sm">
                    Annual reports on hospital digital maturity and transformation trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Free Resources */}
      <section className="py-20 px-4 md:px-12 bg-[var(--text-light-bg)] text-[var(--bg-text)]">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Featured Free Resources
        </h2>

        {/* Tab Menu */}
        <div className="sticky top-19   z-20 flex justify-center flex-wrap gap-4 pb-4 py-3 bg-[var(--text-dark)] md:bg-transparent mb-12 ">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-4 py-2 text-sm md:text-base font-semibold border-b-2 transition-all ${activeTab === tab
                  ? "border-[var(--bg-secondary)] text-[var(--bg-secondary)]"
                  : "border-transparent text-gray-500 hover:text-[var(--bg-secondary)]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-screen"
        >
          {/* Left: Cards */}
          <div className="space-y-6">
            {tabData[activeTab].items.map((item, idx) => (
              <div
                key={idx}
                className="p-6  shadow-md hover:shadow-xl transition-all bg-[var(--bg-text-cold)]"
              >
                <h4 className="text-lg font-bold mb-1">{item.title}</h4>

                <a
                  href={item.link}
                  className="text-[var(--bg-secondary)] font-medium underline text-sm"
                >
                  {activeTab === "Courses" ? "Enroll Free →" : activeTab === "Webinars" ? "Watch Now →" : "Download →"}
                </a>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="w-full flex justify-center">
            <img
              src={tabData[activeTab].image}
              alt={`${activeTab} Visual`}
              className=" shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>



    

      <section className="max-h-screen bg-[var(--bg-secondary)] text-[var(--bg-text)] px-6 md:px-12 flex flex-col justify-between pt-16 pb-10">
        {/* Top: Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn from India’s Healthcare Technology Experts
          </h2>
          
        </div>

        {/* Bottom: Left Image + Right List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src={NutryahAcademyVisual}
              alt="Healthcare Expert Learning"
              className="w-full max-w-md md:max-w-lg  object-cover"
            />
          </div>

          {/* Right: Checklist */}
          <div className="text-left space-y-4">
          <p className="text-2xl text-[var(--text-dark)] max-w-3xl font-bold">
            Nutryah Academy is built by real practitioners helping hospitals digitize.
            Everything is practical, proven, and designed to deliver real results.
          </p>
            <ul className="text-xl text-[var(--text-sub-dark)] space-y-2 font-semibold">
              <li>→ &nbsp; Learn faster</li>
              <li>→ &nbsp; Avoid costly mistakes</li>
              <li>→ &nbsp; Plan smarter</li>
              <li>→ &nbsp; Digitize successfully</li>
            </ul>
            {/* <a
              href="/solutions"
              className="inline-block mt-6 bg-[var(--bg-secondary)] text-white px-6 py-3 rounded-full font-semibold"
            >
              🚀 Explore Solutions Now
            </a> */}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 bg-[var(--bg-text)] text-center text-white">

        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Future-Proof Your Healthcare Practice?
        </h2>
        <p className="text-lg md:text-2xl mb-10">
          Access free templates, expert insights, and actionable strategies today — no signup fees, no confusion.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <a href="/courses" className="bg-[var(--bg-secondary)] px-8 py-3  font-semibold text-white">
            Browse Free Courses
          </a>
          <a href="/downloads" className="bg-white text-[var(--bg-text)] px-8 py-3  font-semibold">
            Download Starter Templates
          </a>
        </div>
      </section>

      {/* Bonus: Upsell to Solutions */}

    </div>
  );
};

export default AcademyPage;
