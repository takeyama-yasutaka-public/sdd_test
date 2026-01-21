# ニュース詳細ページ

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/app/news/[id]/page.tsx

## Settings(ページ設定)

- pageSlug: news/[id]
- pageType: article
- generateStaticParams: getNewsAll()で全記事ID取得
- dynamicParams: false

## Data(データ取得)

- getNewsPostById(id): microCMS API
- 代替アイキャッチ画像への置換
- extractText: 説明文抽出
- formatDate: 日付フォーマット

## Structure(構成)

- Function.StructuredData: 構造化データ
- Layout.Background: 背景
- Layout.Container: コンテナ
- Layout.Content: コンテンツ
- Layout.ContentHeader: コンテンツヘッダー
  - time: 公開日
  - Content.Heading h="h1" modifier="first": タイトル
- Layout.ContentBody: コンテンツ本文
  - Function.ConvertBody: 本文HTML変換
- Layout.ContentFooter: コンテンツフッター
- Layout.Breadcrumb: パンくず
- Content.CtaArea: CTAエリア

## Metadata(メタデータ)

- generateMetadata: 動的メタデータ生成
- title: タイトル | siteTitle
- description: extractText(content)
- canonical: /news/[id]
- OGP/Twitter設定

## Test(テスト)

- データ取得
- 記事表示

## Other(その他)

依存関係
- microCMS: ニュースAPI
- Function.StructuredData: 構造化データ
- Function.ConvertBody: HTML変換
- formatDate: 日付フォーマット
- Layout: Background, Container, Content, Breadcrumb
- Content: Heading, CtaArea

実装
- Server Component
- ISR: revalidate設定