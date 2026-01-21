# List

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/content/List

## Props(プロパティ)

BulletList
- children: React.ReactNode

OrderList
- children: React.ReactNode

## Style(スタイル)

BulletList共通
- flex flex-col gap-[10px]

BulletList li
- relative pl-[18px] leading-s
- before: absolute top-[-4px] left-1 w-1
- before: content-[url(data:image/svg+xml...)] (solid-circle-icon)

OrderList共通
- counter-reset-[order-list] flex flex-col gap-[10px]

OrderList li
- relative pl-[19px] leading-s
- before: counter-increment-[order-list] content-[counter(order-list).] absolute top-0 left-0 leading-s

## Behavior(動作)

BulletList
- ul要素で箇条書き表示
- カスタムアイコン使用

OrderList
- ol要素で番号付きリスト表示
- CSS counter使用

## Test(テスト)

- BulletList: 箇条書き表示
- OrderList: 番号付きリスト表示

## Other(その他)

依存関係
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- before疑似要素でマーカー表示

参考
- docs/ui/variables/typography.md: タイポグラフィ定義