"use client";

import React, { useRef, useState } from 'react';
import { PersonalityResult } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Share2, Download, Loader2, X, Link2 } from 'lucide-react';
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
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = `MBTI: ${result.type} - ${result.title[locale]}`;
  const shareText = `${t.yourTypeIs} ${result.type}. ${result.description[locale]}`;

  const socialPlatforms = [
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
      ),
      color: 'bg-black text-white',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: 'bg-[#1877F2] text-white',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      color: 'bg-[#25D366] text-white',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
    },
    {
      name: 'Telegram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0C5.344 0 0 5.344 0 11.944c0 6.6 5.344 11.944 11.944 11.944 6.6 0 11.944-5.344 11.944-11.944C23.888 5.344 18.544 0 11.944 0zm5.412 8.353l-1.84 8.67c-.138.614-.502.764-1.018.477l-2.802-2.064-1.352 1.3c-.15.15-.275.275-.563.275l.2-2.843 5.174-4.675c.225-.2-.05-.312-.35-.112L8.35 12.844l-2.756-.862c-.6-.188-.612-.6.125-.888l10.775-4.15c.5-.188.938.112.756.909z" />
        </svg>
      ),
      color: 'bg-[#0088cc] text-white',
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    },
    {
      name: 'Weibo',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10.536 17.632c-2.912.184-5.504-.848-5.776-2.312-.288-1.464 1.84-2.8 4.752-2.984 2.912-.184 5.504.848 5.792 2.312.288 1.464-1.856 2.8-4.768 2.984zm4.192-3.808c-.128-.064-.24-.064-.32-.016-.272.16-.32.512-.128.784.144.192.352.288.544.24.272-.064.368-.4.208-.688-.064-.112-.176-.208-.304-.32zm1.664-1.28c-.288-.144-.544-.112-.704.08-.432.48-.304 1.312.288 1.84.592.528 1.408.528 1.84.048.432-.48.272-1.344-.336-1.872-.32-.272-.736-.32-1.088-.096zm.208-2.608c-1.344-.24-2.816.32-3.488 1.344-.144.224-.08.496.144.64.224.144.512.08.64-.144.48-.736 1.552-1.152 2.512-.976.256.048.512-.112.56-.368.048-.272-.128-.512-.368-.496zm1.104-1.872c-2.32-.512-4.88.544-6.048 2.48-.144.24-.064.544.176.688.24.144.544.064.688-.176 1-.1.664 3.2 1.552 4.208.848.432.432.32 1.024.464.928.16.272-.096.352-.352.08-.256-.096-.544-.352-.624-2.32-.528-4.88.544-6.048 2.48zm2.464 5.392c-.144-.064-.288-.064-.4.016-1.216 1.12-3.872 1.328-6.608 1.504-4.24.272-8.064-1.36-8.544-3.648-.496-2.288 2.592-4.816 6.816-5.632 1.088-.208 2.192-.288 3.264-.256-.448-.72-.64-1.552-.336-2.24.512-1.12 2.064-1.504 3.44-1.008 1.376.496 2.08 1.808 1.568 2.912-.16.352-.432.656-.768.864 1.872.48 3.168 1.552 3.6 2.896.256.8-.208 1.632-.96 1.96 1.28.304 1.84 1.28 1.568 2.24-.208.736-1.104 1.184-2.064 1.184-.16 0-.336-.016-.496-.048-.256-.048-.432-.288-.384-.544s.288-.432.544-.384c.528.08 1.04-.144 1.168-.544.128-.4-.064-.816-.448-.928-.24-.08-.384-.336-.32-.576z" />
        </svg>
      ),
      color: 'bg-[#E6162D] text-white',
      url: `http://service.weibo.com/share/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`,
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: 'bg-[#0A66C2] text-white',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    }
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          setIsShareModalOpen(true);
        }
      }
    } else {
      setIsShareModalOpen(true);
    }
  };

  const copyToClipboard = async () => {
    const textToCopy = `${shareText} ${shareUrl}`;
    
    const handleSuccess = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    // 优先使用 navigator.clipboard
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        handleSuccess();
        return;
      } catch (err) {
        console.error('Clipboard API failed, falling back...', err);
      }
    }

    // 兜底方案：使用传统的 execCommand('copy')
    try {
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.style.top = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        handleSuccess();
      }
    } catch (err) {
      console.error('Fallback copy failed:', err);
    }
  };

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
      alert(locale === 'zh' ? '生成图片失败，请重试。' : 'Failed to generate image, please try again.');
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
        
        <div className="hidden show-on-export mt-12 pt-8 border-t text-center text-gray-400 text-sm">
          {window.location.origin}
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
          onClick={handleShare}
          className="flex items-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-all transform hover:scale-105"
        >
          <Share2 size={20} /> {t.share}
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

      <AnimatePresence>
        {isShareModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">{t.share}</h3>
                <button 
                  onClick={() => setIsShareModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
              
              <div className="p-6 grid grid-cols-3 gap-4">
                {socialPlatforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${platform.color}`}>
                      {platform.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-600">{platform.name}</span>
                  </a>
                ))}
                
                <button
                  onClick={copyToClipboard}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 ${copied ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                    {copied ? (
                      <motion.svg 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }} 
                        className="w-6 h-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </motion.svg>
                    ) : (
                      <Link2 size={24} />
                    )}
                  </div>
                  <span className={`text-xs font-medium transition-colors ${copied ? 'text-green-600' : 'text-gray-600'}`}>
                    {copied 
                      ? (locale === 'zh' ? '已复制' : 'Copied!') 
                      : (locale === 'zh' ? '复制链接' : 'Copy Link')}
                  </span>
                </button>
              </div>
              
              <div className="p-4 bg-gray-50 text-center">
                <button
                  onClick={() => setIsShareModalOpen(false)}
                  className="text-sm font-bold text-gray-500 hover:text-gray-700"
                >
                  {locale === 'zh' ? '取消' : 'Cancel'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media print {
          .show-on-export {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Result;
