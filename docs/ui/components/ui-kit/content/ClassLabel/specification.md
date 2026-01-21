# ClassLabel

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/content/ClassLabel

## Props(プロパティ)

ClassLabel
- text: string
- modifier?: string

ClassLabelGroup
- children: React.ReactNode
- modifier?: string

## Style(スタイル)

ClassLabel共通
- inline-block w-fit
- px-5 py-[5px]
- bg-primary rounded-full
- text-on-fill text-sm leading-s font-medium

ClassLabel modifier='single'
- px-[25px] py-2 text-base

ClassLabelGroup共通
- flex flex-wrap gap-[5px]

ClassLabelGroup modifier='single'
- gap-[10px]

## Behavior(動作)

ClassLabel
- カテゴリーラベル表示
- modifier='single'時: 大きめサイズ

ClassLabelGroup
- 複数ラベルを横並びで表示
- modifier='single'時: 間隔を広げる

## Test(テスト)

- ClassLabel: 通常表示
- ClassLabel: modifier='single'時の表示
- ClassLabelGroup: 複数ラベル表示
- ClassLabelGroup: modifier='single'時の表示

## Other(その他)

依存関係
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用

参考
- docs/ui/variables/colors.md: カラー定義