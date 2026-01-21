# お問い合わせ完了ページ

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/app/contact/finish/page.tsx

## Settings(ページ設定)

- pageName: お問い合わせ完了
- pageSlug: contact/finish
- pageType: article
- robots: index: false

## Structure(構成)

- Function.StructuredData: 構造化データ
- Layout.Background: 背景
- Layout.PageVisual: ページビジュアル（english="CONTACT", japanese="お問い合わせ", image="contact"）
- Layout.Container modifier="small": コンテナ
- Layout.Content: コンテンツ
- Layout.ContentBody: コンテンツ本文
  - p strong: お問い合わせありがとうございます。
  - p: 完了メッセージ
- Layout.ContentFooter: コンテンツフッター
  - Content.Button href="/": トップへ戻る
- Layout.Breadcrumb: パンくず

## Metadata(メタデータ)

- title: お問い合わせ完了 | siteTitle
- description: siteDesc
- canonical: /contact/finish
- OGP/Twitter設定

## Test(テスト)

- 完了ページ表示
- トップへ戻るボタン

## Other(その他)

依存関係
- Function.StructuredData: 構造化データ
- Layout: Background, PageVisual, Container, Content, Breadcrumb
- Content: Button

実装
- Server Component