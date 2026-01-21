# ニュース一覧

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/app/news/page.tsx

## Settings(ページ設定)

- pageName: ニュース
- pageSlug: news
- PER_PAGE: prePage.news (10件)

## Data(データ取得)

- getNewsAll(1, PER_PAGE): microCMS API
- ページネーション対応

## Structure(構成)

- Function.StructuredData: 構造化データ
- Layout.Background: 背景
- Layout.PageVisual: ページビジュアル（english="NEWS", japanese="お知らせ", image="news"）
- Layout.Container: コンテナ
- Layout.Content: コンテンツ
- Layout.ContentBody: コンテンツ本文
- Content.NewsPosts: ニュース一覧
  - NewsPostsItem: id, title, date
- Layout.ContentFooter: コンテンツフッター
- Function.Pager: ページネーション
- Layout.Breadcrumb: パンくず
- Content.CtaArea: CTAエリア

## Metadata(メタデータ)

- title: ニュース | siteTitle
- description: ニュースページの説明
- canonical: /news
- OGP/Twitter設定

## Test(テスト)

- データ取得
- 記事一覧表示
- ページネーション

## Other(その他)

依存関係
- microCMS: ニュースAPI
- Function.StructuredData: 構造化データ
- Layout: Background, PageVisual, Container, Content, Breadcrumb
- Content: NewsPosts, CtaArea
- Function.Pager: ページネーション

実装
- Server Component
- ISR: revalidate設定