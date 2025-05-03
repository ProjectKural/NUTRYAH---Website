import React from 'react';

export const Hr = () => {
  return (
    <div className="space-y-10 px-6 py-8">
      {/* Hero Section */}
      <section className="product-hero-section text-center">
        <h2 className="text-3xl font-bold">Hospital Staff HRM & Shift Management System</h2>
        <h4 className="text-lg mt-2 text-gray-600">
          Track Staff, Schedule Shifts, and Process Payroll — All Digitally
        </h4>
        <p className="text-md mt-1 text-gray-500">
          Manage the full employee lifecycle from joining to exit, with leave tracking, duty rosters, appraisals, and salary processing.
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
            <tr><td className="p-2">📋 Staff Database</td><td className="p-2">Employee records, roles, document vault</td></tr>
            <tr><td className="p-2">🧑‍🤝‍🧑 Roster & Shifts</td><td className="p-2">Auto-generate shifts by department</td></tr>
            <tr><td className="p-2">⏱️ Attendance & Leave</td><td className="p-2">Web/mobile punch, leave request, history</td></tr>
            <tr><td className="p-2">💰 Payroll Engine</td><td className="p-2">TDS, PF, allowances, salary slips</td></tr>
            <tr><td className="p-2">🎯 Appraisals & Feedback</td><td className="p-2">Periodic reviews and ratings</td></tr>
            <tr><td className="p-2">❌ Exit & Resignation</td><td className="p-2">Automated clearance workflow</td></tr>
          </tbody>
        </table>
      </section>

      {/* Use Cases */}
      <section className="product-case-section">
        <h4 className="text-xl font-semibold">Use Cases</h4>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          <li>HR Teams: End-to-end tracking and records</li>
          <li>Department Leads: Assign shifts and track performance</li>
          <li>Employees: View payslips, leave balance, feedback</li>
        </ul>
      </section>

      {/* Screenshots / GIFs */}
      <section className="product-screen-section">
        <h4 className="text-xl font-semibold mb-2">Screens Images</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Shift planner</li>
          <li>Leave request portal</li>
          <li>Payroll processing UI</li>
        </ul>
      </section>

      {/* Compliance Notes */}
      <section className="product-Compliance-section">
        <h4 className="text-xl font-semibold">Compliance Notes</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>Salary rule engine with Indian tax logic</li>
          <li>KYC & HR records audit trail</li>
          <li>Biometric integration supported</li>
        </ul>
      </section>

      {/* Integrations */}
      <section className="product-Integrations-section">
        <h4 className="text-xl font-semibold">Integrations</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>✅ Attendance devices: Biometric & web</li>
          <li>✅ Payroll: Excel/PDF export</li>
          <li>✅ Configurations: Role-based access</li>
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
            <tr><td className="p-2">Payroll Errors</td><td className="p-2">🔻 &lt;1% post-automation</td></tr>
            <tr><td className="p-2">Roster Accuracy</td><td className="p-2">✅ 100% shift coverage</td></tr>
            <tr><td className="p-2">HR Clearance Delay</td><td className="p-2">🔄 Reduced from 4 days to 1</td></tr>
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section className="product-FAQ-section">
        <h4 className="text-xl font-semibold mb-2">Frequently Asked Questions</h4>
        <dl className="space-y-4">
          <div>
            <dt className="font-medium">Q1: Can I add contractual staff?</dt>
            <dd className="ml-4 text-gray-600">Yes — full-time, part-time, or contractual.</dd>
          </div>
          <div>
            <dt className="font-medium">Q2: Is TDS auto-calculated?</dt>
            <dd className="ml-4 text-gray-600">Yes — with tax brackets and overrides.</dd>
          </div>
          <div>
            <dt className="font-medium">Q3: Can staff apply leave from mobile?</dt>
            <dd className="ml-4 text-gray-600">Yes — integrated with punch tracking.</dd>
          </div>
        </dl>
      </section>

      {/* CTA */}
      <section className="product-CTA-section text-center mt-10">
        <h4 className="text-2xl font-bold mb-4">Streamline Your HR Operations with Ease</h4>
        <div className="flex justify-center space-x-4">
          <a href="/book-hrm-demo" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
            📅 Book HRM Demo
          </a>
          <a href="/payroll-system-guide.pdf" className="bg-gray-100 hover:bg-gray-200 text-blue-700 px-5 py-2 rounded-lg border">
            📥 Download Payroll System Guide
          </a>
        </div>
      </section>
    </div>
  );
};
