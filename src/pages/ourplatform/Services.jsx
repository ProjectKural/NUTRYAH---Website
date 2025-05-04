import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Stethoscope,
  Link2,
  Smartphone,
  BarChart4,
  Cloud,
  Wrench,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Slider from "react-slick";
import HeroImage from "../../assets/service/service-hero.jpg";
import DeliveryMethodology from "../../assets/service/deliveryMethodology.png";
import empower from "../../assets/service/empower.jpeg";
import Interoperability from "../../assets/service/Interoperability.jpeg";
import Telehealth from "../../assets/service/Telehealth.jpeg";
import AISolutions from "../../assets/service/AI Solutions.jpeg";
import IoT from "../../assets/service/IoT.jpeg";
import Support from "../../assets/service/Support.jpeg";
import Custom from "../../assets/service/Custom.jpeg";
import "./service.css"
import { Link as ScrollLink, Element, Events, scrollSpy } from "react-scroll";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

import Step1 from "../../assets/service/Consulting.jpeg";
import Step2 from "../../assets/service/Architecture.jpeg";
import Step3 from "../../assets/service/Development.jpeg";
import Step4 from "../../assets/service/Training.jpeg";
import Step5 from "../../assets/service/Post.jpeg";
const steps = [
  {
    id: "step1",
    title: "Discovery & Consulting",
    description: "Understanding your healthcare workflows and technology needs.",
    image: Step1,
  },
  {
    id: "step2",
    title: "Design & Architecture",
    description: "Blueprinting user flows, compliance structures, and integrations.",
    image: Step2,
  },
  {
    id: "step3",
    title: "Agile Development",
    description: "Iterative builds, constant testing, client feedback loops.",
    image: Step3,
  },
  {
    id: "step4",
    title: "Implementation & Training",
    description: "Seamless rollout with end-user training and support documentation.",
    image: Step4,
  },
  {
    id: "step5",
    title: "Post-launch Support",
    description: "24/7 support desk, maintenance plans, and quarterly optimization reviews.",
    image: Step5,
  },
];

const services = [
  {
    icon: <Stethoscope size={40} className="text-teal-600" />,
    title: "Custom Healthcare Software Development",
    short: "User-friendly, regulation-compliant systems that improve operational efficiency and patient experience.",
    full:
      "Building tailored software applications for healthcare. Whether you need an Electronic Health Record (EHR) system, a patient portal, or a clinic management app, our developers create secure, user-friendly solutions optimized for your workflows and compliance requirements.",
    image: Custom,
  },
  {
    icon: <Link2 size={40} className="text-blue-600" />,
    title: "System Integration & Interoperability",
    short: "Eliminate data silos, streamline workflows, and enhance clinical decision-making.",
    full:
      "We connect disparate systems (EHRs, laboratory systems, billing software, etc.) for seamless data flow across your organization. By enabling interoperability and HL7/FHIR integrations, we help eliminate data silos so your staff can access accurate information when and where they need it.",
    image: Interoperability,
  },
  {
    icon: <Smartphone size={40} className="text-indigo-600" />,
    title: "Telehealth & Mobile Health Apps",
    short: "Increase accessibility for patients while maintaining continuity of care.",
    full:
      "Expand care beyond physical walls with telemedicine platforms and mobile health apps. We develop secure video consultation systems, remote monitoring tools, and patient engagement apps that let you deliver care anytime, anywhere – improving accessibility and convenience for patients.",
    image: Telehealth,
  },
  {
    icon: <BarChart4 size={40} className="text-green-600" />,
    title: "Healthcare Analytics & AI Solutions",
    short: "Make faster, data-driven decisions to improve care quality and optimize operations.",
    full:
      "Unlock insights from your healthcare data. Our analytics services include developing dashboards for real-time monitoring, reporting systems for clinical and operational metrics, and AI-driven tools for predictive analytics. Make informed decisions, identify trends (like patient readmission risks or inventory needs), and enhance outcomes with data-driven intelligence.",
    image: AISolutions,
  },
  {
    icon: <Cloud size={40} className="text-cyan-600" />,
    title: "Cloud & IoT for Healthcare",
    short: "Reliable access to patient records and systems anytime, from anywhere — with reduced infrastructure costs.",
    full:
      "Leverage the power of cloud computing and smart devices in healthcare. We help migrate or deploy healthcare applications on the cloud for scalability and easy remote access. Our IoT implementations enable connected medical devices and sensors to integrate with your IT systems – for example, remote patient monitoring devices sending data directly to your clinic’s system – all with robust security and compliance.",
    image: IoT,
  },
  {
    icon: <Wrench size={40} className="text-pink-600" />,
    title: "Ongoing Support & Maintenance",
    short: "Maximize your IT investments and focus on what matters most — patient care.",
    full:
      "Ensure your systems run smoothly with our post-deployment support. We offer maintenance services, regular updates (including security patches), and technical support to resolve issues quickly. Our team monitors performance and provides enhancements as needed, so your healthcare operations never miss a beat due to IT issues.",
    image: Support,
  },

];
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/3 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full shadow"
      onClick={onClick}
    >
      <ChevronRight size={24} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-1/3 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full shadow"
      onClick={onClick}
    >
      <ChevronLeft size={24} />
    </div>
  );
};

const ServicesPage = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const [activeStep, setActiveStep] = useState(steps[0].id);

  useEffect(() => {
    Events.scrollEvent.register("begin", () => { });
    Events.scrollEvent.register("end", () => { });
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div className="services-page font-sans text-[var(--bg-text)]">
      <Helmet>
        <title>Nutryah | Services – Healthcare IT Solutions</title>
        <meta
          name="description"
          content="Explore Nutryah’s range of healthcare IT services including custom development, integration, analytics, telehealth, and ongoing support."
        />
      </Helmet>

      {/* HERO */}
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center px-6 md:px-20 text-white"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Healthcare IT Services Designed for Modern Care Providers
          </h1>
          <p className="text-lg md:text-2xl text-white/90">
            Digital transformation for hospitals, clinics, and wellness centers — built with NABH-aligned workflows and real-world experience.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative w-full h-screen bg-[var(--md-bg)] text-black overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <svg
            className="absolute top-0 left-0 w-full h-full object-cover"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f1f5f9"
              d="M0,64L48,96C96,128,192,192,288,202.7C384,213,480,171,576,160C672,149,768,171,864,154.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Empowering Healthcare Operations Through Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mb-8">
              Nutryah provides comprehensive software development, integration, and support services for healthcare institutions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[var(--bg-secondary)] text-[var(--bg-text)] px-8 py-3 font-semibold hover:opacity-90 transition"
            >
              📞 Talk to an Expert
            </a>
          </div>
          <div className="relative flex justify-center items-center">
            <div
              className="absolute w-[110%] h-[120%] -z-0 bg-[var(--bg-secondary)]"
              style={{
                clipPath: "polygon(0% 0%, 100% 10%, 80% 100%, 0% 80%)",
              }}
            ></div>
            <img
              src={empower}
              alt="Healthcare Visual"
              className="w-full max-w-md md:max-w-lg z-10 relative"
            />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative w-full bg-[var(--md-bg)] text-black px-4 sm:px-6 md:px-12 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4">
              Our Specialized Healthcare IT Services
            </h2>
            <p className="text-gray-600 max-w-2xl text-base sm:text-lg">
              Discover our tailored solutions designed to streamline operations and enhance patient care.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <Slider {...settings}>
              {services.map((service, idx) => (
                <div key={idx} className="px-2">
                  <div className="bg-white  shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Background Image */}
                    <div
                      className="h-80 bg-cover bg-center "
                      style={{
                        backgroundImage: `url(${service.image})`,
                      }}
                    ></div>

                    {/* Card Body */}
                    <div className="p-5 flex flex-col justify-between h-[100%]">
                      <div>
                        <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600">
                          {expandedCard === idx ? service.full : service.short}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleExpand(idx)}
                        className="mt-4 text-sm text-blue-600 font-semibold hover:underline flex items-center gap-1"
                      >
                        {expandedCard === idx ? "View Less" : "View More"}{" "}
                        {expandedCard === idx ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>



      <section className="w-full bg-[var(--md-bg)] py-20 px-4 md:px-12">
  <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
    Our Proven Delivery Methodology
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {/* Scrollspy Navigation */}
    <div className="md:col-span-1">
      {/* Mobile Sticky Horizontal Nav */}
      <div className="md:hidden sticky top-16 z-10 bg-[var(--md-bg)] overflow-x-auto flex gap-3 border-b pb-3 pt-2 mb-6">
        {steps.map((step, idx) => (
          <ScrollLink
            key={step.id}
            to={step.id}
            smooth={true}
            duration={500}
            offset={-100}
            spy={true}
            onSetActive={() => setActiveStep(step.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-full border-2 text-sm font-medium cursor-pointer transition-all ${
              activeStep === step.id
                ? "border-blue-600 text-blue-600 bg-white"
                : "border-gray-200 text-gray-600"
            }`}
          >
            0{idx + 1} {step.title}
          </ScrollLink>
        ))}
      </div>

      {/* Desktop Sticky Vertical Nav */}
      <div className="hidden md:block sticky top-32 space-y-4">
        <p className="text-xs font-bold tracking-widest text-gray-600 uppercase">
          Our Solutions
        </p>
        {steps.map((step, idx) => (
          <ScrollLink
            key={step.id}
            to={step.id}
            smooth={true}
            duration={500}
            offset={-100}
            spy={true}
            onSetActive={() => setActiveStep(step.id)}
            className={`block border-l-4 pl-4 py-2 cursor-pointer transition-all ${
              activeStep === step.id
                ? "border-blue-600 text-blue-600 font-semibold"
                : "border-transparent text-gray-700 hover:text-blue-500"
            }`}
          >
            <span className="text-sm font-semibold">0{idx + 1}</span>
            <div className="text-base">{step.title}</div>
          </ScrollLink>
        ))}
      </div>
    </div>

    {/* Content Panels */}
    <div className="md:col-span-3 space-y-20">
      {steps.map((step) => (
        <Element key={step.id} name={step.id} id={step.id}>
          <div className="p-6 md:p-10 rounded-xl shadow-sm bg-white md:flex md:items-center gap-10 h-auto relative overflow-hidden">
            {/* Text */}
            <div className="md:w-2/3 z-10">
              <p className="text-xs uppercase text-gray-500 font-semibold mb-2">
                Our Solutions
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                {step.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-5">
                {step.description}
              </p>
              <a
                href="/contact"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn more →
              </a>
            </div>

            {/* Image with Background Shape (Always Visible) */}
            <div className="relative w-full md:w-1/3 mt-6 md:mt-0">
              <div
                className="absolute inset-0 -z-10 rounded-xl"
                style={{
                  backgroundColor: "#3B82F6",
                  clipPath: "polygon(10% 0%, 100% 10%, 90% 100%, 0% 90%)",
                }}
              ></div>
              <img
                src={step.image}
                alt={step.title}
                className="w-full rounded-lg shadow-md relative z-10"
              />
            </div>
          </div>
        </Element>
      ))}
    </div>
  </div>
</section>




      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-[var(--bg-text)] text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Digitize Your Healthcare Facility?
        </h2>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-10 text-white/90">
          From hospital automation to remote patient engagement, we build the technology so you can focus on what matters most — patient care.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="/contact"
            className="bg-[var(--bg-sub-cold)] text-[var(--bg-text)] px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
          >
            Schedule a Free Consultation
          </a>
          <a
            href="/downloads/service-brochure.pdf"
            className="bg-[var(--md-bg)] text-[var(--bg-text)] px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
          >
             Download Service Brochure
          </a>
        </div>
      </section>
    </div>
  );
};

// ✅ Inline GridCard component
const GridCard = ({ service, idx, col, expandedCard, toggleExpand }) => {
  return (
    <div className={`relative rounded-xl overflow-hidden group shadow hover:shadow-lg transition-all duration-300 ${col}`}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all duration-500"
        style={{ backgroundImage: `url(${service.image || "/assets/placeholder.jpg"})` }}
      ></div>
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300 z-10"></div>
      <div className="relative z-20 h-full w-full flex flex-col justify-between p-6 text-white">
        <div>
          <p className="text-xs uppercase text-blue-300 mb-1">Service</p>
          <h3 className="text-xl font-bold leading-snug">{service.title}</h3>
        </div>
        <p className={`text-sm text-gray-200 ${expandedCard === idx ? '' : 'line-clamp-3'}`}>
          {expandedCard === idx ? service.full : service.short}
        </p>
        <button
          onClick={() => toggleExpand(idx)}
          className="mt-4 flex items-center gap-1 text-sm text-blue-300 font-semibold hover:underline"
        >
          {expandedCard === idx ? "View Less" : "View More"}{" "}
          {expandedCard === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
