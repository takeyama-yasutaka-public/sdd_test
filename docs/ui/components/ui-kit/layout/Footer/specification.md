# Footer

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/layout/Footer

## Props(プロパティ)

- なし（固定コンテンツ）

## Style(スタイル)

Footer共通
- footer要素
- FooterWrapperでラップ

Footer inner
- コンテナ内のレイアウト

Footer top
- logo: Image + "WEB CORPORATION"テキスト

Footer line
- hr要素で区切り線

FooterNav
- フッターナビゲーション

Footer copyright
- "© 2024 WEB CORPORATION Company."テキスト

## Behavior(動作)

- 固定フッター表示
- FooterWrapperでラップ

## Test(テスト)

- フッター表示
- ロゴ表示
- ナビゲーション表示
- コピーライト表示

## Other(その他)

依存関係
- FooterWrapper: ラッパー
- FooterNav: ナビゲーション
- Next.js Image: 画像最適化
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用

参考
- docs/ui/variables/colors.md: カラー定義