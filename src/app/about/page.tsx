import fs from 'fs';
import path from 'path';
import { useLanguage } from '@/hooks/useLanguage'; // This won't work in server component, but I can use a client component or just read locale from somewhere else.

// Since this is a server component, we'll make it simple.
export default function AboutPage() {
  const filePath = path.join(process.cwd(), 'public', 'about.md');
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="prose prose-slate max-w-none">
        <div className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
          {content}
        </div>
      </div>
      <div className="mt-12">
        <a href="/" className="text-agree font-bold hover:underline">← 返回首页 / Back to Home</a>
      </div>
    </div>
  );
}
