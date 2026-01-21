# Categoryモック実装

バージョン: v1.0.0
更新日: 2026-01-21

## MockFunctions(モック関数)

### getCaseCategoryMock

- limit: number = 100
- 戻り値: Category[]
- 実装: categoryMockDataを返却

## Implementation(実装)

### 関数の実装

- /src/mocks/api/category.ts
- 既存API関数と同じインターフェース
- モックデータを使用

## Test(テスト)

- モック関数の動作確認

## Other(その他)

依存関係
- モックデータ: categoryMockData
- 型定義: Category

実装
- /src/mocks/api/category.tsの作成が必要

参考
- docs/plan/api_mocking_plan.md: モック化プラン
- docs/features/api/mocks/category-data.md: モックデータ