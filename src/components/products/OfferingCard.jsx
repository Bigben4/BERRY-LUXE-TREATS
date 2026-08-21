import React from 'react';
import { ArrowRight, CheckCircle2, Cake, Cookie, UtensilsCrossed } from 'lucide-react';
import WhatsAppButton from '../common/WhatsAppButton';

const iconMap = {
  Cake,
  Cookie,
  UtensilsCrossed
};

export default function OfferingCard({ offering, onOpenQuickOrder }) {
  const {
    title,
    icon,
    priceText,
    description,
    features,
    image,
    imageAlt,
    shapeRadius = 'rounded-3xl',
    inquiryType
  } = offering;

  const IconComponent = iconMap[icon] || Cake;

  return (
    <div
      className={`group bg-white border border-[#ede1e4] ${shapeRadius} overflow-hidden ambient-shadow hover:ambient-shadow-lg hover:border-[#661f31]/40 transition-all duration-300 flex flex-col justify-between`}
    >
      <div>
        {/* Top Image Banner */}
        <div className="h-64 sm:h-72 overflow-hidden relative bg-[#fdf2f4]">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Price Badge */}
          <div className="absolute bottom-4 left-4">
            <span className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#661f31] border border-[#f4c4ce] shadow-md">
              {priceText}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#fdf2f4] border border-[#f4c4ce] flex items-center justify-center text-[#661f31] shrink-0">
              <IconComponent className="w-4 h-4" />
            </div>
            <h3 className="text-2xl font-bold text-[#1f1418] group-hover:text-[#661f31] transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-sm text-[#64555b] mb-5 leading-relaxed">
            {description}
          </p>

          {/* Features Checklist */}
          <ul className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#1f1418]/85 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#c69255] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action CTA */}
      <div className="p-6 sm:p-7 pt-0 flex flex-col sm:flex-row items-center gap-3">
        <WhatsAppButton
          message={offering.customMessage || `Hi! I'd like to ask about ${title}.`}
          fullWidth
          variant="primary"
          size="md"
        >
          {offering.ctaText || `Order ${title}`}
        </WhatsAppButton>
      </div>
    </div>
  );
}
