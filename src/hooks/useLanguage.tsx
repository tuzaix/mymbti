"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { locales, LocaleType, TranslationType } from '@/data/locales';

interface LanguageContextType {
  locale: LocaleType;
  t: TranslationType;
  setLocale: (locale: LocaleType) => void;
  supportedLanguages: { code: LocaleType; name: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const supportedLanguages: { code: LocaleType; name: string }[] = [
  { code: 'zh', name: '简体中文' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'ja', name: '日本語' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'th', name: 'ไทย' },
  { code: 'ar', name: 'العربية' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'tl', name: 'Tagalog' },
  { code: 'ur', name: 'اردو' },
];

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<LocaleType>('zh');

  useEffect(() => {
    // 从 localStorage 恢复语言偏好
    const savedLocale = localStorage.getItem('mbti_locale') as LocaleType;
    if (savedLocale && locales[savedLocale]) {
      setLocaleState(savedLocale);
      return;
    }

    // 检测系统语言
    const systemLang = navigator.language.split('-')[0] as LocaleType;
    if (locales[systemLang as LocaleType]) {
      setLocaleState(systemLang as LocaleType);
    } else {
      setLocaleState('zh');
    }
  }, []);

  const setLocale = useCallback((newLocale: LocaleType) => {
    setLocaleState(newLocale);
    localStorage.setItem('mbti_locale', newLocale);
  }, []);

  const value = useMemo(() => ({
    locale,
    t: locales[locale] as TranslationType,
    setLocale,
    supportedLanguages,
  }), [locale, setLocale]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
