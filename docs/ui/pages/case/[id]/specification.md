# 実績詳細ページ

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/app/case/[id]/page.tsx

## Settings(ページ設定)

- pageSlug: case/[id]
- pageType: article
- generateStaticParams: getCaseAll()で全記事ID取得
- dynamicParams: false

## Data(データ取得)

- getCasePostById(id): microCMS API
- 代替アイキャッチ画像への置換
- plaiceholder: ブラー画像生成
- extractText: 説明文抽出

## Structure(構成)

- Function.StructuredData: 構造化データ
- Layout.Background: 背景
- Layout.Container: コンテナ
- Layout.Content: コンテンツ
- Layout.ContentHeader: コンテンツヘッダー
  - Content.ClassLabelGroup: カテゴリーラベル
  - Content.Heading h="h1" modifier="first": タイトル
  - Content.HeadingJpn: サブタイトル
  - time: 公開日
- Layout.ContentBody: コンテンツ本文
  - Image: アイキャッチ画像
  - Function.ConvertBody: 本文HTML変換
- Layout.ContentFooter: コンテンツフッター
- Layout.Breadcrumb: パンくず
- Content.CtaArea: CTAエリア

## Metadata(メタデータ)

- generateMetadata: 動的メタデータ生成
- title: タイトル | siteTitle
- description: extractText(content)
- canonical: /case/[id]
- OGP/Twitter設定

## Test(テスト)

- データ取得
- 記事表示
- ブラー画像生成

## Other(その他)

依存関係
- microCMS: 実績API
- plaiceholder: 画像ブラー生成
- Function.StructuredData: 構造化データ
- Function.ConvertBody: HTML変換
- Layout: Background, Container, Content, Breadcrumb
- Content: ClassLabelGroup, Heading, HeadingJpn, CtaArea

実装
- Server Component
- ISR: revalidate設定