/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/my-mbti',
  // 如果你也希望静态资源（_next/static）也带有这个前缀，basePath 已经足够
  // 如果你使用了图片优化且图片在 public 目录下，记得引用路径也要加上 /my-mbti 或者使用 basePath 自动处理
};

export default nextConfig;
