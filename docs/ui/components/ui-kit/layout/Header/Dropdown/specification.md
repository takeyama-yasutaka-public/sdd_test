# Dropdown

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/layout/Header/Dropdown

## Props(プロパティ)

- なし（固定コンテンツ）

## Style(スタイル)

Dropdown共通
- wrapper: ラッパー
- dropdown: ul要素
- contact: Link要素

## Components(使用コンポーネント)

- DropdownItem: 各ナビゲーション項目
- globalNavi.items: グローバルナビゲーション
- ContactNavi: お問い合わせナビゲーション

## Behavior(動作)

- globalNavi.itemsをマップしてDropdownItem表示
- ContactNaviをLink要素で表示

## Test(テスト)

- ナビゲーション項目表示
- お問い合わせリンク表示

## Other(その他)

依存関係
- DropdownItem: ドロップダウン項目
- Next.js Link: ルーティング
- constants: グローバルナビゲーション
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用

参考
- docs/ui/components/ui-kit/layout/Header/Dropdown/DropdownItem/specification.md: ドロップダウン項目