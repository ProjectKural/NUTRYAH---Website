import React from 'react';

export const Emergency = () => {
  return (
    <div className="space-y-10 px-6 py-8">
      {/* Hero Section */}
      <section className="product-hero-section text-center">
        <h2 className="text-3xl font-bold">Emergency & ICU Digital Management System for Critical Care</h2>
        <h4 className="text-lg mt-2 text-gray-600">
          Respond Faster with Real-Time Emergency and ICU Monitoring
        </h4>
        <p className="text-md mt-1 text-gray-500">
          Digitize emergency triage, log code events, track ventilator stats, and use ICU scoring tools to improve survival and handovers.
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
            <tr><td className="p-2">🚨 ED Triage</td><td className="p-2">Condition-based priority forms & color-coded levels</td></tr>
            <tr><td className="p-2">📋 Medico-Legal Logs</td><td className="p-2">Register MLCs with PDF downloads</td></tr>
            <tr><td className="p-2">🧠 ICU Dashboards</td><td className="p-2">Patient vitals, shift handovers, scoring</td></tr>
            <tr><td className="p-2">🩺 APACHE II & SOFA</td><td className="p-2">ICU scoring calculators and alerts</td></tr>
            <tr><td className="p-2">🩻 Device Sync</td><td className="p-2">Import monitor/ventilator data to patient chart</td></tr>
            <tr><td className="p-2">🔄 Code Alerts</td><td className="p-2">Log critical codes: blue, red, crash events</td></tr>
          </tbody>
        </table>
      </section>

      {/* Use Cases */}
      <section className="product-case-section">
        <h4 className="text-xl font-semibold">Use Cases</h4>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          <li>ED Staff: Rapid triage and ambulance intake</li>
          <li>ICU Nurses: Track handovers and critical notes</li>
          <li>Doctors: Decision support with risk scoring tools</li>
        </ul>
      </section>

      {/* Screenshots / GIFs */}
      <section className="product-screen-section">
        <h4 className="text-xl font-semibold mb-2">Screens Images</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>ICU Dashboard with vital graph</li>
          <li>Triage entry form</li>
          <li>Code alert popup</li>
        </ul>
      </section>

      {/* Compliance Notes */}
      <section className="product-Compliance-section">
        <h4 className="text-xl font-semibold">Compliance Notes</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>NABH Code Blue / emergency audit logging</li>
          <li>Clinical scoring validations</li>
          <li>Critical notes + timestamped handovers</li>
        </ul>
      </section>

      {/* Integrations */}
      <section className="product-Integrations-section">
        <h4 className="text-xl font-semibold">Integrations</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>✅ EMR: Link to patient vitals and scoring</li>
          <li>✅ LIS/RIS: Order from ICU</li>
          <li>✅ Devices: Bedside monitor integrations</li>
          <li>✅ Billing: Emergency charges auto-posted</li>
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
            <tr><td className="p-2">Code Response Time</td><td className="p-2">⏱️ Logged in &lt;15 sec</td></tr>
            <tr><td className="p-2">Triage Completion Rate</td><td className="p-2">✅ 100% for all walk-ins</td></tr>
            <tr><td className="p-2">ICU Scoring Coverage</td><td className="p-2">📊 98% tracked cases daily</td></tr>
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section className="product-FAQ-section">
        <h4 className="text-xl font-semibold mb-2">Frequently Asked Questions</h4>
        <dl className="space-y-4">
          <div>
            <dt className="font-medium">Q1: Can we view past code event history?</dt>
            <dd className="ml-4 text-gray-600">Yes — with full audit log and filterable dashboard.</dd>
          </div>
          <div>
            <dt className="font-medium">Q2: Are ICU scores saved to EMR?</dt>
            <dd className="ml-4 text-gray-600">Yes, and flagged if critical.</dd>
          </div>
          <div>
            <dt className="font-medium">Q3: Does this work with portable monitors?</dt>
            <dd className="ml-4 text-gray-600">Yes — we support CSV, API, or manual sync.</dd>
          </div>
        </dl>
      </section>

      {/* CTA */}
      <section className="product-CTA-section text-center mt-10">
        <h4 className="text-2xl font-bold mb-4">Save Time When It Matters Most with Smart ICU & Emergency Tools</h4>
        <div className="flex justify-center space-x-4">
          <a href="/book-emergency-demo" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
            📅 Book Emergency Demo
          </a>
          <a href="/icu-workflow.pdf" className="bg-gray-100 hover:bg-gray-200 text-blue-700 px-5 py-2 rounded-lg border">
            📥 Download ICU Workflow PDF
          </a>
        </div>
      </section>
    </div>
  );
};
