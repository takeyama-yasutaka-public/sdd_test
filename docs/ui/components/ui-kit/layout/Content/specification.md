# Content

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/layout/Content

## Props(プロパティ)

Content
- children: React.ReactNode

ContentHeader/ContentHeaderTop/ContentBody/ContentFooter
- children: React.ReactNode

## Style(スタイル)

Content共通
- main要素

Content inner
- コンテナ内のレイアウト

ContentHeader/ContentHeaderTop/ContentBody/ContentFooter
- 各セクションのレイアウト

## Behavior(動作)

- メインコンテンツエリア
- ContentLayoutでセクション分割

## Test(テスト)

- コンテンツ表示
- 各セクション表示

## Other(その他)

依存関係
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用

参考
- docs/ui/variables/colors.md: カラー定義