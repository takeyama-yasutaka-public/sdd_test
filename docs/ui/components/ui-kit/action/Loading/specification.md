# Loading

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/action/Loading

## Props(プロパティ)

- なし

## Style(スタイル)

Loading共通
- fixed top-0 left-0 w-screen h-screen
- z-50 (z-index_loading)
- opacity-0 invisible
- flex justify-center items-center
- modifier='active'時: opacity-100 visible
- modifierAnime='active'時: animation fadeOut 0.3s 1.3s forwards

Loading background
- absolute inset-0
- bg-brand-main-quaternary
- modifierAnime='active'時: animation backgroundFadeOut 0.8s 1s forwards

Loading logo
- flex scale-30 w-[400px] h-auto relative
- opacity-0 invisible
- transition-opacity duration-100
- modifier='active'時: opacity-100 visible

Loading logoLeft
- w-[130px] h-auto translate-x-[95px]
- modifierAnime='active'時: animation blink 0.1s 0s 2 alternate, moveLeft 0.5s 0.8s forwards

Loading logoCenter
- w-[180px] h-auto

Loading logoRight
- w-[128px] h-auto -translate-x-[95px]
- modifierAnime='active'時: animation blink 0.1s 0s 2 alternate, moveRight 0.5s 0.8s forwards

@keyframes fadeOut
- to: opacity-0 invisible

@keyframes backgroundFadeOut
- to: opacity-0

@keyframes moveLeft
- to: translate-x-10

@keyframes moveRight
- to: -translate-x-10

@keyframes blink
- 0%,100%: opacity-100
- 50%: opacity-0

## Behavior(動作)

- 'use client'でクライアントコンポーネント
- useLoadingStoreでローディング状態を取得
- loadingState=true時: 表示
- 画像読み込み完了時: allImagesLoaded=true
- allImagesLoaded=true時: bodyScrollStop, animationStart=true
- 1秒後: bodyScrollStart
- 1.3秒後: loadingOff

## Test(テスト)

- loadingState=true/false時の表示/非表示
- 画像読み込み完了時のアニメーション
- アニメーション完了後の非表示

## Other(その他)

依存関係
- zustand: 状態管理
- bodyScroll: スクロール制御
- Next.js Image: 画像最適化
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- 'use client'でクライアントコンポーネント
- CSSアニメーションで実装

参考
- docs/ui/variables/colors.md: カラー定義
- docs/ui/variables/spacing.md: スペーシング定義