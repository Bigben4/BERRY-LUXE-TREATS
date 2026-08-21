import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTiktok, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Container from '../common/Container';
import WhatsAppButton from '../common/WhatsAppButton';
import { businessInfo } from '../../data/businessInfo';
import { WhatsAppMessages } from '../../utils/whatsapp';

export default function Hero() {
  return (
    <section className="relative min-h-[750px] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#faf6f3] via-[#fcf2f4]/60 to-[#faf6f3]">
      {/* Ambient Decorative Blur Circles */}
      <div className="absolute top-12 right-0 w-80 h-80 bg-[#c69255]/15 rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#661f31]/10 rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/3" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Owner / Head Baker Portrait */}
          <div className="lg:col-span-5 relative group order-2 lg:order-1 flex justify-center">
            {/* Glow Aura */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#661f31]/20 via-[#c69255]/20 to-transparent rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />

            <div className="relative w-full max-w-md rounded-[3rem_1rem_3rem_1rem] overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src="/images/29d2e77b-8ef8-404a-9aa5-2b6c19e9e03b.jpg"
                alt="Berry, Founder and Head Baker of Berry Luxe Treats"
                className="w-full h-auto aspect-4/5 object-cover object-top group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40" />
            </div>

            {/* Baker Badge (Pill Card) */}
            <div className="absolute -bottom-5 -right-2 sm:right-4 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-[#ede1e4] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#fdf2f4] border border-[#f4c4ce] flex items-center justify-center text-[#661f31] font-bold text-sm">
                BLT
              </div>
              <div>
                <p className="font-bold text-sm text-[#1f1418] font-heading leading-tight">
                  {businessInfo.founder}
                </p>
                <p className="text-[11px] text-[#64555b] font-medium">
                  {businessInfo.founderTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Headline & CTAs (5-Second Immediate Clarity) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2">
            {/* Direct 3-Pillar Category Indicator */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-[0.22em] text-[#c69255] mb-3">
              <span>CAKES</span>
              <span className="text-[#661f31]">•</span>
              <span>PASTRIES</span>
              <span className="text-[#661f31]">•</span>
              <span>CATERING</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#661f31] font-heading leading-[1.12]">
              Made for your moments.{' '}
              <span className="text-[#1f1418] block sm:inline font-extrabold">
                Baked with love.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-xl text-[#64555b] max-w-xl leading-relaxed">
              Custom cakes, fresh pastries and full-service catering for birthdays, weddings, corporate events and every celebration in between.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <WhatsAppButton
                message={WhatsAppMessages.generalOrder()}
                size="lg"
                variant="primary"
                className="shadow-lg shadow-[#661f31]/25 hover:shadow-xl hover:shadow-[#661f31]/35"
              >
                Order on WhatsApp
              </WhatsAppButton>

              <a
                href="#offerings"
                className="px-8 py-4 rounded-full text-sm sm:text-base font-bold text-[#661f31] border-2 border-[#661f31]/30 hover:border-[#661f31] hover:bg-[#661f31]/5 transition-all text-center flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Explore Menu</span>
                <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social Media Handles Row under CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64555b] mr-1">
                Follow Us:
              </span>
              <a
                href={businessInfo.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ede1e4] hover:border-[#661f31] text-[#1f1418] hover:text-[#661f31] text-xs font-semibold shadow-2xs hover:shadow-xs transition-all duration-200"
              >
                <FontAwesomeIcon icon={faTiktok} className="w-3.5 h-3.5 text-[#1f1418]" />
                <span>TikTok</span>
              </a>

              <a
                href={businessInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ede1e4] hover:border-[#661f31] text-[#1f1418] hover:text-[#661f31] text-xs font-semibold shadow-2xs hover:shadow-xs transition-all duration-200"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-3.5 h-3.5 text-[#1877F2]" />
                <span>Facebook</span>
              </a>

              <a
                href={businessInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ede1e4] hover:border-[#661f31] text-[#1f1418] hover:text-[#661f31] text-xs font-semibold shadow-2xs hover:shadow-xs transition-all duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-3.5 h-3.5 text-[#E1306C]" />
                <span>Instagram</span>
              </a>
            </div>

            {/* Delivery Footnote */}
            <div className="mt-8 pt-5 border-t border-[#ede1e4]/80 w-full flex items-center gap-2 text-xs text-[#64555b] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Baking in Buea • Delivering to Limbe, Tiko, Douala & Beyond</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

