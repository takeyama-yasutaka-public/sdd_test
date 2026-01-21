# Newsモックデータ

バージョン: v1.0.0
更新日: 2026-01-21

## MockData(モックデータ)

### ニュース記事（10-20件）

各記事の構造
- id: string（一意のID）
- title: string（タイトル）
- content: string（本文HTML）
- date: string（ISO 8601形式）

## DataFile(データファイル)

配置場所
- /src/mocks/data/news.ts

形式
- TypeScriptファイル
- 型定義を使用
- export const newsMockData: NewsPost[]

## Usage(使用方法)

モック関数から使用
- getNewsPostByIdMock: idで検索
- getNewsAllMock: ページネーション対応

## Test(テスト)

- モックデータの構造確認
- 型定義との整合性確認
- モック関数での使用確認

## Other(その他)

依存関係
- 型定義: NewsPost

実装
- /src/mocks/data/news.tsの作成が必要

参考
- docs/plan/api_mocking_plan.md: モック化プラン
- docs/schemas/api/microcms/news-response.md: APIレスポンス構造