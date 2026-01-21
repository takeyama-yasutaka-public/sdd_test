# constants

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/constants.ts

## Constants(定数)

siteMeta
- siteTitle: 'WEB CORPORATION'
- siteDesc: サイト説明文
- siteUrl: 'https://react-corporate-alpha.vercel.app'
- siteLang: 'ja'
- siteLocale: 'ja_JP'
- siteType: 'website'
- siteFavicon: favicon.src
- siteAppleTouchIcon: 'public/favicon/apple-touch-icon.png'
- siteImgSrc: siteImg.src
- siteImgWidth: siteImg.width
- siteImgHeight: siteImg.height

breakpoint
- sp: '767.98px'
- pc: '768px'

eyecatchLocal
- url: '/images/no-image.png'
- width: 1080
- height: 730

prePage
- case: 9
- news: 10

globalNavi
- items: [{ id, english, japanese, path }]
- ABOUT, SERVICE, CASE, NEWS

ContactNavi
- english: 'CONTACT'
- japanese: 'お問い合わせ'
- path: '/contact'

## Other(その他)

依存関係
- なし

実装
- 定数定義のみ

参考
- docs/ui/variables/breakpoints.md: ブレイクポイント定義