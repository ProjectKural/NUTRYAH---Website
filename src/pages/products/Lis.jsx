import React from 'react';

export const Lis = () => {
  return (
    <div className="space-y-10 px-6 py-8">
      {/* Hero Section */}
      <section className="product-hero-section text-center">
        <h2 className="text-3xl font-bold">Digital Lab Workflow Management with NABL Support</h2>
        <h4 className="text-lg mt-2 text-gray-600">
          Sample Tracking, Results Validation, and Real-Time Alerts — All in One
        </h4>
        <p className="text-md mt-1 text-gray-500">
          Manage lab orders from collection to reporting — with sample barcoding, QC panels, and auto-alerts to EMR and patient portal.
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
            <tr><td className="p-2">🧪 Sample Barcoding</td><td className="p-2">Unique sample ID with collection tracking</td></tr>
            <tr><td className="p-2">🧫 Test Panel Config</td><td className="p-2">Profile-based panels with conditional fields</td></tr>
            <tr><td className="p-2">⏳ TAT Monitoring</td><td className="p-2">Track turnaround time for each test type</td></tr>
            <tr><td className="p-2">🧬 Result Entry</td><td className="p-2">Dual-layer approval + tech & pathologist signoff</td></tr>
            <tr><td className="p-2">📥 Auto EMR Push</td><td className="p-2">Auto-inject results into EMR on validation</td></tr>
            <tr><td className="p-2">📱 Patient Access</td><td className="p-2">Result visibility on patient portal</td></tr>
          </tbody>
        </table>
      </section>

      {/* Use Cases */}
      <section className="product-case-section">
        <h4 className="text-xl font-semibold">Use Cases</h4>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          <li>Lab Techs: Zero paper-based order entry</li>
          <li>Doctors: Real-time access to validated results</li>
          <li>Patients: Instant, mobile-accessible reports</li>
        </ul>
      </section>

      {/* Screenshots / GIFs */}
      <section className="product-screen-section">
        <h4 className="text-xl font-semibold mb-2">Screens Images</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Lab order entry</li>
          <li>Result validation & flagging</li>
          <li>QC Dashboard</li>
        </ul>
      </section>

      {/* Compliance Notes */}
      <section className="product-Compliance-section">
        <h4 className="text-xl font-semibold">Compliance Notes</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>NABL-compliant result lifecycle</li>
          <li>QC logging</li>
          <li>Audit trail of rejected/duplicate samples</li>
        </ul>
      </section>

      {/* Integrations */}
      <section className="product-Integrations-section">
        <h4 className="text-xl font-semibold">Integrations</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>✅ EMR: Results directly pushed</li>
          <li>✅ RIS: Order and sync with imaging</li>
          <li>✅ External Labs: Third-party API/CSV sync</li>
          <li>✅ Devices: Bi-directional analyzer integration</li>
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
            <tr><td className="p-2">TAT Improvement</td><td className="p-2">⏱️ 40% faster from sample to report</td></tr>
            <tr><td className="p-2">QC Compliance Score</td><td className="p-2">✅ 95%</td></tr>
            <tr><td className="p-2">Errors in Result Entry</td><td className="p-2">🔻 Reduced to &lt;1%</td></tr>
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section className="product-FAQ-section">
        <h4 className="text-xl font-semibold mb-2">Frequently Asked Questions</h4>
        <dl className="space-y-4">
          <div>
            <dt className="font-medium">Q1: Can I define custom lab panels?</dt>
            <dd className="ml-4 text-gray-600">Yes, with unlimited test configuration.</dd>
          </div>
          <div>
            <dt className="font-medium">Q2: What if results are rejected?</dt>
            <dd className="ml-4 text-gray-600">They are flagged and returned to technician queue.</dd>
          </div>
          <div>
            <dt className="font-medium">Q3: Can patients download reports?</dt>
            <dd className="ml-4 text-gray-600">Yes — directly from the mobile/web portal.</dd>
          </div>
        </dl>
      </section>

      {/* CTA */}
      <section className="product-CTA-section text-center mt-10">
        <h4 className="text-2xl font-bold mb-4">Upgrade Your Lab with Fast, Accurate Digital Workflows</h4>
        <div className="flex justify-center space-x-4">
          <a href="/book-lab-demo" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
            📅 Book Lab System Demo
          </a>
          <a href="/LIS.pdf" className="bg-gray-100 hover:bg-gray-200 text-blue-700 px-5 py-2 rounded-lg border">
            📥 Download LIS PDF
          </a>
        </div>
      </section>
    </div>
  );
};
