import React from 'react';
import { FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-signature-gold text-xs font-semibold uppercase tracking-widest">
          <FileText className="w-4 h-4" /> Legal Terms
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-navy">
          Terms & Conditions
        </h1>
        <p className="text-xs text-warm-grey">
          Last Updated: January 2026 | Operator: {COMPANY_INFO.copyrightOwner}
        </p>
      </div>

      <div className="space-y-6 text-sm text-warm-grey leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-primary-navy">1. Acceptance of Terms</h2>
          <p>
            By accessing and browsing the website of {COMPANY_INFO.name} (operated by {COMPANY_INFO.copyrightOwner}), you agree to comply with and be bound by these Terms & Conditions. If you disagree with any part of these terms, please refrain from using our portal.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-primary-navy">2. Intellectual Property Rights</h2>
          <p>
            All content, brand names, wordmarks ("Zion Estates"), logos, page designs, visual layouts, text, code, and graphical assets featured on this website are the intellectual property of {COMPANY_INFO.copyrightOwner} or licensed to it. Unauthorized copying, distribution, or commercial exploitation is strictly prohibited.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-primary-navy">3. Website Usage & Restrictions</h2>
          <p>
            Users agree not to use this website for any unlawful purpose, transmit malicious software, or attempt unauthorized access to our server systems or customer form data.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-primary-navy">4. Governing Law & Jurisdiction</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra.
          </p>
        </section>
      </div>

      <div className="pt-6 border-t border-slate-200 text-xs text-slate-400">
        © 2026 {COMPANY_INFO.copyrightOwner}. All Rights Reserved.
      </div>
    </div>
  );
}
