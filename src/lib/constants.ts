/*********************************
    メタデータの定義
*********************************/

import favicon from 'public/favicon/favicon.ico'
import siteImg from '@/images/web-corporation/ogimage.png'

//サイトメタデータの定義
export const siteMeta = {
  siteTitle: 'WEB CORPORATION',
  siteDesc:
    'WEB CORPORATIONは、中小企業・スタートアップ向けにWEBサイト制作、WEBアプリ開発、デジタルマーケティングを提供する企業です。お客様のビジネス成長をサポートします。',
  siteUrl: 'https://react-corporate-alpha.vercel.app',
  siteLang: 'ja',
  siteLocale: 'ja_JP',
  siteType: 'website' as 'website',
  siteFavicon: favicon.src,
  siteAppleTouchIcon: 'public/favicon/apple-touch-icon.png',
  siteImgSrc: siteImg.src,
  siteImgWidth: siteImg.width,
  siteImgHeight: siteImg.height,
}

//ブレイクポイントの定義
export const breakpoint = {
  sp: '767.98px',
  pc: '768px',
}

//代替アイキャッチ画像データの定義
export const eyecatchLocal = {
  url: '/images/no-image.png',
  width: 1080,
  height: 730,
}

//ページネーション表示件数の定義
export const prePage = {
  case: 9,
  news: 10,
}

//グローバルナビゲーションの定義
export const globalNavi = {
  items: [
    {
      id: 1,
      english: 'ABOUT',
      japanese: '会社情報',
      path: '/about',
    },
    {
      id: 2,
      english: 'SERVICE',
      japanese: '事業内容',
      path: '/service',
    },
    {
      id: 3,
      english: 'CASE',
      japanese: '実績',
      path: '/case',
    },
    {
      id: 4,
      english: 'NEWS',
      japanese: 'お知らせ',
      path: '/news',
    },
  ],
}

//お問い合わせナビゲーションの定義
export const ContactNavi = {
  english: 'CONTACT',
  japanese: 'お問い合わせ',
  path: '/contact',
}
