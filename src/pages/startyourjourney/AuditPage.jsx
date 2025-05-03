import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const AuditPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    facility: '',
    digitalGoals: [],
    systemStatus: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const newGoals = checked
        ? [...formData.digitalGoals, value]
        : formData.digitalGoals.filter((goal) => goal !== value);
      setFormData({ ...formData, digitalGoals: newGoals });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.organization.trim()) newErrors.organization = 'Organization name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Valid email is required';
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Enter valid 10-digit phone';
    if (!formData.facility) newErrors.facility = 'Select a facility type';
    if (formData.digitalGoals.length === 0) newErrors.digitalGoals = 'Choose at least one goal';
    if (!formData.systemStatus) newErrors.systemStatus = 'Select system status';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }


    try {

      const requestBody = {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        organization_name: formData.organization,
        facility_type: formData.facility,
        primary_goals: formData.digitalGoals.join(', '),
        system_status: formData.systemStatus,
      };

      console.log(requestBody, "requestBody");

      const response = await axios.post('http://localhost:8000/leads/audit-request', requestBody, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response, "Audit");
      console.log('Form submitted:', formData);

      // Optional: Reset form after submission
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        facility: '',
        digitalGoals: [],
        systemStatus: '',
      });
      setErrors({});
      alert('Thank You! Our team will review your information and send your personalized Readiness Report within 5 business days.');
      // setSubmitted(true); // Clear input
    } catch (error) {
      console.log('Newsletter subscription error:', error);
      alert('Something went wrong. Please try again later.');
    }
    // Handle form submission (e.g., axios.post or console.log)

  };
  return (
    <div className="audit-page">
      <Helmet>
        <title>Free Hospital Digital Readiness Audit | Nutryah Healthcare Solutions</title>
        <meta
          name="description"
          content="Is your hospital ready for NABH accreditation, ABDM compliance, and digital transformation? Get a free Digital Readiness Audit from Nutryah and discover actionable steps to future-proof your healthcare facility."
        />
      </Helmet>

      {/* Banner */}
      <section className="min-h-[70vh] bg-[var(--bg-background-primary)] flex flex-col justify-center items-center text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--bg-text)] mb-4">
          Free Hospital Digital Readiness Audit
        </h1>
        <p className="text-lg md:text-2xl text-[var(--bg-text-secondary)] max-w-3xl">
          Find out where your hospital stands on NABH compliance, workflow optimization, and IT infrastructure — with a personalized, no-obligation report from Nutryah.
        </p>
        <a
          href="#audit-form"
          className="mt-8 bg-[var(--bg-secondary)] text-white px-8 py-3 rounded-full font-semibold"
        >
          🚀 Get My Free Audit Report
        </a>
      </section>

      {/* Why Audit Matters */}
      <section className="py-16 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
          Is Your Healthcare Facility Truly Digital-Ready?
        </h2>
        <p className="text-lg text-[var(--bg-text-secondary)] max-w-3xl mx-auto mb-8">
          In today’s healthcare landscape, digital readiness isn't optional — it's essential. Nutryah’s Free Digital Readiness Audit gives you a clear roadmap for smarter transformation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
          {[
            "✅ Check NABH Digital Documentation Readiness",
            "✅ Evaluate EHR, Billing, OPD/IPD Workflow Digitization",
            "✅ Assess Data Security and Compliance (HIPAA, GDPR)",
            "✅ Measure Patient Engagement Tools (Portals, SMS, Telemedicine)",
            "✅ Identify Critical IT Infrastructure Gaps",
            "✅ Get Tailored Recommendations",
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-2xl">✔️</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 md:px-12 bg-[var(--bg-background-primary)] text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            "1️⃣ Fill the short Audit Request Form",
            "2️⃣ Experts Analyze Your Information",
            "3️⃣ Receive Detailed Audit Report (5 days)",
            "4️⃣ (Optional) Book Strategy Call to Discuss Findings",
          ].map((step, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow text-[var(--bg-text-secondary)]">
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* Who Should Request */}
      <section className="py-16 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
          This Free Audit Is Perfect For:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
          {[
            "🏥 Multi-Specialty Hospitals preparing for NABH or ABDM",
            "🏨 Clinics or Polyclinics upgrading systems",
            "🧪 Diagnostic Centers digitizing operations",
            "🏡 Nursing Homes adopting EHR systems",
            "🌿 AYUSH Centers modernizing patient records",
            "💊 Pharmacies aiming for automated billing and inventory",
          ].map((who, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-2xl">✔️</span>
              <p>{who}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Nutryah */}
      <section className="py-16 px-6 md:px-12 bg-[var(--bg-background-primary)] text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
          Trusted Digital Transformation Partners for Healthcare
        </h2>
        <p className="text-lg text-[var(--bg-text-secondary)] max-w-3xl mx-auto">
          Nutryah helps healthcare providers achieve NABH and ABDM readiness, secure patient data, and optimize digital operations — with deep healthcare IT expertise.
        </p>
        <a
          href="/case-studies"
          className="mt-6 inline-block bg-[var(--bg-secondary)] text-white px-8 py-3 rounded-full font-semibold"
        >
          📖 See Our Client Success Stories
        </a>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 bg-[var(--bg-text)] text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Get Your Free, No-Obligation Digital Readiness Report Today
        </h2>
        <p className="text-lg md:text-2xl mb-10">
          Quick, Easy, Actionable — 100% Free.
        </p>
        <a
          href="#audit-form"
          className="bg-[var(--bg-secondary)] px-8 py-3 rounded-full font-semibold text-white"
        >
          🚀 Start My Audit Now
        </a>
      </section>

      {/* Audit Form */}
      <section id="audit-form" className="py-20 px-6 md:px-12 bg-white text-center">
        {submitted ? (
          <div className="max-w-3xl mx-auto p-8 bg-[var(--bg-background-primary)] rounded-xl shadow">
            <h3 className="text-3xl font-bold text-[var(--bg-text)] mb-4">Thank You!</h3>
            <p className="text-lg text-[var(--bg-text-secondary)]">
              Our team will review your information and send your personalized Readiness Report within 5 business days.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto p-8 bg-[var(--bg-background-primary)] rounded-xl shadow space-y-6"
          >
            {/* Name */}
            <div className="flex flex-col text-left">
              <label className="font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-100"
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>

            {/* Organization */}
            <div className="flex flex-col text-left">
              <label className="font-semibold mb-1">Organization Name</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-100"
              />
              {errors.organization && <span className="text-red-500 text-sm">{errors.organization}</span>}
            </div>

            {/* Email */}
            <div className="flex flex-col text-left">
              <label className="font-semibold mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-100"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>

            {/* Phone */}
            <div className="flex flex-col text-left">
              <label className="font-semibold mb-1">Mobile Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-100"
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
            </div>

            {/* Facility */}
            <div className="flex flex-col text-left">
              <label className="font-semibold mb-1">Type of Facility</label>
              <select
                name="facility"
                value={formData.facility}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-100"
              >
                <option value="">Select</option>
                <option>Hospital</option>
                <option>Clinic</option>
                <option>Pharmacy</option>
                <option>Diagnostic Center</option>
                <option>Nursing Home</option>
                <option>AYUSH Center</option>
              </select>
              {errors.facility && <span className="text-red-500 text-sm">{errors.facility}</span>}
            </div>

            {/* Digital Goals */}
            <div className="flex flex-col text-left">
              <label className="font-semibold mb-1">Primary Digital Goals</label>
              <div className="space-y-2">
                {['NABH Preparation', 'EHR Adoption', 'Workflow Optimization', 'Patient Engagement Tools', 'Other'].map(
                  (goal) => (
                    <label key={goal} className="block">
                      <input
                        type="checkbox"
                        name="digitalGoals"
                        value={goal}
                        checked={formData.digitalGoals.includes(goal)}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {goal}
                    </label>
                  )
                )}
              </div>
              {errors.digitalGoals && <span className="text-red-500 text-sm">{errors.digitalGoals}</span>}
            </div>

            {/* System Status */}
            <div className="flex flex-col text-left">
              <label className="font-semibold mb-1">Current System Status</label>
              <select
                name="systemStatus"
                value={formData.systemStatus}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-100"
              >
                <option value="">Select</option>
                <option>Fully Digital</option>
                <option>Partially Digital</option>
                <option>Paper-Based</option>
              </select>
              {errors.systemStatus && <span className="text-red-500 text-sm">{errors.systemStatus}</span>}
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--bg-secondary)] text-white py-3 rounded-full font-semibold mt-6"
            >
              📩 Submit Audit Request
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default AuditPage;
