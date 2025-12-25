import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";

export const metadata: Metadata = {
  title: "MBTI 性格测试",
  description: "发现真实的自己 - 16型人格测试",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased font-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
