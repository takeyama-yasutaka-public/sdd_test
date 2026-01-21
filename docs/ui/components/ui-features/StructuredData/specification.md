# StructuredData

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/function/StructuredData

## Props(プロパティ)

- type?: string
- name?: string
- description?: string
- imageUrl?: string | null
- path?: string
- breadcrumb?: { path: string, name: string }[]
- isHome?: boolean

## Features(機能)

JSON-LD生成
- type指定時: Article
- type未指定時: WebPage
- headline: name || siteMeta.siteTitle
- description: description || siteMeta.siteDesc
- image: imageUrl || siteMeta.siteImgSrc
- url: path ? `${siteMeta.siteUrl}${path}` : siteMeta.siteUrl

BreadcrumbList生成
- breadcrumb配列からitemListElement生成
- position: index + 1
- name: item.name
- item: `${siteMeta.siteUrl}${item.path}`
- isHome=false時のみ表示

## Behavior(動作)

- script要素でJSON-LD出力
- dangerouslySetInnerHTML使用

## Test(テスト)

- Article/WebPageのJSON-LD生成
- BreadcrumbListのJSON-LD生成
- isHome=true/false時の表示

## Other(その他)

依存関係
- schema-dts: 型定義
- siteMeta: サイトメタデータ

実装
- JSON-LD形式で構造化データ出力

参考
- docs/features/utils/constants/specification.md: サイトメタデータ