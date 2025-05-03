import React from "react";
import auditImage from "../../assets/contact/contact-hero.jpg";

const NutryahAuditForm = ({
    handleSubmit,
    handleChange,
    formData,
    errors,
}) => {
    return (
        <div className="min-h-screen bg-[#1A1A2E] text-white flex items-center justify-center px-4">
            <div className="max-w-7xl w-full flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl items-stretch">
                {/* Left: Image Section */}
                <div className="w-full md:w-2/5 h-full">
                    <div className="h-full w-full">
                        <img
                            src={auditImage}
                            alt="Professional"
                            className="w-full h-full object-cover grayscale opacity-90"
                        />
                    </div>
                </div>

                {/* Right: Form Section */}
                <div className="w-full md:w-3/5 bg-[#1A1A2E] p-10 space-y-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Request a Free Audit</h2>
                    <p className="text-gray-300 mb-8">
                        We help you grow with digital transformation. Tell us about yourself and let's get started.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Full Name */}
                        <div>
                            <label className="block mb-1 font-medium">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full p-3 rounded bg-[#2D2D44] text-white"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Organization */}
                        <div>
                            <label className="block mb-1 font-medium">Organization Name</label>
                            <input
                                type="text"
                                name="organization"
                                className="w-full p-3 rounded bg-[#2D2D44] text-white"
                                placeholder="Company Inc."
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 font-medium">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full p-3 rounded bg-[#2D2D44] text-white"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block mb-1 font-medium">Mobile Number</label>
                            <input
                                type="tel"
                                name="phone"
                                className="w-full p-3 rounded bg-[#2D2D44] text-white"
                                placeholder="9876543210"
                            />
                        </div>

                        {/* Facility */}
                        <div>
                            <label className="block mb-1 font-medium">Type of Facility</label>
                            <select
                                name="facility"
                                className="w-full p-3 rounded bg-[#2D2D44] text-white"
                            >
                                <option value="">Select</option>
                                <option>Hospital</option>
                                <option>Clinic</option>
                                <option>Pharmacy</option>
                                <option>Diagnostic Center</option>
                                <option>Nursing Home</option>
                                <option>AYUSH Center</option>
                            </select>
                        </div>

                        {/* Digital Goals */}
                        <div>
                            <label className="block mb-1 font-medium">Primary Digital Goals</label>
                            <div className="space-y-2">
                                {[
                                    "NABH Preparation",
                                    "EHR Adoption",
                                    "Workflow Optimization",
                                    "Patient Engagement Tools",
                                    "Other",
                                ].map((goal) => (
                                    <label key={goal} className="block text-sm">
                                        <input type="checkbox" name="digitalGoals" className="mr-2" />
                                        {goal}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* System Status */}
                        <div>
                            <label className="block mb-1 font-medium">Current System Status</label>
                            <select
                                name="systemStatus"
                                className="w-full p-3 rounded bg-[#2D2D44] text-white"
                            >
                                <option value="">Select</option>
                                <option>Fully Digital</option>
                                <option>Partially Digital</option>
                                <option>Paper-Based</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#0066FF] hover:bg-[#0056d6] text-white rounded-full font-semibold transition"
                        >
                            Submit Free Audit Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NutryahAuditForm;
