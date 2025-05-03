import React from "react";
import { Helmet } from "react-helmet-async";
import HeroImage from "../../assets/price/pricing.jpg";
import CtaBg from "../../assets/price/pricing.jpg";
const plans = [
  {
    name: "Starter",
    bestFor: "Small Clinics, Solo Practitioners",
    features: [
      "EMR System",
      "OPD Management",
      "Billing + Invoicing",
      "Basic Reports",
    ],
    price: "₹1,999/month",
    cta: "/contact",
    label: "Get Started",
  },
  {
    name: "Professional",
    bestFor: "Medium Hospitals, Polyclinics",
    features: [
      "All Starter features",
      "Pharmacy + Inventory Module",
      "Lab Integration",
      "NABH Audit Tools",
      "Patient Portal",
    ],
    price: "₹9,999/month",
    cta: "/contact",
    label: "Get Started",
  },
  {
    name: "Enterprise",
    bestFor: "Large Hospitals, Chain Networks",
    features: [
      "All Professional features",
      "Multi-branch Management",
      "Telemedicine Integration",
      "Full NABH Compliance Support",
      "Custom Reporting & Analytics",
      "VIP Support",
    ],
    price: "₹29,999/month",
    cta: "/contact",
    label: "Get Started",
  },
  {
    name: "Dealer (Partner Program)",
    bestFor: "Healthcare IT Resellers, Consultants",
    features: [
      "White-Labeled Solutions",
      "Multi-Client Control Panel",
      "Custom Branding",
      "Dedicated Partner Manager",
      "Priority Support",
    ],
    price: "Custom Quote",
    cta: "/dealer-program",
    label: "Become a Partner",
  },
];

const addons = [
  { name: "Telemedicine Launch Kit", price: "₹4,999/month" },
  { name: "Custom Mobile App (Android & iOS)", price: "₹9,999 One-time" },
  { name: "Advanced Analytics Dashboard", price: "₹7,999/month" },
  { name: "Cloud Backup + Disaster Recovery", price: "₹3,999/month" },
];

const faqs = [
  { q: "Can I upgrade plans later?", a: "Yes, you can upgrade anytime without any data loss." },
  { q: "Is there a setup or onboarding fee?", a: "No mandatory setup fee for Starter and Professional Plans. Enterprise projects may have optional setup services." },
  { q: "What payment modes are accepted?", a: "Online Banking, UPI, Debit/Credit Cards, Invoice Billing (Yearly)." },
  { q: "Are there discounts for annual subscriptions?", a: "Yes, get 2 months free when billed annually." },
];

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <Helmet>
        <title>Nutryah Pricing Plans | Affordable Healthcare IT Solutions</title>
        <meta
          name="description"
          content="Choose the perfect healthcare IT solution for your hospital, clinic, or pharmacy. Transparent pricing, flexible bundles, VIP support, and a Go-Live Guarantee to ensure your digital success."
        />
      </Helmet>

      {/* Banner */}

      <section
        className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        {/* ✅ Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* ✅ Hero Content */}
        <div className="relative z-10 px-6 md:px-12 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Simple, Scalable Pricing for Every Healthcare Provider
          </h1>
          <p className="text-lg md:text-2xl text-white/90">
            Flexible plans designed to match your facility’s needs — whether you’re a solo clinic or a 1000-bed hospital.
          </p>

          {/* ✅ CTAs */}
          {/* <div className="flex flex-wrap justify-center gap-6 mt-8">
            <a
              href="/contact"
              className="bg-[var(--bg-secondary)] hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              🚀 Request a Custom Quote
            </a>
            <a
              href="/contact"
              className="bg-white text-[var(--bg-text)] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              📞 Schedule a Free Consultation
            </a>
          </div> */}
        </div>
      </section>


      {/* Intro */}
      <section className="relative w-full h-screen bg-[var(--md-bg)] text-black overflow-hidden">
        {/* ✅ Wave SVG background */}
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
          {/* ✅ Left Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Smart Healthcare Solutions. Smarter Pricing.
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mb-6">
              Every healthcare facility is unique — that’s why Nutryah offers affordable, customizable packages tailored to your size, specialty, and growth goals.
            </p>
            <ul className="text-gray-700 space-y-2 mb-6 text-left md:text-base text-sm">
              <li>✅ No hidden costs</li>
              <li>✅ Fully scalable solutions</li>
              <li>✅ Dedicated onboarding and VIP support available</li>
            </ul>
            <a
              href="/contact"
              className="inline-block bg-[var(--bg-secondary)] text-[var(--bg-text)] px-8 py-3 font-semibold rounded-full hover:opacity-90 transition"
            >
              💬 Talk to Pricing Advisor
            </a>
          </div>

          {/* ✅ Right Graphic or Placeholder Illustration */}
          <div className="relative flex justify-center items-center">
            <div
              className="absolute w-[110%] h-[120%] -z-0 bg-[var(--bg-secondary)]"
              style={{
                clipPath: "polygon(0% 0%, 100% 10%, 80% 100%, 0% 80%)",
              }}
            ></div>
            <img
              src={CtaBg} // ← Use your illustration or graphic related to pricing
              alt="Pricing Illustration"
              className="w-full max-w-md md:max-w-lg z-10 relative rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>


      {/* Plan Comparison */}
      <section className="py-16 px-6 md:px-12 bg-[var(--bg-background-primary)] text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-12">
          Compare Our Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:scale-105 transition flex flex-col">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-[var(--bg-text-secondary)] mb-4">{plan.bestFor}</p>
              <ul className="flex-1 mb-6 text-left list-disc list-inside text-[var(--bg-text-secondary)]">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="text-xl font-bold mb-4">{plan.price}</div>
              <a href={plan.cta} className="bg-[var(--bg-secondary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition">
                {plan.label}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-12">
          Bonus Packages & Add-Ons
        </h2>
        <div className="space-y-6 max-w-2xl mx-auto">
          {addons.map((addon, idx) => (
            <div key={idx} className="flex justify-between items-center border-b pb-4">
              <span className="text-lg font-medium">{addon.name}</span>
              <span className="font-bold">{addon.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Go-Live Guarantee */}
      <section className="py-16 px-6 md:px-12 bg-[var(--bg-background-primary)] text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
          🚀 Our Go-Live Guarantee
        </h2>
        <p className="text-lg text-[var(--bg-text-secondary)] max-w-3xl mx-auto mb-8">
          We promise you’ll be live and operational within 60 days — or you get free extra support or a 10% rebate.
        </p>
        <ul className="space-y-2 text-[var(--bg-text-secondary)]">
          <li>✅ Fast onboarding</li>
          <li>✅ Smooth implementation</li>
          <li>✅ Zero \"project failure\" anxiety</li>
        </ul>
        <a href="/contact" className="inline-block mt-8 bg-[var(--bg-secondary)] text-white px-8 py-3 rounded-full font-semibold">
          Talk to Implementation Expert →
        </a>
      </section>

      {/* Accreditation Boost Promise */}
      <section className="py-16 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
          🎯 Our NABH Accreditation Boost Promise
        </h2>
        <p className="text-lg text-[var(--bg-text-secondary)] max-w-3xl mx-auto mb-8">
          Combine Nutryah software + NABH Bundle and be audit-ready within 90 days — guaranteed.
        </p>
        <ul className="space-y-2 text-[var(--bg-text-secondary)]">
          <li>✅ Digital document control</li>
          <li>✅ Quality indicator tracking</li>
          <li>✅ Audit trail compliance</li>
          <li>✅ SOP alignment templates included</li>
        </ul>
        <a href="/services/nabh-support" className="inline-block mt-8 bg-[var(--bg-secondary)] text-white px-8 py-3 rounded-full font-semibold">
          Learn About NABH Support →
        </a>
      </section>

      {/* VIP Client Tiers */}
      <section className="py-16 px-6 md:px-12 bg-[var(--bg-background-primary)] text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
          🌟 VIP Experience for Premium Clients
        </h2>
        <p className="text-lg text-[var(--bg-text-secondary)] max-w-3xl mx-auto mb-6">
          Subscribe to Enterprise Plan or Dealer Program and unlock exclusive VIP benefits.
        </p>
        <ul className="space-y-2 text-[var(--bg-text-secondary)]">
          <li>🚀 Priority Implementation Scheduling</li>
          <li>📞 24/7 Dedicated Support Hotline</li>
          <li>🎁 Access to Beta Features Early</li>
          <li>🛠️ Personalized Feature Customizations</li>
          <li>🧠 Quarterly Strategy Sessions</li>
        </ul>
      </section>

      {/* Referral Program */}
      <section className="py-16 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
          🤝 Earn Rewards for Helping Healthcare Digitize
        </h2>
        <p className="text-lg text-[var(--bg-text-secondary)] max-w-3xl mx-auto mb-6">
          Refer clients and earn cashbacks, free months, and loyalty rewards!
        </p>
        <ul className="space-y-2 text-[var(--bg-text-secondary)]">
          <li>• Refer 1 client → Earn ₹5,000 cashback or 1 month free</li>
          <li>• Refer 3 clients → 5% off yearly renewals</li>
          <li>• Platinum loyalty → Free consulting yearly</li>
        </ul>
        <a href="/refer" className="inline-block mt-8 bg-[var(--bg-secondary)] text-white px-8 py-3 rounded-full font-semibold">
          Refer a Friend →
        </a>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 md:px-12 bg-[var(--bg-background-primary)] text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
          📋 Frequently Asked Questions
        </h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="text-left">
              <h4 className="text-lg font-bold mb-2">{faq.q}</h4>
              <p className="text-[var(--bg-text-secondary)]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 bg-[var(--bg-text)] text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Transform Your Healthcare Operations?
        </h2>
        <p className="text-lg md:text-2xl mb-10">
          Get started with flexible, transparent pricing — backed by our Go-Live Guarantee.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <a href="/contact" className="bg-[var(--bg-secondary)] px-8 py-3 rounded-full font-semibold text-white">
            🚀 Start Free Consultation
          </a>
          <a href="/downloads/pricing-guide.pdf" className="bg-white text-[var(--bg-text)] px-8 py-3 rounded-full font-semibold">
            📄 Download Pricing Guide PDF
          </a>
        </div>
      </section>
    </div >
  );
};

export default PricingPage;
