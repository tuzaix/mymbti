import { Answer, Question, Dimension } from '@/types';
import { useLanguage } from './useLanguage';

export const useScoring = () => {
  const { t } = useLanguage();

  /**
   * 将 1-7 的打分映射为 -3 到 +3 的权重分
   * 1(非常同意) -> 3
   * 4(中立) -> 0
   * 7(非常反对) -> -3
   */
  const mapValueToScore = (value: number) => {
    return 4 - value;
  };

  const calculateResult = (questions: Question[], answers: Answer[]) => {
    const scores: Record<Dimension, number> = {
      EI: 0,
      SN: 0,
      TF: 0,
      JP: 0,
    };

    const counts: Record<Dimension, number> = {
      EI: 0,
      SN: 0,
      TF: 0,
      JP: 0,
    };

    answers.forEach((answer) => {
      const question = questions.find((q) => q.id === answer.questionId);
      if (question) {
        const weightScore = mapValueToScore(answer.value) * question.weight;
        scores[question.category] += weightScore;
        counts[question.category]++;
      }
    });

    // 计算结果代码
    const personalityCode = [
      scores.EI >= 0 ? 'E' : 'I',
      scores.SN >= 0 ? 'S' : 'N',
      scores.TF >= 0 ? 'T' : 'F',
      scores.JP >= 0 ? 'J' : 'P',
    ].join('');

    // 计算各维度的百分比 (0-100)
    const getPercentage = (dim: Dimension) => {
      const maxPossible = counts[dim] * 3;
      if (maxPossible === 0) return 50;
      // 将分值从 [-max, max] 映射到 [0, 100]
      // 0 是 50%, 正数往上，负数往下
      // 我们想要百分比代表的是该维度的第一个字母（如 E, S, T, J）
      const percentage = ((scores[dim] + maxPossible) / (2 * maxPossible)) * 100;
      return Math.round(percentage);
    };

    const traits = [
      { 
        label: t.dimensions.EI.label, 
        value: getPercentage('EI'), 
        leftLabel: t.dimensions.EI.left, 
        rightLabel: t.dimensions.EI.right,
        description: t.dimensions.EI.desc
      },
      { 
        label: t.dimensions.SN.label, 
        value: getPercentage('SN'), 
        leftLabel: t.dimensions.SN.left, 
        rightLabel: t.dimensions.SN.right,
        description: t.dimensions.SN.desc
      },
      { 
        label: t.dimensions.TF.label, 
        value: getPercentage('TF'), 
        leftLabel: t.dimensions.TF.left, 
        rightLabel: t.dimensions.TF.right,
        description: t.dimensions.TF.desc
      },
      { 
        label: t.dimensions.JP.label, 
        value: getPercentage('JP'), 
        leftLabel: t.dimensions.JP.left, 
        rightLabel: t.dimensions.JP.right,
        description: t.dimensions.JP.desc
      },
    ];

    return {
      code: personalityCode,
      traits,
    };
  };

  return { calculateResult };
};
