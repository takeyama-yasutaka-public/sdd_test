# Categoryモックデータ

バージョン: v1.0.0
更新日: 2026-01-21

## MockData(モックデータ)

### カテゴリー（3-5件）

各カテゴリーの構造
- id: string（一意のID）
- name: string（カテゴリー名）
- slug: string（スラッグ）

## DataFile(データファイル)

配置場所
- /src/mocks/data/category.ts

形式
- TypeScriptファイル
- 型定義を使用
- export const categoryMockData: Category[]

## Usage(使用方法)

モック関数から使用
- getCaseCategoryMock: カテゴリー一覧取得

## Test(テスト)

- モックデータの構造確認
- 型定義との整合性確認
- モック関数での使用確認

## Other(その他)

依存関係
- 型定義: Category

実装
- /src/mocks/data/category.tsの作成が必要

参考
- docs/plan/api_mocking_plan.md: モック化プラン
- docs/schemas/api/microcms/category-response.md: APIレスポンス構造