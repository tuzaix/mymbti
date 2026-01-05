import fs from 'fs';
import path from 'path';

export default function PrivacyPage() {
  const filePath = path.join(process.cwd(), 'public', 'privacy.md');
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
