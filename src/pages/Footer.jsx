import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationPin,

} from "react-icons/fa6";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import axios from "axios";
import logo from "../assets/logo/logo_bass.svg"
const Footer = () => {

  const link = {
    insta: "https://www.instagram.com/nutryah_?igsh=MXZzOHg5d2lrOGJ2Nw==",
    linkedIn: "https://www.linkedin.com/company/nutryah/",

  }

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    // Basic email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  async function handleNewsLatterSubmit(e) {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }

    setError('');

    try {
      const response = await axios.post('http://localhost:8000/leads/newsletter', {
        email: email
      }, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response, "Newsletter");
      alert('Successfully subscribed to newsletter!');
      setEmail(''); // Clear input
    } catch (error) {
      console.log('Newsletter subscription error:', error);
      alert('Something went wrong. Please try again later.');
    }
  }


  return (
    <footer className="bg-[var(--bg-text)] text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Column 1: Brand */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-4"><img src={logo} alt="" className='h-[5rem] w-auto object-contain'/></h2>
          <p className="text-sm text-gray-300">
            Empowering hospitals, clinics, labs, and wellness centers with smart, scalable healthcare IT solutions — built for NABH and ABDM readiness.
          </p>
        </div>

        {/* Column 2: Platforms */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Platforms</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/solutions" className="hover:text-white">Solutions</Link></li>
            <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
          </ul>
        </div>

        {/* Column 3: Learn */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Learn & Grow</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/academy" className="hover:text-white">Academy</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex gap-3 items-start">
              <Mail className="w-5 h-5 mt-1 text-[var(--bg-secondary)]" />
              contact@nutryah.com
            </li>
            <li className="flex gap-3 items-start">
              <Phone className="w-5 h-5 mt-1 text-[var(--bg-secondary)]" />
              +91 88707 87448
            </li>
            <li className="flex gap-3 items-start">
              <MapPin className="w-7 h-7 mt-1 text-[var(--bg-secondary)]" />
              Nutryah Digital Health Pvt Ltd<br />
              Coimbatore, Tamil Nadu, India – 641019
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">

            <a href={link.insta} aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href={link.linkedIn} aria-label="LinkedIn" className="hover:text-blue-700">
              <FaLinkedinIn className="w-6 h-6" />
            </a>

          </div>
        </div>

        {/* Column 5: Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">
            Stay informed on Nutryah updates, new features, and healthcare tech insights.
          </p>
          <form onSubmit={handleNewsLatterSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => {
                setError('')
                setEmail(e.target.value)
              }}
              className="px-4 py-2 rounded-md bg-white text-black text-sm focus:outline-none"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="bg-[var(--bg-secondary)] text-white text-sm py-2 rounded-md hover:bg-teal-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © 2025 Nutryah Digital Health Pvt Ltd. All rights reserved. ·{" "}
        <Link to="/legal" className="underline hover:text-white">Legal & Privacy</Link>
      </div>
    </footer>
  );
};

export default Footer;
