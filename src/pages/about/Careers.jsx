import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import NutryahCareer from '../../assets/career/NutryahCareer.jpg'
import Development from '../../assets/career/Development.jpg'
import Impact from '../../assets/career/Impact.jpg'
import Culture from '../../assets/career/Culture.jpg'
import Projects from '../../assets/career/Projects.jpg'
import WorkLife from '../../assets/career/WorkLife.jpg'
import NutryahFinalOffer from '../../assets/career/NutryahFinalOffer.jpg'
import NutryahInternship from '../../assets/career/NutryahInternship.jpg'

const openings = [
  { position: "Software Engineer (Full Stack)", department: "Product Development", location: "Remote / Coimbatore" },
  { position: "Healthcare IT Business Analyst", department: "Project Management", location: "Remote / Coimbatore" },
  { position: "QA Engineer (Healthcare Domain)", department: "Quality Assurance", location: "Remote" },
  { position: "UI/UX Designer (Healthcare SaaS)", department: "Design Team", location: "Remote" },
  { position: "Marketing Executive (Healthcare IT)", department: "Marketing & Growth", location: "Remote" },
];

const departments = [
  "Product Development (Frontend, Backend, Mobile, QA)",
  "Healthcare IT Consulting",
  "Project Management & Delivery",
  "UI/UX Design & Product Strategy",
  "Data Science & Healthcare Analytics",
  "Sales, Marketing & Customer Success",
];
import { Briefcase, Search, ClipboardCheck, Smile, ThumbsUp } from "lucide-react";
// const processSteps = [
//   "Application Review: We screen applications to match skills and mission alignment.",
//   "Initial Interview: Meet with HR to discuss your background and career goals.",
//   "Technical/Role-Specific Assessment: Show us your skills through an assignment or live discussion.",
//   "Final Interview: Meet leadership to assess team fit and project alignment.",
//   "Offer Rollout: Welcome to Nutryah!",
// ];

const processSteps = [
  {
    title: "Application & Screening",
    description: "Submit your resume through our portal. Our recruitment team shortlists profiles based on qualifications and role alignment.",
    icon: <Search className="w-7 h-7 text-white" />,
    bg: "#2D3250",
    accent: "#F6B17A",
  },
  {
    title: "Initial Interview",
    description: "You'll meet with our hiring team to discuss your background, interests, and fit for the role.",
    icon: <ClipboardCheck className="w-7 h-7 text-white" />,
    bg: "#344C64",
    accent: "#57A6A1",
  },
  {
    title: "Technical Assessment",
    description: "For technical roles, a short assessment helps us understand your problem-solving and domain knowledge.",
    icon: <Briefcase className="w-7 h-7 text-white" />,
    bg: "#578FCA",
    accent: "#A1E3F9",
  },
  {
    title: "Culture Fit & Manager Round",
    description: "Meet with future team leads to explore alignment on values, communication, and collaboration.",
    icon: <Smile className="w-7 h-7 text-white" />,
    bg: "#A4B465",
    accent: "#FFCF50",
  },
  {
    title: "Final Offer",
    description: "If selected, you'll receive an offer outlining role, benefits, and onboarding details. Welcome aboard!",
    icon: <ThumbsUp className="w-7 h-7 text-white" />,
    image: NutryahFinalOffer, // optional background image
  },
];


const careerTabs = [
  {
    key: 'impact',
    label: 'Impact',

    title: 'Meaningful Impact',
    description: 'Your work will help hospitals run more efficiently, enable doctors to reach patients remotely, and improve health outcomes. We’re proud that our daily efforts contribute to better healthcare for communities.',
    image: Impact,
  },
  {
    key: 'growth',
    label: 'Development',

    title: 'Growth & Development',
    description: 'We invest in our people. Expect continuous learning through training, mentorship, and a clear career development path. As we grow, you’ll have opportunities to take on new roles and responsibilities.',
    image: Development,
  },
  {
    key: 'culture',
    label: 'Culture',

    title: 'Collaborative Culture',
    description: 'Work in a supportive, team-oriented environment. We value open communication, idea-sharing, and diversity. Every team member’s input is respected – we solve problems together and celebrate successes together.',
    image: Culture,
  },
  {
    key: 'flexibility',
    label: 'Projects',

    title: 'Innovative Projects',
    description: 'Tackle challenging assignments using the latest technologies (AI, cloud, mobile) to solve real healthcare problems. Every project is an opportunity to learn and innovate.',
    image: Projects,
  },
  {
    key: 'vision',
    label: 'Work-Life',

    title: 'Work-Life Balance',
    description: 'We understand the importance of balance. Flexible work hours, remote work options, and wellness initiatives help our team stay energized and productive.',
    image: WorkLife,
  },
];
const CareersPage = () => {

  const [activeTab, setActiveTab] = useState('impact');
  const current = careerTabs.find(tab => tab.key === activeTab);

  return (
    <div className="careers-page">
      <Helmet>
        <title>Careers at Nutryah | Build the Future of Healthcare Technology</title>
        <meta
          name="description"
          content="Join Nutryah’s dynamic team of healthcare technology innovators. Explore career opportunities in software development, healthcare IT consulting, data science, product management, and more."
        />
      </Helmet>

      {/* Banner */}

      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center text-white"
        style={{ backgroundImage: `url(${NutryahCareer})` }} // Replace with your actual import
      >
        {/* ✅ Overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* ✅ Left-aligned content */}
        <div className="relative z-10 max-w-6xl px-6 md:px-12 lg:px-20 text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Careers at Nutryah – Shape the Future of Digital Healthcare
          </h1>
          <p className="text-lg md:text-2xl text-white/80 max-w-5xl mb-6 font-semibold">
            Join a passionate team where technology meets healthcare excellence. Work on meaningful projects that transform patient care and healthcare operations worldwide.
          </p>
          <a
            href="/contact"
            className="bg-[var(--bg-text)] text-white px-8 py-3  font-semibold hover:opacity-60 transition"
          >
            Apply now
          </a>
        </div>
      </section>

      {/* Why Work at Nutryah */}
      <section className="w-full bg-[var(--bg-text)] text-white py-20 px-4 md:px-12 ">
        <h2 className="text-3xl md:text-5xl font-bold text-left mb-10">Why NUTRYAH</h2>

        {/* Tabs */}
        {/* Mobile (< md): horizontal scroll */}
        <div className="block md:hidden w-full overflow-x-auto border-b border-gray-700 mb-30">
          <div className="flex flex-nowrap min-w-full">
            {careerTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`whitespace-nowrap px-4 py-2 text-base font-medium border-b-2 transition ${activeTab === tab.key
                  ? 'border-blue-500 text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop (md+): equal width, wrapped buttons */}
        <div className="hidden md:flex flex-wrap justify-between border-b-1 border-gray-700  md:mb-12">
          {careerTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 text-center pb-3 text-lg font-medium border-b-2 transition  ${activeTab === tab.key
                ? 'border-blue-500 text-white'
                : 'border-transparent text-gray-400 hover:text-white'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>



        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 ">
          {/* Image */}
          <div className="overflow-hidden   flex justify-center md:h-100">
            <img
              src={current.image}
              alt={current.title}
              className="w-3/4 h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>

            <h3 className="text-3xl md:text-5xl  mb-4 pb-4 ">{current.title}</h3>
            <p className="text-xl md:text-2xl text-gray-300 md:max-w-2/3">{current.description}</p>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      {/* <section className="py-16 px-6 md:px-12 bg-[var(--bg-background-primary)] text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--bg-text)] mb-12">
          Explore Current Opportunities
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left bg-white rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-[var(--bg-secondary)] text-white">
              <tr>
                <th className="p-4">Position</th>
                <th className="p-4">Department</th>
                <th className="p-4">Location</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {openings.map((job, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-4">{job.position}</td>
                  <td className="p-4">{job.department}</td>
                  <td className="p-4">{job.location}</td>
                  <td className="p-4">
                    <a
                      href="/contact"
                      className="bg-[var(--bg-secondary)] text-white px-4 py-2 rounded-full font-semibold hover:bg-teal-600 transition"
                    >
                      Apply Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section> */}

      {/* Departments Section */}
      <section className="py-24 px-6 md:px-16 bg-white text-center overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--bg-text)] mb-4 animate-fadeInUp">
            Departments Hiring at <span className="text-[var(--bg-secondary)]">Nutryah</span>
          </h2>
          <p className="text-4xl text-gray-600 mb-12 animate-fadeInUp delay-200">
            Be part of the healthcare revolution. We're growing fast and hiring across all teams.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeInUp delay-300">
            {departments.map((dept, idx) => (
              <div key={idx} className="bg-[var(--md-bg)] rounded-lg p-6 shadow hover:scale-105 transition transform duration-300 ease-in-out">
                <div className="text-[var(--bg-text)] text-xl font-semibold">{dept}</div>
              </div>
            ))}
          </div>

          <a href="/contact" className="mt-12 inline-block bg-[var(--bg-secondary)] hover:bg-[var(--bg-text)] text-white px-8 py-3 rounded-full font-semibold transition">
            Send Us Your Resume
          </a>
        </div>
      </section>

      {/* Life at Nutryah Section */}
      <section className="py-24 px-6 md:px-16 bg-[var(--bg-secondary)] overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src={Culture}
            alt="Life at Nutryah"
            className="rounded-xl shadow-xl animate-fadeInLeft"
          />
          <div className="text-left animate-fadeInRight">
            <h2 className="text-4xl font-extrabold text-[var(--bg-text)] mb-6">
              Life at Nutryah
            </h2>
            <p className="text-3xl text-gray-700 leading-relaxed">
              At Nutryah, we foster a culture of purpose, growth, and creativity. Collaborate with passionate innovators building world-class healthcare solutions. Your ideas matter. Your impact is real.
            </p>
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="py-20 px-4 bg-[var(--text-light-bg)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[var(--bg-text)]">
            Our Hiring Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 md:min-h-[500px]">
            {processSteps.map((step, idx) => {
              const hasImage = !!step.image;
              return hasImage ? (
                // Final Offer with background image and gradient overlay
                <div
                  key={idx}
                  className="relative overflow-hidden shadow-md"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-end">
                    <div>
                      <div className="mb-2">{step.icon}</div>
                      <h3 className="text-white font-bold text-2xl">{step.title}</h3>
                      <p className="text-white  text-1xl">{step.description}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={idx}
                  className={`bg-[${step.bg}] text-white p-6 shadow-md flex flex-col justify-center animate-fadeInUp`}
                >
                  <div className="mb-4 bg-white/20 p-3 rounded-full w-fit">{step.icon}</div>
                  <h3 className="text-3xl font-bold mb-2" style={{ color: step.accent }}>
                    {step.title}
                  </h3>
                  <p className="text-1xl text-white/90">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internship Program Section */}
      <section className="py-24 px-6 md:px-16 bg-[var(--bg-background-primary)] overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-left animate-fadeInLeft">
            <h2 className="text-4xl font-extrabold text-[var(--bg-text)] mb-6">
              Internship & Early Careers Program
            </h2>
            <p className="text-2xl text-gray-700 mb-6">
              Are you a student or recent graduate passionate about healthcare and technology?
              Kickstart your career with Nutryah's Internship Program and grow alongside world-class mentors.
            </p>
            <a href="/contact" className="bg-[var(--bg-secondary)] hover:bg-[var(--bg-text)] text-white px-8 py-3 rounded-full font-semibold transition">
              Apply for Internship
            </a>
          </div>
          <img
            src={NutryahInternship}
            alt="Internship Program"
            className="rounded-xl shadow-lg animate-fadeInRight"
          />
        </div>
      </section>
      <section className="py-20 px-6 md:px-12 bg-[var(--bg-text)] text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Build the Future of Healthcare with Us?
        </h2>
        <p className="text-lg md:text-2xl mb-10">
          If you’re passionate about innovation, healthcare, and making an impact, we’d love to meet you.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <a href="/contact" className="bg-[var(--bg-secondary)] px-8 py-3 rounded-full font-semibold text-white">
            View Open Positions
          </a>
          <a href="/contact" className="bg-white text-[var(--bg-text)] px-8 py-3 rounded-full font-semibold">
            Submit Your Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
