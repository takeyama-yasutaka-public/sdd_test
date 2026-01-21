# Background

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/layout/Background

## Props(プロパティ)

- home?: boolean

## Style(スタイル)

Background共通
- absolute inset-0

Background inner
- 背景装飾要素

Background topbox
- modifier='hide'時: 非表示（home=true時）

Background line1/line2
- 装飾線

Background bottombox
- modifier='hide'時: 非表示（home=true時）

## Behavior(動作)

- 背景装飾表示
- home=true時: topbox/bottombox非表示

## Test(テスト)

- 通常表示
- home=true時の表示

## Other(その他)

依存関係
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用

参考
- docs/ui/variables/colors.md: カラー定義