import {
    Mail,
    Phone,
    Clock,
    MapPin,
    Building2,
  } from "lucide-react";
  import bgImage from "../../assets/contact/contact-hero.jpg";
  
  export default function NutryahContactForm() {
    return (
      <section className="min-h-screen bg-[#0e0e12] text-white px-4 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          {/* Left: Form Section */}
          <div className="space-y-10">
            {/* Header */}
            <div>
              <button className="text-sm text-gray-400 hover:underline mb-4 block">
                &larr; BACK
              </button>
              <div className="flex items-center gap-3 mb-4 text-blue-400">
                <Building2 className="w-5 h-5" />
                <h2 className="text-lg font-semibold tracking-widest uppercase">Request for Services</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-xl">
                At Nutryah, we drive purposeful transformation across healthcare systems. Tell us more about yourself so we can connect you to the right team.
              </p>
            </div>
  
            {/* Form */}
            <form className="space-y-8 text-base">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-1">First Name*</label>
                  <input
                    type="text"
                    required
                    className="bg-transparent border-b border-gray-600 w-full py-2 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Last Name*</label>
                  <input
                    type="text"
                    required
                    className="bg-transparent border-b border-gray-600 w-full py-2 focus:outline-none"
                  />
                </div>
              </div>
  
              {/* Email / Org */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-1">Email*</label>
                  <input
                    type="email"
                    required
                    className="bg-transparent border-b border-gray-600 w-full py-2 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Organization*</label>
                  <input
                    type="text"
                    required
                    className="bg-transparent border-b border-gray-600 w-full py-2 focus:outline-none"
                  />
                </div>
              </div>
  
              {/* Industry */}
              <div>
                <label className="block text-sm mb-1">Industry*</label>
                <select
                  required
                  className="bg-transparent border-b border-red-500 w-full py-2 focus:outline-none"
                >
                  <option value="">Select Industry</option>
                  <option>Healthcare</option>
                  <option>Diagnostics</option>
                  <option>Hospitals</option>
                </select>
                <p className="text-red-500 text-xs mt-1">This field is mandatory</p>
              </div>
  
              {/* Message */}
              <div>
                <label className="block text-sm mb-1">How can we help you?*</label>
                <textarea
                  className="bg-transparent border-b border-red-500 w-full py-2 focus:outline-none resize-none"
                  rows={4}
                  required
                ></textarea>
                <p className="text-red-500 text-xs mt-1">This field is mandatory</p>
              </div>
  
              {/* Consent */}
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" required />
                  <span>I consent to processing of my personal data for Nutryah to contact me. *</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>I’d like to receive updates about Nutryah products, services, and events.</span>
                </div>
                <p className="text-gray-500 text-xs mt-2">
                  For details on how we use your data, refer to our{" "}
                  <a href="#" className="underline">Privacy Policy</a>.
                </p>
                <p className="text-gray-400 text-xs italic">*Mandatory fields</p>
              </div>
  
              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
              >
                Send
              </button>
            </form>
          </div>
  
          {/* Right: Image */}
          <div className="hidden md:block h-full w-full">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={bgImage}
                alt="Professional"
                className="w-full h-[600px] object-cover grayscale opacity-90"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  