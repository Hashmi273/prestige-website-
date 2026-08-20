import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Building2, Home as HomeIcon, Briefcase } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyInfo';
import Modal from './Modal';
import EnquiryForm from './EnquiryForm';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Projects', 
      path: '/projects',
      hasMega: true 
    },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleMegaFilterClick = (type) => {
    setMegaMenuOpen(false);
    navigate(`/projects?type=${type}`);
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-primary-navy text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-warm-grey">Official Developer & Advisory Portal</span>
            <span className="text-signature-gold/80">|</span>
            <a 
              href={`tel:${COMPANY_INFO.contact.phone}`} 
              className="flex items-center gap-1.5 hover:text-signature-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-signature-gold" />
              <span className="font-semibold text-white">{COMPANY_INFO.contact.phoneDisplay}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/disclaimer" className="hover:text-signature-gold transition-colors">Disclaimer</Link>
            <Link to="/contact" className="hover:text-signature-gold transition-colors hidden md:inline">Schedule Visit</Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-40 bg-pure-white transition-all duration-300 ${isScrolled ? 'shadow-lg border-b border-slate-100 py-3' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              
              if (link.hasMega) {
                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                        isActive || location.pathname.startsWith('/projects')
                          ? 'text-signature-gold font-semibold' 
                          : 'text-primary-navy hover:text-signature-gold'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-signature-gold' : ''}`} />
                    </Link>

                    {/* Mega Dropdown Menu */}
                    {megaMenuOpen && (
                      <div className="absolute top-full left-0 w-80 bg-pure-white rounded-lg shadow-2xl border border-slate-100 p-4 grid grid-cols-1 gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="text-xs font-semibold uppercase text-warm-grey tracking-wider px-3 py-1">
                          Explore Properties
                        </div>

                        <button
                          onClick={() => handleMegaFilterClick('Residential')}
                          className="flex items-center gap-3 p-3 rounded-md hover:bg-off-white text-left transition-colors group/item"
                        >
                          <div className="w-9 h-9 rounded bg-signature-gold/10 flex items-center justify-center text-signature-gold group-hover/item:bg-signature-gold group-hover/item:text-white transition-colors">
                            <HomeIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-primary-navy">Residential Spaces</div>
                            <div className="text-xs text-warm-grey">Luxury Apartments & Villas</div>
                          </div>
                        </button>

                        <button
                          onClick={() => handleMegaFilterClick('Commercial')}
                          className="flex items-center gap-3 p-3 rounded-md hover:bg-off-white text-left transition-colors group/item"
                        >
                          <div className="w-9 h-9 rounded bg-signature-gold/10 flex items-center justify-center text-signature-gold group-hover/item:bg-signature-gold group-hover/item:text-white transition-colors">
                            <Building2 className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-primary-navy">Commercial Workspaces</div>
                            <div className="text-xs text-warm-grey">Grade-A Offices & Retail</div>
                          </div>
                        </button>

                        <div className="border-t border-slate-100 mt-2 pt-2">
                          <Link 
                            to="/projects"
                            className="block text-center text-xs font-semibold text-signature-gold hover:underline py-1"
                          >
                            View All Projects →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? 'text-signature-gold font-semibold' : 'text-primary-navy hover:text-signature-gold'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setEnquiryModalOpen(true)}
              className="bg-signature-gold hover:bg-muted-gold text-white font-medium text-sm px-5 py-2.5 rounded shadow-sm hover:shadow transition-all duration-300 flex items-center gap-2"
            >
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setEnquiryModalOpen(true)}
              className="bg-signature-gold text-white text-xs px-3 py-1.5 rounded font-medium"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary-navy hover:text-signature-gold rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-pure-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={`block py-2 text-base font-medium ${
                    location.pathname === link.path ? 'text-signature-gold font-semibold' : 'text-primary-navy'
                  }`}
                >
                  {link.name}
                </Link>
                {link.hasMega && (
                  <div className="pl-4 border-l-2 border-signature-gold/30 my-1 space-y-2">
                    <button
                      onClick={() => handleMegaFilterClick('Residential')}
                      className="block text-sm text-warm-grey hover:text-signature-gold py-1"
                    >
                      Residential Apartments & Villas
                    </button>
                    <button
                      onClick={() => handleMegaFilterClick('Commercial')}
                      className="block text-sm text-warm-grey hover:text-signature-gold py-1"
                    >
                      Commercial Offices & Retail
                    </button>
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="flex items-center justify-center gap-2 border border-primary-navy text-primary-navy py-2.5 rounded font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-signature-gold" />
                Call {COMPANY_INFO.contact.phoneDisplay}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setEnquiryModalOpen(true);
                }}
                className="w-full bg-signature-gold text-white py-2.5 rounded font-medium text-sm text-center"
              >
                Request Callback / Enquiry
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Enquiry Modal */}
      <Modal isOpen={enquiryModalOpen} onClose={() => setEnquiryModalOpen(false)} title="Project Enquiry">
        <EnquiryForm onSuccess={() => setEnquiryModalOpen(false)} />
      </Modal>
    </>
  );
}
