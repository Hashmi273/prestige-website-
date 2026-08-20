import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Building, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project, onQuickEnquire }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Container with Badge Overlays */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={project.images.main}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent opacity-80" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="bg-primary-navy/90 backdrop-blur-sm text-signature-gold font-semibold text-[11px] px-3 py-1 rounded uppercase tracking-wider border border-signature-gold/30">
            {project.category}
          </span>
          <span className={`backdrop-blur-sm text-white font-medium text-[11px] px-3 py-1 rounded tracking-wider ${
            project.status === 'Ready to Move' ? 'bg-emerald-600/90' : project.status === 'Under Construction' ? 'bg-amber-600/90' : 'bg-sky-600/90'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
          <div>
            <div className="text-[10px] uppercase font-semibold text-slate-300 tracking-wider">Starting Price</div>
            <div className="text-white font-serif text-lg font-bold">{project.priceRange}</div>
          </div>
        </div>
      </div>

      {/* Details Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-1.5 text-warm-grey text-xs mb-1">
            <MapPin className="w-3.5 h-3.5 text-signature-gold shrink-0" />
            <span>{project.locality}</span>
          </div>

          <h3 className="font-serif text-xl font-bold text-primary-navy group-hover:text-signature-gold transition-colors">
            {project.name}
          </h3>

          <p className="text-xs text-warm-grey line-clamp-2 mt-2 leading-relaxed">
            {project.overview}
          </p>

          <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-warm-grey block text-[10px] uppercase font-semibold">Config</span>
              <span className="text-primary-navy font-semibold">{project.specs.configurations}</span>
            </div>
            <div>
              <span className="text-warm-grey block text-[10px] uppercase font-semibold">Possession</span>
              <span className="text-primary-navy font-semibold">{project.specs.possession}</span>
            </div>
          </div>

          {/* RERA Placeholder Marker */}
          <div className="mt-3 text-[10px] text-warm-grey/80 italic flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-signature-gold" />
            <span>{project.reraNumberPlaceholder}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 grid grid-cols-2 gap-2">
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center justify-center gap-1 border border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white text-xs font-semibold py-2.5 rounded transition-all duration-300"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          
          <button
            onClick={() => onQuickEnquire && onQuickEnquire(project)}
            className="bg-signature-gold hover:bg-muted-gold text-white text-xs font-semibold py-2.5 rounded transition-all duration-300"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}
