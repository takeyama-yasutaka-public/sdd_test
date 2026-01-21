/**
 * nextjs
 * 仕様書: docs/features/config/nextjs/specification.md
 */

// Next.js設定の型定義
// 実際の設定はnext.config.mjsに記載

export const nextjsConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: 'images.microcms-assets.io',
      },
    ],
  },
} as const
