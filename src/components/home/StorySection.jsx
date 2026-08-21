import React from 'react';
import { Heart, CheckCircle2 } from 'lucide-react';
import Container from '../common/Container';
import { businessInfo } from '../../data/businessInfo';
import { WhatsAppMessages } from '../../utils/whatsapp';

export default function StorySection() {
  return (
    <section id="story" className="py-20 md:py-28 bg-gradient-to-br from-[#4f1523] via-[#631c2d] to-[#3a0d18] text-white relative overflow-hidden">
      {/* Background Soft Gold Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#c69255]/20 rounded-full blur-3xl -z-10 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/30 rounded-full blur-3xl -z-10" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story Text */}
          <div className="md:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading leading-tight">
              The Heart of the Bakery
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#fdf2f4]/90 leading-relaxed">
              <p>
                From beautifully crafted cakes to mouth-watering pastries and full catering services, we make every occasion special. Whether it’s a wedding, birthday, corporate event, or just a sweet craving.
              </p>
              <p className="font-semibold text-[#dfb079] italic border-l-3 border-[#c69255] pl-4 py-1">
                &ldquo;{businessInfo.mission}&rdquo;
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-white bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#dfb079] shrink-0" />
                <span>100% Fresh Daily Bakes</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-white bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#dfb079] shrink-0" />
                <span>Custom Inscriptions</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-white bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#dfb079] shrink-0" />
                <span>Handcrafted Bouquets</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-white bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#dfb079] shrink-0" />
                <span>Safe Doorstep Delivery</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={businessInfo.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c69255] to-[#dfb079] hover:from-[#b07c40] hover:to-[#c69255] text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg shadow-black/30 hover:shadow-xl active:scale-95 transition-all"
              >
                <span>Follow Our Journey</span>
                <Heart className="w-4 h-4 text-white fill-current" />
              </a>
            </div>
          </div>

          {/* Right Column: Imagery with custom asymmetric border radius */}
          <div className="md:col-span-6 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#c69255]/30 to-[#dfb079]/10 rounded-full blur-3xl opacity-70" />

            <div className="relative rounded-[1rem_3rem_1rem_3rem] overflow-hidden shadow-2xl border-4 border-white/90 bg-white aspect-square max-w-lg mx-auto">
              <img
                src="/images/24ec9fcc-2597-4d88-b67b-644ddebfa1e0_1_.jpg"
                alt="Head Baker Berry presenting handcrafted cake creation"
                className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#1f1418]/90 backdrop-blur-md border border-[#c69255]/40 shadow-md text-left text-white">
                <p className="text-xs font-bold text-[#dfb079] uppercase tracking-wider">Berry Luxe Promise</p>
                <p className="text-sm font-bold text-white mt-0.5">Every treat is crafted with passion for your celebration.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
