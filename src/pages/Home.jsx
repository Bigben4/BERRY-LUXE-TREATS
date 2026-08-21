import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import MobileBottomNav from '../components/layout/MobileBottomNav';
import ScrollProgress from '../components/common/ScrollProgress';
import Hero from '../components/home/Hero';
import StorySection from '../components/home/StorySection';
import OfferingsSection from '../components/home/OfferingsSection';
import PremiumServicesSection from '../components/home/PremiumServicesSection';
import GallerySection from '../components/home/GallerySection';
import DeliverySection from '../components/home/DeliverySection';
import HowToOrderSection from '../components/home/HowToOrderSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf6f3] text-[#1f1418] flex flex-col justify-between">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StorySection />
        <OfferingsSection />
        <PremiumServicesSection />
        <GallerySection />
        <DeliverySection />
        <HowToOrderSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
