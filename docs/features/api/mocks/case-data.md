# Caseモックデータ

バージョン: v1.0.0
更新日: 2026-01-21

## MockData(モックデータ)

### 実績記事（10-20件）

各記事の構造
- id: string（一意のID）
- title: string（タイトル）
- content: string（本文HTML）
- date: string（ISO 8601形式）
- eyecatch?: { url, width, height }
- category: Array<{ id, name }>

### カテゴリー（3-5件）

各カテゴリーの構造
- id: string（一意のID）
- name: string（カテゴリー名）
- slug: string（スラッグ）

## DataFile(データファイル)

配置場所
- /src/mocks/data/case.ts

形式
- TypeScriptファイル
- 型定義を使用
- export const caseMockData: CasePost[]
- export const caseCategoryMockData: Category[]

## Usage(使用方法)

モック関数から使用
- getCasePostByIdMock: idで検索
- getCaseAllMock: ページネーション対応
- getCaseAllByCategoryMock: カテゴリー絞り込み

## Test(テスト)

- モックデータの構造確認
- 型定義との整合性確認
- モック関数での使用確認

## Other(その他)

依存関係
- 型定義: CasePost, Category

実装
- /src/mocks/data/case.tsの作成が必要

参考
- docs/plan/api_mocking_plan.md: モック化プラン
- docs/schemas/api/microcms/case-response.md: APIレスポンス構造