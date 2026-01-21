# Slideshow

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/page/home/Slideshow

## Props(プロパティ)

- なし（固定コンテンツ）

## Style(スタイル)

Slideshow共通
- relative

Slideshow inner
- スライドショーコンテナ

Slideshow imageWrapper
- 画像ラッパー
- modifier='active'時: アクティブ状態

Slideshow image
- Next.js Image
- priority属性（1枚目のみ）

## Behavior(動作)

- 'use client'でクライアントコンポーネント
- componentKeyで再マウント制御
- 初期状態: 1枚目をactive
- 2秒後: アニメーション開始
- 4秒間隔でスライド切り替え
- z-index: current=1, next=2, nextNext=-1
- visibilitychangeイベントで再マウント

## Test(テスト)

- スライドショー表示
- 自動切り替え
- visibilitychange時の再マウント

## Other(その他)

依存関係
- Next.js Image: 画像最適化
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- 'use client'でクライアントコンポーネント

参考
- docs/ui/variables/colors.md: カラー定義