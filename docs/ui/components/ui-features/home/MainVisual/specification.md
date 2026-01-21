# MainVisual

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/page/home/MainVisual

## Props(プロパティ)

- なし（固定コンテンツ）

## Style(スタイル)

MainVisual共通
- relative flex flex-col w-full
- h-[clamp(calc(1100px*0.9),1100vh,calc(1100px*1.1))]
- md:h-[clamp(calc(870px*0.9),870vh,calc(870px*1.1))] (SP時)

MainVisual english
- mt-[clamp(calc(60px*0.9),60vh,calc(60px*1.1))]
- ml-[60vw]
- text-primary font-secondary
- text-[min(100px,100vw)] md:text-[32vw] (SP時)
- leading-[1.1] font-light
- md:mt-[clamp(calc(40px*0.9),40vh,calc(40px*1.1))] md:ml-[20vw] (SP時)

MainVisual japanise
- mt-[clamp(calc(60px*0.9),60vh,calc(60px*1.1))]
- ml-[60vw]
- text-[clamp(20px,24vw,24px)] md:text-[min(20px,20vw)] (SP時)
- leading-s
- md:mt-[clamp(calc(20px*0.9),20vh,calc(20px*1.1))] md:ml-[20vw] (SP時)

MainVisual arrow
- absolute flex flex-col items-center
- left-[84vw]
- bottom-[clamp(calc(338px*0.9),338vh,calc(338px*1.1))]
- md:left-[16vw] md:bottom-[clamp(calc(248px*0.9),248vh,calc(248px*1.1))] (SP時)
- p: inline-block text-white text-sm leading-s font-normal -rotate-90
- span: relative block mt-[30px] w-[1px] h-[45px] bg-white
- span: animation fadeInOutMove 2s ease-in-out infinite
- span::after: absolute bottom-[-1px] right-[6px] w-[1px] h-[15px] bg-white -rotate-45

MainVisual bottom
- absolute left-0 bottom-0 w-full
- h-[clamp(calc(600px*0.9),600vh,calc(600px*1.1))]
- bg-primary rounded-[72px_0px_0px_0px] -z-20
- md:h-[clamp(calc(480px*0.9),480vh,calc(480px*1.1))] md:rounded-[36px_0px_0px_0px] (SP時)

@keyframes fadeInOutMove
- 0%: opacity-0 -translate-y-[10px]
- 50%: opacity-100 translate-y-0
- 100%: opacity-0 translate-y-[10px]

## Components(使用コンポーネント)

- PageHome.Slideshow: スライドショー

## Behavior(動作)

- 'use client'でクライアントコンポーネント
- useLoadingStoreでローディング状態を取得
- loadingState=false時: englishDelay=0, japaniseDelay=0.4
- loadingState=true時: englishDelay=0.8, japaniseDelay=1.2
- framer-motionでアニメーション
- initial: x: '-5vw', opacity: 0, filter: 'blur(10px)'
- animate: x: 0, opacity: 1, filter: 'blur(0px)'
- transition: duration: 0.8s, delay: englishDelay/japaniseDelay

## Test(テスト)

- 通常表示
- ローディング状態によるアニメーション遅延
- スライドショー表示

## Other(その他)

依存関係
- framer-motion: アニメーション
- zustand: 状態管理
- PageHome.Slideshow: スライドショー
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- 'use client'でクライアントコンポーネント

参考
- docs/ui/variables/colors.md: カラー定義
- docs/ui/variables/typography.md: タイポグラフィ定義