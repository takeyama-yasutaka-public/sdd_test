# Pager

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/content/Pager

## Props(プロパティ)

Pager
- children: React.ReactNode

PagerItem
- type: 'number' | 'current' | 'dots' | 'prev' | 'next'
- href?: string
- onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
- number?: number

## Style(スタイル)

Pager共通
- w-fit

Pager inner
- flex flex-wrap gap-[5px]

PagerItem共通
- a/button/span: flex items-center justify-center
- w-10 h-10 (40px)
- text-primary (color: #0054d4)
- text-lg (18px)
- leading-none
- no-underline
- transition-all duration-100
- hover/active: opacity-50

PagerItem type='current'
- bg-primary rounded-full
- text-on-fill
- pointer-events-none

PagerItem type='dots'
- text-primary
- pointer-events-none

PagerItemLR (prev/next)
- a/button/span: flex items-center justify-center
- w-10 h-10 (40px)
- border border-primary rounded-full
- text-primary
- text-xs (12px)
- leading-none
- no-underline
- transition-all duration-100
- hover/active: bg-tertiary

## Behavior(動作)

PagerItem type='number'
- href指定時: Link要素
- href未指定時: button要素
- クリックでページ遷移

PagerItem type='current'
- span要素
- クリック不可

PagerItem type='dots'
- span要素
- 「…」を表示
- クリック不可

PagerItem type='prev'/'next'
- href指定時: Link要素
- href未指定時: button要素
- アイコン表示（ChevronLeft/ChevronRight）
- aria-label設定

## Icon(アイコン)

- prev: ChevronLeft (lucide-react)
- next: ChevronRight (lucide-react)
- w-4 h-4

## Test(テスト)

- PagerItem: type='number'の表示と動作
- PagerItem: type='current'の表示
- PagerItem: type='dots'の表示
- PagerItem: type='prev'/'next'の表示と動作
- PagerItem: href有無での要素切り替え
- PagerItem: hover/active時のスタイル変化

## Other(その他)

依存関係
- Next.js Link: ルーティング
- lucide-react: アイコン
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- Font Awesomeからlucide-reactに移行

参考
- docs/ui/variables/colors.md: カラー定義
- docs/ui/components/ui-features/Pager/specification.md: ロジック統合版