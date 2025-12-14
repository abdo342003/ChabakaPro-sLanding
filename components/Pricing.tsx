import React from 'react';
import { OfferContent, ContentStructure } from '../types';
import { CheckIcon, PhoneIcon } from './Icons';
import { PHONE_NUMBER } from '../constants';

interface PricingProps {
  offers: OfferContent[];
  labels: ContentStructure['labels'];
}

const Pricing: React.FC<PricingProps> = ({ offers, labels }) => {
  return (
    <section className="relative py-12 px-6 pb-32 bg-slate-50">
      {/* Light Tech Pattern Background */}
      <div className="absolute inset-0 bg-tech-grid-light pointer-events-none opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {offers.map((offer, index) => (
            <div 
              key={index} 
              className={`
                group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300
                ${offer.isPopular 
                  ? 'bg-white shadow-2xl scale-100 md:scale-105 border-2 border-orange-500 z-10' 
                  : 'bg-white shadow-lg border border-slate-200 hover:shadow-xl'}
              `}
            >
              {/* Popular Badge */}
              {offer.isPopular && (
                <div className="bg-orange-500 text-white text-center py-2 font-bold text-lg tracking-wide uppercase">
                  {labels.recommended}
                </div>
              )}

              <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {offer.name}
                  </h2>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-2xl md:text-3xl font-bold ${offer.isPopular ? 'text-orange-500' : 'text-slate-600'}`}>
                      {offer.price}
                    </span>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100 mb-8"></div>

                <ul className="flex-1 space-y-5 mb-10">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className={`mt-1 p-1 rounded-full ${offer.isPopular ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'}`}>
                        <CheckIcon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <span className="text-xl md:text-2xl font-medium text-slate-700 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className={`
                    w-full py-5 rounded-xl text-2xl font-bold text-center flex justify-center items-center gap-3 transition-all duration-300 transform active:scale-[0.98]
                    ${offer.isPopular 
                      ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-200' 
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200'}
                  `}
                >
                  <PhoneIcon className="w-6 h-6" />
                  {offer.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;