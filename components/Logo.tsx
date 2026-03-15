'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function Logo() {
  const videoId = "1PxU_d3N_FDouXPCRTy9HPOGPE0l4kOdI";
  // Using the direct link format that works best for small-medium files
  const videoUrl = `https://drive.google.com/uc?id=${videoId}`;

  return (
    <div className="flex items-center gap-4">
      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-400 shadow-lg bg-stone-800 flex items-center justify-center group">
        <div className="absolute inset-0 bg-emerald-500/10 animate-pulse group-hover:hidden" />
        <video 
          src={videoUrl} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-10"
          onError={(e) => {
            console.error("Video failed to load from Google Drive. Ensure the file is shared as 'Anyone with the link can view'.");
          }}
        />
        {/* Fallback text if video fails */}
        <span className="text-emerald-400 font-black text-xl z-0">ID</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Progetto</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Didattico</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">A cura di</span>
        <span className="text-sm font-black tracking-tighter text-emerald-500 mt-1">IndennitateDigital.it</span>
      </div>
    </div>
  );
}
