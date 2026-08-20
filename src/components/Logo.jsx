import React from 'react';

/**
 * Logo Component for Prestige Group
 * Renders the uploaded official brand logo image.
 */
export default function Logo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Brand Logo Image */}
      <div className={`relative p-1 rounded bg-white border ${isLight ? 'border-slate-700 shadow-md' : 'border-slate-200 shadow-sm'} group-hover:border-signature-gold transition-colors duration-300`}>
        <img 
          src="/logo.jpg" 
          alt="Prestige Group Logo" 
          className="h-10 sm:h-12 w-auto object-contain"
        />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <span className={`font-serif text-xl sm:text-2xl font-bold tracking-tight leading-none ${isLight ? 'text-white' : 'text-primary-navy'}`}>
          PRESTIGE <span className="text-signature-gold font-medium">GROUP</span>
        </span>
        <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-warm-grey mt-1 font-medium">
          Add Prestige to your life
        </span>
      </div>
    </div>
  );
}
