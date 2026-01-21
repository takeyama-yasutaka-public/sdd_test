# AboutAndService Container

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/page/AboutAndService/Container

## Props(プロパティ)

- children: React.ReactNode
- modifier?: 'mission-and-vision' | 'massage' | 'business-model' | 'company'

## Style(スタイル)

Container共通
- div要素
- inner: コンテナ内のレイアウト

Container modifier='mission-and-vision'
- PageAboutAndService.ParallaxBg: パララックス背景

Container modifier='massage'
- massageBg: 背景装飾
- backgroundInner: 背景内側
- line1/line2: 装飾線

Container modifier='business-model'
- businessModelBg: 背景装飾
- backgroundInner: 背景内側
- line1/line2: 装飾線
- bottombox: 下部ボックス

## Behavior(動作)

- modifierに応じて背景装飾を変更

## Test(テスト)

- 各modifierパターンの表示

## Other(その他)

依存関係
- PageAboutAndService.ParallaxBg: パララックス背景
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用

参考
- docs/ui/variables/colors.md: カラー定義