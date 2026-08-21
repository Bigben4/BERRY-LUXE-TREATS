import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faTruckFast, faCheck, faLocationArrow, faClock, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import Container from '../common/Container';
import { businessInfo } from '../../data/businessInfo';
import { deliveryLocations, deliveryFeatures } from '../../data/delivery';
import { WhatsAppMessages } from '../../utils/whatsapp';

export default function DeliverySection() {
  return (
    <section id="delivery" className="py-20 md:py-28 bg-gradient-to-br from-[#240b12] via-[#35101a] to-[#1c070e] text-white relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#c69255]/15 rounded-full blur-3xl -z-10 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/40 rounded-full blur-3xl -z-10 translate-y-1/2" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Delivery Information */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading leading-tight">
              Great Taste Has No Distance
            </h2>

            <p className="text-base sm:text-lg text-[#fdf2f4]/85 max-w-xl leading-relaxed">
              We deliver our fresh creations across the South West and Littoral regions. Distance is never a barrier to celebrating life’s sweetest moments with Berry Luxe Treats.
            </p>

            {/* Location Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {deliveryLocations.map((loc) => (
                <a
                  key={loc.city}
                  href={WhatsAppMessages.deliveryInquiry(loc.city)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 hover:border-[#dfb079] text-white font-semibold text-sm transition-all group shadow-sm cursor-pointer backdrop-blur-xs"
                >
                  <div className="w-7 h-7 rounded-full bg-white/15 group-hover:bg-[#c69255] flex items-center justify-center text-[#dfb079] group-hover:text-white transition-colors shrink-0">
                    <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5" />
                  </div>
                  <span>{loc.city}</span>
                </a>
              ))}
            </div>

            {/* Delivery Features list */}
            <div className="space-y-3 pt-4 border-t border-white/15">
              {deliveryFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#c69255]/25 flex items-center justify-center text-[#dfb079] shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-xs" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{feat.title}</h4>
                    <p className="text-xs text-[#fdf2f4]/75">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <a
                href={WhatsAppMessages.deliveryInquiry()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c69255] to-[#dfb079] hover:from-[#b07c40] hover:to-[#c69255] text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg shadow-black/30 hover:shadow-xl active:scale-95 transition-all"
              >
                <span>Check Delivery Availability</span>
                <FontAwesomeIcon icon={faTruckFast} className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Delivery Feature Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c69255]/25 via-[#822a41]/20 to-transparent rounded-full blur-3xl opacity-70" />

            <div className="relative w-full max-w-sm bg-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-[3rem_1rem_3rem_1rem] shadow-2xl border-2 border-white/20 text-center flex flex-col items-center gap-5 group">
              <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-[#dfb079] group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <FontAwesomeIcon icon={faLocationArrow} className="w-10 h-10 text-[#dfb079]" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#dfb079] uppercase tracking-widest block mb-1">
                  Doorstep Service
                </span>
                <h3 className="text-2xl font-extrabold text-white font-heading">
                  Fast & Fresh
                </h3>
                <p className="text-sm font-medium text-[#fdf2f4]/80 mt-1">
                  Chilled Packaging • Punctual Hand-Off
                </p>
              </div>

              <div className="w-full pt-4 border-t border-white/15 flex items-center justify-between text-xs text-[#fdf2f4]/80 font-medium">
                <span className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4 text-emerald-400" />
                  <span>Secure Boxing</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-[#dfb079]" />
                  <span>Time-coordinated</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
