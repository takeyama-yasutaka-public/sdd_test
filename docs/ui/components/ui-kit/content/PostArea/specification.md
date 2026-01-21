# PostArea

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/content/PostArea

## Props(プロパティ)

- children: React.ReactNode

## Style(スタイル)

PostArea共通
- flex flex-col gap-[20vw]

PostArea h2
- relative text-text-body text-xxxl md:text-xxl leading-s font-normal tracking-m
- pl-5 mt-20
- first-child: mt-0
- before: absolute top-0 left-0 w-[1px] h-[39px] md:h-[34px] bg-text-body

PostArea h3
- text-text-body text-xxl md:text-xl leading-s font-normal tracking-m
- mt-10
- first-child: mt-0

PostArea blockquote
- flex gap-4
- p: p-[10px] italic
- before: block w-1 h-auto bg-grey-100

PostArea hr
- w-full border-border-divider

PostArea table
- inline-block border-spacing-0 border-separate
- tr:first-child>*: border-t border-border-field
- th: p-[10px] border-r border-b border-border-field bg-brand-main-tertiary leading-s font-normal align-middle
- th:first-child: border-l border-border-field
- td: p-[10px] border-r border-b border-border-field leading-s align-middle
- td:first-child: border-l border-border-field

PostArea ul
- flex flex-col gap-[10px]
- li: relative pl-[18px] leading-s
- li:before: absolute top-[-4px] left-1 w-1 content-[url(solid-circle-icon)]

PostArea ol
- counter-reset-[order-list] flex flex-col gap-[10px]
- li: relative pl-[19px] leading-s
- li:before: counter-increment-[order-list] content-[counter(order-list).] absolute top-0 left-0 leading-s

## Behavior(動作)

- 記事コンテンツ用のスタイルコンテナ
- h2, h3, blockquote, hr, table, ul, olのスタイル定義

## Test(テスト)

- 各要素のスタイル適用

## Other(その他)

依存関係
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用

参考
- docs/ui/variables/colors.md: カラー定義
- docs/ui/variables/typography.md: タイポグラフィ定義