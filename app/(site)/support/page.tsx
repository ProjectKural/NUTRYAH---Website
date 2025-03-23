import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutryah | Support & Assistance",
  description:
    "Need help? Get expert support for diet plans, consultations, and wellness guidance. Contact Nutryah's support team today.",
  icons: "/images/logo/logo-Nutryah.png",
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
