import React from 'react';
import { Language } from '../types';
import { GlobeIcon } from './Icons';

interface LanguageSwitchProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ currentLang, onToggle }) => {
  return (
    <div className="absolute top-6 left-6 z-50 ltr:right-6 ltr:left-auto rtl:left-6 rtl:right-auto">
      <button
        onClick={() => onToggle(currentLang === 'ar' ? 'fr' : 'ar')}
        className="flex items-center gap-2 bg-white/90 backdrop-blur-md text-slate-700 px-5 py-2.5 rounded-full shadow-lg border border-slate-200 hover:border-orange-300 hover:text-orange-600 hover:shadow-xl transition-all duration-300 group"
        aria-label="Switch Language"
      >
        <GlobeIcon className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors" />
        <span className="font-bold text-lg tracking-wide">
          {currentLang === 'ar' ? 'Français' : 'العربية'}
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitch;