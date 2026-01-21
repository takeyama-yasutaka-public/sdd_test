# 個人情報保護方針ページ

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/app/privacy/page.tsx

## Settings(ページ設定)

- pageName: 個人情報保護方針
- pageSlug: privacy
- pageType: article
- robots: index: false

## Structure(構成)

- Function.StructuredData: 構造化データ
- Layout.Background: 背景
- Layout.Container modifier="small": コンテナ
- Layout.Content: コンテンツ
- Layout.ContentHeader: コンテンツヘッダー
  - Content.Heading h="h1" modifier="first": 個人情報保護方針
- Layout.ContentBody: コンテンツ本文
  - Content.Heading h="h2" modifier="second": 各条項
  - Content.BulletList: 箇条書き
- Layout.Breadcrumb: パンくず

## Metadata(メタデータ)

- title: 個人情報保護方針 | siteTitle
- description: 個人情報保護方針ページの説明
- canonical: /privacy
- OGP/Twitter設定

## Test(テスト)

- 各条項表示
- 箇条書き表示

## Other(その他)

依存関係
- Function.StructuredData: 構造化データ
- Layout: Background, Container, Content, Breadcrumb
- Content: Heading, BulletList

実装
- Server Component