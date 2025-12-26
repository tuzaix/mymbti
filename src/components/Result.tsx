"use client";

import React, { useRef, useState, useEffect } from 'react';
import { PersonalityResult } from '@/types';
import { motion } from 'framer-motion';
import { RotateCcw, Download, Loader2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { toPng } from 'html-to-image';
import AdBanner from './AdBanner';

interface ResultProps {
  result: PersonalityResult;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ result, onRestart }) => {
  const { locale, t } = useLanguage();
  const resultRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (resultRef.current === null) return;
    
    setIsDownloading(true);
    try {
      const dataUrl = await toPng(resultRef.current, {
        cacheBust: true,
        backgroundColor: '#ffffff',
        pixelRatio: 2,
        style: {
          padding: '20px',
        }
      });
      
      const link = document.createElement('a');
      link.download = `MBTI-${result.type}-${new Date().getTime()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to generate image:', err);
      alert(t.downloadError);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <AdBanner adSlot="result-top-ad" className="mb-8" />
      <div ref={resultRef} className="bg-white p-4 md:p-8 rounded-3xl">
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
          <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-center">
            <div 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl"
              style={{ backgroundColor: result.image_color }}
            >
              {result.type}
            </div>
          </div>

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
        
        <div className="hidden print:block show-on-export mt-12 pt-8 border-t text-center text-gray-400 text-sm">
          {typeof window !== 'undefined' ? window.location.origin : ''}
        </div>
      </div>

      <AdBanner adSlot="result-bottom-ad" className="mt-8" />

      <div className="flex flex-wrap justify-center gap-4 border-t pt-12">
        <button
          onClick={onRestart}
          className="flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-full font-bold hover:bg-black transition-all transform hover:scale-105"
        >
          <RotateCcw size={20} /> {t.restart}
        </button>

        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDownloading ? (
            <Loader2 size={20} className="animate-spin" />
          ) : (
            <Download size={20} />
          )}
          {t.download}
        </button>
      </div>
    </div>
  );
};

export default Result;
