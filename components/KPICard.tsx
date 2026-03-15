'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { kpis, KPI } from './KPIData';
import { Info, Calculator } from 'lucide-react';

export default function KPICard({ kpi }: { kpi: KPI }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[400px] w-full perspective-1000 group cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-3xl border border-stone-200 shadow-sm p-8 flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <kpi.icon size={120} />
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-stone-100 rounded-2xl">
                <kpi.icon className="text-stone-700" size={24} />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-stone-400">Metric</span>
            </div>
            
            <h3 className="text-4xl font-black tracking-tighter text-stone-900 mb-1">{kpi.name}</h3>
            <p className="text-stone-500 font-medium italic mb-6">{kpi.fullName}</p>
            
            <p className="text-stone-600 leading-relaxed max-w-[80%]">
              {kpi.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2 text-stone-400 text-xs font-bold uppercase tracking-wider">
              <Info size={14} />
              <span>Clicca per la metafora</span>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden bg-stone-900 rounded-3xl p-8 flex flex-col text-white"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="mb-6 flex-1">
            <h4 className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-stone-700"></span>
              La Metafora
            </h4>
            <h3 className="text-2xl font-serif italic text-stone-100 mb-4">{kpi.metaphor}</h3>
            
            {kpi.imageUrl && (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 border border-stone-800">
                <img 
                  src={kpi.imageUrl} 
                  alt={kpi.metaphor} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <p className="text-stone-300 leading-relaxed text-sm">
              {kpi.vignette}
            </p>
          </div>

          <div className="mt-auto pt-6 border-t border-stone-800">
            <div className="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase tracking-widest mb-3">
              <Calculator size={14} />
              <span>Formula</span>
            </div>
            <div className="bg-stone-800/50 p-4 rounded-xl font-mono text-sm text-stone-200 border border-stone-700/50">
              {kpi.formula}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
