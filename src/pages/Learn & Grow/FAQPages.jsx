import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import hero from "../../assets/FAQ/FAQhero.jpg"
import Exploring from "../../assets/FAQ/exploring.jpg"

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "🏥 Healthcare Solutions",
    list: [
      {
        question: "What types of healthcare facilities do you serve?",
        answer: "Nutryah provides solutions for hospitals (small, medium, multi-specialty), clinics, pharmacies, diagnostic centers, nursing homes, and AYUSH wellness centers.",
      },
      {
        question: "Do you support NABH and ABDM compliance?",
        answer: "Yes. Our solutions align with NABH accreditation standards and India's ABDM ecosystem, including ABHA IDs and UHI integration.",
      },
      {
        question: "Can you customize solutions for my facility’s specific needs?",
        answer: "Absolutely. Nutryah offers modular, customizable systems tailored to your specialty, size, and operational goals.",
      },
    ],
  },
  {
    category: "⚙️ Implementation & Onboarding",
    list: [
      {
        question: "How long does it take to implement Nutryah software?",
        answer: "With our Go-Live Guarantee, full implementation typically happens within 60 days for standard projects. Larger deployments may vary slightly.",
      },
      {
        question: "What is included in your onboarding process?",
        answer: "System setup, customization, staff training (onsite or remote), NABH digital documentation, and dedicated onboarding support are included.",
      },
      {
        question: "Can we migrate data from an existing system?",
        answer: "Yes. Our technical team provides safe data migration from your legacy systems (EMR, billing, patient records, etc.).",
      },
    ],
  },
  {
    category: "💳 Pricing & Billing",
    list: [
      {
        question: "How does Nutryah pricing work?",
        answer: "We offer flexible subscription pricing based on the plan you choose (Starter, Professional, Enterprise, or Dealer). Add-ons are available separately.",
      },
      {
        question: "Are there any hidden charges or setup fees?",
        answer: "No hidden fees. Basic setup and onboarding are included for Starter and Professional plans. Custom solutions are fully quoted upfront.",
      },
      {
        question: "Can we upgrade or downgrade plans later?",
        answer: "Yes, you can upgrade or adjust plans anytime. No data loss occurs during plan changes.",
      },
    ],
  },
  {
    category: "🔒 Security, Compliance & Support",
    list: [
      {
        question: "Is Nutryah HIPAA and GDPR compliant?",
        answer: "Yes. Our platforms prioritize HIPAA, GDPR, and NABH compliance, ensuring full patient data security and confidentiality.",
      },
      {
        question: "What happens if we need support after going live?",
        answer: "All clients get access to Nutryah’s Helpdesk, Email & Phone Support, and an Emergency Incident Line. Enterprise clients also receive a dedicated VIP Support Manager.",
      },
      {
        question: "How often do you update your software?",
        answer: "Feature enhancements, security patches, and upgrades are rolled out regularly — with major feature upgrades quarterly.",
      },
    ],
  },
  {
    category: "🎁 Programs & Loyalty",
    list: [
      {
        question: "What is the Referral Rewards Program?",
        answer: "Refer a hospital/clinic to Nutryah and receive ₹5,000 cashback or 1 month free subscription credit. (Terms apply.)",
      },
      {
        question: "How does the VIP Client Program work?",
        answer: "VIP Clients enjoy priority onboarding, personalized support, beta access to features, strategic reviews, and loyalty discounts after 2+ years.",
      },
    ],
  },
];

const FAQPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
 
  return (
    <div className="faq-page">
      <Helmet>
        <title>Frequently Asked Questions (FAQ) | Nutryah Healthcare Solutions</title>
        <meta
          name="description"
          content="Find answers to common questions about Nutryah’s healthcare IT solutions, pricing, NABH readiness support, onboarding process, security, and customer success programs."
        />
      </Helmet>

      {/* Banner - Full-Screen Hero with Background Image */}
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 text-white bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hero})` }} // Replace with your actual image path
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl drop-shadow-md">
            Everything you need to know about Nutryah’s healthcare IT solutions, onboarding, compliance support, and success programs.
          </p>
        </div>
      </section>


      {/* Intro Section Styled as Hero with Wave Background */}
      <section className="relative w-full h-auto md:h-screen text-black overflow-hidden py-16 md:py-5 bg-[#FAF1E6]">

        {/* SVG Wave Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
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

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12 relative z-10">

          {/* Left: Text */}
          <div className="text-center md:text-left flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-[#D98324] mb-6">
              Got Questions? We’ve Got Answers.
            </h2>
            <p className="text-lg md:text-xl text-[var(--bg-text)] max-w-xl mb-8">
              Whether you’re exploring HMS, preparing for NABH, or digitizing your clinic — Nutryah is here to help. Still have questions? Contact us anytime!
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#443627] text-[var(--text-sub-text)] px-8 py-4 font-semibold hover:opacity-90 transition max-w-[200px] text-center"
            >
              Contact Us
            </a>
          </div>

          {/* Right: Optional Illustration */}
          <div className="relative flex justify-center items-center order-1 md:order-2">
            <div
              className="absolute w-[110%] h-[120%] -z-0 bg-[#443627]"
              style={{
                clipPath: "polygon(0% 0%, 100% 10%, 80% 100%, 0% 80%)",
              }}
            ></div>
            <img
              src={Exploring} // Replace with your actual image path
              alt="FAQ illustration"
              className="w-full max-w-md md:max-w-lg z-10 relative object-cover"
            />
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[var(--bg-background-primary)] px-4 py-16 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-[var(--bg-text)] mb-10">
          Frequently Asked Questions
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {faqs.map((section, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentTab(index);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200 shadow-sm ${
                index === currentTab
                  ? "bg-[var(--bg-secondary)] text-white"
                  : "bg-white text-[var(--bg-text)]"
              }`}
            >
              {section.category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs[currentTab].list.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left flex justify-between items-center text-[var(--bg-text)] font-semibold text-lg"
              >
                {faq.question}
                <span>{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-[var(--bg-text-secondary)] text-base"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 bg-[var(--bg-text)] text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Still Have Questions?
        </h2>
        <p className="text-lg md:text-2xl mb-10">
          Our experts are happy to help you personally. Contact our team today!
        </p>
        <a
          href="/contact"
          className="bg-[var(--bg-secondary)] px-8 py-3 rounded-full font-semibold text-white"
        >
          📞 Contact Our Team Now
        </a>
      </section>
    </div>
  );
};

export default FAQPage;
