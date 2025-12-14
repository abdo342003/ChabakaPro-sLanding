import React from 'react';
import { ContentStructure } from '../types';
import { PhoneIcon } from './Icons';
import { PHONE_NUMBER } from '../constants';
import { LogoFull } from './Logo';

interface HeroProps {
  content: ContentStructure['header'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <header className="relative bg-slate-900 text-white overflow-hidden pb-16">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900 pointer-events-none"></div>
      
      {/* Glow Effects - Orange & Blue */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
        
        {/* Brand Logo */}
        <div className="mb-10 animate-fade-in-up">
           <LogoFull className="scale-110" />
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tight text-white drop-shadow-sm">
          {content.title}
        </h1>
        
        <p className="text-xl md:text-3xl text-slate-300 font-medium mb-12 leading-relaxed max-w-3xl mx-auto">
          {content.subtitle}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="group relative inline-flex items-center gap-4 bg-orange-500 hover:bg-orange-600 text-white text-2xl md:text-3xl font-bold py-6 px-12 rounded-2xl shadow-orange-900/50 shadow-lg transform transition-all hover:scale-105 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:animate-shimmer" />
            <PhoneIcon className="w-8 h-8 md:w-10 md:h-10 fill-current" />
            <span>{content.button.text}</span>
          </a>
        </div>
      </div>
      
      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
        </svg>
      </div>
    </header>
  );
};

export default Hero;