import React from 'react';
import { Crown } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from '../products/ServiceCard';
import { premiumServices } from '../../data/services';

export default function PremiumServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#fdf8f4] border-t border-[#ede1e4]">
      <Container>
        <SectionHeading
          title="Premium Services"
          subtitle="Specialized event catering, custom money bouquets, and curated gift hampers designed to elevate your milestones into unforgettable experiences."
          className="mb-14 md:mb-16"
        />

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {premiumServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
