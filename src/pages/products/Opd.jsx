import React from 'react'

export const Opd = () => {
  return (
    <div className="space-y-10 px-6 py-8">
      {/* Hero Section */}
      <section className="product-hero-section text-center">
        <h2 className="text-3xl font-bold">Complete OPD & IPD Management Software for Hospitals</h2>
        <h4 className="text-lg mt-2 text-gray-600">
          Track Appointments, Admissions, Transfers, and Discharges in Real Time
        </h4>
        <p className="text-md mt-1 text-gray-500">
          Seamlessly manage OPD appointments, inpatient beds, departmental transfers, and final discharge summaries — with full audit history.
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
            <tr><td className="p-2">📅 Appointment System</td><td className="p-2">Token queue, calendar, visit type (Physical, Teleconsultation)</td></tr>
            <tr><td className="p-2">🏥 Admission Requests</td><td className="p-2">IPD allotment with real-time bed availability</td></tr>
            <tr><td className="p-2">🔄 Transfer Management</td><td className="p-2">Department-to-department internal handover</td></tr>
            <tr><td className="p-2">📋 Discharge Planning</td><td className="p-2">Checklist, clearance alerts, summary preview</td></tr>
            <tr><td className="p-2">🛏️ Bed Dashboard</td><td className="p-2">Occupancy status, forecast, ICU tagging</td></tr>
            <tr><td className="p-2">📍 Visit Timeline</td><td className="p-2">Timestamped progress (seen by nurse/doctor/etc.)</td></tr>
          </tbody>
        </table>
      </section>

      {/* Use Cases */}
      <section className="product-case-section">
        <h4 className="text-xl font-semibold">Use Cases</h4>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          <li>Receptionist: Easily manage queues and daily visits</li>
          <li>IPD Nurses: Track transfers, bed movements, patient status</li>
          <li>Quality Teams: Monitor delays, discharge accuracy, logs</li>
        </ul>
      </section>

      {/* Screenshots / GIFs */}
      <section className="product-screen-section">
        <h4 className="text-xl font-semibold mb-2">Screens Images</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Appointment booking screen</li>
          <li>Admission panel with room/bed view</li>
          <li>Transfer form</li>
          <li>Discharge checklist</li>
        </ul>
      </section>

      {/* Compliance Notes */}
      <section className="product-Compliance-section">
        <h4 className="text-xl font-semibold">Compliance Notes</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>NABH Admission/Discharge records</li>
          <li>Bed occupancy reporting</li>
          <li>Auto-tagged transfer logs</li>
          <li>Timestamped treatment journey</li>
        </ul>
      </section>

      {/* Integrations */}
      <section className="product-Integrations-section">
        <h4 className="text-xl font-semibold">Integrations</h4>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>✅ EMR: Link admission to EMR record</li>
          <li>✅ Billing: Trigger charges during IPD</li>
          <li>✅ Pharmacy: Issue based on IP stay</li>
          <li>✅ Alert System: Send inter-department notifications</li>
        </ul>
      </section>

      {/* Metrics / Proof */}
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
            <tr><td className="p-2">Discharge Time</td><td className="p-2">⏱️ Reduced by 60%</td></tr>
            <tr><td className="p-2">Bed Utilization Efficiency</td><td className="p-2">🔼 35% improvement</td></tr>
            <tr><td className="p-2">Manual Errors in Handover</td><td className="p-2">🔻 Reduced to &lt;2%</td></tr>
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section className="product-FAQ-section">
        <h4 className="text-xl font-semibold mb-2">Frequently Asked Questions</h4>
        <dl className="space-y-4">
          <div>
            <dt className="font-medium">Q1: Can I customize admission types?</dt>
            <dd className="ml-4 text-gray-600">Yes — emergency, planned, surgery, etc.</dd>
          </div>
          <div>
            <dt className="font-medium">Q2: Is there a forecast of free beds?</dt>
            <dd className="ml-4 text-gray-600">Yes, based on scheduled discharges.</dd>
          </div>
          <div>
            <dt className="font-medium">Q3: Does it show occupancy by department?</dt>
            <dd className="ml-4 text-gray-600">Yes, with real-time filters.</dd>
          </div>
        </dl>
      </section>

      {/* CTA */}
      <section className="product-CTA-section text-center mt-10">
        <h4 className="text-2xl font-bold mb-4">Digitize Your Inpatient & Outpatient Workflows</h4>
        <div className="flex justify-center space-x-4">
          <a href="/book-demo" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
            📅 Schedule OPD/IPD Demo
          </a>
          <a href="/workflow-guide.pdf" className="bg-gray-100 hover:bg-gray-200 text-blue-700 px-5 py-2 rounded-lg border">
            📥 Download Workflow Guide
          </a>
        </div>
      </section>
    </div>
  )
}
