# テスト用モックデータ

バージョン: v1.0.0
更新日: 2026-01-21

## TestMockData(テスト用モックデータ)

### テスト用データの特徴

- 最小限のデータセット
- エッジケースを含む
- バリデーションテスト用

### データセット

最小データ
- 必須項目のみ
- オプション項目なし

最大データ
- 全ての項目を含む
- オプション項目も含む

エッジケース
- 空文字列
- 長い文字列
- 特殊文字

## TestDataStructure(テストデータ構造)

### Caseテストデータ

- 最小データ: 必須項目のみ
- 最大データ: 全項目を含む
- エッジケース: 空文字列、長い文字列等

### Newsテストデータ

- 最小データ: 必須項目のみ
- 最大データ: 全項目を含む
- エッジケース: 空文字列、長い文字列等

## Implementation(実装)

### テストデータファイル

- /src/mocks/data/test-case.ts
- /src/mocks/data/test-news.ts
- /src/mocks/data/test-category.ts

### テストでの使用

- ユニットテスト: テストデータを使用
- 統合テスト: テストデータを使用

## Test(テスト)

- テストデータの構造確認
- テストでの使用確認

## Other(その他)

依存関係
- 型定義: CasePost, NewsPost, Category

実装
- テストデータファイルの作成が必要

参考
- docs/plan/api_mocking_plan.md: モック化プラン
- docs/features/api/mocks/data-structure.md: モックデータ構造