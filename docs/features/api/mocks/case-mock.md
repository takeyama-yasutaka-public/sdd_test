# Caseモック実装

バージョン: v1.0.0
更新日: 2026-01-21

## MockFunctions(モック関数)

### getCasePostByIdMock

- articleId: string
- draftKey?: string
- 戻り値: CasePost | undefined
- 実装: caseMockDataからidで検索

### getCaseAllMock

- id: number = 1
- PER_PAGE: number = 100
- 戻り値: { contents: CasePost[], totalCount: number, limit: number, offset: number }
- 実装: caseMockDataからページネーション対応で取得

### getCaseCategoryMock

- limit: number = 100
- 戻り値: Category[]
- 実装: categoryMockDataを返却

### getCaseAllByCategoryMock

- catId: number
- id: number = 1
- PER_PAGE: number = 100
- 戻り値: { contents: CasePost[], totalCount: number, limit: number, offset: number }
- 実装: caseMockDataからcatIdで絞り込み、ページネーション対応で取得

## Implementation(実装)

### 関数の実装

- /src/mocks/api/case.ts
- 既存API関数と同じインターフェース
- モックデータを使用

### ページネーション

- offset: (id - 1) * PER_PAGE
- limit: PER_PAGE
- totalCount: フィルター後の総件数

### カテゴリー絞り込み

- category配列にcatIdが含まれる記事を抽出
- フィルター後にページネーション

## Test(テスト)

- モック関数の動作確認
- ページネーションの動作確認
- カテゴリー絞り込みの動作確認

## Other(その他)

依存関係
- モックデータ: caseMockData, categoryMockData
- 型定義: CasePost, Category

実装
- /src/mocks/api/case.tsの作成が必要

参考
- docs/plan/api_mocking_plan.md: モック化プラン
- docs/features/api/mocks/case-data.md: モックデータ