import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  Clock, 
  FileCheck2, 
  MapPin, 
  UserCheck, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';
import { COMPANY_INFO } from '../data/companyInfo';
import Modal from '../components/Modal';
import EnquiryForm from '../components/EnquiryForm';

export default function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProjectForEnquiry, setSelectedProjectForEnquiry] = useState(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
      tagline: "Benchmark Architecture & Design",
      title: "Spaces Built Around Your Life",
      subtitle: "Experience luxury residential & grade-A commercial developments engineered with architectural distinction.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
      tagline: "Prime Financial & Business Hubs",
      title: "Corporate Landmarks of Distinction",
      subtitle: "State-of-the-art office towers and boutique retail avenues built for modern corporate leaders.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80",
      tagline: "Serene Private Estate Villas",
      title: "Sanctuaries of Privacy & Elegance",
      subtitle: "Limited-edition villa estates offering double-height living spaces, private pools, and verdant landscapes.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleQuickEnquire = (project) => {
    setSelectedProjectForEnquiry(project);
    setEnquiryModalOpen(true);
  };

  const getTrustIcon = (iconName) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-signature-gold" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-signature-gold" />;
      case 'Clock': return <Clock className="w-6 h-6 text-signature-gold" />;
      case 'FileCheck2': return <FileCheck2 className="w-6 h-6 text-signature-gold" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-signature-gold" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-signature-gold" />;
      default: return <ShieldCheck className="w-6 h-6 text-signature-gold" />;
    }
  };

  return (
    <div className="space-y-16 md:space-y-24">
      
      {/* 1. HERO SLIDER */}
      <section className="relative h-[85vh] min-h-[580px] max-h-[800px] bg-primary-navy overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center transform scale-105 animate-pulse duration-[10000ms]"
            />
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/95 via-primary-navy/70 to-transparent" />

            {/* Content Container */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl space-y-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-signature-gold/20 border border-signature-gold/40 text-signature-gold text-xs font-semibold uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-signature-gold animate-ping" />
                    {slide.tagline}
                  </div>

                  <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                    {slide.title}
                  </h1>

                  <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
                    {slide.subtitle}
                  </p>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      to="/projects"
                      className="bg-signature-gold hover:bg-muted-gold text-white font-medium text-sm px-7 py-3.5 rounded shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span>Explore Projects</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={() => setEnquiryModalOpen(true)}
                      className="border border-white/40 hover:border-white text-white hover:bg-white/10 font-medium text-sm px-6 py-3.5 rounded transition-all duration-300"
                    >
                      Schedule Advisory Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Navigation Buttons */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
            className="w-10 h-10 rounded-full bg-primary-navy/80 border border-white/20 text-white flex items-center justify-center hover:bg-signature-gold transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="text-white text-xs font-semibold px-2">
            0{currentSlide + 1} / 0{heroSlides.length}
          </div>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="w-10 h-10 rounded-full bg-primary-navy/80 border border-white/20 text-white flex items-center justify-center hover:bg-signature-gold transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* 2. FEATURED PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Curated Portfolio"
          title="Featured Developments"
          description="Explore iconic residential sky residences, commercial workspaces, and bespoke private estates."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.slice(0, 4).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onQuickEnquire={handleQuickEnquire}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 border border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-semibold text-sm px-8 py-3 rounded transition-all duration-300"
          >
            View All {PROJECTS.length} Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. ABOUT SNAPSHOT SECTION */}
      <section className="bg-deep-slate text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Image Composite */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Zion Estates Architectural Quality"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex bg-primary-navy p-6 rounded-lg border border-signature-gold/40 shadow-xl items-center gap-4 max-w-xs">
                <div className="w-12 h-12 rounded bg-signature-gold/20 flex items-center justify-center text-signature-gold shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">Transparency First</h4>
                  <p className="text-xs text-slate-300">RERA compliance & legal documentation</p>
                </div>
              </div>
            </div>

            {/* Right Brand Story */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-signature-gold text-xs font-semibold uppercase tracking-widest">
                <span className="w-6 h-[1.5px] bg-signature-gold" />
                About Zion Estates
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                Architectural Excellence Driven by Integrity & Clarity
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Zion Estates stands as a trusted developer and advisory firm built on the pillars of structural perfection, transparent governance, and client-centric value. We curate developments that combine aesthetic timelessness with functional sustainability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-slate-200 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-signature-gold" />
                  <span>Uncompromising Construction Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-signature-gold" />
                  <span>Transparent Escrow Governance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-signature-gold" />
                  <span>Strategic Prime Locations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-signature-gold" />
                  <span>End-to-End Buyer Advisory</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="bg-signature-gold hover:bg-muted-gold text-white font-semibold text-sm px-6 py-3 rounded inline-flex items-center gap-2 transition-colors"
                >
                  Discover Our Brand Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY ZION ESTATES — 6 TRUST POINTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Foundation"
          title="Why Choose Zion Estates"
          description="Built upon six key commitments that define every residential, commercial, and advisory project we deliver."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_INFO.trustPoints.map((point) => (
            <div
              key={point.id}
              className="bg-white p-6 rounded-lg border border-slate-200/80 shadow-sm hover:shadow-md hover:border-signature-gold/50 transition-all duration-300 space-y-3 group"
            >
              <div className="w-12 h-12 rounded bg-off-white group-hover:bg-primary-navy flex items-center justify-center transition-colors">
                {getTrustIcon(point.icon)}
              </div>
              <h3 className="font-serif text-lg font-bold text-primary-navy group-hover:text-signature-gold transition-colors">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-warm-grey leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PROCESS / HOW IT WORKS */}
      <section className="bg-off-white py-16 md:py-20 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="The Buyer's Journey"
            title="How It Works"
            description="Four simple, transparent steps connecting you with your next benchmark property."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {COMPANY_INFO.processSteps.map((step, idx) => (
              <div
                key={step.number}
                className="bg-white p-6 rounded-lg border border-slate-200/80 shadow-sm relative space-y-3"
              >
                <div className="font-serif text-3xl font-bold text-signature-gold">
                  {step.number}
                </div>
                <h3 className="font-serif text-lg font-bold text-primary-navy">
                  {step.title}
                </h3>
                <p className="text-xs text-warm-grey leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Client Perspectives"
          title="What Our Buyers Say"
          description="Read genuine experiences from homeowners and commercial partners who chose Zion Estates."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_INFO.testimonials.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <p className="text-xs sm:text-sm text-warm-grey italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-slate-100">
                <div className="font-serif font-bold text-primary-navy text-sm">{t.author}</div>
                <div className="text-xs text-signature-gold font-medium">{t.designation}</div>
                <div className="text-[11px] text-warm-grey">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-primary-navy text-white rounded-2xl p-8 sm:p-12 border border-signature-gold/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-xl text-center md:text-left z-10">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Looking for your next address? Let's talk.
            </h2>
            <p className="text-sm text-slate-300">
              Schedule a personalized consultation or site visit with our experienced property advisory team today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 z-10 shrink-0">
            <Link
              to="/contact"
              className="bg-signature-gold hover:bg-muted-gold text-white font-semibold text-sm px-7 py-3.5 rounded shadow-lg transition-colors"
            >
              Contact Sales Advisory
            </Link>
            <a
              href={`tel:${COMPANY_INFO.contact.phone}`}
              className="border border-white/30 hover:border-white text-white font-semibold text-sm px-6 py-3.5 rounded transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-signature-gold" />
              Call Direct
            </a>
          </div>

          {/* Background Decorative Graphic */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-signature-gold/10 pointer-events-none" />
        </div>
      </section>

      {/* Quick Enquiry Modal */}
      <Modal 
        isOpen={enquiryModalOpen} 
        onClose={() => setEnquiryModalOpen(false)} 
        title={selectedProjectForEnquiry ? `Enquire about ${selectedProjectForEnquiry.name}` : "Schedule Consultation"}
      >
        <EnquiryForm 
          defaultProjectSlug={selectedProjectForEnquiry ? selectedProjectForEnquiry.slug : ''} 
          onSuccess={() => setEnquiryModalOpen(false)} 
        />
      </Modal>

    </div>
  );
}
