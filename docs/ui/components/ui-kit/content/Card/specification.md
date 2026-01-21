# Card

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/content/Card

## Props(プロパティ)

CardGroup
- children: React.ReactNode

Card
- href: string
- image: ImageData { url, width, height, blurDataURL }
- alt: string
- category: Category[] { name, id }
- text: string

## Style(スタイル)

CardGroup共通
- flex flex-row flex-wrap gap-10
- md:flex-col (SP時)
- >div,>a: w-[calc((100%-(40px*2))/3)]
- md:>div,md:>a: w-full (SP時)

Card共通
- flex flex-col block border-none no-underline
- transition-all duration-300

Card hover/active
- imgWrapper img: scale-120
- body p: opacity-50

Card imgWrapper
- w-full rounded-[16px_0px_16px_0px] overflow-hidden
- img: aspect-video (16:9)

Card body
- flex flex-col py-5 gap-5
- p: text-text-body text-xl leading-s

## Behavior(動作)

Card
- Link要素で実装
- Next.js Image使用
- placeholder="blur"でブラー画像表示
- sizes: (max-width: 767.98px) 100vw, 400px

## Test(テスト)

- CardGroup: 3カラムレイアウト
- CardGroup: SP時の1カラムレイアウト
- Card: 画像表示
- Card: hover/active時のアニメーション
- Card: カテゴリーラベル表示

## Other(その他)

依存関係
- Next.js Link: ルーティング
- Next.js Image: 画像最適化
- Content.ClassLabelGroup: カテゴリーラベル
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- hover/active時のアニメーションはtransitionで実装

参考
- docs/ui/variables/colors.md: カラー定義
- docs/ui/components/ui-kit/content/ClassLabel/specification.md: カテゴリーラベル