# Home Container

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/page/home/Container

## Props(プロパティ)

- children: React.ReactNode
- modifier: string

## Style(スタイル)

Container共通
- containerBg: 背景ラッパー
- container: コンテナ
- inner: コンテナ内のレイアウト

Container modifier='service'
- background: 背景装飾
- backgroundInner: 背景内側
- line1/line2: 装飾線

## Behavior(動作)

- modifier='service'時: 背景装飾表示

## Test(テスト)

- 通常表示
- modifier='service'時の表示

## Other(その他)

依存関係
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用

参考
- docs/ui/variables/colors.md: カラー定義