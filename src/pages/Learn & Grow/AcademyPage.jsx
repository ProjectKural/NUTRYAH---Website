import React from "react";
import { Helmet } from "react-helmet-async";

const templates = [
  { name: "NABH Digital Readiness Checklist", format: "PDF", link: "/downloads/nabh-checklist.pdf" },
  { name: "Standard OPD Workflow SOP", format: "Word Doc", link: "/downloads/opd-sop.docx" },
  { name: "EMR Implementation Timeline Template", format: "Excel", link: "/downloads/emr-timeline.xlsx" },
  { name: "NABH Internal Audit Preparation Form", format: "PDF", link: "/downloads/audit-prep.pdf" },
  { name: "Telemedicine Consultation SOP Template", format: "Word Doc", link: "/downloads/telemedicine-sop.docx" },
];

const webinars = [
  { title: "How to Digitize Your Clinic in 30 Days", format: "On-Demand Video", link: "/webinars/clinic-digitization" },
  { title: "Common IT Mistakes in Hospital Setups", format: "Live Replay", link: "/webinars/hospital-it-mistakes" },
  { title: "NABH Accreditation: The Digital Advantage", format: "On-Demand", link: "/webinars/nabh-digital-advantage" },
];

const courses = [
  { title: "EMR Essentials for Small Hospitals", duration: "30 min", link: "/courses/emr-essentials" },
  { title: "Building NABH-Ready Documentation", duration: "45 min", link: "/courses/nabh-documentation" },
  { title: "Launching Telemedicine in 60 Days", duration: "30 min", link: "/courses/telemedicine-launch" },
];

const AcademyPage = () => {
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
      <section className="min-h-[70vh] bg-[var(--bg-background-primary)] flex flex-col justify-center items-center text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--bg-text)] mb-4">
          Nutryah Academy – Empowering Healthcare Through Knowledge
        </h1>
        <p className="text-lg md:text-2xl text-[var(--bg-text-secondary)] max-w-3xl">
          Your free learning hub for mastering healthcare digitalization, NABH compliance, operational excellence, and patient care innovation.
        </p>
        <div className="flex flex-wrap gap-6 mt-8">
          <a href="/courses" className="bg-[var(--bg-secondary)] text-white px-8 py-3 rounded-full font-semibold">
            🎓 Explore Courses
          </a>
          <a href="/downloads" className="bg-white text-[var(--bg-text)] px-8 py-3 rounded-full font-semibold">
            📄 Download Free Templates
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
          Learn Before You Digitize
        </h2>
        <p className="text-lg text-[var(--bg-text-secondary)] max-w-3xl mx-auto">
          At Nutryah, we believe education is the first step toward successful digital healthcare transformation.
          Nutryah Academy offers a free platform packed with actionable resources — so you can plan smarter, digitize faster, and succeed easier.
          Our goal? Make you confident and prepared, not confused and overwhelmed.
        </p>
        <a
          href="/audit"
          className="inline-block mt-8 bg-[var(--bg-secondary)] text-white px-8 py-3 rounded-full font-semibold"
        >
          🚀 Take the Free Digital Readiness Audit →
        </a>
      </section>

      {/* What You’ll Find */}
      <section className="py-16 px-6 md:px-12 bg-[var(--bg-background-primary)] text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-12">
          Your Free Tools for Healthcare Success
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["📚", "Expert Articles", "Step-by-step guides on digitization, NABH, IT workflows."],
            ["🎥", "Webinars and Tutorials", "Live sessions and on-demand videos by healthcare IT experts."],
            ["📝", "Templates & Checklists", "SOPs, audit checklists, policy templates ready for your team."],
            ["🎓", "Micro-Courses", "Mini-courses like 'Digitize Your Hospital in 30 Days'."],
            ["📊", "Benchmark Reports", "Annual reports on hospital digital maturity and trends."],
          ].map(([icon, title, desc], idx) => (
            <div key={idx} className="p-6 rounded-xl shadow bg-white">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-[var(--bg-text-secondary)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Free Resources */}
      <section className="py-16 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-12">
          Featured Free Resources
        </h2>

        {/* Templates */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">📝 Downloadable Templates</h3>
          <div className="space-y-4 max-w-4xl mx-auto">
            {templates.map((temp, idx) => (
              <div key={idx} className="flex justify-between border-b pb-2">
                <span>{temp.name} ({temp.format})</span>
                <a href={temp.link} className="text-[var(--bg-secondary)] font-semibold">Download</a>
              </div>
            ))}
          </div>
          <a href="/downloads" className="inline-block mt-6 bg-[var(--bg-secondary)] text-white px-6 py-3 rounded-full font-semibold">
            📄 View All Templates
          </a>
        </div>

        {/* Webinars */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">🎥 Featured Webinars</h3>
          <div className="space-y-4 max-w-4xl mx-auto">
            {webinars.map((webinar, idx) => (
              <div key={idx} className="flex justify-between border-b pb-2">
                <span>{webinar.title} ({webinar.format})</span>
                <a href={webinar.link} className="text-[var(--bg-secondary)] font-semibold">Watch Now</a>
              </div>
            ))}
          </div>
          <a href="/webinars" className="inline-block mt-6 bg-[var(--bg-secondary)] text-white px-6 py-3 rounded-full font-semibold">
            🎥 View All Webinars
          </a>
        </div>

        {/* Micro-Courses */}
        <div>
          <h3 className="text-2xl font-bold mb-6">🎓 Micro-Courses (Coming Soon)</h3>
          <div className="space-y-4 max-w-4xl mx-auto">
            {courses.map((course, idx) => (
              <div key={idx} className="flex justify-between border-b pb-2">
                <span>{course.title} ({course.duration})</span>
                <a href={course.link} className="text-[var(--bg-secondary)] font-semibold">Enroll Free</a>
              </div>
            ))}
          </div>
          <p className="text-[var(--bg-text-secondary)] mt-4">More courses launching monthly!</p>
        </div>
      </section>

      {/* Why Nutryah Academy */}
      <section className="py-16 px-6 md:px-12 bg-[var(--bg-background-primary)] text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-8">
          Learn from India’s Healthcare Technology Experts
        </h2>
        <p className="text-lg text-[var(--bg-text-secondary)] max-w-3xl mx-auto">
          Nutryah Academy is built by real practitioners helping hospitals digitize. Everything is practical, proven, and designed to deliver real results.
        </p>
        <ul className="text-[var(--bg-text-secondary)] space-y-2 mt-6">
          <li>✅ Learn faster</li>
          <li>✅ Avoid costly mistakes</li>
          <li>✅ Plan smarter</li>
          <li>✅ Digitize successfully</li>
        </ul>
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
          <a href="/courses" className="bg-[var(--bg-secondary)] px-8 py-3 rounded-full font-semibold text-white">
            🎓 Browse Free Courses
          </a>
          <a href="/downloads" className="bg-white text-[var(--bg-text)] px-8 py-3 rounded-full font-semibold">
            📄 Download Starter Templates
          </a>
        </div>
      </section>

      {/* Bonus: Upsell to Solutions */}
      <section className="py-12 bg-[var(--bg-background-primary)] text-center">
        <p className="text-lg text-[var(--bg-text-secondary)]">
          Learning is the first step — implementation is the next.
        </p>
        <a href="/solutions" className="inline-block mt-4 bg-[var(--bg-secondary)] text-white px-6 py-3 rounded-full font-semibold">
          🚀 Explore Solutions Now
        </a>
      </section>
    </div>
  );
};

export default AcademyPage;
