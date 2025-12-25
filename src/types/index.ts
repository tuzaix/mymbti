/**
 * MBTI 维度定义
 * EI: 外向 (Extraversion) / 内向 (Introversion)
 * SN: 实感 (Sensing) / 直觉 (Intuition)
 * TF: 理智 (Thinking) / 情感 (Feeling)
 * JP: 判断 (Judging) / 感知 (Perceiving)
 */
export type Dimension = 'EI' | 'SN' | 'TF' | 'JP';

/**
 * 题目接口
 */
export interface Question {
  id: number;
  text: Record<string, string>;
  category: Dimension;
  weight: 1 | -1; // 1: 正向计分, -1: 反向计分
}

/**
 * 性格结果接口
 */
export interface PersonalityResult {
  type: string;
  title: Record<string, string>;
  description: Record<string, string>;
  image_color: string;
  traits: {
    label: string;
    value: number; // 0-100, 代表第一个维度的百分比
    leftLabel: string;
    rightLabel: string;
    description?: string;
  }[];
}

/**
 * 用户答案接口
 */
export interface Answer {
  questionId: number;
  value: number; // 1-7
}
