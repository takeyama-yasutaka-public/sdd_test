# API/モック切り替え

バージョン: v1.0.0
更新日: 2026-01-21

## IntegrationStrategy(統合戦略)

### 既存API関数の維持

- 既存API関数のインターフェースを維持
- 環境変数でAPI/モックを切り替え
- 既存コードの変更を最小限に

### 切り替え実装

```typescript
const useMock = process.env.USE_MOCK_API === 'true'

export const getCasePostById = useMock 
  ? getCasePostByIdMock 
  : getCasePostByIdReal

export const getCaseAll = useMock 
  ? getCaseAllMock 
  : getCaseAllReal
```

## FunctionMapping(関数マッピング)

### Case API

- getCasePostById: getCasePostByIdMock / getCasePostByIdReal
- getCaseAll: getCaseAllMock / getCaseAllReal
- getCaseCategory: getCaseCategoryMock / getCaseCategoryReal
- getCaseAllByCategory: getCaseAllByCategoryMock / getCaseAllByCategoryReal

### News API

- getNewsPostById: getNewsPostByIdMock / getNewsPostByIdReal
- getNewsAll: getNewsAllMock / getNewsAllReal

## Implementation(実装)

### ファイル構造

- /src/lib/api.ts: 切り替えロジック
- /src/mocks/api/: モック関数
- /src/lib/api-real.ts: 実API関数（既存）

### 切り替えロジック

- 環境変数USE_MOCK_APIで判定
- 条件分岐で関数を切り替え
- 既存コードの変更を最小限に

## Test(テスト)

- 環境変数による切り替え確認
- モックAPIの動作確認
- 実APIの動作確認
- 既存コードの動作確認

## Other(その他)

依存関係
- 環境変数: USE_MOCK_API
- モック関数: /src/mocks/api/
- 実API関数: /src/lib/api-real.ts

実装
- 切り替えロジックの実装が必要
- 既存API関数のリネームが必要

参考
- docs/plan/api_mocking_plan.md: モック化プラン
- docs/features/api/mocks/environment-switch.md: 環境変数切り替え