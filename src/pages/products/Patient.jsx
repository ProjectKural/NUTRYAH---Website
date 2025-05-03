import React from 'react';

export const Patient = () => {
  return (
    <div className="space-y-10 px-6 py-8">
      {/* Hero Section */}
      <section className="product-hero-section text-center">
        <h2 className="text-3xl font-bold">Secure Patient Portal for Appointments, Reports & Payments</h2>
        <h4 className="text-lg mt-2 text-gray-600">
          Empower Patients with Anytime Access to Their Health Data
        </h4>
        <p className="text-md mt-1 text-gray-500">
          Let patients book appointments, view results, access prescriptions, pay bills, and communicate with providers — all from a mobile-first portal.
        </p>
      </section>

      {/* Feature Table */}
      <section className="product-feature-section">
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Feature</th>
              <th className="p-3 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2">🔐 OTP Login</td><td className="p-2">Mobile/email based secure login</td></tr>
            <tr><td className="p-2">📅 Book Appointments</td><td className="p-2">Self-scheduling with doctor calendar</td></tr>
            <tr><td className="p-2">📄 View Reports</td><td className="p-2">Lab, radiology, discharge summaries</td></tr>
            <tr><td className="p-2">💊 View Prescriptions</td><td className="p-2">Downloadable prescriptions with dosage</td></tr>
            <tr><td className="p-2">💳 Bill Payments</td><td className="p-2">Pay via card/UPI/gateway</td></tr>
            <tr><td className="p-2">🔄 Follow-up Management</td><td className="p-2">Book next visit or upload prior documents</td></tr>
          </tbody>
        </table>
      </section>

      {/* Use Cases */}
      <section className="product-case-section">
        <h4 className="text-xl font-semibold">Use Cases</h4>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          <li>Patients: Instant access to health records</li>
          <li>Hospitals: Reduce front desk load and paperwork</li>
          <li>Doctors: Pre-read history before consultation</li>
        </ul>
      </section>

      {/* Screenshots / GIFs */}
      <section className="product-screen-section">
        <h4 className="text-xl font-semibold mb-2">Screens Images</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Patient dashboard</li>
          <li>Report view/download</li>
          <li>Appointment calendar</li>
        </ul>
      </section>

      {/* Compliance Notes */}
      <section className="product-Compliance-section">
        <h4 className="text-xl font-semibold">Compliance Notes</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>Role-based, encrypted access</li>
          <li>HIPAA-ready design</li>
          <li>Auto-expire OTP sessions</li>
        </ul>
      </section>

      {/* Integrations */}
      <section className="product-Integrations-section">
        <h4 className="text-xl font-semibold">Integrations</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>✅ EMR: Prescriptions, history</li>
          <li>✅ Billing: Payment status</li>
          <li>✅ Lab/RIS: Results viewer</li>
          <li>✅ Notifications: SMS/email alerts</li>
        </ul>
      </section>

      {/* Metrics */}
      <section className="product-Metrics-section">
        <h4 className="text-xl font-semibold mb-3">Metrics or Proof</h4>
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Metric</th>
              <th className="p-3">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2">Portal Adoption Rate</td><td className="p-2">📈 78% of registered patients</td></tr>
            <tr><td className="p-2">Follow-up Conversion</td><td className="p-2">🔁 25%+ via self-booking</td></tr>
            <tr><td className="p-2">Payment Completion</td><td className="p-2">✅ 90% via online gateways</td></tr>
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section className="product-FAQ-section">
        <h4 className="text-xl font-semibold mb-2">Frequently Asked Questions</h4>
        <dl className="space-y-4">
          <div>
            <dt className="font-medium">Q1: Is there a mobile app?</dt>
            <dd className="ml-4 text-gray-600">Yes — responsive web + Android/iOS builds.</dd>
          </div>
          <div>
            <dt className="font-medium">Q2: Can patients download PDF reports?</dt>
            <dd className="ml-4 text-gray-600">Yes — and share securely with others.</dd>
          </div>
          <div>
            <dt className="font-medium">Q3: Are appointment slots real-time?</dt>
            <dd className="ml-4 text-gray-600">Yes — synced with hospital calendars.</dd>
          </div>
        </dl>
      </section>

      {/* CTA */}
      <section className="product-CTA-section text-center mt-10">
        <h4 className="text-2xl font-bold mb-4">Engage Patients with Real-Time, Mobile Access</h4>
        <div className="flex justify-center space-x-4">
          <a href="/book-portal-demo" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
            📅 Schedule Portal Demo
          </a>
          <a href="/patient-app-overview.pdf" className="bg-gray-100 hover:bg-gray-200 text-blue-700 px-5 py-2 rounded-lg border">
            📥 Download Patient App Overview
          </a>
        </div>
      </section>
    </div>
  );
};
