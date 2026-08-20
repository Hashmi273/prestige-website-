import React, { useState } from 'react';
import { PhoneCall, X, CheckCircle2, Shield } from 'lucide-react';
import Modal from './Modal';

export default function CallbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone || phone.length < 10) return;

    setIsSubmitting(true);

    const payload = {
      name: name || 'Valued Visitor',
      phone,
      source: 'Floating Callback Widget',
      consentGivenAt: new Date().toISOString(),
    };

    console.log('Callback Request Submitted:', payload);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setPhone('');
      setName('');
    }, 300);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 bg-primary-navy hover:bg-deep-slate text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl border-2 border-signature-gold transition-all duration-300 transform hover:scale-105"
          aria-label="Request a Callback"
        >
          <div className="relative">
            <PhoneCall className="w-5 h-5 text-signature-gold group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-signature-gold rounded-full animate-ping" />
          </div>
          <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase">
            Request Callback
          </span>
        </button>
      </div>

      {/* Callback Quick Modal */}
      <Modal isOpen={isOpen} onClose={handleClose} title="Instant Callback Request">
        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl text-primary-navy font-bold">Callback Scheduled!</h3>
            <p className="text-sm text-warm-grey max-w-xs mx-auto">
              Thank you {name ? name : ''}. Our property advisor will call you at <strong className="text-primary-navy">{phone}</strong> shortly.
            </p>
            <button
              onClick={handleClose}
              className="bg-signature-gold text-white text-xs px-6 py-2.5 rounded font-medium hover:bg-muted-gold transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-1">
            <p className="text-xs text-warm-grey">
              Leave your contact number and our dedicated advisor will connect with you within 15 minutes.
            </p>
            
            <div>
              <label className="block text-xs font-medium text-primary-navy mb-1">Your Name (Optional)</label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-sm px-3.5 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-signature-gold/50 focus:border-signature-gold"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-primary-navy mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-sm px-3.5 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-signature-gold/50 focus:border-signature-gold"
              />
            </div>

            <div className="flex items-start gap-2 pt-1 text-[11px] text-warm-grey">
              <Shield className="w-3.5 h-3.5 text-signature-gold shrink-0 mt-0.5" />
              <span>By submitting, you consent to receiving a priority phone call from Zion Estates advisors.</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-signature-gold hover:bg-muted-gold text-white font-medium text-sm py-2.5 rounded transition-colors shadow flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Submitting...' : 'Call Me Back'}
            </button>
          </form>
        )}
      </Modal>
    </>
  );
}
