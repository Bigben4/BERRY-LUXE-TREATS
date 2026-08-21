import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Container from '../common/Container';
import WhatsAppButton from '../common/WhatsAppButton';
import { businessInfo } from '../../data/businessInfo';
import { WhatsAppMessages } from '../../utils/whatsapp';

const TikTokIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.95-4.52V8.06a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.95.51z" />
  </svg>
);

const FacebookIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

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

          {/* Right Column: Brand Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#661f31] font-heading leading-[1.15]">
              BERRY LUXE TREATS,{' '}
              <span className="text-[#1f1418] block sm:inline font-extrabold">
                MADE WITH LOVE AND SERVED WITH JOY
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-[#64555b] max-w-xl leading-relaxed">
              {businessInfo.description}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <WhatsAppButton
                message={WhatsAppMessages.generalOrder()}
                size="lg"
                variant="primary"
                className="shadow-lg shadow-[#661f31]/25 hover:shadow-xl hover:shadow-[#661f31]/35"
              >
                Order Now on WhatsApp
              </WhatsAppButton>

              <a
                href="#offerings"
                className="px-8 py-4 rounded-full text-sm sm:text-base font-bold text-[#661f31] border-2 border-[#661f31]/30 hover:border-[#661f31] hover:bg-[#661f31]/5 transition-all text-center flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
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
                <TikTokIcon className="w-3.5 h-3.5 text-[#1f1418]" />
                <span>TikTok</span>
              </a>

              <a
                href={businessInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ede1e4] hover:border-[#661f31] text-[#1f1418] hover:text-[#661f31] text-xs font-semibold shadow-2xs hover:shadow-xs transition-all duration-200"
              >
                <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2]" />
                <span>Facebook</span>
              </a>

              <a
                href={businessInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ede1e4] hover:border-[#661f31] text-[#1f1418] hover:text-[#661f31] text-xs font-semibold shadow-2xs hover:shadow-xs transition-all duration-200"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />
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

