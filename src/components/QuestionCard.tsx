"use client";

import React from 'react';
import LikertScale from './LikertScale';
import { Question } from '@/types';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

interface QuestionCardProps {
  question: Question;
  value: number | null;
  onChange: (value: number) => void;
  index: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, value, onChange, index }) => {
  const { locale, t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full py-12 border-b border-gray-100 last:border-0"
    >
      <h3 className="text-xl md:text-2xl font-medium text-center text-gray-800 mb-8 px-4">
        {question.text[locale]}
      </h3>
      
      <div className="flex flex-col items-center">
        <LikertScale value={value} onChange={onChange} />
        
        {/* Mobile-only labels */}
        <div className="flex justify-between w-full max-w-lg px-6 mt-2 sm:hidden text-xs font-bold">
          <span className="text-agree uppercase">{t.agree}</span>
          <span className="text-disagree uppercase">{t.disagree}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default QuestionCard;
