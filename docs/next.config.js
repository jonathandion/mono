const withNextra = require('nextra')({
  defaultShowCopyCode: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})
 
module.exports = withNextra({
  distDir: 'dist',
  output: 'export',
  basePath: '/mono',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
})
