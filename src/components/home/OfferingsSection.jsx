import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import OfferingCard from '../products/OfferingCard';
import { offerings } from '../../data/offerings';

export default function OfferingsSection() {
  return (
    <section id="offerings" className="py-20 md:py-28 bg-[#fcf8f5] border-t border-[#ede1e4]/70">
      <Container>
        <SectionHeading
          title="Our Offerings"
          subtitle="Explore our most popular bakery selections. From custom themed cakes to breakfast pastries and grand event platters, we make every order fresh to perfection."
          className="mb-14 md:mb-16"
        />

        {/* 3-Column Bento Grid matching reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering) => (
            <OfferingCard key={offering.id} offering={offering} />
          ))}
        </div>
      </Container>
    </section>
  );
}
