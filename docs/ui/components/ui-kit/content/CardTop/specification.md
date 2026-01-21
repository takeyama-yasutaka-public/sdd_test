# CardTop

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/content/CardTop

## Props(プロパティ)

CardTopGroup
- children: React.ReactNode

CardTop
- href: string
- image: StaticImageData
- alt: string
- category: Category[] { name, id }
- text: string

## Style(スタイル)

CardTopGroup共通
- flex flex-row flex-wrap gap-5
- md:flex-col (SP時)
- >div,>a: w-[calc((100%-(20px*2))/3)]
- md:>div,md:>a: w-full (SP時)

CardTop共通
- flex flex-col h-full p-5 bg-white rounded-[32px_0px_32px_0px] block border-none no-underline
- transition-all duration-300

CardTop hover/active
- imgWrapper img: scale-120
- body p: opacity-50

CardTop imgWrapper
- w-full rounded-[16px_0px_16px_0px] overflow-hidden
- img: aspect-video (16:9)

CardTop body
- flex flex-col py-5 gap-5
- p: text-text-body text-xl leading-s

## Behavior(動作)

CardTopGroup
- framer-motion使用
- useInViewでスクロール検知
- rootMargin: '0% 0% -30% 0%'
- triggerOnce: true
- containerVariants: staggerChildren 0.3s

CardTop
- Link要素で実装
- Next.js Image使用
- placeholder="blur"でブラー画像表示
- sizes: (max-width: 767.98px) 100vw, 400px
- itemVariants: y: 10px→0, opacity: 0→1, duration: 1s, ease: easeOut

## Test(テスト)

- CardTopGroup: 3カラムレイアウト
- CardTopGroup: SP時の1カラムレイアウト
- CardTopGroup: スクロールアニメーション
- CardTop: 画像表示
- CardTop: hover/active時のアニメーション
- CardTop: カテゴリーラベル表示

## Other(その他)

依存関係
- Next.js Link: ルーティング
- Next.js Image: 画像最適化
- framer-motion: アニメーション
- react-intersection-observer: スクロール検知
- Content.ClassLabelGroup: カテゴリーラベル
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- framer-motionでアニメーション実装
- 'use client'でクライアントコンポーネント

参考
- docs/ui/variables/colors.md: カラー定義
- docs/ui/components/ui-kit/content/ClassLabel/specification.md: カテゴリーラベル