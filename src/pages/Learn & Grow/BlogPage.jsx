import React from "react";
import { Helmet } from "react-helmet-async";

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
  },
  {
    title: "The Future of Telemedicine in Rural Healthcare in India",
    snippet: "Telehealth is reshaping access to healthcare across rural India. Explore how technology bridges the doctor-patient gap sustainably.",
    link: "/blog/telemedicine-rural-india",
  },
  {
    title: "How to Secure Patient Data: HIPAA and GDPR Best Practices",
    snippet: "Learn key strategies hospitals and clinics must adopt to ensure data protection, avoid breaches, and stay compliant with global standards.",
    link: "/blog/hipaa-gdpr-security",
  },
  {
    title: "Common Mistakes in Hospital IT Setup (And How to Avoid Them)",
    snippet: "Poor planning can cripple your digital health ambitions. Discover the top mistakes in IT setup — and how Nutryah helps hospitals avoid them.",
    link: "/blog/hospital-it-mistakes",
  },
  {
    title: "Understanding the Ayushman Bharat Digital Mission (ABDM)",
    snippet: "India’s ABDM is reshaping healthcare. Here's a simple breakdown of ABHA, HFR, UHI, and how hospitals can prepare.",
    link: "/blog/abdm-health-id",
  },
  {
    title: "Building a Future-Ready Diagnostic Lab: LIMS & Beyond",
    snippet: "Discover why modern labs need more than basic systems — and how Nutryah’s LIMS helps them grow smarter.",
    link: "/blog/lims-future-diagnostics",
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
      <section className="min-h-[70vh] bg-[var(--bg-background-primary)] flex flex-col justify-center items-center text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--bg-text)] mb-4">
          Healthcare Technology Insights, Trends, and Best Practices
        </h1>
        <p className="text-lg md:text-2xl text-[var(--bg-text-secondary)] max-w-3xl">
          Expert articles to help hospitals, clinics, and healthcare innovators stay ahead in digital health.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
          Empowering Healthcare Providers with Knowledge
        </h2>
        <p className="text-lg text-[var(--bg-text-secondary)] max-w-3xl mx-auto">
          At Nutryah, we believe knowledge drives better outcomes. Our blog shares trends, innovations, and actionable advice to help healthcare organizations succeed in digital transformation.
        </p>
        <a
          href="/contact"
          className="inline-block mt-8 bg-[var(--bg-secondary)] text-white px-8 py-3 rounded-full font-semibold"
        >
          📩 Subscribe to Our Healthcare Insights
        </a>
      </section>

      {/* Topics Grid */}
      <section className="py-16 px-6 md:px-12 bg-[var(--bg-background-primary)] text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-12">
          Explore Our Popular Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {topics.map(([icon, title, desc], idx) => (
            <div key={idx} className="p-6 shadow bg-white rounded-xl">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-[var(--bg-text-secondary)]">{desc}</p>
            </div>
          ))}
        </div>
        <a
          href="/blog/topics"
          className="inline-block mt-8 bg-[var(--bg-secondary)] text-white px-6 py-3 rounded-full font-semibold"
        >
          Browse All Topics →
        </a>
      </section>

      {/* Latest Articles */}
      <section className="py-16 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-12">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, idx) => (
            <div key={idx} className="p-6 rounded-xl shadow bg-[var(--bg-background-primary)] text-left flex flex-col">
              <h3 className="text-lg font-bold mb-2">{article.title}</h3>
              <p className="text-[var(--bg-text-secondary)] mb-4">{article.snippet}</p>
              <a
                href={article.link}
                className="mt-auto text-[var(--bg-secondary)] font-semibold"
              >
                ➔ Read More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription CTA */}
      <section className="py-16 px-6 md:px-12 bg-[var(--bg-background-primary)] text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-6">
          Stay Updated with Healthcare Innovations
        </h2>
        <p className="text-lg text-[var(--bg-text-secondary)] max-w-2xl mx-auto mb-8">
          Don't miss out! Subscribe for expert tips, trends, and updates from the world of healthcare IT.
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-full w-72 bg-white shadow-md focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-full w-72 bg-white shadow-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[var(--bg-secondary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-600 transition"
          >
            📩 Subscribe
          </button>
        </form>
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
          <a href="/contact" className="bg-[var(--bg-secondary)] px-8 py-3 rounded-full font-semibold text-white">
            🚀 Schedule a Free Demo
          </a>
          <a href="/services" className="bg-white text-[var(--bg-text)] px-8 py-3 rounded-full font-semibold">
            📄 Explore Our Services
          </a>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
