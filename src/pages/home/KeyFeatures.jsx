import React from "react";
import { Hospital, ShieldCheck, Zap, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
import "./Home.css";
import aboutImg from "../../assets/about/about.jpg"; // 🖼️ Your image

const highlights = [
  {
    icon: <Hospital size={36} strokeWidth={1.5} className="text-white" />,
    title: "Trusted by Hospitals & Clinics",
  },
  {
    icon: <ShieldCheck size={36} strokeWidth={1.5} className="text-white" />,
    title: "Secure & HIPAA-Compliant Systems",
  },
  {
    icon: <Zap size={36} strokeWidth={1.5} className="text-white" />,
    title: "Fast Deployment, Scalable Growth",
  },
  {
    icon: <BarChart2 size={36} strokeWidth={1.5} className="text-white" />,
    title: "Real-Time Reporting & Analytics",
  },
];


const QuickIntro = () => {
  return (
    <section className="relative bg-[var(--text-light-bg)] overflow-hidden min-h-[100vh] px-6 md:px-12 flex flex-col justify-center items-center z-10 p-5">

      {/* Top Wave */}
     

      {/* Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="Nutryah About"
            className="w-full max-w-md md:max-w-lg lg:max-w-full h-auto  shadow-xl object-cover "
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8 ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bolder text-[var(--text-dark)] text-left"
          >
            Transform Your Healthcare Operations with Technology Built for Care
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[var(--text-sub-dark)] text-justify text-sm md:text-lg max-w-2xl"
          >
            At Nutryah, we develop powerful, intuitive healthcare software designed to meet the real-world needs of hospitals, clinics, pharmacies, and diagnostic centers.
          </motion.p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[var(--text-dark)]   p-5 flex items-center gap-4 group transition-all"
              >
                <div className="group-hover:scale-140 transition-transform">{item.icon}</div>
                <p className="text-sm font-medium text-[var(--text-sub-text)]">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-[80px]">
          <path d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="fill-white" />
        </svg>
      </div>

      {/* Floating Blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-40 h-40 bg-teal-400 rounded-full blur-3xl top-20 left-1/4 animate-pulse" />
        <div className="absolute w-32 h-32 bg-indigo-400 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />
      </div>
    </section>
  );
};

export default QuickIntro;
