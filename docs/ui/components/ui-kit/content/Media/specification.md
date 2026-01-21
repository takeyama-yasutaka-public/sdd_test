# Media

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/content/Media

## Props(プロパティ)

MediaTopService
- children: React.ReactNode
- image?: StaticImageData
- alt?: string

MediaService
- children: React.ReactNode
- image?: StaticImageData
- alt?: string

MediaAboutAndService
- children: React.ReactNode
- image?: StaticImageData
- alt?: string
- modifier?: string

## Style(スタイル)

MediaTopService共通
- first-child: pt-0
- last-child: pb-0 border-b-0

MediaTopService
- flex items-center py-5 gap-[min(80px,80vw)] border-b border-grey-300
- md:flex-col md:py-10 md:gap-5 (SP時)
- img: w-[min(280px,280vw)] aspect-video rounded-[16px_0px_16px_0px]
- md:img: w-full (SP時)
- body: flex flex-col gap-5 flex-1
- body h3: text-brand-main-secondary text-xxxl md:text-xxl leading-s

MediaService共通
- first-child: pt-0
- last-child: pb-0 border-b-0

MediaService
- flex items-center py-20 gap-[min(80px,80vw)] border-b border-grey-300
- md:flex-col md:py-20 md:gap-5 (SP時)
- img: w-[min(360px,360vw)] aspect-square rounded-[16px_0px_16px_0px]
- md:img: w-full (SP時)
- body: flex flex-col gap-5 flex-1
- body h3: text-brand-main-secondary text-xxxxxl md:text-xxxl leading-s

MediaAboutAndService共通
- flex
- modifier='reverse': flex-row-reverse
- modifier='massage': flex-col
- modifier='model': flex-col

MediaAboutAndService body
- flex flex-col gap-5

MediaAboutAndService modifier='reverse'/'なし'
- motion.div: y-[20px] opacity-0 blur-[10px] → y-0 opacity-100 blur-0
- img: sizes (max-width: 767.98px) 100vw, 360px

MediaAboutAndService modifier='massage'
- imageWrapper: relative
- motion.div: y-[20px] opacity-0 blur-[10px] → y-0 opacity-100 blur-0
- img: sizes (max-width: 767.98px) 100vw, 320px
- signature: 代表取締役CEO、山田 太郎、Taro Yamada

MediaAboutAndService modifier='model'
- model: ref
- lottieアニメーション表示

## Behavior(動作)

MediaTopService/MediaService
- 'use client'でクライアントコンポーネント
- framer-motion使用
- useInViewでスクロール検知
- rootMargin: '0% 0% -30% 0%'
- triggerOnce: true
- initial: y: 20px, opacity: 0
- animate: y: 0, opacity: 1, duration: 1s, ease: easeOut

MediaAboutAndService modifier='model'
- lottie-web使用
- autoplay: false
- inView時にplay()
- goToAndStop(0, true)で初期化

## Test(テスト)

- MediaTopService: 通常表示
- MediaService: 通常表示
- MediaAboutAndService: modifier='reverse'/'なし'/'massage'/'model'の表示
- スクロールアニメーション

## Other(その他)

依存関係
- framer-motion: アニメーション
- react-intersection-observer: スクロール検知
- lottie-web: アニメーション（modifier='model'時）
- Next.js Image: 画像最適化
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- 'use client'でクライアントコンポーネント

参考
- docs/ui/variables/colors.md: カラー定義