import { div, section } from 'framer-motion/client'
import React from 'react'

export const Emr = () => {
  return (
    <div>
      <section className='product-hero-section'>
        <h2>Empower Doctors with Structured, Smart Electronic Medical Records</h2>
        <h4>Digitize clinical workflows with SOAP notes, e-prescriptions, lab/radiology orders, and discharge summaries — all in one NABH-aligned EMR dashboard.</h4>
      </section>
      <section className='product-feature-section'>
        <table>
          <tr>
            <th>Feature</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>📝 SOAP Notes</td>
            <td>Structured clinical documentation (Subjective, Objective, Assessment, Plan)</td>
          </tr>
          <tr>
            <td>💊 Prescription Templates</td>
            <td>Preloaded with drug alerts, dosage, allergy flags</td>
          </tr>
          <tr>
            <td>📋 Vitals & History</td>
            <td>Track vitals, allergies, chronic illnesses</td>
          </tr>
          <tr>
            <td>🧪 CPOE</td>
            <td>One-click orders for labs, radiology, medications</td>
          </tr>
          <tr>
            <td>🔁 IPD Handover</td>
            <td>Auto shift-wise progress notes & handover tools</td>
          </tr>
          <tr>
            <td>📅 Doctor Dashboard</td>
            <td>Patient queue, today's appointments, alerts</td>
          </tr>
        </table>
      </section>
      <section className='product-case-section'>
        <h4>•	Doctors: Access all patient history in one place, prescribe faster, reduce paper use</h4>
        <h4>•	Hospitals: Standardize medical records for audits and ensure real-time access</h4>
        <h4>•	Patients: Receive digital prescriptions and better continuity of care</h4>
      </section>
      <section className='product-screen-section'>
        <h4>Screens images</h4>
      </section>
      <section className='product-Compliance-section'>
        <h4>Compliance Notes</h4>
        <ul>
          <li>•	NABH-ready note templates</li>
          <li>•	Auto audit trails</li>
          <li>•	Secure role-based access</li>
          <li>•	ICD/LOINC code integration support</li>
        </ul>
      </section>
      <section className='product-Integrations-section'>
        <h4>Integrations</h4>
        <ul>
          <li>•	✅ LIS: Order labs and receive reports</li>
          <li>•	✅ RIS: Send radiology requests</li>
          <li>•	✅ Pharmacy: Auto-sync prescriptions</li>
          <li>•	✅ Patient Portal: Share prescriptions & summaries</li>
        </ul>
      </section>
      <section className='product-Metrics -section'>
        <table>
          <tr>
            <th>Metric</th>
            <th>Before NUTRYAH</th>
            <th>After NUTRYAH</th>
          </tr>
          <tr>
            <td>Avg. Prescription Time</td>
            <td>7–10 mins</td>
            <td>⏱️ 2–3 mins</td>
          </tr>
          <tr>
            <td>NABH Form Compliance</td>
            <td>60%</td>
            <td>✅ 98%</td>
          </tr>
          <tr>
            <td>Data Entry Errors</td>
            <td>Frequent</td>
            <td>🔒 Zero-entry duplication</td>
          </tr>
        </table>
      </section>
      <section className='product-FAQ -section'>
        <h4>Frequently Asking Question</h4>
        <dl>
          <dt>Q1: Is EMR customizable?</dt>
          <dd>Yes, based on specialty and hospital workflow.</dd>
          <dt>Q2: Can doctors use this from mobile?</dt>
          <dd>Yes, it is fully responsive.</dd>
          <dt>Q3: Can I use my own prescription format?</dt>
          <dd>Yes, we support both default and custom templates.</dd>
        </dl>

      </section>
      <section className='product-CTA -section'>
        <h4>Ready to Simplify Your Doctors’ Workflow?</h4>
        <a href="/">Book Free EMR Demo</a>
        <a href="/">📥 Download EMR PDF</a>
      </section>
    </div>
  )
}
export default Emr