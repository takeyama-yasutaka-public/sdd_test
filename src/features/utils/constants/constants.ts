/**
 * constants
 * 仕様書: docs/features/utils/constants/specification.md
 */

// サイトメタデータ
export const siteMeta = {
  siteTitle: 'WEB CORPORATION',
  siteDesc: 'サイト説明文',
  siteUrl: 'https://react-corporate-alpha.vercel.app',
  siteLang: 'ja',
  siteLocale: 'ja_JP',
  siteType: 'website',
  siteFavicon: '/favicon/favicon.ico',
  siteAppleTouchIcon: '/favicon/apple-touch-icon.png',
  siteImgSrc: '/images/ogimage.png',
  siteImgWidth: 1200,
  siteImgHeight: 630,
} as const

// ブレイクポイント
export const breakpoint = {
  sp: '767.98px',
  pc: '768px',
} as const

// 代替アイキャッチ画像
export const eyecatchLocal = {
  url: '/images/no-image.png',
  width: 1080,
  height: 730,
} as const

// ページネーション設定
export const prePage = {
  case: 9,
  news: 10,
} as const

// グローバルナビゲーション
export const globalNavi = {
  items: [
    { id: 'about', english: 'ABOUT', japanese: '企業情報', path: '/about' },
    { id: 'service', english: 'SERVICE', japanese: '事業内容', path: '/service' },
    { id: 'case', english: 'CASE', japanese: '実績', path: '/case' },
    { id: 'news', english: 'NEWS', japanese: 'お知らせ', path: '/news' },
  ],
} as const

// お問い合わせナビゲーション
export const ContactNavi = {
  english: 'CONTACT',
  japanese: 'お問い合わせ',
  path: '/contact',
} as const
