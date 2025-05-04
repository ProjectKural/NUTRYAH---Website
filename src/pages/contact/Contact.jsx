import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import contactBg from "../../assets/contact/contact-hero.jpg";

import axios from "axios"
import {
  Building2,
  LineChart,
  PhoneCall,
  PieChart,
  Users,
  Handshake,
  HelpCircle,
} from "lucide-react"
import { useNavigate } from "react-router-dom";

const inquiries = [
  { label: "Service Request", icon: <Building2 className="w-6 h-6" /> },
  { label: "Investor Hub", icon: <LineChart className="w-6 h-6" /> },
  { label: "Media Center", icon: <PhoneCall className="w-6 h-6" /> },
  { label: "Market Insights", icon: <PieChart className="w-6 h-6" /> },
  { label: "Community Work", icon: <Users className="w-6 h-6" /> },
  { label: "Partner With Us", icon: <Handshake className="w-6 h-6" /> },
  { label: "Customer Support", icon: <HelpCircle className="w-6 h-6" /> },
];



const ContactPage = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [organization_name, setOrganizationName] = useState()
  const [inquiry_type, setInquiryType] = useState()
  const [message, setMessage] = useState()
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate()

  const validateForm = () => {
    if (!name.trim()) return "Name is required";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Valid email is required";
    if (!phone.trim() || !/^\d{10}$/.test(phone)) return "Valid 10-digit phone number is required";
    if (!organization_name.trim()) return "Organization name is required";
    if (!inquiry_type.trim()) return "Inquiry type is required";
    if (!message.trim()) return "Message is required";
    return null; // No errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      alert(error); // or set an error state
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/leads/contact', {
        "full_name": name,
        "email": email,
        "phone": phone,
        "organization_name": organization_name,
        "inquiry_type": inquiry_type,
        "message": message
      }, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response, "Newsletter");
      setName('')
      setEmail('')
      setPhone('')
      setInquiryType('')
      setMessage('')
      setOrganizationName('')
      alert('Thank You! Our team will get back to you within 24 hours.');
      // setSubmitted(true); // Clear input
    } catch (error) {
      console.log('Newsletter subscription error:', error);
      alert('Something went wrong. Please try again later.');
    }

    // Proceed to submit using axios or similar
    console.log("Submitting:", { name, email, phone, organization_name, inquiry_type, message });
  };

  const submitForm = async (data) => {
    const csrfToken = getCookie("csrf_token"); // helper to get cookie value

    await axios.post("/api/contact", data, {
      headers: {
        "X-CSRF-Token": csrfToken
      },
      withCredentials: true
    });
  };

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
  }

  return (
    <div className="contact-page">
      <Helmet>
        <title>Nutryah | Contact Us – Get in Touch</title>
        <meta
          name="description"
          content="Have questions or ready to transform your healthcare operations? Contact Nutryah. Reach out via phone, email, or our online form to connect with our team for a consultation or support."
        />
        <link rel="canonical" href="https://nutryah.com/contact" />
      </Helmet>

      {/* Hero Section with Background Image */}
      {/* <section
        className="min-h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-6 md:px-12 text-white relative"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Get in Touch with Nutryah</h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            We’re here to answer your questions and discuss how our healthcare software solutions can benefit your organization. Whether you’re looking for more information, a product demo, or a consultation, our team is ready to help.
          </p>
        </div>
      </section> */}

      <section className="min-h-screen bg-black text-white px-6 py-20 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          {/* Heading Row */}
          <div className="grid md:grid-cols-2 gap-6 items-start mb-16">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Get in Touch with Nutryah
            </h1>
            <p className="text-gray-400 text-3xl max-w-xl md:mt-2">
              We’re here to answer your questions and discuss how our healthcare software solutions can benefit your organization.
            </p>
          </div>

          {/* 3 Inquiry Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service Request */}
            <div className="bg-black border border-white/20 rounded-xl p-6 text-center hover:bg-white hover:text-black transition duration-300" onClick={() => {
              navigate('/service/request')
            }}>
              <div className="mb-4 text-blue-400" >
                <Building2 className="w-6 h-6 mx-auto" />
              </div>
              <h3 className="font-semibold text-3xl">Service Request</h3>
            </div>

            {/* Investor Hub */}
            <div className="bg-black border border-white/20 rounded-xl p-6 text-center hover:bg-white hover:text-black transition duration-300" onClick={() => {
              navigate('/service/audit')
            }}>
              <div className="mb-4 text-blue-400">
                <LineChart className="w-6 h-6 mx-auto" />
              </div>
              <h3 className="font-semibold text-3xl">Free Audit</h3>
            </div>

            {/* Media Center */}
            <div className="bg-black border border-white/20 rounded-xl p-6 text-center hover:bg-white hover:text-black transition duration-300">
              <div className="mb-4 text-blue-400">
                <PhoneCall className="w-6 h-6 mx-auto" />
              </div>
              <h3 className="font-semibold text-3xl">Customer Support</h3>
            </div>
          </div>

          {/* Looking for something else? */}
          <div className="mt-16">
            <p className="text-gray-400 text-2xl mb-4">Looking for something else?</p>
            <div className="flex flex-wrap gap-x-10 gap-y-4 text-white font-semibold text-base">
              <a href="#" className="flex items-center gap-4 group text-2xl">
                Market Insights
                <span className="inline-block transform group-hover:translate-x-1 transition">
                  →
                </span>
              </a>
              <a href="#" className="flex items-center gap-4 group text-2xl">
                Community Work
                <span className="inline-block transform group-hover:translate-x-1 transition">
                  →
                </span>
              </a>
              <a href="#" className="flex items-center gap-4 group text-2xl">
                Partner With Us
                <span className="inline-block transform group-hover:translate-x-1 transition">
                  →
                </span>
              </a>
              
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default ContactPage;
