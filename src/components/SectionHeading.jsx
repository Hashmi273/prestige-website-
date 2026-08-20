import React from 'react';

export default function SectionHeading({ subtitle, title, description, align = 'center', light = false }) {
  const isLeft = align === 'left';

  return (
    <div className={`space-y-2 max-w-3xl ${isLeft ? 'text-left' : 'text-center mx-auto'} mb-10 md:mb-14`}>
      {subtitle && (
        <div className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${light ? 'text-signature-gold' : 'text-signature-gold'}`}>
          <span className="w-6 h-[1.5px] bg-signature-gold inline-block" />
          {subtitle}
          <span className="w-6 h-[1.5px] bg-signature-gold inline-block" />
        </div>
      )}

      {title && (
        <h2 className={`font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight ${light ? 'text-white' : 'text-primary-navy'}`}>
          {title}
        </h2>
      )}

      {description && (
        <p className={`text-sm md:text-base leading-relaxed ${light ? 'text-slate-300' : 'text-warm-grey'} pt-1`}>
          {description}
        </p>
      )}
    </div>
  );
}
