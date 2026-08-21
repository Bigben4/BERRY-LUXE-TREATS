import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import Container from '../common/Container';
import { businessInfo } from '../../data/businessInfo';
import { WhatsAppMessages } from '../../utils/whatsapp';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#faf6f3] relative overflow-hidden">
      <Container>
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#661f31] via-[#7d263c] to-[#42101d] text-white p-10 sm:p-14 lg:p-20 shadow-2xl border-4 border-white">
          {/* Ambient Glow & Gold Leaf Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c69255]/25 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/30 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight">
              &ldquo;{businessInfo.coreMessage}&rdquo;
            </h2>

            <p className="text-base sm:text-xl text-[#faf6f3]/90 leading-relaxed max-w-2xl mx-auto">
              Whether you need a bespoke wedding centerpiece, custom birthday cake, surprise money bouquet, or fresh party pastries — we are one message away.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WhatsAppMessages.generalOrder()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#25d366] to-[#128c7e] hover:from-[#20ba5a] hover:to-[#0f756a] text-white font-bold text-base shadow-xl shadow-emerald-950/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{businessInfo.primaryCta}</span>
              </a>

              <a
                href="#offerings"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/30 backdrop-blur-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Browse Menu</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-6 text-xs text-[#dfb079] font-medium">
              <span>Delivering with care to Buea • Limbe • Tiko • Douala • & Beyond</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
