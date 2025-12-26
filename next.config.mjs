/** @type {import('next').NextConfig} */
const nextConfig = {
  /* 移除了 basePath: '/my-mbti'，现在应用将部署在根路径 / */
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
