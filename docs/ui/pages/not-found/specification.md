# 404ページ

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/app/not-found.tsx

## Settings(ページ設定)

- pageName: ページが見つかりません
- pageSlug: 404
- pageType: article
- robots: index: false

## Structure(構成)

- Function.StructuredData: 構造化データ
- Layout.Background: 背景
- Layout.Container modifier="small": コンテナ
- Layout.Content: コンテンツ
- Layout.ContentHeader: コンテンツヘッダー
  - Content.Heading h="h1" modifier="first": ページが見つかりません
- Layout.ContentBody: コンテンツ本文
  - p: エラーメッセージ
- Layout.Breadcrumb: パンくず

## Metadata(メタデータ)

- title: ページが見つかりません | siteTitle
- description: siteDesc
- canonical: /404
- OGP/Twitter設定

## Test(テスト)

- 404ページ表示

## Other(その他)

依存関係
- Function.StructuredData: 構造化データ
- Layout: Background, Container, Content, Breadcrumb
- Content: Heading

実装
- Server Component