import React from 'react';
import { Cake, Gift, Truck, BookOpen, MessageCircle } from 'lucide-react';
import { WhatsAppMessages } from '../../utils/whatsapp';

export default function MobileBottomNav() {
  const navItems = [
    { name: 'Cakes', href: '#offerings', icon: Cake },
    { name: 'Gifts', href: '#services', icon: Gift },
    { name: 'Delivery', href: '#delivery', icon: Truck },
    { name: 'Story', href: '#story', icon: BookOpen },
  ];

  return (
    <>
      {/* Floating WhatsApp CTA Button (Mobile & Tablet) */}
      <aside aria-label="WhatsApp Quick Order" className="fixed bottom-20 right-4 z-40 md:bottom-8 md:right-8">
        <a
          href={WhatsAppMessages.generalOrder()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-[#25d366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl shadow-emerald-900/30 hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Order on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-current" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" />
          </div>
          <span className="hidden sm:inline font-bold text-sm tracking-wide">
            Order on WhatsApp
          </span>
        </a>
      </aside>

      {/* Fixed Bottom Navigation Bar (Mobile Only) */}
      <nav aria-label="Mobile Navigation" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#ede1e4] py-1.5 px-4 shadow-[0px_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex flex-col items-center justify-center p-1.5 rounded-xl text-[#64555b] hover:text-[#661f31] hover:bg-[#fdf2f4] active:scale-90 transition-all duration-150"
              >
                <Icon className="w-5 h-5" />
                <span className="text-[11px] font-semibold mt-0.5">{item.name}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
