# 実績一覧

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/app/case/page.tsx

## Settings(ページ設定)

- pageName: 実績
- pageSlug: case
- PER_PAGE: prePage.case (9件)

## Data(データ取得)

- getCaseAll(1, PER_PAGE): microCMS API
- getCaseCategory(): カテゴリー一覧
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
  - Content.ButtonCase: すべて、各カテゴリー
- Content.CardGroup: 実績カード一覧
  - Content.Card: id, eyecatch, title, category
- Layout.ContentFooter: コンテンツフッター
- Function.Pager: ページネーション
- Layout.Breadcrumb: パンくず
- Content.CtaArea: CTAエリア

## Metadata(メタデータ)

- title: 実績 | siteTitle
- description: 実績ページの説明
- canonical: /case
- OGP/Twitter設定

## Test(テスト)

- データ取得
- カテゴリー一覧表示
- 実績一覧表示
- ページネーション
- ブラー画像生成

## Other(その他)

依存関係
- microCMS: 実績API
- plaiceholder: 画像ブラー生成
- Function.StructuredData: 構造化データ
- Layout: Background, PageVisual, Container, Content, Breadcrumb
- Content: ButtonGroup, ButtonCase, CardGroup, Card, CtaArea
- Function.Pager: ページネーション

実装
- Server Component
- ISR: revalidate設定