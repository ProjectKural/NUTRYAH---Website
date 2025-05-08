import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import audit from "../../assets/audit/audit.jpg"
import book from "../../assets/audit/book.jpg"
import digital from "../../assets/audit/digital.jpg"
import partners from "../../assets/audit/partners.jpg"
import { FiCheck } from "react-icons/fi";

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
      <section
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6 md:px-12"
        style={{ backgroundImage: `url(${audit})` }}  // Replace with your image URL
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--md-bg)] mb-4 z-10 max-w-6xl">
          Free Hospital Digital Readiness Audit
        </h1>
        <p className="text-lg md:text-2xl text-[var(--bg-text-secondary)] max-w-6xl mb-6 z-10">
          Find out where your hospital stands on NABH compliance, workflow optimization, and IT infrastructure — with a personalized, no-obligation report from Nutryah.
        </p>
        <a
          href="#audit-form"
          className="mt-5 bg-[var(--text-dark)] text-white px-8 py-3  font-semibold z-10"
        >
          🚀 Get My Free Audit Report
        </a>
      </section>


      {/* Why Audit Matters */}
      <section className="relative w-full text-black overflow-hidden py-16 md:py-5 ">
        {/* SVG Wave Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-1">
          <svg
            className="absolute top-0 left-0 w-full h-full object-cover"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#EEF5FF"
              d="M0,64L48,96C96,128,192,192,288,202.7C384,213,480,171,576,160C672,149,768,171,864,154.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L0,320Z"
            />
          </svg>
        </div>

        {/* Grid Layout */}
        <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12 z-10 relative">
          {/* Left: Text Content */}
          <div className="text-center md:text-left flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
              Is Your Healthcare Facility Truly Digital-Ready?
            </h2>
            <p className="text-lg md:text-xl text-[var(--bg-text)] max-w-xl mb-8">
              In today’s healthcare landscape, digital readiness isn't optional — it's essential. Nutryah’s Free Digital Readiness Audit gives you a clear roadmap for smarter transformation.
            </p>
          </div>

          {/* Right: Benefits List */}
          <div className="flex flex-col gap-4 md:gap-6 order-2 md:order-2">
            {[
              "Check NABH Digital Documentation Readiness",
              "Evaluate EHR, Billing, OPD/IPD Workflow Digitization",
              "Assess Data Security and Compliance (HIPAA, GDPR)",
              "Measure Patient Engagement Tools (Portals, SMS, Telemedicine)",
              "Identify Critical IT Infrastructure Gaps",
              "Get Tailored Recommendations",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <FiCheck className="text-blue-600 text-xl mt-1" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* How It Works */}
      <section className="py-20 px-4 bg-[var(--md-bg)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[var(--bg-text)]">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 md:min-h-[500px]">
            {/* Row 1: Col 1+2 */}
            <div className="md:col-span-2 bg-[#FFC94A] overflow-hidden shadow-md flex flex-col md:flex-row">
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                {/* <div className="text-3xl mb-4">1️⃣</div> */}
                <h3 className="text-xl font-bold mb-2 text-[#453F78]">
                  Fill the short Audit Request Form
                </h3>
                <p className="text-sm text-[#795458]">
                  Provide key info about your hospital’s current digital setup — takes only 2 mins.
                </p>
              </div>
              <img
                src={digital} // Replace with your image path
                alt="Step 1"
                className="w-full md:w-1/2 h-48 md:h-auto object-cover"
              />
            </div>

            {/* Row 1: Col 3 */}
            <div className="bg-[#C08B5C] text-white p-6 shadow-md flex flex-col justify-center">
              {/* <div className="text-3xl mb-4">2️⃣</div> */}
              <h3 className="text-lg font-bold mb-2 text-[#FEFBF6]">Experts Analyze Your Info</h3>
              <p className="text-sm">
                Our hospital transformation experts carefully review your submissions.
              </p>
              <div className="text-white/70 text-right text-xl mt-4">🧠</div>
            </div>

            {/* Row 2: Col 1 */}
            <div className="bg-[var(--bg-text)] text-white p-6 shadow-md flex flex-col justify-center">
              {/* <div className="text-3xl mb-4">3️⃣</div> */}
              <h3 className="text-lg font-bold mb-2 text-[#D8D8D8]">Receive a Custom Audit Report</h3>
              <p className="text-sm">
                Within 5 days, get a detailed, action-focused report showing strengths and gaps.
              </p>
            </div>

            {/* Row 2: Col 2 */}
            <div className="bg-[var(--text-dark)] p-6 shadow-md flex flex-col justify-center text-white">
              {/* <div className="text-3xl mb-4">📄</div> */}
              <h3 className="text-lg font-bold mb-2 text-[#A97155]">No-Obligation + Confidential</h3>
              <p className="text-sm text-[#E4D1B9]">
                You own the results. No pushy follow-up, no charges — just clarity.
              </p>
            </div>

            {/* Row 2: Col 3 with image background */}
            <div className="relative overflow-hidden shadow-md">
              <img
                src={book} // Replace with your image path
                alt="Step 4"
                className="w-full h-100 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-end">
                <div>
                  {/* <div className="text-white text-2xl mb-2"></div> */}
                  <h3 className="text-white font-bold text-lg">
                    Book a Strategy Call (Optional)
                  </h3>
                  <p className="text-white text-sm">
                    Want help implementing change? Let’s talk — no pressure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Who Should Request */}
      <section className="py-16 px-6 md:px-12 bg-[var(--bg-sub-cold)] text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
          This Free Audit Is Perfect For:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
          {[
            "Multi-Specialty Hospitals preparing for NABH or ABDM",
            " Clinics or Polyclinics upgrading systems",
            " Diagnostic Centers digitizing operations",
            " Nursing Homes adopting EHR systems",
            " AYUSH Centers modernizing patient records",
            " Pharmacies aiming for automated billing and inventory",
          ].map((who, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-2xl"><FiCheck /></span>
              <p>{who}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Nutryah - Updated Section */}
      <section className="relative w-full h-screen bg-[var(--md-bg)] text-black overflow-hidden py-5">
        {/* SVG Wave Background */}
     

        {/* Grid Layout */}
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12">

          {/* Left: Text Content */}
          <div className="text-center md:text-left flex flex-col justify-center z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--bg-text)]">
              Trusted Digital Transformation Partners for Healthcare
            </h2>
            <p className="text-sm md:text-lg text-[var(--text-dark)] max-w-xl mb-8">
              Nutryah helps healthcare providers achieve NABH and ABDM readiness, secure patient data, and optimize digital operations — with deep healthcare IT expertise.
            </p>
            <a
              href="/case-studies"
              className="inline-block bg-[var(--text-sub-dark)] text-center text-white px-6 py-4 font-semibold hover:opacity-90 transition max-w-[350px]"
            >
              See Our Client Success Stories
            </a>
          </div>

          {/* Right: Decorative Block or Image */}
          <div className="relative flex justify-center items-center">
            <div
              className="absolute w-[110%] h-[120%] -z-0 bg-[#143D60]"
              style={{
                clipPath: "polygon(0% 0%, 100% 10%, 80% 100%, 0% 80%)",
              }}
            ></div>
            <img
              src={partners} // Replace with relevant image path
              alt="Nutryah Digital Partner"
              className="w-full max-w-md md:max-w-lg z-10 relative object-cover"
            />
          </div>

        </div>
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
          className="bg-[var(--bg-secondary)] px-8 py-3 font-semibold text-white"
        >
          Start My Audit Now
        </a>
      </section>

      {/* Audit Form */}
      {/* <section id="audit-form" className="py-20 px-6 md:px-12 bg-white text-center">
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
      </section> */}
    </div>
  );
};

export default AuditPage;
