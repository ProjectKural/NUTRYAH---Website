import React from 'react';

export const Analytics = () => {
  return (
    <div className="space-y-10 px-6 py-8">
      {/* Hero Section */}
      <section className="product-hero-section text-center">
        <h2 className="text-3xl font-bold">Hospital Analytics & Compliance Dashboard</h2>
        <h4 className="text-lg mt-2 text-gray-600">
          Turn Hospital Data into Actionable Intelligence
        </h4>
        <p className="text-md mt-1 text-gray-500">
          Track patient counts, revenue, bed occupancy, NABH logs, and performance metrics — all in one powerful visual dashboard.
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
            <tr><td className="p-2">📊 Real-Time KPIs</td><td className="p-2">Live stats on patient volumes, revenue, turnaround</td></tr>
            <tr><td className="p-2">📈 Department Reports</td><td className="p-2">Usage, delays, and quality scores per unit</td></tr>
            <tr><td className="p-2">✅ NABH Logs & QI</td><td className="p-2">Auto-generated audit reports and compliance scores</td></tr>
            <tr><td className="p-2">📤 Export & Download</td><td className="p-2">PDF/Excel report builder for admin</td></tr>
            <tr><td className="p-2">🎯 Dashboard Filters</td><td className="p-2">Date, department, visit type, source</td></tr>
            <tr><td className="p-2">🔒 Role-Based Views</td><td className="p-2">Admin, QA, Finance, Clinical, HR</td></tr>
          </tbody>
        </table>
      </section>

      {/* Use Cases */}
      <section className="product-case-section">
        <h4 className="text-xl font-semibold">Use Cases</h4>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          <li>Management: Track hospital performance and compliance</li>
          <li>QA Teams: Export logs for NABH audits</li>
          <li>Finance/Admin: View revenue, service usage, and TAT</li>
        </ul>
      </section>

      {/* Screenshots / GIFs */}
      <section className="product-screen-section">
        <h4 className="text-xl font-semibold mb-2">Screens Images</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Monthly census graph</li>
          <li>Revenue vs claim report</li>
          <li>Audit readiness checklist</li>
        </ul>
      </section>

      {/* Compliance Notes */}
      <section className="product-Compliance-section">
        <h4 className="text-xl font-semibold">Compliance Notes</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>NABH: Quality Indicator logging</li>
          <li>ABHA/UHI: Integration usage report</li>
          <li>TAT tracking for labs, discharge</li>
        </ul>
      </section>

      {/* Integrations */}
      <section className="product-Integrations-section">
        <h4 className="text-xl font-semibold">Integrations</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>✅ Billing, LIS, EMR, Pharmacy: All modules feed data</li>
          <li>✅ Role Access: Define custom report visibility</li>
          <li>✅ Export Tools: PDF, Excel, Print-ready</li>
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
            <tr><td className="p-2">Time to Audit Report</td><td className="p-2">⏱️ 2 mins</td></tr>
            <tr><td className="p-2">NABH Form Completion</td><td className="p-2">✅ 98% tracked via dashboard</td></tr>
            <tr><td className="p-2">Custom Reports Built</td><td className="p-2">🔧 100+ templates</td></tr>
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section className="product-FAQ-section">
        <h4 className="text-xl font-semibold mb-2">Frequently Asked Questions</h4>
        <dl className="space-y-4">
          <div>
            <dt className="font-medium">Q1: Can we generate daily auto-reports?</dt>
            <dd className="ml-4 text-gray-600">Yes — schedule by email or SMS.</dd>
          </div>
          <div>
            <dt className="font-medium">Q2: Can I restrict report access?</dt>
            <dd className="ml-4 text-gray-600">Yes — via department or role filters.</dd>
          </div>
          <div>
            <dt className="font-medium">Q3: Can I export all KPIs to Excel?</dt>
            <dd className="ml-4 text-gray-600">Yes — real-time download supported.</dd>
          </div>
        </dl>
      </section>

      {/* CTA */}
      <section className="product-CTA-section text-center mt-10">
        <h4 className="text-2xl font-bold mb-4">Make Every Metric Count — Digitally, Securely, Compliantly</h4>
        <div className="flex justify-center space-x-4">
          <a href="/book-analytics-demo" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
            📅 Book Analytics Demo
          </a>
          <a href="/dashboard-feature.pdf" className="bg-gray-100 hover:bg-gray-200 text-blue-700 px-5 py-2 rounded-lg border">
            📥 Download Dashboard Feature PDF
          </a>
        </div>
      </section>
    </div>
  );
};
