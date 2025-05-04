import React from 'react';

import "../../styles/Themes.css";
import "./Home.css";
import { div } from 'framer-motion/client';
import HeroSection from './HeroSection';
import KeyFeatures from './KeyFeatures';
import AboutNUTRYAh from './CoreSolutions';
import ProductModules from './ProductModules';
import { RoleWiseSolution } from './RoleWiseSolution';
import WhyChoose from './WhyChoose';
import CaseStudies from './CaseStudies';
import FinalCTA from './FinalCTA';
import Footer from '../Footer';
import { Helmet } from 'react-helmet-async';
import WhatsAppChat from '../components/WhatsAppChat';

const Home = () => {

  return (
    <div>
      <Helmet>
        <title>Nutryah | Innovative Healthcare Software Solutions</title>
        <meta
          name="description"
          content="Nutryah provides innovative, efficient, and scalable digital healthcare solutions for hospitals, clinics, pharmacies, and more. Transform patient care and operational efficiency with our software."
        />
        <link rel="canonical" href="https://nutryah.com/" />
      </Helmet>
      <HeroSection />
      <KeyFeatures />

      <AboutNUTRYAh />
      <WhyChoose />
      <ProductModules />
      {/* <RoleWiseSolution /> */}

      <CaseStudies />
      <FinalCTA />

    </div>
  );
};

export default Home;
