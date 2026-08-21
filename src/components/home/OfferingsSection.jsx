import React, { useState } from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import OfferingCard from '../products/OfferingCard';
import { offerings, menuCategories } from '../../data/offerings';

export default function OfferingsSection() {
  const [activeCategory, setActiveCategory] = useState('All Menu');

  const filteredOfferings =
    activeCategory === 'All Menu'
      ? offerings
      : offerings.filter((item) => item.category === activeCategory);

  return (
    <section id="offerings" className="py-20 md:py-28 bg-[#fcf8f5] border-t border-[#ede1e4]/70">
      <Container>
        <SectionHeading
          title="Our Bakery Menu & Pricing"
          subtitle="Handcrafted cakes, fresh pastries, and curated celebration gifts made to order in Buea & Limbe. Explore our transparent pricing and order directly via WhatsApp."
          className="mb-10 md:mb-12"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-[#661f31] text-white shadow-md shadow-[#661f31]/20 scale-105'
                  : 'bg-white text-[#64555b] border border-[#ede1e4] hover:border-[#661f31]/40 hover:text-[#661f31]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 3-Column Bento Grid displaying filtered menu items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOfferings.map((offering) => (
            <OfferingCard key={offering.id} offering={offering} />
          ))}
        </div>
      </Container>
    </section>
  );
}
