# Heading

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/content/Heading

## Props(プロパティ)

HeadingJpn
- children: React.ReactNode
- color?: string

Heading
- children: React.ReactNode
- h: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
- modifier: 'first' | 'second' | 'third'
- color?: string

## Style(スタイル)

HeadingJpn共通
- flex items-center gap-[10px]

HeadingJpn line
- w-[60px] h-[1px]
- bg-text-body (デフォルト)
- data-modifier='white'時: bg-white

HeadingJpn japanise
- text-text-body (デフォルト)
- text-xxl md:text-xl (min(24vw, 24px) / min(20vw, 20px))
- leading-s font-normal
- data-modifier='white'時: text-on-fill

Heading modifier='first'
- relative
- text-text-body
- text-xxxxl md:text-xxxl (32px / 28px)
- leading-s font-normal tracking-m
- pl-[22px]
- before疑似要素: absolute top-0 left-0 w-1 h-[45px] md:h-[39px] bg-gradient-to-b from-brand-sub-primary to-brand-sub-secondary rounded-full

Heading modifier='second'
- relative
- text-text-body
- text-xxxl md:text-xxl (28px / 24px)
- leading-s font-normal tracking-m
- pl-5
- before疑似要素: absolute top-0 left-0 w-[1px] h-[39px] md:h-[34px] bg-text-body

Heading modifier='third'
- text-text-body
- text-xxl md:text-xl (24px / 20px)
- leading-s font-normal tracking-m

Heading modifier-color='white'
- text-on-fill
- before疑似要素: bg-white

## Behavior(動作)

HeadingJpn
- 横線とテキストを横並びで表示
- color='white'時: 白背景用のスタイル

Heading
- h属性に応じてh1-h5要素を出力
- modifierに応じてスタイルを変更
- color='white'時: 白背景用のスタイル

## Test(テスト)

- HeadingJpn: 通常表示
- HeadingJpn: color='white'時の表示
- Heading: h1-h5の出力
- Heading: modifier='first'/'second'/'third'の表示
- Heading: modifier-color='white'時の表示
- Heading: レスポンシブ表示

## Other(その他)

依存関係
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- before疑似要素はabsolute positioningで実装
- レスポンシブはmd:プレフィックスで実装

参考
- docs/ui/variables/colors.md: カラー定義
- docs/ui/variables/typography.md: タイポグラフィ定義