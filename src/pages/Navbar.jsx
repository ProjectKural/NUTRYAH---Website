import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import "../styles/Themes.css";
import "../styles/Navbar.css";
import logo from "../../src/assets/logo/logo_bass.svg"

const navItems = [
  {
    label: "Our Platforms",
    sections: [
      { title: "Services", cards: [{ heading: "Learn About Nutryah", description: "Discover our mission to revolutionize healthcare.", link: "/services" }] },
      { title: "Solutions", cards: [{ heading: "Explore Solutions", description: "Smart solutions for hospitals, clinics, labs.", link: "/solutions" }] },
      // { title: "Pricing", cards: [{ heading: "Transparent Pricing", description: "Flexible, scalable plans for your growth.", link: "/pricing" }] },
    ],
  },
  {
    label: "About Nutryah",
    sections: [
      { title: "About", cards: [{ heading: "Who We Are", description: "Transforming healthcare through technology.", link: "/about" }] },
      { title: "Careers", cards: [{ heading: "Join Our Team", description: "Build your career in healthcare IT innovation.", link: "/careers" }] },
      { title: "Contact", cards: [{ heading: "Get In Touch", description: "Reach out to Nutryah experts.", link: "/contact" }] },
    ],
  },
  {
    label: "Learn & Grow",
    sections: [
      { title: "Academy", cards: [{ heading: "Free Learning Hub", description: "Courses, templates, and healthcare insights.", link: "/academy" }] },
      { title: "Blog", cards: [{ heading: "Healthcare Tech Insights", description: "Latest trends, tips, and best practices.", link: "/blog" }] },
      { title: "Case Studies", cards: [{ heading: "Success Stories", description: "How we transformed healthcare operations.", link: "/case-studies" }] },
      { title: "FAQ", cards: [{ heading: "Find Answers", description: "Common questions, clear answers.", link: "/faq" }] },
    ],
  },
  {
    label: "Start Your Journey",
    sections: [
      { title: "Free Audit", cards: [{ heading: "Get a Free Audit", description: "Know your hospital's digital readiness.", link: "/audit" }] },
      { title: "Book a Demo", cards: [{ heading: "Experience Nutryah", description: "Schedule a personalized product walkthrough.", link: "/contact" }] },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [mobileActive, setMobileActive] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsOpen(false);
        setMobileActive(null);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveMenu(null);
    setHoveredSection(null);
    setMobileActive(null);
  };

  const openMegaMenu = (label) => {
    setActiveMenu(activeMenu === label ? null : label);
    setHoveredSection(null);
  };

  return (
    <header
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`${scrolled ? "fixed" : "absolute"} top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || hovering
          ? "bg-[#03468A] shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-12xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="text-3xl font-extrabold tracking-wide text-white">
            <a href="/"><img src={logo} alt="" className='h-[5rem] w-auto object-contain'/></a>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-lg font-semibold">
            {navItems.map((item, idx) => (
              <div key={idx} className="relative">
                <button
                  onClick={() => openMegaMenu(item.label)}
                  className={`flex items-center gap-1 transition ${
                    activeMenu === item.label
                      ? "text-blue-400"
                      : scrolled
                      ? "text-white hover:text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  <motion.span animate={{ rotate: activeMenu === item.label ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
              </div>
            ))}
          </nav>

          <div className="md:hidden text-[var(--md-bg)]">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full bg-[#03468A] border-t border-white py-8 px-10 flex md:flex-row hidden md:flex z-40"
          >
            <div className="w-1/4 pr-8 border-r border-gray-700">
              {navItems.find(item => item.label === activeMenu)?.sections.map((section, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredSection(section)}
                  className={`cursor-pointer p-4 text-lg font-medium rounded-md transition text-white ${
                    hoveredSection?.title === section.title ? "bg-gray-800 text-white" : "hover:bg-gray-700"
                  }`}
                >
                  {section.title}
                </div>
              ))}
            </div>
            <div className="w-12/12 pl-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  text-center">
              {hoveredSection?.cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className=" bg-gray-800  p-6 hover:scale-105 transition shadow-md"
                >
                  <h4 className="text-xl font-bold mb-3 text-white">{card.heading}</h4>
                  <p className="text-gray-400 text-sm mb-4">{card.description}</p>
                  <a href={card.link} className="inline-block mt-2 px-5 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded-full text-white">
                    Know More →
                  </a>
                </motion.div>
              ))}
            </div>
            <button onClick={() => openMegaMenu(null)} className="absolute top-6 right-10 text-2xl text-white">✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu with Overlay Blur + Accordion */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 🔄 Dark Blur Overlay */}
            <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" />

            {/* Mobile Slide Menu */}
            <motion.div
              key="mobile-menu"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-50 bg-black text-white p-6 md:hidden h-[100vh] overflow-y-auto"
              ref={mobileMenuRef}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold">Menu</span>
                <button onClick={toggleMenu}><X size={28} /></button>
              </div>

              <div className="space-y-4">
                {navItems.map((item, idx) => (
                  <div key={idx}>
                    <button
                      onClick={() =>
                        setMobileActive(mobileActive === item.label ? null : item.label)
                      }
                      className="w-full text-left text-lg font-semibold flex justify-between items-center py-2"
                    >
                      {item.label}
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${
                          mobileActive === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileActive === item.label && (
                      <div className="mt-2 space-y-4 pl-2">
                        {item.sections.map((section, idx) => (
                          <div
                            key={idx}
                            className="bg-[#1f2937] rounded-lg p-4 shadow-inner"
                          >
                            <h3 className="text-white text-lg font-bold mb-3">
                              {section.title}
                            </h3>
                            {section.cards.map((card, i) => (
                              <a
                                key={i}
                                href={card.link}
                                className="block text-gray-300 hover:text-white mb-2 pl-2"
                              >
                                • {card.heading}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
