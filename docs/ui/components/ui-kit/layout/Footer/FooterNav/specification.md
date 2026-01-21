# FooterNav

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/layout/Footer/FooterNav

## Props(プロパティ)

- なし（固定コンテンツ）

## Style(スタイル)

FooterNav共通
- nav要素
- ul要素
- li要素
- Link要素

## Behavior(動作)

- globalNavi.itemsをマップしてナビゲーション表示
- ContactNaviを表示
- 個人情報保護方針リンクを表示

## Test(テスト)

- ナビゲーション項目表示
- リンク動作

## Other(その他)

依存関係
- Next.js Link: ルーティング
- constants: グローバルナビゲーション
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用

参考
- docs/ui/variables/colors.md: カラー定義