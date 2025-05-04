import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { RocketIcon, MailIcon, ShieldCheck, Star, Target, Users, FileText, BarChart2 } from "lucide-react";
import ABOUT from '../../assets/about/NUTRYAHabout.jpg'
import ourJourny from '../../assets/about/abtNUT.jpg'
import mission from '../../assets/about/mission.jpg'
import customer from '../../assets/about/customer.jpg'
import nutryahContact from '../../assets/about/nutryahContact.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Briefcase, Search, ClipboardCheck, Smile, ThumbsUp } from "lucide-react";

const leadership = [
  { name: "KURALARASAN C", designation: "Founder & CEO", expertise: "Healthcare IT Strategy, Clinical Workflow Optimization" },
  { name: "[Co-founder Name]", designation: "CTO", expertise: "Healthcare SaaS Development, Data Security, Cloud Platforms" },
  { name: "[Director Name]", designation: "Director, Customer Success", expertise: "Healthcare Operations, Client Relations, NABH Compliance" },
];

const milestones = [
  "2025: Nutryah founded by healthcare and IT experts to bridge care and technology.",
  "2026: Launched our flagship EMR and HMS platform across India.",
  "2027: Expanded to pharmacies, labs, and AYUSH centers with dedicated solutions.",
  "2028: Achieved ISO 9001 and ISO 27001 compliance and onboarded 100+ facilities.",
  "2029: Rolled out AI-based analytics, UHI integration, and smart mobile platforms.",
];

const testimonials = [
  { quote: "Nutryah’s platform completely transformed our hospital’s patient flow and billing accuracy.", name: "[Hospital CEO]" },
  { quote: "Their EMR system is intuitive, easy to use, and made clinical documentation so much smoother.", name: "[Senior Physician]" },
  { quote: "The Nutryah team went above and beyond during our NABH accreditation process.", name: "[Clinic Manager]" },
];



const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-page">
      <Helmet>
        <title>About Nutryah | Healthcare Software Solutions Company</title>
        <meta name="description" content=" Learn about Nutryah, a leading healthcare software solutions company. Discover our mission to innovate digital healthcare, our values, and our commitment to improving patient care through technology." />
        <link rel="canonical" href="https://nutryah.com/about" />
      </Helmet>

      {/* Hero Section with Background Image */}

      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center text-white"
        style={{ backgroundImage: `url(${ABOUT})` }} // Replace with your actual import
      >
        {/* ✅ Overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* ✅ Left-aligned content */}
        <div className="relative z-10 max-w-6xl px-6 md:px-12 lg:px-20 text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About Nutryah – Empowering Healthcare through Innovation
          </h1>
          <p className="text-lg md:text-2xl text-white/80 max-w-5xl mb-6 font-semibold">
            Driven by a vision to modernize healthcare, Nutryah blends deep industry expertise with cutting-edge technology to deliver smarter, scalable digital solutions for care providers worldwide.
          </p>
          <a
            href="/contact"
            className="bg-[var(--bg-text)] text-white px-8 py-3  font-semibold hover:opacity-60 transition"
          >
            Let's Talk
          </a>
        </div>
      </section>



      {/* Company Overview */}
      <section className="relative w-full h-screen bg-[var(--md-bg)] text-black overflow-hidden">
        {/* Decorative SVG Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <svg
            className="absolute top-0 left-0 w-full h-full object-cover"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#745035"
              d="M0,64L48,96C96,128,192,192,288,202.7C384,213,480,171,576,160C672,149,768,171,864,154.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mb-8">
              At Nutryah, we design intuitive, efficient digital solutions for hospitals, clinics, pharmacies, and labs. Our mission is to empower providers through technology that enhances care, streamlines operations, and ensures compliance.
            </p>
            <a
              href="/about"
              className="inline-block bg-[var(--text-dark)] text-[var(--text-sub-text)] px-8 py-3 font-semibold hover:opacity-90 transition"
            >
              Learn More About Us
            </a>
          </div>

          {/* Right Side with Clip Path Background and Image */}
          <div className="relative flex justify-center items-center">
            <div
              className="absolute w-[110%] h-[120%] -z-0 bg-[var(--text-dark)]"
              style={{
                clipPath: "polygon(0% 0%, 100% 10%, 80% 100%, 0% 80%)",
              }}
            ></div>
            <img
              src={ourJourny} // ✅ Replace with your actual image
              alt="About Nutryah"
              className="w-full max-w-md md:max-w-lg z-10 relative"
            />
          </div>
        </div>
      </section>


      <section className="py-20 px-4 bg-[var(--text-light-bg)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[var(--bg-text)]">
            Our Purpose and Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 md:min-h-[500px]">
            {/* Row 1: Col 1+2 - Mission */}
            <div className="md:col-span-2 bg-[#A4B465] overflow-hidden shadow-md flex flex-col md:flex-row">
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <div className="bg-teal-100 p-4 rounded-full mb-4 w-fit">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#FFCF50]">Mission</h3>
                <p className="text-sm text-[#FEFAE0]">
                  To empower healthcare providers with innovative, efficient, and compliant digital solutions that enhance patient outcomes, streamline operations, and support growth.
                </p>
              </div>
              <img
                src={mission}// replace with actual image
                alt="Mission"
                className="w-full md:w-1/2 h-48 md:h-auto object-cover"
              />
            </div>

            {/* Row 1: Col 3 - Vision */}
            <div className="bg-[#578FCA] text-gray-900 p-6 shadow-md flex flex-col justify-center">
              <div className="bg-white p-3 rounded-full mb-4 w-fit">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#A1E3F9]">Vision</h3>
              <p className="text-sm text-[#D1F8EF]">
                To become a global leader in healthcare technology by making world-class digital infrastructure accessible to healthcare organizations of all sizes.
              </p>
              {/* <div className="text-right text-yellow-600 mt-4 text-xl">↗</div> */}
            </div>

            {/* Row 2: Col 1 - Value: Innovation */}
            <div className="bg-[#344C64] text-white p-6 shadow-md flex flex-col justify-center">
              <div className="mb-4">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#57A6A1] ">Innovation & Integrity</h3>
              <p className="text-sm text-white/90 text-[#577B8D]">
                Continuously adopting emerging technologies to solve real healthcare challenges. <br /><br /> Upholding transparency, security, and ethical practices in every project.
              </p>
            </div>

            {/* Row 2: Col 2 - Value: Compliance */}
            <div className="bg-[#2D3250] p-6 shadow-md text-white flex flex-col justify-center">
              <div className="mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#F6B17A]">Excellence & Empowerment</h3>
              <p className="text-sm  text-[#7077A1]">
                Striving for superior quality, compliance, and user experience in all our products. <br /> <br /> Helping care teams, administrators, and patients engage better through smarter tools.
              </p>
            </div>

            {/* Row 2: Col 3 - Customer-Centricity with background image */}
            <div className="relative overflow-hidden shadow-md">
              <img
                src={customer} // replace with actual image
                alt="Core Value"
                className="w-full h-74 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-end">
                <div>
                  <div className="mb-2">
                    <BarChart2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Customer-Centricity</h3>
                  <p className="text-white text-sm">Building solutions around the needs and realities of healthcare providers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Team */}
      {/* <section className="py-20 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-12">Meet the Team Behind Nutryah</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Nutryah was founded in 2025 by a passionate team of healthcare and technology professionals with a shared vision — to digitize and transform healthcare delivery through intuitive, scalable, and NABH-aligned software.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-50 rounded-xl shadow-md text-left">
            <Users className="w-8 h-8 text-teal-500 mb-2" />
            <h3 className="text-xl font-bold">Founder</h3>
            <p className="text-gray-600 mb-1">Founder & CEO</p>
            <p className="text-sm text-gray-500">Leading Nutryah’s mission to simplify digital healthcare for hospitals and clinics.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-md text-left">
            <Users className="w-8 h-8 text-teal-500 mb-2" />
            <h3 className="text-xl font-bold">Technical Advisor</h3>
            <p className="text-gray-600 mb-1">Architecture & Security</p>
            <p className="text-sm text-gray-500">Advises on backend, ABHA APIs, and HIPAA-compliant infrastructure.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-md text-left">
            <Users className="w-8 h-8 text-teal-500 mb-2" />
            <h3 className="text-xl font-bold">UX & Workflow Designer</h3>
            <p className="text-gray-600 mb-1">Healthcare Product Design</p>
            <p className="text-sm text-gray-500">Designing seamless EMR and OPD workflows with clinician usability in mind.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">Our Journey So Far</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Nutryah was founded in 2025 with a mission to modernize healthcare through scalable, NABH-ready digital systems. Here's a snapshot of our early milestones:
        </p>
        <div className="flex justify-center">
          <img
            src={ourJourny}
            alt="Nutryah Milestones Timeline 2025"
            className="w-full max-w-4xl rounded-xl "
            loading="lazy"
          />
        </div>
      </section> */}

      {/* Compliance */}
      {/* <section className="py-20 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">Built for Quality, Security, and Compliance</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Every Nutryah platform is built with the foundation of NABH, HIPAA, and ABDM readiness. Security and compliance are not afterthoughts — they’re part of the architecture.
        </p>
        <ul className="text-left list-disc list-inside text-gray-600 max-w-3xl mx-auto space-y-2">
          <li>NABH Accreditation Support (clinical workflows, audit logs, dashboard)</li>
          <li>HIPAA & GDPR-aligned access control and data security</li>
          <li>UHI, ABHA, ABDM API integration support (in-progress)</li>
          <li>Built to align with ISO 9001 & ISO 27001 standards</li>
        </ul>
        <a href="/certifications" className="inline-block mt-8 bg-teal-600 text-white px-8 py-3 rounded-full font-semibold">
          View Our Certifications →
        </a>
      </section> */}

      {/* Testimonials */}
      {/* <section className="py-20 px-6 md:px-12 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">What Our Early Supporters Say</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <p className="text-xl italic text-gray-600">"Nutryah is solving real problems. We’re excited to see how this product evolves for Indian hospitals."</p>
            <p className="font-bold text-gray-700 mt-2">— Clinical Advisor</p>
          </div>
          <div>
            <p className="text-xl italic text-gray-600">"Their workflows feel grounded in real practice, not just theory. Great promise in the system."</p>
            <p className="font-bold text-gray-700 mt-2">— Early Partner Clinic</p>
          </div>
        </div>
        <a href="/case-studies" className="inline-block mt-8 bg-teal-600 text-white px-8 py-3 rounded-full font-semibold">
          Read Full Case Studies →
        </a>
      </section> */}



      {/* CTA */}




      <section className="w-full bg-[var(--bg-text)] py-16 px-6 md:px-20 overflow-hidden text-white">


        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative">

          {/* Right side background image */}
          <div
            className="relative h-[300px] md:h-[450px] w-full  overflow-hidden"
            data-aos="fade-left"
          >
            <img
              src={nutryahContact}
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
              Ready to Transform Your Facility?
            </h2>
            <p className="text-gray-700 mb-6">
              Partner with Nutryah to simplify care, improve outcomes, and future-proof your operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/"

                className="bg-[var(--bg-text)] hover:bg-teal-800 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition"
              >
                <RocketIcon className="w-5 h-5" />   Book Consulting
              </a>
              <a
                href="/"
                className="border border-[var(--bg-text)] text-[var(--bg-text)] px-5 py-3 rounded-full font-medium hover:bg-[#f0f0f0] flex items-center gap-2 transition"
              >
                <MailIcon className="w-5 h-5" /> Contact Us
              </a>

            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutPage;