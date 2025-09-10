/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用 standalone 输出模式，用于 Docker 部署
  output: 'standalone',
  
  // 图片优化配置
  images: {
    unoptimized: true,
  },
  
  // 实验性功能
  experimental: {
    // 启用服务器组件
    serverComponentsExternalPackages: [],
  },
  
  // 环境变量配置
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // 重定向配置
  async redirects() {
    return []
  },
  
  // 重写配置
  async rewrites() {
    return []
  },
  
  // 头部配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig