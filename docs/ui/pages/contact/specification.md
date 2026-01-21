# お問い合わせページ

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/app/contact/page.tsx

## Settings(ページ設定)

- pageName: お問い合わせ
- pageSlug: contact
- pageType: article
- robots: index: false

## Structure(構成)

- Function.StructuredData: 構造化データ
- Layout.Background: 背景
- Layout.PageVisual: ページビジュアル（english="CONTACT", japanese="お問い合わせ", image="contact"）
- Layout.Container modifier="small": コンテナ
- Layout.Content: コンテンツ
- PageContact.Forms: お問い合わせフォーム
- Layout.Breadcrumb: パンくず

## Metadata(メタデータ)

- title: お問い合わせ | siteTitle
- description: お問い合わせページの説明
- canonical: /contact
- OGP/Twitter設定

## Test(テスト)

- フォーム表示
- フォーム送信

## Other(その他)

依存関係
- Function.StructuredData: 構造化データ
- Layout: Background, PageVisual, Container, Content, Breadcrumb
- PageContact: Forms

実装
- Server Component