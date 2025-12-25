'use client';

import React, { useState } from 'react';
import Quiz from '@/components/Quiz';
import Result from '@/components/Result';
import { Answer, PersonalityResult } from '@/types';
import { useScoring } from '@/hooks/useScoring';
import { personalityResults } from '@/data/results';
import { questions } from '@/data/questions';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Globe, ChevronDown } from 'lucide-react';

export default function Home() {
  const { locale, t, setLocale, supportedLanguages } = useLanguage();
  const [step, setStep] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [result, setResult] = useState<PersonalityResult | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { calculateResult } = useScoring();

  const handleComplete = (answers: Answer[]) => {
    const { code, traits } = calculateResult(questions, answers);
    const personalityInfo = personalityResults[code];
    
    if (personalityInfo) {
      setResult({
        ...personalityInfo,
        traits
      });
      setStep('result');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const restart = () => {
    setStep('intro');
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={restart}>
            <div className="w-8 h-8 bg-agree rounded-lg flex items-center justify-center text-white font-bold">M</div>
            <span className="font-black text-xl tracking-tighter text-gray-800">{t.title}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-full border border-gray-100 transition-colors"
              >
                <Globe size={16} className="text-gray-500" />
                <span>{supportedLanguages.find(l => l.code === locale)?.name}</span>
                <ChevronDown size={14} className={`text-gray-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsLangOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-20 overflow-hidden"
                    >
                      <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {supportedLanguages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLocale(lang.code);
                              setIsLangOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${
                              locale === lang.code 
                                ? 'bg-agree/5 text-agree font-bold' 
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {lang.name}
                            {locale === lang.code && (
                              <div className="w-1.5 h-1.5 rounded-full bg-agree" />
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
            {step === 'intro' && (
              <button 
                onClick={() => setStep('quiz')}
                className="hidden md:block bg-agree hover:bg-agree-dark text-white px-6 py-2 rounded-full font-bold transition-all text-sm"
              >
                {t.startTest}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="pt-16">
        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto px-4 py-20 text-center"
            >
              <h2 className="text-agree font-bold tracking-widest uppercase mb-4">{t.subtitle}</h2>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
                {t.title}
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                {t.description}
              </p>
              <button
                onClick={() => setStep('quiz')}
                className="bg-agree hover:bg-agree-dark text-white text-xl font-bold px-12 py-5 rounded-full shadow-xl shadow-agree/20 transition-all transform hover:scale-105 active:scale-95"
              >
                {t.startTest}
              </button>
              
              <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: t.features.fast.title, desc: t.features.fast.desc, icon: '⏱️' },
                  { title: t.features.honest.title, desc: t.features.honest.desc, icon: '💡' },
                  { title: t.features.accurate.title, desc: t.features.accurate.desc, icon: '🎯' },
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-gray-50 text-left hover:bg-gray-100 transition-colors">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Quiz onComplete={handleComplete} />
            </motion.div>
          )}

          {step === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Result result={result} onRestart={restart} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-agree rounded-lg flex items-center justify-center text-white font-bold">M</div>
            <span className="font-black text-xl tracking-tighter">{t.title}</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 MBTI Test Center. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
