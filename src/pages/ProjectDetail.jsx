import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import EnquiryForm from '../components/EnquiryForm';
import { 
  MapPin, 
  Building2, 
  CheckCircle2, 
  ArrowLeft, 
  Calendar, 
  Layers, 
  Ruler, 
  ShieldCheck, 
  Download,
  Waves,
  Coffee,
  Dumbbell,
  Trees,
  Gamepad2,
  Shield,
  Zap,
  Users,
  Building,
  ArrowUp,
  Wind,
  Briefcase,
  Car,
  Leaf,
  Sparkles,
  Activity,
  Sun,
  Laptop,
  Eye,
  BatteryCharging,
  Award,
  Tv,
  Utensils,
  Navigation,
  Compass,
  Flower2,
  Heart,
  RefreshCw
} from 'lucide-react';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = PROJECTS.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' | 'floorplans'

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-primary-navy">Project Not Found</h2>
        <p className="text-warm-grey text-sm">The project page you requested does not exist or has been updated.</p>
        <Link to="/projects" className="bg-signature-gold text-white font-semibold text-xs px-6 py-2.5 rounded inline-block">
          Back to Projects
        </Link>
      </div>
    );
  }

  // Dynamic Icon Resolver
  const renderAmenityIcon = (iconName) => {
    const props = { className: "w-5 h-5 text-signature-gold" };
    switch (iconName) {
      case 'Waves': return <Waves {...props} />;
      case 'Coffee': return <Coffee {...props} />;
      case 'Dumbbell': return <Dumbbell {...props} />;
      case 'Trees': return <Trees {...props} />;
      case 'Gamepad2': return <Gamepad2 {...props} />;
      case 'Shield': return <Shield {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Building': return <Building {...props} />;
      case 'ArrowUp': return <ArrowUp {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Car': return <Car {...props} />;
      case 'Leaf': return <Leaf {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Sun': return <Sun {...props} />;
      case 'Laptop': return <Laptop {...props} />;
      case 'Eye': return <Eye {...props} />;
      case 'BatteryCharging': return <BatteryCharging {...props} />;
      case 'Award': return <Award {...props} />;
      case 'Tv': return <Tv {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'Navigation': return <Navigation {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'Flower2': return <Flower2 {...props} />;
      case 'Heart': return <Heart {...props} />;
      case 'RefreshCw': return <RefreshCw {...props} />;
      default: return <Building2 {...props} />;
    }
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-warm-grey hover:text-signature-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to listings
        </button>
      </div>

      {/* Hero Banner */}
      <section className="relative bg-primary-navy text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="bg-signature-gold text-white font-semibold text-xs px-3 py-1 rounded uppercase tracking-wider">
                {project.category}
              </span>
              <span className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded font-medium">
                {project.status}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              {project.name}
            </h1>

            <p className="text-signature-gold font-serif italic text-base sm:text-lg">
              "{project.tagline}"
            </p>

            <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-signature-gold shrink-0" />
              <span>{project.locality}</span>
            </div>
          </div>

          <div className="bg-deep-slate p-5 rounded-lg border border-slate-700 space-y-2">
            <div className="text-xs uppercase text-slate-400 font-semibold">Price Indicative</div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-white">{project.priceRange}</div>
            {/* RERA Placeholder Notice */}
            <div className="pt-2 border-t border-slate-700 text-[11px] text-signature-gold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>RERA Ref: {project.reraNumberPlaceholder}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Key Facts Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="text-warm-grey text-xs uppercase font-semibold block mb-1">Configuration</span>
            <span className="font-serif font-bold text-base text-primary-navy">{project.specs.configurations}</span>
          </div>
          <div>
            <span className="text-warm-grey text-xs uppercase font-semibold block mb-1">Carpet Area</span>
            <span className="font-serif font-bold text-base text-primary-navy">{project.specs.carpetArea}</span>
          </div>
          <div>
            <span className="text-warm-grey text-xs uppercase font-semibold block mb-1">Development Specs</span>
            <span className="font-serif font-bold text-base text-primary-navy">{project.specs.towers}</span>
          </div>
          <div>
            <span className="text-warm-grey text-xs uppercase font-semibold block mb-1">Possession</span>
            <span className="font-serif font-bold text-base text-primary-navy">{project.specs.possession}</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout: Left Details (2 cols), Right Pre-filled Enquiry (1 col) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-navy border-l-4 border-signature-gold pl-3">
                Project Overview
              </h2>
              <p className="text-sm text-warm-grey leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-navy border-l-4 border-signature-gold pl-3">
                World-Class Amenities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.amenities.map((amenity, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 flex items-center gap-3 shadow-xs">
                    <div className="w-9 h-9 rounded bg-signature-gold/10 flex items-center justify-center shrink-0">
                      {renderAmenityIcon(amenity.icon)}
                    </div>
                    <span className="text-xs font-semibold text-primary-navy">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery & Floor Plans Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h2 className="font-serif text-2xl font-bold text-primary-navy border-l-4 border-signature-gold pl-3">
                  Visuals & Layouts
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('gallery')}
                    className={`text-xs font-semibold px-4 py-1.5 rounded transition-colors ${
                      activeTab === 'gallery' ? 'bg-primary-navy text-white' : 'bg-off-white text-warm-grey'
                    }`}
                  >
                    Gallery ({project.images.gallery.length + 1})
                  </button>
                  <button
                    onClick={() => setActiveTab('floorplans')}
                    className={`text-xs font-semibold px-4 py-1.5 rounded transition-colors ${
                      activeTab === 'floorplans' ? 'bg-primary-navy text-white' : 'bg-off-white text-warm-grey'
                    }`}
                  >
                    Floor Plans ({project.images.floorPlans.length})
                  </button>
                </div>
              </div>

              {activeTab === 'gallery' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2 aspect-[16/9] rounded-lg overflow-hidden border border-slate-200">
                    <img src={project.images.main} alt={project.name} className="w-full h-full object-cover" />
                  </div>
                  {project.images.gallery.map((imgUrl, idx) => (
                    <div key={idx} className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200">
                      <img src={imgUrl} alt={`${project.name} detail ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.images.floorPlans.map((fpUrl, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 space-y-2">
                      <div className="aspect-[4/3] bg-slate-100 rounded overflow-hidden">
                        <img src={fpUrl} alt={`${project.name} floorplan`} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-center pt-2">
                        <span className="text-xs font-bold text-primary-navy">Typical Floor Layout Concept</span>
                        <span className="block text-[11px] text-warm-grey">Subject to final architectural approval</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Location Advantages */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-navy border-l-4 border-signature-gold pl-3">
                Location Connectivity
              </h2>
              <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
                {project.locationAdvantages.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-primary-navy font-medium">
                    <CheckCircle2 className="w-4 h-4 text-signature-gold shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Pre-filled Enquiry Form */}
          <div>
            <div className="sticky top-28 bg-white p-6 rounded-xl border border-slate-200 shadow-lg space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-serif text-xl font-bold text-primary-navy">Express Interest</h3>
                <p className="text-xs text-warm-grey">Pre-filled for <strong className="text-signature-gold">{project.name}</strong></p>
              </div>

              <EnquiryForm defaultProjectSlug={project.slug} />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
