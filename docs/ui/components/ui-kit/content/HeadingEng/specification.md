# HeadingEng

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/content/HeadingEng

## Props(プロパティ)

HeadingTopEng
- english: string
- color?: string

HeadingEng
- children: React.ReactNode
- color?: string

## Style(スタイル)

HeadingTopEng共通
- font-secondary text-primary
- text-[min(96vw,96px)] md:text-[min(72vw,72px)]
- leading-s font-light
- flex overflow-hidden

HeadingTopEng modifierView='active'
- span: translate-y-0

HeadingTopEng modifierColor='white'
- text-on-fill

HeadingTopEng span
- block translate-y-[105%]
- transition-transform duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)]
- nth-child(n+2): transition-delay (n*0.1s)

HeadingEng共通
- relative w-fit
- font-secondary text-primary
- text-[min(64vw,64px)] md:text-[min(48vw,48px)]
- leading-s font-light

HeadingEng modifierView='active'
- after: animation borderSlide 1s ease forwards

HeadingEng modifierColor='white'
- text-on-fill
- after: bg-on-fill

HeadingEng::after
- absolute left-0 bottom-0 w-0 h-[2px] bg-primary
- animation: borderSlide

@keyframes borderSlide
- 0%: w-0 opacity-0
- 50%: w-full opacity-100
- 100%: w-full opacity-0

## Behavior(動作)

HeadingTopEng
- 'use client'でクライアントコンポーネント
- useInViewでスクロール検知
- rootMargin: '0% 0% -30% 0%'
- triggerOnce: true
- 文字を1文字ずつspanで分割
- スペースは\u00A0に変換
- スクロール検知時にアニメーション

HeadingEng
- 'use client'でクライアントコンポーネント
- useInViewでスクロール検知
- rootMargin: '0% 0% -30% 0%'
- triggerOnce: true
- スクロール検知時にボーダーアニメーション

## Test(テスト)

- HeadingTopEng: 通常表示
- HeadingTopEng: スクロールアニメーション
- HeadingTopEng: modifierColor='white'時の表示
- HeadingEng: 通常表示
- HeadingEng: スクロールアニメーション
- HeadingEng: modifierColor='white'時の表示

## Other(その他)

依存関係
- react-intersection-observer: スクロール検知
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- CSSアニメーションで実装
- 'use client'でクライアントコンポーネント

参考
- docs/ui/variables/colors.md: カラー定義
- docs/ui/variables/typography.md: タイポグラフィ定義