# コンポーネント一覧ページ

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/app/component/page.tsx

## Settings(ページ設定)

- pageName: コンポーネント一覧
- pageSlug: component
- pageType: article
- robots: index: false

## Structure(構成)

- Function.StructuredData: 構造化データ
- Layout.Background: 背景
- Layout.PageVisual: 複数のPageVisual（ABOUT, SERVICE, CASE, NEWS, CONTACT）
- Layout.Container: コンテナ
- Layout.Content: コンテンツ
- Layout.ContentBody: コンテンツ本文
  - 全コンポーネントの表示例
- Layout.Breadcrumb: パンくず
- Content.CtaArea: CTAエリア

## Metadata(メタデータ)

- title: コンポーネント一覧 | siteTitle
- description: siteDesc
- canonical: /component
- OGP/Twitter設定

## Test(テスト)

- 全コンポーネントの表示

## Other(その他)

依存関係
- Function.StructuredData: 構造化データ
- Layout: Background, PageVisual, Container, Content, Breadcrumb
- Content: 全コンポーネント
- PageComponent: Forms, ButtonAlert

実装
- Server Component
- コンポーネント一覧表示用

参考
- 開発用ページ、本番では非表示推奨