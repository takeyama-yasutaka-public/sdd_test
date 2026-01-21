# Container

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/layout/Container

## Props(プロパティ)

- children: React.ReactNode
- modifier?: string

## Style(スタイル)

Container共通
- flex-1 flex justify-center w-full

Container inner
- flex w-full
- max-w-[1280px] (content-width 1200px + padding 40px * 2)
- py-20 px-10 (padding: 80px 40px)

Container modifier='small'
- inner: max-w-[1080px] (content-width-small 1000px + padding 40px * 2)

## Behavior(動作)

- 中央寄せのコンテナ
- modifier='small'時: 小さい幅のコンテナ
- 子要素をflexレイアウトで配置

## Test(テスト)

- 通常のコンテナ表示
- modifier='small'時の表示
- レスポンシブ表示

## Other(その他)

依存関係
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- max-widthはcontent-width + paddingで計算

参考
- docs/ui/variables/spacing.md: スペーシング定義