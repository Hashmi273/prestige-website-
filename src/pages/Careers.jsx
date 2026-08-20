import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Briefcase, CheckCircle2, Upload, Send, Sparkles } from 'lucide-react';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Senior Property Advisor',
    fileName: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openPositions = [
    {
      id: 1,
      title: "Senior Property Advisor / Sales Lead",
      department: "Sales & Client Advisory",
      type: "Full-Time",
      location: "Mumbai Office",
      description: "Manage prospective client relationships, conduct site walkthroughs, and advise high-net-worth buyers on residential & commercial portfolios.",
    },
    {
      id: 2,
      title: "Architectural Quality & Design Manager",
      department: "Projects & Engineering",
      type: "Full-Time",
      location: "Mumbai Office",
      description: "Oversee structural design alignment, vendor quality audits, and green building compliance across ongoing high-rise developments.",
    },
    {
      id: 3,
      title: "Legal & Regulatory Compliance Officer",
      department: "Legal & RERA Secretariat",
      type: "Full-Time",
      location: "Mumbai Office",
      description: "Coordinate RERA filings, title verification documents, escrow audit reports, and customer sale deed executions.",
    },
  ];

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, fileName: e.target.files[0].name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionPayload = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    console.log('Career Application Submitted:', submissionPayload);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="space-y-16 py-8">
      
      {/* Hero Banner */}
      <section className="bg-primary-navy text-white py-16 text-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-signature-gold/20 text-signature-gold text-xs font-semibold uppercase tracking-widest border border-signature-gold/30">
            Join Our Team
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Careers at Zion Estates
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Build your professional future with a real estate brand dedicated to design excellence, legal integrity, and career progression.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-signature-gold text-xs font-bold uppercase tracking-wider">Our Workplace Culture</span>
            <h2 className="font-serif text-3xl font-bold text-primary-navy">
              Empowering Talent to Shape Urban Landmarks
            </h2>
            <p className="text-sm text-warm-grey leading-relaxed">
              At Zion Estates, we foster an environment of continuous learning, architectural innovation, and transparent leadership. We empower our teams with clear growth trajectories, competitive rewards, and exposure to benchmark developments.
            </p>
            <div className="space-y-2 text-xs font-medium text-primary-navy pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-signature-gold" />
                <span>Performance-Driven Meritocracy & Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-signature-gold" />
                <span>Collaborative Leadership & Ethical Work Environment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-signature-gold" />
                <span>Comprehensive Professional Development</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
              alt="Zion Estates Workspace Culture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Opportunities"
          title="Current Openings"
          description="Explore active roles across sales advisory, project engineering, legal compliance, and customer relations."
        />

        <div className="space-y-4">
          {openPositions.map((pos) => (
            <div key={pos.id} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="bg-signature-gold/10 text-signature-gold text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">
                    {pos.department}
                  </span>
                  <span className="text-slate-400 text-xs">• {pos.type}</span>
                  <span className="text-slate-400 text-xs">• {pos.location}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-primary-navy">{pos.title}</h3>
                <p className="text-xs text-warm-grey max-w-2xl">{pos.description}</p>
              </div>

              <a
                href="#apply-form"
                onClick={() => setFormData(prev => ({ ...prev, position: pos.title }))}
                className="bg-primary-navy hover:bg-deep-slate text-white text-xs font-semibold px-5 py-2.5 rounded shrink-0 transition-colors"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-md space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-serif text-2xl font-bold text-primary-navy">Submit Your Resume</h3>
            <p className="text-xs text-warm-grey">Even if your role is not listed above, submit your CV for future openings.</p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-primary-navy">Application Received</h4>
              <p className="text-xs text-warm-grey">Thank you for your interest in Zion Estates. Our HR team will review your application.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-signature-gold text-white text-xs font-semibold px-5 py-2 rounded"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-primary-navy mb-1 uppercase">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sunita Nair"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full text-sm px-4 py-2.5 rounded border border-slate-300 focus:outline-none focus:border-signature-gold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-primary-navy mb-1 uppercase">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="sunita@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full text-sm px-4 py-2.5 rounded border border-slate-300 focus:outline-none focus:border-signature-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-primary-navy mb-1 uppercase">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full text-sm px-4 py-2.5 rounded border border-slate-300 focus:outline-none focus:border-signature-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-primary-navy mb-1 uppercase">Position of Interest</label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                  className="w-full text-sm px-4 py-2.5 rounded border border-slate-300 focus:outline-none focus:border-signature-gold"
                />
              </div>

              {/* Resume File Upload Placeholder */}
              <div>
                <label className="block text-xs font-semibold text-primary-navy mb-1 uppercase">Attach Resume (PDF / DOCX)</label>
                <div className="relative border-2 border-dashed border-slate-300 hover:border-signature-gold rounded-lg p-4 text-center cursor-pointer bg-off-white transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Upload className="w-6 h-6 text-signature-gold mx-auto mb-1" />
                  <span className="text-xs text-primary-navy font-semibold block">
                    {formData.fileName ? formData.fileName : "Click to select or drag & drop resume file"}
                  </span>
                  <span className="text-[10px] text-warm-grey block">Max file size 5MB</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-primary-navy mb-1 uppercase">Cover Note / Cover Letter</label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your experience and career aspirations..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full text-sm px-4 py-2.5 rounded border border-slate-300 focus:outline-none focus:border-signature-gold"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-signature-gold hover:bg-muted-gold text-white font-medium text-sm py-3 rounded uppercase tracking-wider transition-colors shadow"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
