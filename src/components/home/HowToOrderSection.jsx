import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles, faComments, faTruckFast, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import WhatsAppButton from '../common/WhatsAppButton';
import { orderSteps } from '../../data/howToOrder';
import { WhatsAppMessages } from '../../utils/whatsapp';

const stepIcons = {
  Cake: faCakeCandles,
  MessageSquare: faComments,
  Truck: faTruckFast
};

export default function HowToOrderSection() {
  return (
    <section id="how-to-order" className="py-20 md:py-28 bg-[#fffbf8] border-t border-[#ede1e4] relative overflow-hidden">
      <Container>
        <SectionHeading
          title="How Ordering Works"
          subtitle="We make ordering personalized cakes and celebration treats effortless through a direct chat with our bakery team."
          className="mb-14 md:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {orderSteps.map((step, idx) => {
            const faIcon = stepIcons[step.icon] || faCakeCandles;
            return (
              <div
                key={step.step}
                className="bg-white rounded-3xl p-8 border border-[#ede1e4] ambient-shadow hover:ambient-shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#fdf2f4] border border-[#f4c4ce] flex items-center justify-center text-[#661f31] group-hover:scale-110 transition-transform duration-300">
                      <FontAwesomeIcon icon={faIcon} className="w-6 h-6 text-2xl" />
                    </div>
                    <span className="text-3xl font-black text-[#c69255]/40 font-heading">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1f1418] mb-3 group-hover:text-[#661f31] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#64555b] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#ede1e4]/70 flex items-center gap-2 text-xs font-semibold text-[#c69255]">
                  <FontAwesomeIcon icon={faCircleCheck} className="w-3.5 h-3.5" />
                  <span>Step {idx + 1} of 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-14 text-center">
          <WhatsAppButton
            message={WhatsAppMessages.chatWithBaker()}
            size="lg"
            variant="primary"
            className="shadow-lg shadow-[#661f31]/25 hover:shadow-xl hover:shadow-[#661f31]/35"
          >
            Chat With a Baker to Order
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
