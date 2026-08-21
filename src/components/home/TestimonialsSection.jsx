import React from 'react';
import { Star, MapPin } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { testimonials } from '../../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#fbf0f4] border-t border-[#ede1e4]">
      <Container>
        <SectionHeading
          title="Celebrated Across Cameroon"
          subtitle="Real reviews from families, event hosts, and sweet lovers who celebrated their milestones with Berry Luxe Treats."
          className="mb-14 md:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#ede1e4] ambient-shadow hover:ambient-shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-[#c69255] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c69255]" />
                  ))}
                </div>

                <p className="text-sm text-[#1f1418] leading-relaxed italic mb-6">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#ede1e4]/70 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#661f31]">{t.name}</h4>
                  <span className="text-[11px] font-medium text-[#c69255] block">
                    {t.event}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#64555b]">
                  <MapPin className="w-3.5 h-3.5 text-[#c69255]" />
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
