import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Rocket,
  BookOpen,
} from "lucide-react";
import hero1 from "../../assets/home/hero1.jpg";
import hero2 from "../../assets/home/hero3.jpg";
import hero3 from "../../assets/home/hero2.jpg";

const slides = [
  {
    title: "Innovative Healthcare Software Solutions for Better Patient Care",
    description:
      "Nutryah is a healthcare-focused software solutions company committed to transforming the medical industry through technology.",
    image: hero1,
  },
  {
    title: "Scalable Digital Solutions for Every Healthcare Provider",
    description:
      "From large hospitals and multi-specialty clinics to local pharmacies and diagnostic centers — Nutryah delivers smart, efficient, and scalable software platforms.",
    image: hero2,
  },
  {
    title: "Improving Patient Outcomes and Ensuring Compliance",
    description:
      "Combining healthcare expertise with advanced technology, we help providers streamline workflows, boost outcomes, and meet NABH, HIPAA, and ABDM standards.",
    image: hero3,
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [autoPlay]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[current];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[var(--bg-text)] text-white">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-2 h-full">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-12">
          <div className="space-y-4">
            <p className="uppercase tracking-wide text-sm text-[var(--bg-secondary)]">
              Smart Healthcare Solutions
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[var(--bg-text-cold)]">
              {currentSlide.title}
            </h1>
            <p className="text-sm text-[var(--bg-text-secondary)]">
              {currentSlide.description}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="/contact"
                className="bg-[var(--bg-secondary)] text-[var(--bg-text-cold)] px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"
              >
                <Rocket size={18} /> Let's Contact
              </a>
              <a
                href="/solutions"
                className="border border-[var(--bg-secondary)] text-[var(--bg-secondary)] px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"
              >
                <BookOpen size={18} /> Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-full w-full">
          <img
            src={currentSlide.image}
            alt="Hero Slide"
            className="w-full h-full object-cover"
          />
           <div className="absolute inset-0 bg-black/30 z-0" />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden h-full">
        <div className="relative w-full">
          <img
            src={currentSlide.image}
            alt="Slide"
            className="w-full h-[35vh] object-cover"
          />
          {/* Mobile Bottom Controls */}
          <div className="absolute bottom-4 w-full flex justify-center items-center gap-4 px-4">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-gray-200 rounded-full p-2 shadow text-black"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-white bg-black/60 px-3 py-1 rounded-full text-sm font-medium">
              {current + 1} / {slides.length}
            </span>
            <button
              onClick={nextSlide}
              className="bg-white hover:bg-gray-200 rounded-full p-2 shadow text-black"
            >
              <ChevronRight size={18} />
            </button>
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className="bg-white hover:bg-gray-200 rounded-full p-2 shadow text-black"
            >
              {autoPlay ? <Pause size={18} /> : <Play size={18} />}
            </button>
          </div>
        </div>

        {/* Slide Text Content Below Image */}
        <div className="p-6 bg-white text-center text-black space-y-4">
          <h2 className="text-2xl font-bold">{currentSlide.title}</h2>
          <p className="text-gray-600">{currentSlide.description}</p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="bg-[var(--bg-secondary)] text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"
            >
              <Rocket size={18} /> Demo
            </a>
            <a
              href="/solutions"
              className="border border-[var(--bg-secondary)] text-[var(--bg-secondary)] px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"
            >
              <BookOpen size={18} /> Learn
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Controls */}
      <div className="hidden md:flex absolute bottom-5 right-[45%] bg-white text-black px-4 py-2 rounded-full items-center gap-3 shadow">
        <button onClick={prevSlide}>
          <ChevronLeft size={18} />
        </button>
        <span className="text-sm">
          {current + 1} / {slides.length}
        </span>
        <button onClick={nextSlide}>
          <ChevronRight size={18} />
        </button>
        <button onClick={() => setAutoPlay(!autoPlay)}>
          {autoPlay ? <Pause size={18} /> : <Play size={18} />}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
