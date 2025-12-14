import React from 'react';

export const LogoMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 110" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer Hexagon Stroke (Orange) */}
    <path 
      d="M50 5 L95 30 L95 80 L50 105 L5 80 L5 30 Z" 
      fill="#1e293b" 
      stroke="#f97316" 
      strokeWidth="4"
    />
    
    {/* Inner Letters (Simulated CP) */}
    {/* The 'C' on the left */}
    <path d="M45 25 H25 V85 H45 V70 H35 V40 H45 V25 Z" fill="#f1f5f9" />
    
    {/* The 'P' on the right */}
    <path d="M55 25 H75 V65 H65 V85 H55 V25 Z M65 35 V55 H68 V35 H65 Z" fill="#f1f5f9" />
    
    {/* Central Divider */}
    <path d="M50 15 V95" stroke="#f97316" strokeWidth="2" />
  </svg>
);

export const LogoFull = ({ className }: { className?: string }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <LogoMark className="w-24 h-24 mb-4" />
    <div className="flex items-baseline gap-2 text-3xl md:text-4xl font-black tracking-widest uppercase">
      <span className="text-slate-900 dark:text-white">Chabaka</span>
      <span className="text-orange-500">Pro</span>
    </div>
  </div>
);

export default LogoFull;