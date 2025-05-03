import React from 'react';

export const Billing = () => {
  return (
    <div className="space-y-10 px-6 py-8">
      {/* Hero Section */}
      <section className="product-hero-section text-center">
        <h2 className="text-3xl font-bold">End-to-End Billing & RCM Software for Hospitals & Clinics</h2>
        <h4 className="text-lg mt-2 text-gray-600">
          Automate Bills, Claims & Payments — NABH-Ready, GST-Compliant
        </h4>
        <p className="text-md mt-1 text-gray-500">
          Generate interim and final bills, handle refunds, discounts, and TPA claims — all with audit trails and secure access control.
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
            <tr><td className="p-2">🧾 Interim/Final Billing</td><td className="p-2">Generate OPD/IPD invoices with itemized charges</td></tr>
            <tr><td className="p-2">💸 Advance & Refunds</td><td className="p-2">Auto-adjust advance payments and refund tracking</td></tr>
            <tr><td className="p-2">🏷️ Package Billing</td><td className="p-2">Pre-defined surgery/service billing packages</td></tr>
            <tr><td className="p-2">🏦 TPA Integration</td><td className="p-2">Pre-auth, NHCX claim uploads, rejection management</td></tr>
            <tr><td className="p-2">🧮 GST Compliant</td><td className="p-2">Tax rules, invoice formats, credit/debit notes</td></tr>
            <tr><td className="p-2">📊 Patient Ledger</td><td className="p-2">View all financial interactions per patient</td></tr>
          </tbody>
        </table>
      </section>

      {/* Use Cases */}
      <section className="product-case-section">
        <h4 className="text-xl font-semibold">Use Cases</h4>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          <li>Billing Executives: Faster, accurate invoice creation</li>
          <li>TPA/Insurance Teams: Real-time tracking of pre-auth and claims</li>
          <li>Finance Admins: Complete audit and revenue oversight</li>
        </ul>
      </section>

      {/* Screenshots / GIFs */}
      <section className="product-screen-section">
        <h4 className="text-xl font-semibold mb-2">Screens Images</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Bill creation UI</li>
          <li>Refund approval panel</li>
          <li>TPA dashboard</li>
        </ul>
      </section>

      {/* Compliance Notes */}
      <section className="product-Compliance-section">
        <h4 className="text-xl font-semibold">Compliance Notes</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>GST support with e-invoice fields</li>
          <li>NABH billing audit compliance</li>
          <li>NHCX-ready claim formats</li>
        </ul>
      </section>

      {/* Integrations */}
      <section className="product-Integrations-section">
        <h4 className="text-xl font-semibold">Integrations</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>✅ OPD/IPD: Billing on admission/discharge</li>
          <li>✅ EMR: Charge posting from treatment notes</li>
          <li>✅ Insurance API: Real-time pre-auth flow</li>
          <li>✅ UPI/Gateway: Online payment link generation</li>
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
            <tr><td className="p-2">Billing Accuracy</td><td className="p-2">⬆️ 98% (with charge auto-posting)</td></tr>
            <tr><td className="p-2">Claim Approval Rate</td><td className="p-2">🔼 85% on first submission</td></tr>
            <tr><td className="p-2">Time to Final Bill</td><td className="p-2">⏱️ Avg. &lt; 4 minutes per patient</td></tr>
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section className="product-FAQ-section">
        <h4 className="text-xl font-semibold mb-2">Frequently Asked Questions</h4>
        <dl className="space-y-4">
          <div>
            <dt className="font-medium">Q1: Can billing packages be customized?</dt>
            <dd className="ml-4 text-gray-600">Yes — by specialty, service, or doctor.</dd>
          </div>
          <div>
            <dt className="font-medium">Q2: Is there insurance rejection handling?</dt>
            <dd className="ml-4 text-gray-600">Yes — with remarks, re-upload and audit trail.</dd>
          </div>
          <div>
            <dt className="font-medium">Q3: Can patients pay online?</dt>
            <dd className="ml-4 text-gray-600">Yes — secure payment links can be shared.</dd>
          </div>
        </dl>
      </section>

      {/* CTA */}
      <section className="product-CTA-section text-center mt-10">
        <h4 className="text-2xl font-bold mb-4">Boost Accuracy & Speed in Billing and Claims</h4>
        <div className="flex justify-center space-x-4">
          <a href="/book-billing-demo" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
            📅 Schedule a Billing Demo
          </a>
          <a href="/billing-feature-sheet.pdf" className="bg-gray-100 hover:bg-gray-200 text-blue-700 px-5 py-2 rounded-lg border">
            📥 Download Billing Feature Sheet
          </a>
        </div>
      </section>
    </div>
  );
};
