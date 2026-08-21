import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { faqs } from '../../data/faqs';
import { WhatsAppMessages } from '../../utils/whatsapp';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#faf6f3] border-t border-[#ede1e4]">
      <Container size="narrow">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our ordering process, advance notice, delivery routes, and custom designs."
          className="mb-12"
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#ede1e4] overflow-hidden ambient-shadow transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#fdf2f4]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#1f1418] font-heading">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#661f31] text-white rotate-180'
                        : 'bg-[#fdf2f4] text-[#661f31]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#64555b] leading-relaxed border-t border-[#ede1e4]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional help callout */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-[#fdf2f4] border border-[#f4c4ce]">
          <p className="text-sm font-semibold text-[#1f1418]">
            Have a custom design or question not listed here?
          </p>
          <p className="text-xs text-[#64555b] mt-1 mb-4">
            Chat directly with our baker on WhatsApp for personalized support.
          </p>
          <a
            href={WhatsAppMessages.chatWithBaker()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#661f31] hover:bg-[#501624] text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-sm transition-all"
          >
            <span>Ask Berry on WhatsApp</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
