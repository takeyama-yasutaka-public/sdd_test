# 環境変数切り替え

バージョン: v1.0.0
更新日: 2026-01-21

## EnvironmentVariables(環境変数)

### USE_MOCK_API

- 型: string
- 値: 'true' | 'false' | undefined
- デフォルト: undefined（本番環境ではfalse相当）
- 説明: API/モックの切り替えフラグ

## SwitchLogic(切り替えロジック)

### 判定方法

```typescript
const useMock = process.env.USE_MOCK_API === 'true'
```

### 切り替え実装

```typescript
export const getCasePostById = useMock 
  ? getCasePostByIdMock 
  : getCasePostByIdReal
```

## EnvironmentSettings(環境設定)

### 開発環境

- USE_MOCK_API: 'true'
- モックAPIを使用

### 本番環境

- USE_MOCK_API: undefined または 'false'
- 実APIを使用

## Implementation(実装)

### 環境変数の設定

- .env.local: USE_MOCK_API=true
- .env.production: USE_MOCK_API=false（または未設定）

### 切り替え関数

- /src/lib/api.ts
- 環境変数でAPI関数/モック関数を切り替え
- 既存コードの変更を最小限に

## Test(テスト)

- 環境変数による切り替え確認
- モックAPIの動作確認
- 実APIの動作確認

## Other(その他)

依存関係
- 環境変数: USE_MOCK_API

実装
- 環境変数の設定が必要
- 切り替えロジックの実装が必要

参考
- docs/plan/api_mocking_plan.md: モック化プラン
- docs/env.example/specification.md: 環境変数仕様