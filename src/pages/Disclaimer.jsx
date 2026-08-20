import React from 'react';
import { ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-signature-gold text-xs font-semibold uppercase tracking-widest">
          <ShieldAlert className="w-4 h-4" /> Legal & Regulatory Statement
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-navy">
          Website Disclaimer
        </h1>
        <p className="text-xs text-warm-grey">
          Last Updated: January 2026 | Document Entity: {COMPANY_INFO.copyrightOwner}
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="prose prose-slate max-w-none space-y-6 text-sm text-warm-grey leading-relaxed">
        
        <div className="bg-amber-50/80 border-l-4 border-signature-gold p-4 rounded-r text-xs text-slate-700">
          <strong className="text-primary-navy block mb-1 font-semibold">Important Regulatory Notice:</strong>
          This website is maintained by {COMPANY_INFO.copyrightOwner} for informational and advisory purposes regarding real estate developments under the brand name <strong>{COMPANY_INFO.name}</strong>.
        </div>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-primary-navy">1. Representational Nature of Visual Assets</h2>
          <p>
            All artistic impressions, 3D architectural renderings, interior mockups, walkthrough videos, floor plan dimensions, elevation concepts, and lifestyle imagery displayed across this website are strictly representational and conceptual in nature. They do not constitute an exact visual depiction of final constructed units or amenities.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-primary-navy">2. Right to Amend Plans & Specifications</h2>
          <p>
            {COMPANY_INFO.name} and its parent entity {COMPANY_INFO.copyrightOwner} reserve the absolute right to alter, modify, amend, revise, or withdraw any building plans, floor layouts, structural specifications, material finishes, brand fittings, landscape elements, or amenity configurations without prior notice, subject to approvals from statutory sanctioning authorities.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-primary-navy">3. Non-Contractual Nature of Content</h2>
          <p>
            The content, brochures, downloadable materials, pricing ranges, and specs listed on this website are for general guidance only and do not constitute an offer, invitation, recommendation, advertisement, or binding legal contract between {COMPANY_INFO.name} and any prospective buyer or visitor. All bookings and purchases shall be governed strictly by the formal Agreement for Sale executed between the parties under applicable state RERA provisions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-primary-navy">4. RERA Statutory Verification Reference</h2>
          <p>
            Visitors and prospective purchasers are advised to verify all statutory details, registered building approvals, phase-wise possession schedules, title clearance certificates, and official RERA registration certificates directly on the official state RERA web portal (e.g. MahaRERA or relevant state authority) before entering into any transaction. RERA registration numbers shown on project templates are placeholders until final numbers are published.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-primary-navy">5. Limitation of Liability</h2>
          <p>
            Under no circumstances shall {COMPANY_INFO.copyrightOwner}, its directors, officers, employees, or advisory partners be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from the reliance on information contained on this website or any inadvertent errors/omissions.
          </p>
        </section>

      </div>

      <div className="pt-6 border-t border-slate-200 text-xs text-slate-400">
        © 2026 {COMPANY_INFO.copyrightOwner}. All Rights Reserved.
      </div>

    </div>
  );
}
