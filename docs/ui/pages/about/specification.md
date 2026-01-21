# 会社情報ページ

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/app/about/page.tsx

## Settings(ページ設定)

- pageName: 会社情報
- pageSlug: about
- pageType: article
- robots: index: false

## Structure(構成)

- Function.StructuredData: 構造化データ
- Layout.Background: 背景
- Layout.PageVisual: ページビジュアル（english="ABOUT", japanese="会社情報", image="about"）
- PageAboutAndService.Container modifier="mission-and-vision": MISSION/VISIONセクション
  - Content.MediaAboutAndService: MISSION
  - Content.MediaAboutAndService modifier="reverse": VISION
- PageAboutAndService.Container modifier="massage": MESSAGEセクション
  - Content.MediaAboutAndService modifier="massage": MESSAGE
- PageAboutAndService.Container modifier="company": COMPANYセクション
  - Content.HeadingEng: COMPANY
  - Content.TableAbout: 企業情報テーブル
  - iframe: Google Maps埋め込み
- Layout.Breadcrumb: パンくず
- Content.CtaArea: CTAエリア

## Metadata(メタデータ)

- title: 会社情報 | siteTitle
- description: 会社情報ページの説明
- canonical: /about
- OGP/Twitter設定

## Test(テスト)

- 各セクション表示
- テーブル表示
- Google Maps表示

## Other(その他)

依存関係
- Function.StructuredData: 構造化データ
- Layout: Background, PageVisual, Container, Content, Breadcrumb
- Content: MediaAboutAndService, HeadingEng, Heading, TableAbout, CtaArea
- PageAboutAndService: Container

実装
- Server Component