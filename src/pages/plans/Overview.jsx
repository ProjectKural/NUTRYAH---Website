import React from 'react';

export const Overview = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-10 space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primaryDark">Simple, Scalable Plans for Every Healthcare Setup</h1>
        <p className="text-lg mt-4 text-gray-600">
          Whether you're a solo practitioner, a growing hospital, or a healthcare distributor — NUTRYAH has a plan tailored to your needs.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/book-demo" className="bg-primaryDark text-white px-6 py-2 rounded">📅 Schedule Demo</a>
          <a href="/plan-comparison.pdf" className="border border-primaryDark text-primaryDark px-6 py-2 rounded">📥 Download Plan Comparison PDF</a>
        </div>
      </section>

      {/* Plan Comparison Table */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Compare Plans</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Features / Plans</th>
                <th className="p-3 text-left">Personal Plan</th>
                <th className="p-3 text-left">Business Plan</th>
                <th className="p-3 text-left">Dealer Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2">Users</td><td>1</td><td>Multiple</td><td>Unlimited Groups + Users</td></tr>
              <tr><td>Access</td><td>Single User Tools</td><td>Full Suite + Role Assignment</td><td>All Tools + Client Groups</td></tr>
              <tr><td>Sub-user Creation</td><td>❌</td><td>✅</td><td>✅ (by Group)</td></tr>
              <tr><td>Best For</td><td>Individual doctors</td><td>Clinics, hospitals, startups</td><td>Resellers, agencies, distributors</td></tr>
              <tr><td>Role Assignment</td><td>❌</td><td>✅</td><td>✅</td></tr>
              <tr><td>Admin Dashboard</td><td>Basic</td><td>Full Admin Access</td><td>Group + Client Control</td></tr>
              <tr><td>Modules</td><td>Select tools</td><td>All tools</td><td>All tools</td></tr>
              <tr><td>Custom Branding</td><td>❌</td><td>✅ (optional)</td><td>✅ (Dealer-level)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Plan Descriptions */}
      <section className="space-y-10">
        {/* Personal Plan */}
        <div id="personal">
          <h3 className="text-xl font-semibold text-primaryDark">🧑‍⚕️ Personal Plan</h3>
          <p className="text-gray-700">For Individual Doctors & Solo Practices</p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
            <li>Purchase one or more tools (EMR, Billing, etc.)</li>
            <li>1 user only — no sub-users</li>
            <li>Upgradeable to Business Plan</li>
            <li>Subscription tied to selected tools only</li>
          </ul>
          <p className="mt-2 font-medium">Pricing: Starting at ₹999/month per selected module</p>
          <a href="/register/personal" className="inline-block mt-3 bg-blue-600 text-white px-5 py-2 rounded">👉 Start Now</a>
        </div>

        {/* Business Plan */}
        <div id="business">
          <h3 className="text-xl font-semibold text-primaryDark">🏥 Business Plan</h3>
          <p className="text-gray-700">For Clinics, Hospitals & Health Startups</p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
            <li>Full access to all modules and tools</li>
            <li>Can create & manage multiple users</li>
            <li>Assign tools and permissions per user</li>
            <li>Onboarding, training & support included</li>
          </ul>
          <p className="mt-2 font-medium">Pricing: Starts at ₹3999/month for 10 users. Custom pricing for larger hospitals.</p>
          <a href="/contact" className="inline-block mt-3 border border-blue-600 text-blue-600 px-5 py-2 rounded">📞 Contact Sales</a>
        </div>

        {/* Dealer Plan */}
        <div id="dealer">
          <h3 className="text-xl font-semibold text-primaryDark">🏢 Dealer Plan</h3>
          <p className="text-gray-700">For Distributors, Resellers & Healthcare Agencies</p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
            <li>Create and manage multiple client groups</li>
            <li>Each group can be Personal or Business type</li>
            <li>Assign tools, branding, and track performance</li>
            <li>Includes access to admin dashboards for group control</li>
          </ul>
          <p className="mt-2 font-medium">Pricing: Custom — based on number of groups, clients, and tools.</p>
          <a href="/register/dealer" className="inline-block mt-3 bg-green-600 text-white px-5 py-2 rounded">📥 Apply for Dealer Access</a>
        </div>
      </section>

      {/* Add-ons & Upgrades */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Add-Ons & Upgrades</h2>
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Add-On</th>
              <th className="p-3 text-left">Available On</th>
              <th className="p-3 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2">🔐 Role-Based Access</td><td>Business / Dealer</td><td>Customize user permissions by department</td></tr>
            <tr><td>📊 Advanced Analytics</td><td>Business / Dealer</td><td>Real-time KPI & compliance dashboards</td></tr>
            <tr><td>🖥️ White-Label Branding</td><td>Dealer</td><td>Use your brand logo & theme for client groups</td></tr>
            <tr><td>🚀 Onboarding Support</td><td>All Plans</td><td>Free for Business & Dealer</td></tr>
          </tbody>
        </table>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
        <dl className="space-y-4">
          <div>
            <dt className="font-medium">Q: Can I upgrade from Personal to Business?</dt>
            <dd className="text-gray-600">✅ Yes, anytime — your data is retained and migrated.</dd>
          </div>
          <div>
            <dt className="font-medium">Q: Can a Dealer downgrade to Business?</dt>
            <dd className="text-gray-600">❌ No, but Dealers can manage their own clients as Business users.</dd>
          </div>
          <div>
            <dt className="font-medium">Q: Is GST included in the pricing?</dt>
            <dd className="text-gray-600">GST is applicable as per Indian tax rules.</dd>
          </div>
          <div>
            <dt className="font-medium">Q: Can I get a custom plan for a large hospital?</dt>
            <dd className="text-gray-600">Yes — we offer enterprise pricing for 100+ beds or multi-branch setups.</dd>
          </div>
        </dl>
      </section>

      {/* Final CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">🎯 Need Help Choosing the Right Plan?</h2>
        <p className="text-gray-600">Talk to our team and get personalized recommendations.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded">📞 Contact Sales</a>
          <a href="/book-demo" className="border border-blue-600 text-blue-600 px-6 py-2 rounded">📅 Book a Demo</a>
          <a href="/plan-comparison.pdf" className="bg-gray-100 text-blue-700 px-6 py-2 border rounded">📥 View Full PDF</a>
        </div>
      </section>
    </div>
  );
};

export default Overview;
