"use client";

import React, { useState, useEffect, useRef } from 'react';
import { questions } from '@/data/questions';
import { Answer } from '@/types';
import QuestionCard from './QuestionCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Send } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

interface QuizProps {
  onComplete: (answers: Answer[]) => void;
}

const QUESTIONS_PER_PAGE = 5;

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
  const currentQuestions = questions.slice(
    currentPage * QUESTIONS_PER_PAGE,
    (currentPage + 1) * QUESTIONS_PER_PAGE
  );

  const progress = (answers.length / questions.length) * 100;

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => {
      const filtered = prev.filter((a) => a.questionId !== questionId);
      return [...filtered, { questionId, value }];
    });
  };

  const isPageComplete = () => {
    const currentIds = currentQuestions.map((q) => q.id);
    return currentIds.every((id) => answers.some((a) => a.questionId === id));
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8" ref={containerRef}>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-100 z-50">
        <motion.div
          className="h-full bg-agree"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="mb-8 text-center mt-4">
        <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
          {t.progress}: {Math.round(progress)}%
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
        >
          {currentQuestions.map((q, idx) => (
            <QuestionCard
              key={q.id}
              question={q}
              index={idx}
              value={answers.find((a) => a.questionId === q.id)?.value ?? null}
              onChange={(val) => handleAnswer(q.id, val)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between items-center mt-12 mb-20">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all",
            currentPage === 0
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-600 hover:bg-gray-100"
          )}
        >
          <ChevronLeft size={20} /> {t.prev}
        </button>

        {currentPage === totalPages - 1 ? (
          <button
            onClick={() => onComplete(answers)}
            disabled={!isPageComplete() || answers.length < questions.length}
            className={cn(
              "flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white shadow-lg transition-all transform hover:scale-105",
              isPageComplete() && answers.length === questions.length
                ? "bg-agree hover:bg-agree-dark"
                : "bg-gray-300 cursor-not-allowed"
            )}
          >
            {t.viewResults} <Send size={20} />
          </button>
        ) : (
          <button
            onClick={nextPage}
            disabled={!isPageComplete()}
            className={cn(
              "flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white shadow-md transition-all transform hover:scale-105",
              isPageComplete() ? "bg-agree hover:bg-agree-dark" : "bg-gray-300 cursor-not-allowed"
            )}
          >
            {t.next} <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
