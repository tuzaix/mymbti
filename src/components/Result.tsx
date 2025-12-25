"use client";

import React from 'react';
import { PersonalityResult } from '@/types';
import { motion } from 'framer-motion';
import { RotateCcw, Share2, Download } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface ResultProps {
  result: PersonalityResult;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ result, onRestart }) => {
  const { locale, t } = useLanguage();
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-4 block">
          {t.yourTypeIs}
        </span>
        <h1 
          className="text-6xl md:text-8xl font-black mb-4" 
          style={{ color: result.image_color }}
        >
          {result.type}
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          {result.title[locale]}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {result.description[locale]}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Left Side: Illustration Placeholder or extra text */}
        <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-center">
          <div 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl"
            style={{ backgroundColor: result.image_color }}
          >
            {result.type}
          </div>
        </div>

        {/* Right Side: Traits Progress Bars */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">{t.personalityTendency}</h3>
          {result.traits.map((trait, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-sm font-bold text-gray-800">{trait.label}</span>
                  <p className="text-xs text-gray-400 mt-1">{trait.description}</p>
                </div>
              </div>
              
              <div className="flex justify-between text-xs font-bold text-gray-500 mb-1 uppercase tracking-tighter">
                <span>{trait.leftLabel}</span>
                <span>{trait.rightLabel}</span>
              </div>
              
              <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="absolute h-full rounded-full"
                  style={{ backgroundColor: result.image_color }}
                  initial={{ width: '50%' }}
                  animate={{ width: `${trait.value}%` }}
                  transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                />
              </div>
              
              <div className="flex justify-between text-[10px] font-bold text-gray-400">
                <span>{Math.round(trait.value)}%</span>
                <span>{Math.round(100 - trait.value)}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 border-t pt-12">
        <button
          onClick={onRestart}
          className="flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-full font-bold hover:bg-black transition-all transform hover:scale-105"
        >
          <RotateCcw size={20} /> {t.restart}
        </button>
        
        <button
          className="flex items-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-all transform hover:scale-105"
          onClick={() => alert(t.featureComingSoon)}
        >
          <Share2 size={20} /> {t.share}
        </button>

        <button
          className="flex items-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-all transform hover:scale-105"
          onClick={() => alert(t.featureComingSoon)}
        >
          <Download size={20} /> {t.download}
        </button>
      </div>
    </div>
  );
};

export default Result;
