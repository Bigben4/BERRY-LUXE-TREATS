import React from 'react';
import { UtensilsCrossed, Gift, Banknote, Cake, MessageCircle } from 'lucide-react';
import WhatsAppButton from '../common/WhatsAppButton';

const iconMap = {
  UtensilsCrossed,
  Gift,
  Banknote,
  Cake,
};

export default function ServiceCard({ service }) {
  const { title, description, image, imageAlt, icon, badge, ctaText } = service;
  const IconComponent = iconMap[icon] || Cake;

  return (
    <div className="bg-white rounded-2xl border border-[#ede1e4] shadow-xs hover:shadow-md hover:border-[#661f31]/30 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Card Image */}
        <div className="h-52 overflow-hidden relative bg-[#fdf2f4]">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 right-3">
            <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-[#661f31] border border-[#f4c4ce] shadow-2xs">
              {badge}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Icon Circle */}
          <div className="w-12 h-12 rounded-full bg-[#fdf2f4] border border-[#f4c4ce] flex items-center justify-center -mt-12 mb-4 relative z-10 shadow-xs text-[#661f31]">
            <IconComponent className="w-5 h-5" />
          </div>

          <h3 className="text-xl font-bold text-[#1f1418] mb-2 group-hover:text-[#661f31] transition-colors">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-[#64555b] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="p-6 pt-0">
        <WhatsAppButton
          message={`Hi Berry Luxe Treats! I’d like to inquire about "${title}". Please share package options and pricing.`}
          fullWidth
          variant="gold"
          size="sm"
        >
          {ctaText || 'Inquire on WhatsApp'}
        </WhatsAppButton>
      </div>
    </div>
  );
}
