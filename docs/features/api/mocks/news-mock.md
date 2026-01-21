# Newsモック実装

バージョン: v1.0.0
更新日: 2026-01-21

## MockFunctions(モック関数)

### getNewsPostByIdMock

- articleId: string
- draftKey?: string
- 戻り値: NewsPost | undefined
- 実装: newsMockDataからidで検索

### getNewsAllMock

- id: number = 1
- PER_PAGE: number = 100
- 戻り値: { contents: NewsPost[], totalCount: number, limit: number, offset: number }
- 実装: newsMockDataからページネーション対応で取得

## Implementation(実装)

### 関数の実装

- /src/mocks/api/news.ts
- 既存API関数と同じインターフェース
- モックデータを使用

### ページネーション

- offset: (id - 1) * PER_PAGE
- limit: PER_PAGE
- totalCount: 総件数

## Test(テスト)

- モック関数の動作確認
- ページネーションの動作確認

## Other(その他)

依存関係
- モックデータ: newsMockData
- 型定義: NewsPost

実装
- /src/mocks/api/news.tsの作成が必要

参考
- docs/plan/api_mocking_plan.md: モック化プラン
- docs/features/api/mocks/news-data.md: モックデータ