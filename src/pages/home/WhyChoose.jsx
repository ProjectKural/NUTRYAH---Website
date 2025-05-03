import React from "react";
import { Link } from "react-router-dom";

import { ShieldCheck, Stethoscope, Link2, Zap, Medal } from "lucide-react";
import bgImage from "../../assets/home/rural.jpg";
import Trust from "../../assets/home/built.jpeg";

const reasons = [
  {
    icon: <ShieldCheck size={36} strokeWidth={1.5} className="text-blue-600" />,
    title: "Security First",
    desc: "End-to-end encryption, GDPR, and HIPAA-compliant architecture to keep your patient data safe.",
  },
  {
    icon: <Stethoscope size={36} strokeWidth={1.5} className="text-green-600" />,
    title: "Built for Healthcare",
    desc: "Deep healthcare domain expertise ensures our products meet your operational, clinical, and compliance needs.",
  },
  {
    icon: <Link2 size={36} strokeWidth={1.5} className="text-teal-600" />,
    title: "Easy Integration",
    desc: "Connect seamlessly with existing systems — HL7, FHIR, PACS, LIS, RIS, ABHA-ready APIs.",
  },
  {
    icon: <Zap size={36} strokeWidth={1.5} className="text-yellow-500" />,
    title: "Fast, Reliable Deployment",
    desc: "Launch quickly without disruption, supported by 24/7 implementation and onboarding assistance.",
  },
  {
    icon: <Medal size={36} strokeWidth={1.5} className="text-purple-600" />,
    title: "NABH and ABDM Ready",
    desc: "Our solutions are aligned with India's national healthcare standards, accreditation, and digital health initiatives.",
  },
];

const WhyChooseNutryah = () => {
  return (
    <section className="py-20 px-4 bg-[var(--text-light-bg)] ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[var(--bg-text)]">
          Why Nutryah is Trusted
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 md:min-h-[500px]">
          {/* Row 1: Col 1+2 - reason[1] */}
          <div className="md:col-span-2 bg-[var(--bg-sub-cold)] overflow-hidden shadow-md flex flex-col md:flex-row">
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <div className="mb-4">{reasons[1].icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[var(--bg-text)]">{reasons[1].title}</h3>
              <p className="text-sm text-[var(--bg-text-secondary)]">{reasons[1].desc}</p>
            </div>
            <img
              src={Trust}
              alt="{reasons[1].title}"
              className="w-full md:w-1/2 h-48 md:h-auto object-cover"
            />
          </div>

          {/* Row 1: Col 3 - reason[4] */}
          <div className="bg-[var(--bg-secondary)] text-white p-6 shadow-md flex flex-col justify-center">
            <div className="mb-4">{reasons[4].icon}</div>
            <h3 className="text-lg font-bold mb-2">{reasons[4].title}</h3>
            <p className="text-sm">{reasons[4].desc}</p>
            <div className="text-white/70 text-right text-xl mt-4">↗</div>
          </div>

          {/* Row 2: Col 1 - reason[0] */}
          <div className="bg-[var(--bg-text)] text-white p-6 shadow-md flex flex-col justify-center">
            <div className="mb-4">{reasons[0].icon}</div>
            <h3 className="text-lg font-bold mb-2">{reasons[0].title}</h3>
            <p className="text-sm">{reasons[0].desc}</p>
            <Link
              to="/contact"
              className="mt-4 block text-white border-[1px] text-center py-2 px-4 text-sm font-semibold"
            >
              Talk to Us →
            </Link>
          </div>

          {/* Row 2: Col 2 - reason[2] */}
          <div className="bg-[var(--text-dark)] p-6 shadow-md flex flex-col justify-center text-white">
            <div className="mb-4">{reasons[2].icon}</div>
            <h3 className="text-lg font-bold mb-2 text-white">{reasons[2].title}</h3>
            <p className="text-sm text-white/80">{reasons[2].desc}</p>
          </div>

          {/* Row 2: Col 3 - reason[3] + background image */}
          <div className="relative overflow-hidden shadow-md">
            <img
              src={bgImage}
              alt="{reasons[3].title}"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-end">
              <div>
                <div className="mb-2">{reasons[3].icon}</div>
                <h3 className="text-white font-bold text-lg">{reasons[3].title}</h3>
                <p className="text-white text-sm">{reasons[3].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNutryah;