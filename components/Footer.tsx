import React from 'react';
import { ContentStructure } from '../types';
import { PhoneIcon, ShieldIcon } from './Icons';

interface FooterProps {
  content: ContentStructure['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-3 bg-slate-800 px-6 py-3 rounded-full border border-slate-700">
           <ShieldIcon className="w-6 h-6 text-orange-400" />
           <p className="text-xl md:text-2xl font-bold text-slate-200">
            {content.trustMessage}
           </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-400">{content.text}</h3>
          
          <a 
            href={`tel:${content.contact.phone}`}
            className="inline-flex items-center gap-4 text-4xl md:text-6xl font-black text-white hover:text-orange-500 transition-colors tracking-tight"
            dir="ltr"
          >
            <PhoneIcon className="w-10 h-10 md:w-14 md:h-14 fill-orange-500" />
            <span>{content.contact.phone}</span>
          </a>
        </div>
        
        <div className="pt-12 border-t border-slate-800 text-slate-500 text-lg">
          <p>&copy; {new Date().getFullYear()} ChabakaPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;