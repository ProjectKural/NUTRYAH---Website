import React from 'react';

export const Pharmacy = () => {
  return (
    <div className="space-y-10 px-6 py-8">
      {/* Hero Section */}
      <section className="product-hero-section text-center">
        <h2 className="text-3xl font-bold">Hospital Pharmacy & eMAR System for Safe, Tracked Medication</h2>
        <h4 className="text-lg mt-2 text-gray-600">
          Digitize Dispensing, Reduce Errors, and Track Every Medication
        </h4>
        <p className="text-md mt-1 text-gray-500">
          Manage drug inventory, expiry alerts, barcode dispensing, and electronic medication administration records — with real-time access.
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
            <tr><td className="p-2">🏷️ Inventory Tracking</td><td className="p-2">Batch, expiry, vendor & GRN management</td></tr>
            <tr><td className="p-2">💊 Drug Dispensing</td><td className="p-2">Barcoded patient-level OP/IP prescriptions</td></tr>
            <tr><td className="p-2">🔄 Stock Transfers</td><td className="p-2">Department-wise internal movement logs</td></tr>
            <tr><td className="p-2">📦 eMAR</td><td className="p-2">Administer meds with barcode scanning and audit logs</td></tr>
            <tr><td className="p-2">📊 Expiry/Shortage Alerts</td><td className="p-2">Auto-alerts for reorder, near-expiry drugs</td></tr>
            <tr><td className="p-2">💡 Drug Interaction Flags</td><td className="p-2">Allergy, duplicate, and therapeutic suggestions</td></tr>
          </tbody>
        </table>
      </section>

      {/* Use Cases */}
      <section className="product-case-section">
        <h4 className="text-xl font-semibold">Use Cases</h4>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          <li>Pharmacists: Ensure correct drug issue with traceability</li>
          <li>Nurses: Barcode-based medication logs at bedside</li>
          <li>Admins: View consumption reports and avoid wastage</li>
        </ul>
      </section>

      {/* Screenshots / GIFs */}
      <section className="product-screen-section">
        <h4 className="text-xl font-semibold mb-2">Screens Images</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Stock issue to IP patient</li>
          <li>eMAR screen with barcode check</li>
          <li>Expiry warning view</li>
        </ul>
      </section>

      {/* Compliance Notes */}
      <section className="product-Compliance-section">
        <h4 className="text-xl font-semibold">Compliance Notes</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>NABH eMAR support</li>
          <li>WHO essential drugs tracking</li>
          <li>Schedule H drug validation</li>
        </ul>
      </section>

      {/* Integrations */}
      <section className="product-Integrations-section">
        <h4 className="text-xl font-semibold">Integrations</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>✅ EMR: Auto-pull doctor orders</li>
          <li>✅ Billing: Charge mapping</li>
          <li>✅ Nursing: eMAR administration</li>
          <li>✅ Inventory/SCM: Purchase order & vendor tracking</li>
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
            <tr><td className="p-2">Medication Errors</td><td className="p-2">🔻 &lt;1% with barcode use</td></tr>
            <tr><td className="p-2">Expired Stock Waste</td><td className="p-2">⬇️ 40% reduction</td></tr>
            <tr><td className="p-2">eMAR Coverage</td><td className="p-2">✅ 100% in IPD units</td></tr>
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section className="product-FAQ-section">
        <h4 className="text-xl font-semibold mb-2">Frequently Asked Questions</h4>
        <dl className="space-y-4">
          <div>
            <dt className="font-medium">Q1: Can I import my pharmacy catalog?</dt>
            <dd className="ml-4 text-gray-600">Yes — via Excel or API.</dd>
          </div>
          <div>
            <dt className="font-medium">Q2: Can we configure dispensing rules?</dt>
            <dd className="ml-4 text-gray-600">Yes, including schedule-wise, by department or route.</dd>
          </div>
          <div>
            <dt className="font-medium">Q3: Is there automated reorder?</dt>
            <dd className="ml-4 text-gray-600">Yes, based on minimum stock levels.</dd>
          </div>
        </dl>
      </section>

      {/* CTA */}
      <section className="product-CTA-section text-center mt-10">
        <h4 className="text-2xl font-bold mb-4">Enable Safe, Traceable, Efficient Medication Workflows</h4>
        <div className="flex justify-center space-x-4">
          <a href="/book-pharmacy-demo" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
            📅 Book Pharmacy Demo
          </a>
          <a href="/emar-module.pdf" className="bg-gray-100 hover:bg-gray-200 text-blue-700 px-5 py-2 rounded-lg border">
            📥 Download eMAR Module PDF
          </a>
        </div>
      </section>
    </div>
  );
};
