import React from 'react';

export const Ris = () => {
  return (
    <div className="space-y-10 px-6 py-8">
      {/* Hero Section */}
      <section className="product-hero-section text-center">
        <h2 className="text-3xl font-bold">Radiology Workflow Automation with PACS Integration</h2>
        <h4 className="text-lg mt-2 text-gray-600">
          Schedule, Report, and Dispatch Imaging — All in One RIS
        </h4>
        <p className="text-md mt-1 text-gray-500">
          Streamline your radiology operations with modality-wise scheduling, PACS viewer integration, and templated report finalization.
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
            <tr><td className="p-2">🗓️ Modality Scheduler</td><td className="p-2">Book X-ray, CT, MRI, USG, etc.</td></tr>
            <tr><td className="p-2">📤 Order Management</td><td className="p-2">Orders from EMR, tokenized workflow</td></tr>
            <tr><td className="p-2">🧾 Report Templates</td><td className="p-2">Standardized findings, impression, signature-ready</td></tr>
            <tr><td className="p-2">🖼️ PACS Sync</td><td className="p-2">DICOM viewer link + external image push</td></tr>
            <tr><td className="p-2">🔔 Report Alerts</td><td className="p-2">Auto-alert to doctors, upload to portal</td></tr>
            <tr><td className="p-2">🎯 Film Tracking</td><td className="p-2">Print status, delivery logs, archiving</td></tr>
          </tbody>
        </table>
      </section>

      {/* Use Cases */}
      <section className="product-case-section">
        <h4 className="text-xl font-semibold">Use Cases</h4>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          <li>Radiologists: Standardized, fast reporting</li>
          <li>Technicians: No double entry, auto-synced workflow</li>
          <li>Patients: Quick access to images and interpretations</li>
        </ul>
      </section>

      {/* Screenshots / GIFs */}
      <section className="product-screen-section">
        <h4 className="text-xl font-semibold mb-2">Screens Images</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Modality schedule view</li>
          <li>Report writing screen</li>
          <li>PACS viewer embedded</li>
        </ul>
      </section>

      {/* Compliance Notes */}
      <section className="product-Compliance-section">
        <h4 className="text-xl font-semibold">Compliance Notes</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>DICOM tag compliance</li>
          <li>NABH documentation formats</li>
          <li>Imaging TAT and rejection logs</li>
        </ul>
      </section>

      {/* Integrations */}
      <section className="product-Integrations-section">
        <h4 className="text-xl font-semibold">Integrations</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>✅ EMR: Order source and final report link</li>
          <li>✅ PACS: Bidirectional viewer and archive</li>
          <li>✅ Patient Portal: Report access</li>
          <li>✅ Billing: Charge codes auto-posted</li>
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
            <tr><td className="p-2">Report Turnaround</td><td className="p-2">🕐 Reduced to avg. 2 hrs</td></tr>
            <tr><td className="p-2">Missing Films/Results</td><td className="p-2">❌ 0% post-RIS</td></tr>
            <tr><td className="p-2">Image-to-EMR Sync</td><td className="p-2">🔄 100% real-time</td></tr>
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section className="product-FAQ-section">
        <h4 className="text-xl font-semibold mb-2">Frequently Asked Questions</h4>
        <dl className="space-y-4">
          <div>
            <dt className="font-medium">Q1: Can I load existing PACS?</dt>
            <dd className="ml-4 text-gray-600">Yes — we support DICOM, API or shared viewers.</dd>
          </div>
          <div>
            <dt className="font-medium">Q2: Is film tracking manual?</dt>
            <dd className="ml-4 text-gray-600">No — it’s timestamped with print/delivery logs.</dd>
          </div>
          <div>
            <dt className="font-medium">Q3: Can radiologists access remotely?</dt>
            <dd className="ml-4 text-gray-600">Yes — web login with secure access.</dd>
          </div>
        </dl>
      </section>

      {/* CTA */}
      <section className="product-CTA-section text-center mt-10">
        <h4 className="text-2xl font-bold mb-4">Digitize Radiology from Scheduling to Final Report</h4>
        <div className="flex justify-center space-x-4">
          <a href="/book-ris-demo" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
            📅 Book RIS Demo
          </a>
          <a href="/radiology-workflow.pdf" className="bg-gray-100 hover:bg-gray-200 text-blue-700 px-5 py-2 rounded-lg border">
            📥 Download Radiology Workflow PDF
          </a>
        </div>
      </section>
    </div>
  );
};
