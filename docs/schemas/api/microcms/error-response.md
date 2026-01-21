# Error APIレスポンス構造

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/api.ts

## ErrorResponseStructure(エラーレスポンス構造)

### microCMS APIエラー

```typescript
{
  message: string
  status: number
  errors?: Array<{
    field: string
    message: string
  }>
}
```

### ネットワークエラー

```typescript
{
  message: string
  type: 'NETWORK_ERROR'
  originalError?: Error
}
```

### タイムアウトエラー

```typescript
{
  message: string
  type: 'TIMEOUT_ERROR'
  timeout: number
}
```

## ErrorCodes(エラーコード)

- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error
- 503: Service Unavailable

## ErrorHandling(エラーハンドリング)

### 既存のエラーハンドリング

- try-catchでエラーを捕捉
- console.logでエラー出力
- エラー時はundefinedを返却

### 改善後のエラーハンドリング

- 統一エラーレスポンスを返却
- エラータイプを判定
- エラーロギングを実行

## Other(その他)

依存関係
- microCMS: APIプロバイダー

実装
- エラーハンドリングの改善が必要

参考
- docs/plan/api_mocking_plan.md: モック化プラン
- docs/features/error-handling/specification.md: エラーハンドリング