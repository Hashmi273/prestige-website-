import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { CheckCircle2, Shield } from 'lucide-react';

export default function EnquiryForm({ defaultProjectSlug = '', onSuccess }) {
  const defaultProject = PROJECTS.find(p => p.slug === defaultProjectSlug);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectOfInterest: defaultProject ? defaultProject.name : 'General Enquiry',
    message: '',
    consent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name || !formData.phone || !formData.email) {
      setErrorMsg('Please fill in all mandatory fields.');
      return;
    }

    if (!formData.consent) {
      setErrorMsg('Please accept the DLT/TRAI contact consent checkbox to proceed.');
      return;
    }

    setIsSubmitting(true);

    const submissionPayload = {
      ...formData,
      consentGivenAt: new Date().toISOString(), // TRAI/DLT compliance timestamp
      submittedAt: new Date().toISOString(),
    };

    console.log('Enquiry Submission Payload:', submissionPayload);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 700);
  };

  if (submitted) {
    return (
      <div className="bg-white p-6 rounded-lg text-center space-y-4 shadow-sm border border-slate-100">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl text-primary-navy font-bold">Enquiry Received</h3>
        <p className="text-sm text-warm-grey max-w-md mx-auto">
          Thank you <strong className="text-primary-navy">{formData.name}</strong>. Our senior property advisor will reach out to you regarding <strong className="text-primary-navy">{formData.projectOfInterest}</strong>.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              phone: '',
              email: '',
              projectOfInterest: defaultProject ? defaultProject.name : 'General Enquiry',
              message: '',
              consent: true,
            });
          }}
          className="bg-signature-gold text-white text-xs px-6 py-2.5 rounded font-medium hover:bg-muted-gold transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded">
          {errorMsg}
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-primary-navy mb-1 uppercase tracking-wider">Full Name *</label>
        <input
          type="text"
          name="name"
          required
          placeholder="e.g. Vikram Sharma"
          value={formData.name}
          onChange={handleChange}
          className="w-full text-sm px-4 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-signature-gold/50 focus:border-signature-gold transition-all"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-primary-navy mb-1 uppercase tracking-wider">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            className="w-full text-sm px-4 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-signature-gold/50 focus:border-signature-gold transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-primary-navy mb-1 uppercase tracking-wider">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full text-sm px-4 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-signature-gold/50 focus:border-signature-gold transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-primary-navy mb-1 uppercase tracking-wider">Project of Interest</label>
        <select
          name="projectOfInterest"
          value={formData.projectOfInterest}
          onChange={handleChange}
          className="w-full text-sm px-4 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-signature-gold/50 focus:border-signature-gold transition-all bg-white"
        >
          <option value="General Enquiry">General Advisory / All Projects</option>
          {PROJECTS.map((proj) => (
            <option key={proj.id} value={proj.name}>
              {proj.name} ({proj.category} - {proj.locality})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-primary-navy mb-1 uppercase tracking-wider">Your Message / Specific Query</label>
        <textarea
          name="message"
          rows={3}
          placeholder="Specify preference (e.g. 2 BHK layout, site visit request, investment query)..."
          value={formData.message}
          onChange={handleChange}
          className="w-full text-sm px-4 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-signature-gold/50 focus:border-signature-gold transition-all"
        />
      </div>

      {/* DLT / TRAI Compliant Consent Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-signature-gold border-slate-300 rounded focus:ring-signature-gold cursor-pointer"
          />
          <span className="text-xs text-warm-grey group-hover:text-primary-navy transition-colors leading-relaxed">
            I consent to Zion Estates contacting me via Call, SMS, WhatsApp, and Email regarding project updates and offers. I understand I can withdraw consent anytime.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-signature-gold hover:bg-muted-gold text-white font-medium text-sm py-3 rounded shadow hover:shadow-lg transition-all duration-300 uppercase tracking-wider"
      >
        {isSubmitting ? 'Processing Request...' : 'Submit Enquiry'}
      </button>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-warm-grey">
        <Shield className="w-3.5 h-3.5 text-signature-gold" />
        <span>Your information is protected under our Privacy Policy</span>
      </div>
    </form>
  );
}
