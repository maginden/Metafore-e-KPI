'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { profiles, kpis } from './KPIData';
import { Check, Star } from 'lucide-react';

export default function ProfileTable() {
  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-stone-100">
        {profiles.map((profile) => (
          <button
            key={profile.name}
            onClick={() => setSelectedProfile(profile)}
            className={`px-6 py-4 text-sm font-bold tracking-tight transition-all text-center border-r border-stone-100 last:border-r-0 ${
              selectedProfile.name === profile.name 
                ? 'bg-stone-900 text-white' 
                : 'bg-white text-stone-500 hover:bg-stone-50'
            }`}
          >
            {profile.name}
          </button>
        ))}
      </div>

      <div className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <motion.div
              key={selectedProfile.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-3xl font-black tracking-tighter mb-4 text-stone-900">
                Profilo: {selectedProfile.name}
              </h3>
              <p className="text-stone-500 text-lg leading-relaxed mb-8 max-w-xl">
                {selectedProfile.description}
              </p>

              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-2">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  KPI Prioritarie
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProfile.focus.map((kpiName) => (
                    <span 
                      key={kpiName}
                      className={`px-4 py-2 rounded-full text-sm font-bold border ${selectedProfile.color}`}
                    >
                      {kpiName}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 bg-stone-50 rounded-2xl p-6 border border-stone-100">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">Tabella di Confronto</h4>
            <div className="space-y-3">
              {kpis.map((kpi) => {
                const isFocus = selectedProfile.focus.includes(kpi.name);
                return (
                  <div 
                    key={kpi.id}
                    className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                      isFocus ? 'bg-white shadow-sm border border-stone-200' : 'opacity-40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isFocus ? 'bg-stone-900 text-white' : 'bg-stone-200 text-stone-400'}`}>
                        <kpi.icon size={16} />
                      </div>
                      <span className="font-bold text-sm text-stone-800">{kpi.name}</span>
                    </div>
                    {isFocus && (
                      <div className="flex items-center gap-1 text-emerald-600 font-bold text-[10px] uppercase tracking-tighter">
                        <Check size={12} />
                        <span>Priorità</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
