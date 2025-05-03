import React from "react";
import { ArrowRight } from "lucide-react";

// Replace these with your actual images
import bg1 from "../../assets/home/multispecial.jpeg";
import bg2 from "../../assets/home/chain.jpeg";
import bg3 from "../../assets/home/ruralclinic.jpeg";

const stories = [
  {
    id: "01",
    client: "Multi-Specialty Hospital",
    result: "30% faster discharge with Nutryah HMS across 500+ beds.",
    image: bg1,
  },
  {
    id: "02",
    client: "Pharmacy Chain",
    result: "40% fewer stock-outs using smart inventory analytics.",
    image: bg2,
  },
  {
    id: "03",
    client: "Rural Clinic Network",
    result: "Enabled 2,000+ teleconsults in underserved areas.",
    image: bg3,
  },
];

const SuccessStories = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-[var(--text-light-bg)] ">
      <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-12 text-center">
        Real Outcomes. Real Impact.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {stories.map((story, idx) => (
          <div
            key={idx}
            className="relative h-[420px]  overflow-hidden shadow-lg group"
          >
            {/* Background Image */}
            <img
              src={story.image}
              alt={story.client}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-300" />

            {/* Animated Glowing Number */}
            <span
              className="absolute bottom-4 left-4 text-5xl md:text-6xl font-extrabold text-white/30 
                         transition-all duration-700 ease-in-out group-hover:translate-y-[-4px] 
                         group-hover:opacity-100 opacity-80 drop-shadow-md"
              style={{
                textShadow: "0 0 12px rgba(255,255,255,0.4)",
              }}
            >
              {story.id}
            </span>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
              <div>
                <h3 className="text-2xl font-semibold mb-3">{story.client}</h3>
                <p className="text-sm text-white/90">{story.result}</p>
              </div>
              <div className="flex justify-end items-center mt-4">
                <ArrowRight className="w-6 h-6 text-white opacity-80 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/case-studies"
          className="inline-block bg-[var(--bg-sub-cold)] text-[var(--text-dark)] px-8 py-4  font-semibold hover:bg-[var(--text-dark)] hover:text-[var(--bg-sub-cold)] transition"
        >
          Explore Full Case Studies
        </a>
      </div>
    </section>
  );
};

export default SuccessStories;
