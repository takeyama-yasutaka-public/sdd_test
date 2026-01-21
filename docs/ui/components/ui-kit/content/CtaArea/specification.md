# CtaArea

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/content/CtaArea

## Props(プロパティ)

- なし（固定コンテンツ）

## Style(スタイル)

CtaArea共通
- flex items-center w-full bg-brand-sub-primary
- md:flex-col (SP時)

innerFirst
- flex flex-col justify-center
- w-[580vw] h-full
- px-10 pl-[max(calc(580vw-460px),120vw)]
- gap-5
- md:w-full md:p-10 (SP時)

heading
- flex flex-col w-full

english
- font-secondary text-on-fill
- text-[min(64vw,64px)] md:text-[min(48vw,48px)]
- leading-s font-light

japaniseWrapper
- flex items-center gap-[10px]

line
- w-[60px] h-[1px] bg-white

japanise
- text-on-fill text-[min(24vw,24px)] md:text-[min(20vw,20px)]
- leading-s font-normal

text
- text-on-fill

innerSecond
- relative flex-1 h-[300px] overflow-hidden
- md:flex-none md:w-full md:h-[min(300vw,300px)] (SP時)

image
- absolute top-1/2 left-0 w-[1000vw] max-w-none h-auto bg-white -translate-y-1/2 z-10
- min-[1640px]:w-[calc(1000vw*0.9)]
- max-[1240px]:w-[calc(1000vw*1.1)]
- max-[1040px]:w-[calc(1000vw*1.2)]
- md:left-1/2 md:w-[calc(1000vw*0.49)] md:-translate-y-[52%] md:-translate-x-[44%] (SP時)

gradient
- absolute top-0 left-0 w-[718vw] h-full
- bg-gradient-to-r from-brand-sub-primary to-transparent [50%]
- z-20
- md:w-full md:bg-gradient-to-b from-brand-sub-primary to-transparent [33%] (SP時)

buttonWrapper
- relative flex justify-center items-center
- w-[max(340px,528vw)] h-full z-30
- md:items-end md:w-full md:pb-[40vw] (SP時)

button
- relative inline-block w-fit max-w-full
- px-10 py-5 text-primary text-xl leading-s font-normal no-underline text-center
- md:text-[min(20vw,20px)] (SP時)
- before: absolute inset-0 bg-white border border-primary rounded-full transition-all duration-100 -z-10
- hover/active before: -inset-[10px]

## Behavior(動作)

- 固定コンテンツ表示
- お問い合わせリンク（/contact）
- 背景画像とグラデーションオーバーレイ

## Test(テスト)

- 通常表示
- SP時のレスポンシブ
- ボタンhover/active動作

## Other(その他)

依存関係
- Next.js Link: ルーティング
- Next.js Image: 画像最適化
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用

参考
- docs/ui/variables/colors.md: カラー定義