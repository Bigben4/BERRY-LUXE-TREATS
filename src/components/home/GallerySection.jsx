import React, { useState } from 'react';
import { Camera, Sparkles, MessageCircle, ExternalLink } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { galleryCategories, galleryItems } from '../../data/gallery';
import { WhatsAppMessages } from '../../utils/whatsapp';

export default function GallerySection({ onSelectImage }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#fdf8f4] border-t border-[#ede1e4]">
      <Container>
        <SectionHeading
          title="Our Real Treats Showcase"
          subtitle="A glimpse into recent orders handcrafted with love in our kitchen — from graduation cakes to surprise money bouquets and corporate platters."
          className="mb-10 md:mb-12"
        />

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#661f31] text-white shadow-md shadow-[#661f31]/20 ring-2 ring-[#661f31]'
                  : 'bg-white text-[#64555b] hover:bg-[#fdf2f4] hover:text-[#661f31] border border-[#ede1e4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-[#ede1e4] ambient-shadow hover:ambient-shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-4/5 overflow-hidden bg-[#fdf2f4]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#661f31] border border-[#f4c4ce] shadow-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Hover Details & WhatsApp Action */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs font-semibold text-[#dfb079] uppercase tracking-wider">
                    {item.category}
                  </p>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h4>
                  <a
                    href={WhatsAppMessages.galleryItemInquiry(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded-full text-xs font-bold shadow-md transition-transform active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Order Similar on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Bottom Caption for mobile view */}
              <div className="p-4 sm:hidden flex items-center justify-between bg-white border-t border-[#ede1e4]">
                <div>
                  <h4 className="text-sm font-bold text-[#1f1418]">{item.title}</h4>
                  <p className="text-[11px] text-[#64555b]">{item.tag}</p>
                </div>
                <a
                  href={WhatsAppMessages.galleryItemInquiry(item.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#661f31] text-white"
                  aria-label={`Order ${item.title}`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
