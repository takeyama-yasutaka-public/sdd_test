# MediaImage

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/page/home/MediaImage

## Props(プロパティ)

- image: StaticImageData
- alt: string

## Style(スタイル)

MediaImage共通
- wrapper: ラッパー
- img: Next.js Image
- sizes: (max-width: 767.98px) 100vw, 560px
- placeholder="blur"

## Behavior(動作)

- 'use client'でクライアントコンポーネント
- framer-motion使用
- useInViewでスクロール検知
- rootMargin: '0% 0% -30% 0%'
- triggerOnce: true
- initial: y: 20px, opacity: 0, filter: 'blur(10px)'
- animate: y: 0, opacity: 1, filter: 'blur(0px)'
- transition: duration: 1s, ease: easeOut

## Test(テスト)

- 画像表示
- スクロールアニメーション

## Other(その他)

依存関係
- framer-motion: アニメーション
- react-intersection-observer: スクロール検知
- Next.js Image: 画像最適化
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- 'use client'でクライアントコンポーネント

参考
- docs/ui/variables/colors.md: カラー定義