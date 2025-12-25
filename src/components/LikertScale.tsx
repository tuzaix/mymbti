"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';

interface LikertScaleProps {
  value: number | null;
  onChange: (value: number) => void;
}

const LikertScale: React.FC<LikertScaleProps> = ({ value, onChange }) => {
  const { t } = useLanguage();
  // 7个选项的配置：[分值, 大小类名, 基础颜色类名]
  const options = [
    { val: 1, size: 'w-12 h-12 md:w-14 md:h-14', color: 'border-agree hover:bg-agree/10', activeColor: 'bg-agree' },
    { val: 2, size: 'w-10 h-10 md:w-12 md:h-12', color: 'border-agree hover:bg-agree/10', activeColor: 'bg-agree' },
    { val: 3, size: 'w-8 h-8 md:w-10 md:h-10', color: 'border-agree hover:bg-agree/10', activeColor: 'bg-agree' },
    { val: 4, size: 'w-6 h-6 md:w-8 md:h-8', color: 'border-gray-400 hover:bg-gray-100', activeColor: 'bg-gray-400' },
    { val: 5, size: 'w-8 h-8 md:w-10 md:h-10', color: 'border-disagree hover:bg-disagree/10', activeColor: 'bg-disagree' },
    { val: 6, size: 'w-10 h-10 md:w-12 md:h-12', color: 'border-disagree hover:bg-disagree/10', activeColor: 'bg-disagree' },
    { val: 7, size: 'w-12 h-12 md:w-14 md:h-14', color: 'border-disagree hover:bg-disagree/10', activeColor: 'bg-disagree' },
  ];

  return (
    <div className="flex items-center justify-between w-full max-w-lg mx-auto py-8 px-2 md:px-4">
      <span className="text-agree font-bold text-sm md:text-base hidden sm:block">{t.agree}</span>
      
      <div className="flex items-center justify-around flex-1 px-4 gap-1 md:gap-4">
        {options.map((opt) => (
          <button
            key={opt.val}
            onClick={() => onChange(opt.val)}
            className={cn(
              "rounded-full border-2 transition-all duration-200 transform hover:scale-110 flex items-center justify-center shrink-0",
              opt.size,
              opt.color,
              value === opt.val ? opt.activeColor : "bg-transparent",
              value !== null && value !== opt.val ? "opacity-50 scale-95" : "opacity-100"
            )}
            aria-label={`Option ${opt.val}`}
          >
            {value === opt.val && (
               <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full" />
            )}
          </button>
        ))}
      </div>

      <span className="text-disagree font-bold text-sm md:text-base hidden sm:block">{t.disagree}</span>
    </div>
  );
};

export default LikertScale;
