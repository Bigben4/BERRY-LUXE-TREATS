import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faHeart, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTiktok, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { businessInfo } from '../../data/businessInfo';
import { WhatsAppMessages } from '../../utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1f1418] text-[#faf6f3] w-full rounded-t-[2.5rem] mt-16 relative z-10 pb-28 md:pb-12 border-t border-[#3a0d18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#3a0d18]">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={businessInfo.logo}
                alt="Berry Luxe Treats Logo"
                className="h-12 w-auto bg-white/10 rounded-full p-1 border border-[#c69255]/40"
              />
              <div>
                <span className="text-xl font-bold tracking-wider uppercase text-white font-heading">
                  Berry Luxe
                </span>
                <span className="block text-[11px] uppercase tracking-widest text-[#c69255] font-semibold">
                  Treats Cameroon
                </span>
              </div>
            </div>
            <p className="text-sm text-[#faf6f3]/80 leading-relaxed">
              {businessInfo.tagline} Handcrafted cakes, pastries, money bouquets, and full catering for celebrations across Cameroon.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#c69255] font-medium pt-1">
              <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5" />
              <span>{businessInfo.operatingHours}</span>
            </div>
          </div>

          {/* Column 2: Quick Links / Menu */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#c69255] mb-4">
              Our Specialties
            </h4>
            <ul className="space-y-2.5 text-sm text-[#faf6f3]/80">
              <li>
                <a href="#offerings" className="hover:text-[#dfb079] transition-colors">
                  Birthday & Custom Cakes
                </a>
              </li>
              <li>
                <a href="#offerings" className="hover:text-[#dfb079] transition-colors">
                  Fresh Frosted Cupcakes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#dfb079] transition-colors">
                  Artisanal Gift Baskets
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#dfb079] transition-colors">
                  Elegant Money Bouquets
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#dfb079] transition-colors">
                  Bespoke Event Catering
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Delivery Locations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#c69255] mb-4">
              Delivery Towns
            </h4>
            <ul className="space-y-2 text-sm text-[#faf6f3]/80">
              {businessInfo.locations.map((loc) => (
                <li key={loc}>
                  <a
                    href={WhatsAppMessages.deliveryInquiry(loc)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#dfb079] transition-colors"
                  >
                    <FontAwesomeIcon icon={faLocationDot} className="w-3 h-3 text-[#c69255]" />
                    <span>{loc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: WhatsApp & Socials */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#c69255] mb-4">
              Connect With Us
            </h4>
            <p className="text-xs text-[#faf6f3]/70">
              Order directly or view our latest custom creations on social media:
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href={WhatsAppMessages.chatWithBaker()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                <span>WhatsApp: {businessInfo.founder}</span>
              </a>
              <a
                href={businessInfo.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#faf6f3]/80 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faTiktok} className="w-3.5 h-3.5" />
                <span>TikTok @berryluxetreats</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-2.5 h-2.5 ml-auto text-xs" />
              </a>
              <a
                href={businessInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#faf6f3]/80 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-3.5 h-3.5 text-[#1877F2]" />
                <span>Facebook Page</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-2.5 h-2.5 ml-auto text-xs" />
              </a>
              <a
                href={businessInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#faf6f3]/80 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-3.5 h-3.5 text-[#E1306C]" />
                <span>Instagram Profile</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-2.5 h-2.5 ml-auto text-xs" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#faf6f3]/60 gap-4">
          <p>© {currentYear} BERRY LUXE TREATS Cameroon. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Made with</span>
            <FontAwesomeIcon icon={faHeart} className="w-3.5 h-3.5 text-[#c69255]" />
            <span>in Buea & Limbe • Delivered with Joy</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
