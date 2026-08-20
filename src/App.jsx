import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CallbackWidget from './components/CallbackWidget';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ProjectsListing from './pages/ProjectsListing';
import ProjectDetail from './pages/ProjectDetail';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import Disclaimer from './pages/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

// Helper component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-off-white text-primary-navy">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/projects" element={<ProjectsListing />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <CallbackWidget />
      </div>
    </Router>
  );
}
