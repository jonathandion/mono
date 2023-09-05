const withNextra = require('nextra')({
  defaultShowCopyCode: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})
 
module.exports = withNextra({
  distDir: 'dist',
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
})
