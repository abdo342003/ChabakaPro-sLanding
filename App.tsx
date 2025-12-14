import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { CONTENT } from './constants';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import LanguageSwitch from './components/LanguageSwitch';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const content = CONTENT[lang];

  useEffect(() => {
    // Update HTML dir attribute for accessibility and proper layout
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update font based on language
    if (lang === 'ar') {
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.body.style.fontFamily = "'Inter', sans-serif";
    }
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <LanguageSwitch currentLang={lang} onToggle={setLang} />
      
      <Hero content={content.header} />
      
      <main className="flex-grow">
        <Features description={content.body.description} />
        <Pricing offers={content.body.offers} labels={content.labels} />
      </main>

      <Footer content={content.footer} />
    </div>
  );
};

export default App;