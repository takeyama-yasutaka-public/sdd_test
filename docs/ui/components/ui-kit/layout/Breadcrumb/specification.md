# Breadcrumb

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/layout/Breadcrumb

## Props(プロパティ)

- breadcrumb: { path: string, name: string }[]

## Style(スタイル)

Breadcrumb共通
- flex items-center gap-2

Breadcrumb Link
- リンク表示

Breadcrumb p
- 最後の項目（リンクなし）

Breadcrumb icon
- Font Awesome faAngleRight
- 区切りアイコン

## Behavior(動作)

- breadcrumb配列をマップ
- 最後の項目はLinkではなくp要素
- 各項目の間にアイコン表示

## Test(テスト)

- パンくずリスト表示
- リンク動作
- 最後の項目がリンクなし

## Other(その他)

依存関係
- Next.js Link: ルーティング
- Font Awesome: アイコン（lucide-reactに移行予定）
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- Font Awesomeからlucide-reactに移行

参考
- docs/ui/variables/colors.md: カラー定義