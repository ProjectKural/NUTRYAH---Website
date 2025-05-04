import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export const LegalPage = () => {
    return (
        <div className="px-6 md:px-12 py-20 max-w-5xl mx-auto">
            <Helmet>
                <title>Nutryah | Privacy Policy & Legal Information</title>
                <meta name="description" content="Review Nutryah’s legal policies, including our Privacy Policy, Terms of Use, and compliance with healthcare regulations. Your privacy and data security are our priority." />
            </Helmet>

            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">Privacy Policy & Legal Information</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-3">Privacy Policy</h2>
                <p className="text-gray-700 mb-4">Your privacy is important to us. This section explains how Nutryah collects, uses, and protects your information:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Data Collection:</strong> We only collect personal info you provide (e.g., name, contact details) or via cookies/analytics to improve your browsing experience.</li>
                    <li><strong>Use of Information:</strong> Used only for intended purposes like inquiry responses. We never sell/share for marketing.</li>
                    <li><strong>Data Security:</strong> Industry-standard safeguards (HIPAA, privacy laws) keep your data secure and private.</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-3">Terms of Use</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Website Content:</strong> All blog/articles are general info — not medical/legal advice.</li>
                    <li><strong>Intellectual Property:</strong> All content is owned by Nutryah and protected. Don’t reuse without permission.</li>
                    <li><strong>User Responsibilities:</strong> Use site lawfully. Don’t compromise security or misuse content.</li>
                    <li><strong>No Warranty:</strong> We try to stay updated but don’t guarantee 100% accuracy.</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-3">Compliance & Disclaimer</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Healthcare Regulations:</strong> We comply with HIPAA, patient data privacy, NABH/ABDM standards.</li>
                    <li><strong>No Medical Advice:</strong> We don’t offer clinical services. Content is informational only.</li>
                </ul>
            </section>

            <p className="text-sm text-gray-500">
                For any clarifications, feel free to <Link to="/contact" className="text-blue-600 underline">contact us</Link>.
            </p>
        </div>
    );
};