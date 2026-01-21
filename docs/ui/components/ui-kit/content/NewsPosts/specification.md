# NewsPosts

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/content/NewsPosts

## Props(プロパティ)

NewsPosts
- children: React.ReactNode

NewsPostsItem
- href: string
- time: string (ISO 8601形式)
- title: string

## Style(スタイル)

NewsPosts共通
- ul要素

NewsPostsItem共通
- a: flex flex-col py-5 border-b border-grey-300
- a: text-menu-link-normal no-underline leading-s gap-[10px]
- a: transition-all duration-300
- a hover/active: pl-10
- a p: relative pl-5
- a p::before: absolute top-0 left-0 w-[1px] h-[22px] bg-primary
- time: text-sm

## Behavior(動作)

NewsPostsItem
- Link要素で実装
- time要素にdateTime属性設定
- formatDate関数で日付フォーマット
- hover/active時: 左にパディング追加

## Test(テスト)

- NewsPosts: リスト表示
- NewsPostsItem: 日付表示
- NewsPostsItem: タイトル表示
- NewsPostsItem: hover/active時のアニメーション
- NewsPostsItem: リンク動作

## Other(その他)

依存関係
- Next.js Link: ルーティング
- formatDate: 日付フォーマット
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- before疑似要素でアクセント線表示

参考
- docs/ui/variables/colors.md: カラー定義
- docs/features/utils/formatDate/specification.md: 日付フォーマット