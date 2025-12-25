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
  format = 'auto',
  responsive = true,
  className = "",
  style = { display: 'block' }
}) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  // 如果是开发环境或者没有配置真实的 ID，显示占位符
  const isPlaceholder = adClient.includes('8108389486087485') || process.env.NODE_ENV === 'development';

  return (
    <div className={`ad-container my-8 mx-auto text-center overflow-hidden ${className}`}>
      {isPlaceholder && (
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-4 min-h-[100px] flex flex-col items-center justify-center text-gray-400">
          <span className="text-xs font-bold uppercase tracking-wider mb-1">Advertisement</span>
          <span className="text-[10px]">AdSense Slot: {adSlot}</span>
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
