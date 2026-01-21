# 実績カテゴリー一覧ページ

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/app/case/category/[slug]/page.tsx

## Settings(ページ設定)

- pageSlug: case/category/[slug]
- pageType: article
- generateStaticParams: getCaseCategory()で全カテゴリースラッグ取得
- dynamicParams: false

## Data(データ取得)

- getCaseCategory(): カテゴリー一覧取得
- getCaseAllByCategory(cat.id, 1, PER_PAGE): カテゴリー絞り込み一覧取得
- 代替アイキャッチ画像への置換
- plaiceholder: ブラー画像生成

## Structure(構成)

- Function.StructuredData: 構造化データ
- Layout.Background: 背景
- Layout.PageVisual: ページビジュアル（english="CASE", japanese="実績", image="case"）
- Layout.Container: コンテナ
- Layout.Content: コンテンツ
- Layout.ContentBody: コンテンツ本文
  - Content.ButtonGroup type="case": カテゴリーフィルター
    - Content.ButtonCase: すべて、各カテゴリー（current判定）
  - Content.CardGroup: 実績カード一覧
- Layout.ContentFooter: コンテンツフッター
  - Function.Pager: ページネーション
- Layout.Breadcrumb: パンくず
- Content.CtaArea: CTAエリア

## Metadata(メタデータ)

- generateMetadata: 動的メタデータ生成
- title: カテゴリー名 | siteTitle
- description: 実績ページの説明
- canonical: /case/category/[slug]
- OGP/Twitter設定

## Test(テスト)

- データ取得
- カテゴリー絞り込み表示
- ページネーション

## Other(その他)

依存関係
- microCMS: 実績API
- plaiceholder: 画像ブラー生成
- Function.StructuredData: 構造化データ
- Function.Pager: ページネーション
- Layout: Background, PageVisual, Container, Content, Breadcrumb
- Content: ButtonGroup, ButtonCase, CardGroup, Card, CtaArea

実装
- Server Component
- ISR: revalidate設定