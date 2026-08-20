import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Users, HeartHandshake, ArrowRight, Building, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { COMPANY_INFO } from '../data/companyInfo';

export default function AboutUs() {
  const qualitativeMarkers = [
    { label: "Growing Portfolio", detail: "Residential sky residences & commercial hubs" },
    { label: "Client-First Approach", detail: "Transparent advisory & dedicated relationship managers" },
    { label: "Regulated Transparency", detail: "RERA-aligned escrow & clear title documentation" },
    { label: "Architectural Rigor", detail: "Grade-A construction standards & sustainable design" },
  ];

  const coreValues = [
    {
      icon: Award,
      title: "Quality Construction",
      desc: "We prioritize structural integrity, premium material sourcing, and precision engineering over shortcuts.",
    },
    {
      icon: ShieldCheck,
      title: "Absolute Transparency",
      desc: "Clear legal agreements, upfront pricing structures, and open progress updates throughout the lifecycle.",
    },
    {
      icon: HeartHandshake,
      title: "Timely Delivery",
      desc: "Disciplined project management designed to honor possession timelines and build lasting market confidence.",
    },
    {
      icon: Users,
      title: "Customer Centricity",
      desc: "Every design choice and customer service milestone is tailored around the homeowner's long-term comfort.",
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24 py-8">
      
      {/* Hero Banner */}
      <section className="bg-primary-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-signature-gold/20 text-signature-gold text-xs font-semibold uppercase tracking-widest border border-signature-gold/30">
            About Zion Estates
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Building Benchmark Spaces with Integrity & Purpose
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Zion Estates is an independent real estate developer and advisory firm committed to shaping spaces that harmonize structural luxury with absolute client transparency.
          </p>
        </div>
      </section>

      {/* Qualitative Trust Markers Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-slate-200 shadow-md p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualitativeMarkers.map((marker, idx) => (
            <div key={idx} className="space-y-1 border-l-2 border-signature-gold pl-4">
              <h3 className="font-serif font-bold text-lg text-primary-navy">{marker.label}</h3>
              <p className="text-xs text-warm-grey">{marker.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story 2-Column */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 text-signature-gold text-xs font-semibold uppercase tracking-widest">
              <span className="w-6 h-[1.5px] bg-signature-gold" />
              Our Philosophy
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-navy">
              Redefining Real Estate Development & Advisory
            </h2>

            <p className="text-sm sm:text-base text-warm-grey leading-relaxed">
              Founded on the belief that a home or corporate address is an anchor for life's aspirations, Zion Estates approaches real estate with meticulous planning and ethical clarity.
            </p>

            <p className="text-sm sm:text-base text-warm-grey leading-relaxed">
              We partner with renowned architects, structural engineers, and environmental consultants to develop properties that offer high capital appreciation, superior liveability, and compliance with statutory regulatory bodies.
            </p>

            <div className="pt-2">
              <Link
                to="/projects"
                className="bg-signature-gold hover:bg-muted-gold text-white font-semibold text-sm px-6 py-3 rounded inline-flex items-center gap-2 transition-colors"
              >
                Explore Current Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"
                alt="Zion Estates Architectural Philosophy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-off-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Guiding Principles"
            title="Core Values That Drive Us"
            description="Our organizational culture is anchored in four uncompromising values."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-3">
                  <div className="w-12 h-12 rounded bg-signature-gold/10 text-signature-gold flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-primary-navy">{val.title}</h3>
                  <p className="text-xs text-warm-grey leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advisory Commitment Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-deep-slate text-white rounded-xl p-8 sm:p-12 border border-slate-700 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Looking for tailored property advisory?
            </h3>
            <p className="text-sm text-slate-300">
              Our real estate specialists provide honest site evaluations, legal document walkthroughs, and portfolio consultation.
            </p>
          </div>
          <div className="text-left lg:text-right">
            <Link
              to="/contact"
              className="bg-signature-gold hover:bg-muted-gold text-white font-semibold text-sm px-6 py-3.5 rounded inline-block transition-colors"
            >
              Connect With An Advisor
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
