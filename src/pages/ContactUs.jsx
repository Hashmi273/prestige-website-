import React from 'react';
import { COMPANY_INFO } from '../data/companyInfo';
import EnquiryForm from '../components/EnquiryForm';
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram, Facebook, Youtube, Compass } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="space-y-12 py-8">
      
      {/* Page Header */}
      <section className="bg-primary-navy text-white py-14 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-signature-gold/20 text-signature-gold text-xs font-semibold uppercase tracking-widest border border-signature-gold/30">
            Get In Touch
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Contact Zion Estates
          </h1>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Connect with our sales advisory, corporate team, or visit our central experience center.
          </p>
        </div>
      </section>

      {/* Main 2-Column Contact Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Client Contact Information Placeholders & Interactive Map Placeholder */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-signature-gold text-xs font-bold uppercase tracking-wider">Corporate & Sales Office</span>
              <h2 className="font-serif text-3xl font-bold text-primary-navy">
                We're Here to Assist Your Property Journey
              </h2>
              <p className="text-sm text-warm-grey leading-relaxed">
                Whether you wish to schedule a private site visit, inquire about upcoming project launches, or request corporate office floor plans, our advisory team is at your service.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              
              {/* TODO: Replace with real office address once supplied by client */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded bg-signature-gold/10 text-signature-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-primary-navy">Head Office Address</h4>
                  <p className="text-xs text-warm-grey mt-0.5 leading-relaxed">
                    {COMPANY_INFO.contact.address}
                  </p>
                </div>
              </div>

              {/* TODO: Replace with real client phone numbers */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded bg-signature-gold/10 text-signature-gold flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-primary-navy">Sales & Advisory Helpline</h4>
                  <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-xs text-signature-gold font-semibold hover:underline block mt-0.5">
                    {COMPANY_INFO.contact.phoneDisplay}
                  </a>
                  <span className="text-[11px] text-warm-grey">{COMPANY_INFO.contact.officeHours}</span>
                </div>
              </div>

              {/* TODO: Replace with real client email addresses */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded bg-signature-gold/10 text-signature-gold flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-primary-navy">Official Email Communications</h4>
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-xs text-signature-gold font-semibold hover:underline block mt-0.5">
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Map Placeholder Box */}
            <div className="bg-slate-900 rounded-xl overflow-hidden aspect-[16/9] border border-slate-800 relative flex items-center justify-center text-center p-6">
              <div className="space-y-2 z-10">
                <Compass className="w-8 h-8 text-signature-gold mx-auto animate-spin duration-[10000ms]" />
                <h4 className="font-serif font-bold text-white text-base">Zion Estates Experience Center Map</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Interactive Google Maps location widget will be embedded here upon final location confirmation.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/80 to-transparent opacity-90" />
            </div>

            {/* Social Channels */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-primary-navy uppercase tracking-wider">Connect on Official Media Channels</span>
              <div className="flex items-center gap-3">
                <a href={COMPANY_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-white border border-slate-200 text-primary-navy hover:bg-signature-gold hover:text-white flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-white border border-slate-200 text-primary-navy hover:bg-signature-gold hover:text-white flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-white border border-slate-200 text-primary-navy hover:bg-signature-gold hover:text-white flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={COMPANY_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-white border border-slate-200 text-primary-navy hover:bg-signature-gold hover:text-white flex items-center justify-center transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: DLT/TRAI Compliant Enquiry Form */}
          <div>
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xl space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-serif text-2xl font-bold text-primary-navy">Send an Enquiry</h3>
                <p className="text-xs text-warm-grey">Fill out your preferred specifications and our team will get in touch.</p>
              </div>

              <EnquiryForm />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
