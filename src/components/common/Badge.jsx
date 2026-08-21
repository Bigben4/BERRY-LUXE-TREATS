import React from 'react';

export default function Badge({
  children,
  variant = 'gold',
  icon: Icon,
  className = ''
}) {
  const variants = {
    gold: 'bg-[#fef9f2] text-[#916127] border-[#f7e0c2]',
    primary: 'bg-[#fdf2f4] text-[#661f31] border-[#f4c4ce]',
    dark: 'bg-[#1f1418] text-[#faf6f3] border-[#3a0d18]',
    cream: 'bg-[#fffaf5] text-[#64555b] border-[#ede1e4]',
    whatsapp: 'bg-emerald-50 text-emerald-800 border-emerald-200'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border shadow-2xs ${variants[variant] || variants.gold} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}
