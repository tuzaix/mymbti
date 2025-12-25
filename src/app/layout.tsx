import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";

export const metadata: Metadata = {
  title: "MBTI 性格测试 | Free Personality Test - Discover Your Real Self",
  description: "发现真实的自己。16型人格测试为您提供关于你是谁以及你为何以这种方式行事的准确描述。Discover your real self. Get a concrete, accurate description of who you are and why you do things the way you do.",
  keywords: ["MBTI", "性格测试", "16型人格", "Personality Test", "16 Personalities", "Free Test", "心理测试"],
  authors: [{ name: "MBTI Test Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "MBTI 性格测试 | Free Personality Test",
    description: "发现真实的自己 - 16型人格测试 | Discover Your Real Self - 16 Personalities Test",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBTI 性格测试 | Free Personality Test",
    description: "发现真实的自己 - 16型人格测试",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N2MKT1E8ED"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-N2MKT1E8ED');
          `}
        </Script>
      </head>
      <body className="antialiased font-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
