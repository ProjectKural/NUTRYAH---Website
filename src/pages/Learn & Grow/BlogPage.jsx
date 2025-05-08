import React from "react";
import { Helmet } from "react-helmet-async";
import AcademyHero from "../../assets/blog/blog.jpg"; // Replace with your actual image
import HMS from "../../assets/blog/HMS.jpg"; // Replace with your actual image
import Analytics from "../../assets/blog/analytics.jpg"; // Replace with your actual image

import NABH from "../../assets/blog/NABH.jpeg";
import Lab from "../../assets/blog/Lab.jpeg";
import ABDM from "../../assets/blog/ABDM.jpeg";
import It from "../../assets/blog/It.jpeg";
import HIPAA from "../../assets/blog/HIPAA.jpeg";
import Telemed from "../../assets/blog/Telemed.jpeg";
const topics = [
  ["🏥", "Hospital Management Systems", "Best practices and latest innovations in HMS, EHR, OPD, IPD management."],
  ["📲", "Telemedicine & Virtual Care", "Implement, optimize, and scale telehealth services for remote care."],
  ["📋", "NABH Accreditation & Compliance", "Step-by-step guides, checklists, and tools for NABH readiness."],
  ["🔐", "Healthcare Data Security", "HIPAA, GDPR, cybersecurity strategies, and patient data protection."],
  ["📈", "Healthcare Analytics & AI", "Use dashboards and predictive analytics to improve healthcare operations."],
  ["🌐", "ABDM & UHI Integration", "Align your clinic/hospital with India's national digital health initiatives."],
];

const articles = [
  {
    title: "Checklist: What Areas Must Be Digitized for NABH Accreditation?",
    snippet: "Accreditation success begins with digital readiness. Here’s the ultimate checklist hospitals must follow to meet NABH digital requirements.",
    link: "/blog/nabh-digital-readiness",
    image: NABH,
  },
  {
    title: "The Future of Telemedicine in Rural Healthcare in India",
    snippet: "Telehealth is reshaping access to healthcare across rural India. Explore how technology bridges the doctor-patient gap sustainably.",
    link: "/blog/telemedicine-rural-india",
    image: Telemed,
  },
  {
    title: "How to Secure Patient Data: HIPAA and GDPR Best Practices",
    snippet: "Learn key strategies hospitals and clinics must adopt to ensure data protection, avoid breaches, and stay compliant with global standards.",
    link: "/blog/hipaa-gdpr-security",
    image: HIPAA,
  },
  {
    title: "Common Mistakes in Hospital IT Setup (And How to Avoid Them)",
    snippet: "Poor planning can cripple your digital health ambitions. Discover the top mistakes in IT setup — and how Nutryah helps hospitals avoid them.",
    link: "/blog/hospital-it-mistakes",
    image: It,
  },
  {
    title: "Understanding the Ayushman Bharat Digital Mission (ABDM)",
    snippet: "India’s ABDM is reshaping healthcare. Here's a simple breakdown of ABHA, HFR, UHI, and how hospitals can prepare.",
    link: "/blog/abdm-health-id",
    image: ABDM,
  },
  {
    title: "Building a Future-Ready Diagnostic Lab: LIMS & Beyond",
    snippet: "Discover why modern labs need more than basic systems — and how Nutryah’s LIMS helps them grow smarter.",
    link: "/blog/lims-future-diagnostics",
    image: Lab,
  },
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <Helmet>
        <title>Healthcare Technology Insights & Updates | Nutryah Blog</title>
        <meta
          name="description"
          content="Stay ahead in healthcare IT with Nutryah’s blog. Explore expert articles on digital transformation, NABH compliance, telemedicine, healthcare security, and best practices for hospitals and clinics."
        />
      </Helmet>

      {/* Banner Section */}
      <section className="min-h-screen bg-cover bg-center relative flex items-center justify-center text-white px-6 md:px-12"
        style={{ backgroundImage: `url(${AcademyHero})` }}
      >
        <div className="absolute inset-0  bg-black/60 z-0" />
        <div className="relative z-10  text-left max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Healthcare Technology Insights, Trends, and Best Practices
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white max-w-3xl mx-auto mb-10">
            Expert articles to help hospitals, clinics, and healthcare innovators stay ahead in digital health.
          </p>
          {/* <a
            href="#insights"
            className="inline-block bg-[var(--bg-sub-cold)]  px-8 py-4 text-[var(--text-sub-dark)] font-semibold shadow-md hover:opacity-90 transition"
          >
             Browse Latest Insights
          </a> */}
        </div>
      </section>

      {/* Follow-up Intro Section */}
      <section className="relative w-full h-screen bg-[var(--md-bg)]  text-black overflow-hidden py-5">
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
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12 ">

          {/* Left: Text Content */}
          <div className="text-center md:text-left flex flex-col justify-center z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--bg-text)]">
              Empowering Healthcare Providers with Knowledge
            </h2>
            <p className="text-sm md:text-lg text-[var(--text-sub-dark)] max-w-xl mb-8">
              At Nutryah, we believe knowledge drives better outcomes. Our blog shares trends, innovations, and actionable advice to help healthcare organizations succeed in digital transformation.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#143D60] text-white px-6 py-4 font-semibold  hover:opacity-90 transition max-w-[350px]"
            >
              Subscribe to Our Healthcare Insights
            </a>
          </div>

          {/* Right: Decorative Image with Clip Path */}
          <div className="relative flex justify-center items-center">
            <div
              className="absolute w-[110%] h-[120%] -z-0 bg-[#143D60]"
              style={{
                clipPath: "polygon(0% 0%, 100% 10%, 80% 100%, 0% 80%)",
              }}
            ></div>
            <img
              src={AcademyHero} // Replace with actual blog image path
              alt="Healthcare Blog Visual"
              className="w-full max-w-md md:max-w-lg z-10 relative object-cover "
            />
          </div>
        </div>
      </section>



      {/* Topics Grid */}
      <section className="py-20 px-4 bg-[var(--text-light-bg)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[var(--bg-text)]">
            Explore Our Popular Topics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 md:min-h-[500px]">
            {/* Row 1: Col 1+2 - Long Card */}
            <div className="md:col-span-2 bg-[#F3F2DA] shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                {/* <div className="text-4xl mb-4">🏥</div> */}
                <h3 className="text-xl font-bold mb-2 text-[#70AF85]">Hospital Management Systems</h3>
                <p className="text-sm   text-[#AA8976]">
                  Best practices and latest innovations in HMS, EHR, OPD, IPD management.
                </p>
              </div>
              <img
                src={HMS} // replace with your actual image
                alt="Hospital Management Systems"
                className="w-full md:w-1/2 h-48 md:h-auto object-cover"
              />
            </div>

            {/* Row 1: Col 3 */}
            <div className="bg-[#488FB1] text-white p-6 shadow-md flex flex-col justify-center">
              {/* <div className="text-4xl mb-4">📲</div> */}
              <h3 className="text-lg font-bold mb-2 text-[#FFF1DB]">Telemedicine & Virtual Care</h3>
              <p className="text-sm text-[#EEEEEE]">
                Implement, optimize, and scale telehealth services for remote care.
              </p>
            </div>

            {/* Row 2: Col 1 */}
            <div className="bg-[#508D4E] text-white p-6 shadow-md flex flex-col justify-center">
              {/* <div className="text-4xl mb-4">📋</div> */}
              <h3 className="text-lg font-bold mb-2 text-[#E7F0DC]">NABH Accreditation & Compliance</h3>
              <p className="text-sm text-[#D6EFD8] ">
                Step-by-step guides, checklists, and tools for NABH readiness.
              </p>
            </div>

            {/* Row 2: Col 2 */}
            <div className="bg-[#226B80] shadow-md p-6 flex flex-col justify-center">
              {/* <div className="text-4xl mb-4">🔐</div> */}
              <h3 className="text-lg font-bold mb-2 text-[#35B0AB]">Healthcare Data Security</h3>
              <p className="text-sm text-[#C5F0A4]">
                HIPAA, GDPR, cybersecurity strategies, and patient data protection.
              </p>
            </div>

            {/* Row 2: Col 3 - Image Card */}
            <div className="relative overflow-hidden shadow-md">
              <img
                src={Analytics} // replace with your actual image
                alt="Analytics & AI"
                className="w-full h-100 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-end">
                <div>
                  {/* <div className="text-4xl mb-2 text-white">📈</div> */}
                  <h3 className="text-white font-bold text-lg">Healthcare Analytics & AI</h3>
                  <p className="text-white text-sm">
                    Use dashboards and predictive analytics to improve healthcare operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Topic (ABDM) - Separate Full-Width Card Below if Needed */}
          <div className="mt-10 bg-[#264E70] shadow-md  p-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            {/* <div className="text-4xl">🌐</div> */}
            <div className="text-left">
              <h3 className="text-xl font-bold mb-1 text-[#FFB4AC]">ABDM & UHI Integration</h3>
              <p className="text-sm text-[#FFEBD3]">
                Align your clinic/hospital with India's national digital health initiatives.
              </p>
            </div>
          </div>

          {/* CTA */}
          {/* <div className="text-center mt-10">
            <a
              href="/blog/topics"
              className="inline-block bg-[var(--bg-secondary)] text-white px-6 py-3 rounded-full font-semibold"
            >
              Browse All Topics →
            </a>
          </div> */}
        </div>
      </section>



      {/* Latest Articles */}
      <section className="py-16 px-6 md:px-12 bg-[var(--md-bg)] text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-12">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group  bg-[var(--bg-background-primary)] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-[var(--bg-secondary)]"
            >
              {/* Article Image */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Text Content */}
              <div className="p-6 text-left flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2 text-[var(--bg-text)] group-hover:text-[var(--bg-secondary)] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-[var(--text-dark)] text-sm mb-6 leading-relaxed line-clamp-3">
                  {article.snippet}
                </p>

                <a
                  href={article.link}
                  className="mt-auto text-[var(--bg-secondary)] font-semibold text-sm inline-block relative group"
                >
                  {/* <span className="inline-block transition-transform group-hover:translate-x-1">➔ Read More</span> */}
                  <span className="block h-[2px] w-0 bg-[var(--bg-secondary)] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Newsletter Subscription CTA */}
      <section className="py-20 px-6 md:px-12 bg-[var(--bg-sub-cold)] text-center relative overflow-hidden">
        {/* Decorative Blurred Background Circles */}
        <div className="absolute top-[-50px] left-[-100px] w-72 h-72 bg-[var(--bg-secondary)] opacity-20 rounded-full filter blur-3xl z-0" />
        <div className="absolute bottom-[-50px] right-[-100px] w-72 h-72 bg-[#4da1a9] opacity-20 rounded-full filter blur-3xl z-0" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-4">
            Stay Updated with Healthcare Innovations
          </h2>
          <p className="text-lg text-[var(--bg-text-secondary)] mb-10">
            Don’t miss out! Subscribe for expert tips, trends, and updates from the world of healthcare IT.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="px-5 py-3 rounded-lg w-full sm:w-64 bg-white shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--bg-secondary)] transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-5 py-3 rounded-lg w-full sm:w-64 bg-white shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--bg-secondary)] transition"
            />
            <button
              type="submit"
              className="px-6 py-3  bg-[var(--bg-secondary)] text-white font-semibold shadow hover:bg-teal-600 transition"
            >
              Subscribe
            </button>
          </form>

          {/* Optional success message */}
          {/* <p className="text-green-600 text-sm mt-4">Thanks for subscribing!</p> */}
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 bg-[var(--bg-text)] text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Looking for Customized Healthcare IT Solutions?
        </h2>
        <p className="text-lg md:text-2xl mb-10">
          Beyond reading — let's build your hospital or clinic’s digital future together.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <a href="/contact" className="bg-[var(--bg-secondary)] px-8 py-3  font-semibold text-white">
            Schedule a Free Demo
          </a>
          <a href="/services" className="bg-white text-[var(--bg-text)] px-8 py-3  font-semibold">
            Explore Our Services
          </a>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
