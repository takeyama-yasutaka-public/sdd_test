/**
 * performance
 * 仕様書: docs/features/performance/specification.md
 */

// パフォーマンス最適化のユーティリティ関数
// 現時点では型定義のみ、実装は各コンポーネントで対応

/**
 * 画像最適化設定
 */
export const imageOptimization = {
  // Next.js Imageコンポーネントのデフォルト設定
  sizes: '(max-width: 768px) 100vw, 1200px',
  quality: 85,
  priority: false,
} as const

/**
 * キャッシュ設定
 */
export const cacheConfig = {
  // ISR設定
  revalidate: 60, // 60秒
  // キャッシュ制御
  cache: 'force-cache' as const,
} as const
