'use client';

import React, { useEffect } from 'react';

interface AdBannerProps {
  adClient?: string;
  adSlot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * AdSense 广告占位符组件
 * 用于在页面中插入 AdSense 广告位。
 * 开发环境下会显示一个占位方块以便调试布局。
 */
const AdBanner: React.FC<AdBannerProps> = ({
  adClient = "ca-pub-8108389486087485", // 替换为真实的 Client ID
  adSlot = "6541825133",               // 替换为真实的 Slot ID
  format = 'horizontal',                // 默认改为水平布局，减少垂直空间占用
  responsive = true,
  className = "",
  style = { display: 'block', minHeight: '60px' }
}) => {
  useEffect(() => {
    // 延迟一小会儿执行，确保 DOM 已经完全挂载
    const timer = setTimeout(() => {
      try {
        // @ts-ignore
        const adsbygoogle = window.adsbygoogle || [];
        // 只有当存在未处理的 adsbygoogle 元素时才 push
        // AdSense 会为处理过的元素添加 data-adsbygoogle-status 属性
        const unprocessedAds = document.querySelectorAll('.adsbygoogle:not([data-adsbygoogle-status])');
        
        if (unprocessedAds.length > 0) {
          adsbygoogle.push({});
        }
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // 如果是开发环境显示占位符
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <div className={`ad-container my-4 mx-auto text-center overflow-hidden w-full max-w-4xl ${className}`}>
      {isDev && (
        <div className="bg-gray-50 border border-dashed border-gray-200 rounded-lg p-2 min-h-[50px] flex items-center justify-center text-gray-400">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-wider">Ad Placeholder</span>
            <span className="text-[9px] opacity-70">Slot: {adSlot}</span>
          </div>
        </div>
      )}
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
};

export default AdBanner;
