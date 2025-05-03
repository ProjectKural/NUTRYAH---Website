import React from "react";

const blogs = [
  { title: "Checklist: What Areas Must Be Digitized for NABH Accreditation?", link: "/blog/digitization-checklist" },
  { title: "How Telemedicine Is Revolutionizing Rural Healthcare Access", link: "/blog/telemedicine-rural" },
  { title: "5 Common Mistakes in Hospital IT Setups and How to Avoid Them", link: "/blog/it-mistakes" },
];

const BlogSection = () => {
  return (
    <section className="relative bg-[var(--bg-text)] text-white text-center py-24 px-6 md:px-12 overflow-hidden">
      
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180 z-0">
        {/* <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-[80px]">
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            className="fill-white"
          ></path>
        </svg> */}
      </div>

      {/* Section Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-12 relative z-10">
        Healthcare Technology Insights
      </h2>

      {/* Blog Cards */}
      <div className="flex flex-col gap-8 max-w-4xl mx-auto relative z-10">
        {blogs.map((blog, idx) => (
          <a
            key={idx}
            href={blog.link}
            className="block bg-white text-black shadow-md rounded-xl p-6 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{blog.title}</h3>
          </a>
        ))}
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-[80px]">
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default BlogSection;
