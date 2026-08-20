import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Footer() {
  return (
    <footer className="bg-primary-navy text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Zion Estates is a premier real estate developer and advisory firm committed to architectural excellence, uncompromising quality, and total client transparency.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href={COMPANY_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-slate-800 hover:bg-signature-gold hover:text-white flex items-center justify-center transition-colors text-slate-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-slate-800 hover:bg-signature-gold hover:text-white flex items-center justify-center transition-colors text-slate-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-slate-800 hover:bg-signature-gold hover:text-white flex items-center justify-center transition-colors text-slate-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={COMPANY_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-slate-800 hover:bg-signature-gold hover:text-white flex items-center justify-center transition-colors text-slate-300">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-white text-base font-semibold mb-4 tracking-wide border-l-2 border-signature-gold pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-signature-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-signature-gold" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-signature-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-signature-gold" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-signature-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-signature-gold" /> Our Projects
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-signature-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-signature-gold" /> Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-signature-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-signature-gold" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Regulatory */}
          <div>
            <h4 className="font-serif text-white text-base font-semibold mb-4 tracking-wide border-l-2 border-signature-gold pl-2">
              Legal & Compliance
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/disclaimer" className="hover:text-signature-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-signature-gold" /> Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-signature-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-signature-gold" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-signature-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-signature-gold" /> Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Office */}
          <div>
            <h4 className="font-serif text-white text-base font-semibold mb-4 tracking-wide border-l-2 border-signature-gold pl-2">
              Corporate Office
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              {/* TODO: Replace with real client address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-signature-gold shrink-0 mt-1" />
                <span>{COMPANY_INFO.contact.address}</span>
              </div>
              {/* TODO: Replace with real client phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-signature-gold shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.phoneDisplay}
                </a>
              </div>
              {/* TODO: Replace with real client email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-signature-gold shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Hard Rules Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2026 IMMENSE AIR PRIVATE LIMITED. All Rights Reserved.</p>
          <p className="text-slate-400 text-center md:text-right">
            Representational graphics & imagery on this website are indicative.
          </p>
        </div>
      </div>
    </footer>
  );
}
