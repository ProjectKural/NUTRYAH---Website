import React from "react";
import { Helmet } from "react-helmet-async";

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
  return (
    <div className="faq-page">
      <Helmet>
        <title>Frequently Asked Questions (FAQ) | Nutryah Healthcare Solutions</title>
        <meta
          name="description"
          content="Find answers to common questions about Nutryah’s healthcare IT solutions, pricing, NABH readiness support, onboarding process, security, and customer success programs."
        />
      </Helmet>

      {/* Banner */}
      <section className="min-h-[70vh] bg-[var(--bg-background-primary)] flex flex-col justify-center items-center text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--bg-text)] mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg md:text-2xl text-[var(--bg-text-secondary)] max-w-3xl">
          Everything you need to know about Nutryah’s healthcare IT solutions, onboarding, compliance support, and success programs.
        </p>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
          Got Questions? We’ve Got Answers.
        </h2>
        <p className="text-lg text-[var(--bg-text-secondary)] max-w-3xl mx-auto">
          Whether you’re exploring HMS, preparing for NABH, or digitizing your clinic — Nutryah is here to help. Still have questions? Contact us anytime!
        </p>
      </section>

      {/* FAQs by Category */}
      <section className="py-16 px-6 md:px-12 bg-[var(--bg-background-primary)] text-left">
        <div className="max-w-5xl mx-auto space-y-16">
          {faqs.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold mb-6">{section.category}</h3>
              <div className="space-y-8">
                {section.list.map((faq, idx2) => (
                  <div key={idx2}>
                    <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                    <p className="text-[var(--bg-text-secondary)]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
