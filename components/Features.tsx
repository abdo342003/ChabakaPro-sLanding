import React from 'react';
import { ShieldIcon } from './Icons';

interface FeaturesProps {
  description: string;
}

const Features: React.FC<FeaturesProps> = ({ description }) => {
  return (
    <section className="relative py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-10 items-center relative overflow-hidden group">
          
          {/* Decorative background blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>

          <div className="flex-shrink-0 relative z-10">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 transition-transform group-hover:rotate-6">
              <ShieldIcon className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>
          </div>

          <div className="relative z-10 text-center md:text-right rtl:md:text-right ltr:md:text-left">
            <h2 className="text-2xl md:text-4xl text-slate-800 font-bold leading-relaxed">
              {description}
            </h2>
            <div className="h-1.5 w-24 bg-orange-500 mt-6 mx-auto md:mx-0 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;