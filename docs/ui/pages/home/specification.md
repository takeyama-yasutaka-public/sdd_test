# トップページ

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/app/page.tsx

## Settings(ページ設定)

- pageName: トップページ
- pageSlug: /
- isHome: true

## Data(データ取得)

- getNewsAll(1, 3): 最新ニュース3件取得

## Structure(構成)

- Function.StructuredData: 構造化データ（isHome=true）
- Layout.Background: 背景（home）
- PageHome.MainVisual: メインビジュアル
- PageHome.Container modifier="about": ABOUTセクション
- PageHome.Container modifier="service": SERVICEセクション
- PageHome.Container modifier="case": CASEセクション
- PageHome.Container modifier="news": NEWSセクション
- Content.CtaArea: CTAエリア
- Action.Loading: ローディング

## Metadata(メタデータ)

- title: siteTitle
- description: siteDesc
- canonical: /
- OGP/Twitter設定

## Test(テスト)

- データ取得
- 各セクション表示
- ニュース一覧表示

## Other(その他)

依存関係
- microCMS: ニュースAPI
- Function.StructuredData: 構造化データ
- Layout: Background, Container
- Content: Button, Heading, Card, NewsPosts, CtaArea
- PageHome: MainVisual, Container, MediaImage
- Action.Loading: ローディング

実装
- Server Component
- ISR: revalidate設定