import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact'; // example
import Emr from './pages/products/Emr';
import { Opd } from './pages/products/Opd';
import { Billing } from './pages/products/Billing';
import { Lis } from './pages/products/Lis';
import { Ris } from './pages/products/Ris';
import { Pharmacy } from './pages/products/Pharmacy';
import { Emergency } from './pages/products/Emergency';
import { Patient } from './pages/products/Patient';
import { Hr } from './pages/products/Hr';
import { Analytics } from './pages/products/Analytics';
import Footer from './pages/Footer';
import About from './pages/about/About';
import { Overview } from './pages/plans/Overview';
import Services from './pages/ourplatform/Services';
import Solutions from './pages/ourplatform/Solutions';
import PricingPage from './pages/ourplatform/Pricing';
import AboutPage from './pages/about/About';
import CareersPage from './pages/about/Careers';
import AcademyPage from './pages/Learn & Grow/AcademyPage';
import BlogPage from './pages/Learn & Grow/BlogPage';
import CaseStudiesPage from './pages/Learn & Grow/CaseStudies';
import FAQPage from './pages/Learn & Grow/FAQPages';
import AuditPage from './pages/startyourjourney/AuditPage';
import { LegalPage } from './pages/about/LegalPage';
import WhatsAppChat from '../src/pages/components/WhatsAppChat';
import CookieConsent from './CookieConsent';
import NutryahContactForm from './pages/contact/NutryahContactForm';
import NutryahAuditForm from './pages/contact/NutryahAudit';
import GoogleAnalytics from './lib/GoogleAnalytics';



function App() {
  const location = useLocation();
  const saveUTMCookies = () => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");

    if (utmSource) {
      document.cookie = `utm_source=${utmSource}; path=/; max-age=${60 * 60 * 24 * 30}`;
    }
  };

  useEffect(() => {
    saveUTMCookies();
  }, []);

  const hideNavbarRoutes = ['/service/request','/service/audit'];
  return (


    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <CookieConsent />
      <WhatsAppChat />
      <GoogleAnalytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/audit" element={<AuditPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/service/request" element={<NutryahContactForm />} />
        <Route path="/service/audit" element={<NutryahAuditForm />} />



        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/about-NUTRYAH" element={<About />} />
        <Route path="/plans/plans-and-pricing" element={<Overview />} />

        <Route path="/products/emr-system" element={<Emr />}/>
        <Route path="/products/opd-ipd-management" element={<Opd />}/>
        <Route path="/products/hospital-billing-software" element={<Billing />}/>
        <Route path="/products/lis-lab-information-system" element={<Lis />}/>
        <Route path="/products/ris-radiology-module" element={<Ris />}/>
        <Route path="/products/pharmacy-emr" element={<Pharmacy />}/>
        <Route path="/products/emergency-icu-module" element={<Emergency />}/>
        <Route path="/products/patient-portal" element={<Patient />}/>
        <Route path="/products/hospital-Inventory-Management-system" element={<Hr />}/>
        <Route path="/products/hospital-Patient-dashboard" element={<Analytics />}/> */}
      </Routes>
      {!hideNavbarRoutes.includes(location.pathname) && <Footer/>}
    </>

  );
}

export default App;
