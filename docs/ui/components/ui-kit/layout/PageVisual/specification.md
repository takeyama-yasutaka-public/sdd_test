# PageVisual

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/layout/PageVisual

## Props(プロパティ)

- english: string
- japanese: string
- image: 'about' | 'service' | 'case' | 'news' | 'contact'

## Style(スタイル)

PageVisual共通
- relative

PageVisual imageWrapper
- 背景画像表示

PageVisual image
- priority属性で優先読み込み
- placeholder="blur"

PageVisual title
- タイトル表示エリア

PageVisual english
- font-secondary text-[min(96vw,96px)] md:text-[min(72vw,72px)]
- leading-s font-light
- flex overflow-hidden
- modifierView='active'時: span translate-y-0
- 文字を1文字ずつspanで分割
- スペースは\u00A0に変換

PageVisual japaniseWrapper
- flex items-center gap-[10px]

PageVisual line
- w-[60px] h-[1px] bg-white

PageVisual japanise
- text-white text-[min(24vw,24px)] md:text-[min(20vw,20px)]
- leading-s font-normal

## Behavior(動作)

- 'use client'でクライアントコンポーネント
- useInViewでスクロール検知
- triggerOnce: true
- スクロール検知時にアニメーション

## Test(テスト)

- 各imageパターンの表示
- スクロールアニメーション
- タイトル表示

## Other(その他)

依存関係
- react-intersection-observer: スクロール検知
- Next.js Image: 画像最適化
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- 'use client'でクライアントコンポーネント

参考
- docs/ui/variables/colors.md: カラー定義
- docs/ui/variables/typography.md: タイポグラフィ定義