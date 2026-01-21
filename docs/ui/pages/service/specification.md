# 事業内容ページ

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/app/service/page.tsx

## Settings(ページ設定)

- pageName: 事業内容
- pageSlug: service
- pageType: article
- robots: index: false

## Structure(構成)

- Function.StructuredData: 構造化データ
- Layout.Background: 背景
- Layout.PageVisual: ページビジュアル（english="SERVICE", japanese="事業内容", image="service"）
- PageAboutAndService.Container modifier="business-model": BUSINESS MODELセクション
  - Content.MediaAboutAndService modifier="model": BUSINESS MODEL
- PageAboutAndService.Container modifier="our-service": OUR SERVICEセクション
  - Content.HeadingEng: OUR SERVICE
  - Content.MediaService: WEBサイト制作
  - Content.MediaService: WEBアプリ開発
  - Content.MediaService: デジタルマーケティング
- Layout.Breadcrumb: パンくず
- Content.CtaArea: CTAエリア

## Metadata(メタデータ)

- title: 事業内容 | siteTitle
- description: 事業内容ページの説明
- canonical: /service
- OGP/Twitter設定

## Test(テスト)

- 各セクション表示
- サービス一覧表示

## Other(その他)

依存関係
- Function.StructuredData: 構造化データ
- Layout: Background, PageVisual, Container, Content, Breadcrumb
- Content: MediaAboutAndService, MediaService, HeadingEng, Heading, CtaArea
- PageAboutAndService: Container

実装
- Server Component