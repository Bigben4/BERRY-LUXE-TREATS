import React from 'react';
import { MapPin, Truck, Check, Navigation, Clock, ShieldCheck } from 'lucide-react';
import Container from '../common/Container';
import Badge from '../common/Badge';
import { businessInfo } from '../../data/businessInfo';
import { deliveryLocations, deliveryFeatures } from '../../data/delivery';
import { WhatsAppMessages } from '../../utils/whatsapp';

export default function DeliverySection() {
  return (
    <section id="delivery" className="py-20 md:py-28 bg-[#faf6f3] border-t border-[#ede1e4] relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#c69255]/15 rounded-full blur-3xl -z-10 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#661f31]/10 rounded-full blur-3xl -z-10 translate-y-1/2" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Delivery Information */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="gold" icon={Truck}>
              Reliable Transit
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#661f31] font-heading leading-tight">
              Great Taste Has No Distance
            </h2>

            <p className="text-base sm:text-lg text-[#64555b] max-w-xl leading-relaxed">
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
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-[#ede1e4] hover:border-[#661f31]/40 hover:bg-[#fdf2f4] text-[#1f1418] font-semibold text-sm transition-all group shadow-2xs cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-[#fdf2f4] group-hover:bg-[#661f31] flex items-center justify-center text-[#661f31] group-hover:text-white transition-colors shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span>{loc.city}</span>
                </a>
              ))}
            </div>

            {/* Delivery Features list */}
            <div className="space-y-3 pt-4 border-t border-[#ede1e4]">
              {deliveryFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#c69255]/20 flex items-center justify-center text-[#916127] shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#1f1418]">{feat.title}</h4>
                    <p className="text-xs text-[#64555b]">{feat.desc}</p>
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#661f31] to-[#822a41] hover:from-[#501624] hover:to-[#661f31] text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg shadow-[#661f31]/20 hover:shadow-xl active:scale-95 transition-all"
              >
                <span>Check Delivery Schedule & Rates</span>
                <Truck className="w-4 h-4 text-[#dfb079]" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Delivery Feature Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c69255]/20 via-[#661f31]/15 to-transparent rounded-full blur-3xl opacity-70" />

            <div className="relative w-full max-w-sm bg-white p-8 sm:p-10 rounded-[3rem_1rem_3rem_1rem] shadow-xl border-4 border-white text-center flex flex-col items-center gap-5 group">
              <div className="w-24 h-24 rounded-full bg-[#fdf2f4] border-2 border-[#f4c4ce] flex items-center justify-center text-[#661f31] group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <Navigation className="w-12 h-12 text-[#661f31] stroke-[1.5]" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#c69255] uppercase tracking-widest block mb-1">
                  Doorstep Service
                </span>
                <h3 className="text-2xl font-extrabold text-[#661f31] font-heading">
                  Fast & Fresh
                </h3>
                <p className="text-sm font-medium text-[#64555b] mt-1">
                  Chilled Packaging • Punctual Hand-Off
                </p>
              </div>

              <div className="w-full pt-4 border-t border-[#ede1e4] flex items-center justify-between text-xs text-[#64555b] font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Secure Boxing</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-[#c69255]" />
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
