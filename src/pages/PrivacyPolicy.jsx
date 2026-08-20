import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-signature-gold text-xs font-semibold uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4" /> Data Governance & Privacy
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-navy">
          Privacy Policy
        </h1>
        <p className="text-xs text-warm-grey">
          Last Updated: January 2026 | Operator: {COMPANY_INFO.copyrightOwner}
        </p>
      </div>

      <div className="space-y-6 text-sm text-warm-grey leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-primary-navy">1. Information We Collect</h2>
          <p>
            When you interact with forms on {COMPANY_INFO.name} (such as project enquiry forms, callback widgets, or career applications), we collect personal information provided voluntarily by you, including your name, phone number, email address, property preferences, and submission timestamp.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-primary-navy">2. Purpose & Use of Data</h2>
          <p>
            Your contact information is processed exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your real estate advisory inquiries and schedule site visits.</li>
            <li>Provide project updates, brochures, and price sheets related to your stated interest.</li>
            <li>Maintain statutory records of user contact consent in compliance with DLT/TRAI framework regulations.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-primary-navy">3. TRAI / DLT Contact Consent</h2>
          <p>
            By opting into our enquiry forms, you explicitly authorize {COMPANY_INFO.name} and {COMPANY_INFO.copyrightOwner} to contact you via Call, SMS, WhatsApp, or Email regarding project offers. We capture a digital timestamp of your consent (`consentGivenAt`). You may opt out or withdraw your consent at any time by replying STOP or emailing our privacy officer.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-primary-navy">4. Data Protection & Non-Disclosure</h2>
          <p>
            We do not sell, rent, or trade your personal data to third-party marketing brokers. Your data is restricted to authorized property advisors and official technology partners bound by non-disclosure obligations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-primary-navy">5. Contact Our Privacy Officer</h2>
          <p>
            For data correction requests or consent withdrawal, contact us at: <strong className="text-primary-navy">{COMPANY_INFO.contact.email}</strong>.
          </p>
        </section>
      </div>

      <div className="pt-6 border-t border-slate-200 text-xs text-slate-400">
        © 2026 {COMPANY_INFO.copyrightOwner}. All Rights Reserved.
      </div>
    </div>
  );
}
