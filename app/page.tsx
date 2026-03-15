'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { kpis as initialKpis } from '@/components/KPIData';
import KPICard from '@/components/KPICard';
import ProfileTable from '@/components/ProfileTable';
import Logo from '@/components/Logo';
import { BookOpen, Users2, Sparkles } from 'lucide-react';
import { generateKPIImage } from '@/lib/gemini';

export default function Home() {
  const [kpis, setKpis] = useState(initialKpis);

  useEffect(() => {
    async function loadImages() {
      const cpcIndex = initialKpis.findIndex(k => k.id === 'cpc');
      if (cpcIndex !== -1) {
        const prompt = "A professional, minimalist flat illustration for a Social Media Marketing KPI called 'CPC' (Cost Per Click). The metaphor is 'The Entrance Ticket'. Show a stylish person handing over a glowing coin to enter a modern, high-end digital store. Clean lines, stone-900 and emerald-400 color palette, white background.";
        const imageUrl = await generateKPIImage(prompt);
        if (imageUrl) {
          setKpis(prev => {
            const newKpis = [...prev];
            newKpis[cpcIndex] = { ...newKpis[cpcIndex], imageUrl };
            return newKpis;
          });
        }
      }
    }
    loadImages();
  }, []);

  return (
    <main className="min-h-screen pb-24">
      {/* Header with Logo */}
      <header className="absolute top-0 left-0 w-full z-50 p-6 md:p-12">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
          <Logo />
        </div>
      </header>

      {/* Hero Section - Recipe 2: Editorial */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-stone-900 text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 blur-[120px] rounded-full" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-5xl"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-white/20">
              Social Media Marketing
            </span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase mb-8">
            KPI <br />
            <span className="text-emerald-400 italic font-serif lowercase tracking-normal">Master</span>
          </h1>
          
          <p className="text-stone-400 text-lg md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed">
            Comprendere le metriche non è mai stato così semplice. <br className="hidden md:block" />
            Usa le metafore per dominare il linguaggio dei dati.
          </p>
        </motion.div>
      </section>

      {/* KPI Dictionary Section */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-600 mb-4 flex items-center gap-2">
              <BookOpen size={14} />
              Dizionario Interattivo
            </h2>
            <h3 className="text-5xl font-black tracking-tighter text-stone-900 leading-tight">
              Le metriche che contano, <br /> spiegate con la vita reale.
            </h3>
          </div>
          <p className="text-stone-500 font-medium max-w-xs italic">
            Passa il mouse o clicca sulle card per scoprire la metafora dietro ogni acronimo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <KPICard kpi={kpi} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Profile Table Section */}
      <section className="max-w-7xl mx-auto px-6 mt-40">
        <div className="bg-stone-100 rounded-[3rem] p-8 md:p-20 border border-stone-200">
          <div className="max-w-3xl mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-4 flex items-center gap-2">
              <Users2 size={14} />
              Profili Strategici
            </h2>
            <h3 className="text-5xl font-black tracking-tighter text-stone-900 leading-tight mb-6">
              Chi guarda cosa?
            </h3>
            <p className="text-stone-600 text-xl leading-relaxed">
              Ogni professionista ha le sue priorità. Scopri quali KPI sono vitali per i diversi profili nel mondo del social marketing.
            </p>
          </div>

          <ProfileTable />
        </div>
      </section>

      {/* Footer / Call to Action */}
      <section className="max-w-7xl mx-auto px-6 mt-40 text-center">
        <div className="py-24 border-t border-stone-200">
          <div className="inline-flex p-4 bg-emerald-100 text-emerald-600 rounded-2xl mb-8">
            <Sparkles size={32} />
          </div>
          <h3 className="text-4xl font-black tracking-tighter text-stone-900 mb-6">
            Pronto a diventare un esperto?
          </h3>
          <p className="text-stone-500 text-lg max-w-xl mx-auto mb-12">
            La gestione della comunicazione online non è solo numeri, è capire il comportamento umano attraverso i dati.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-stone-900 text-white rounded-full font-bold tracking-tight hover:bg-stone-800 transition-colors">
              Scarica la Guida PDF
            </button>
            <button className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-bold tracking-tight hover:bg-stone-50 transition-colors">
              Mettiti alla Prova
            </button>
          </div>
        </div>
        
        <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mt-12">
          © 2026 Social KPI Master • Educational Project
        </div>
      </section>
    </main>
  );
}
