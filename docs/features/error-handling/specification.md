# エラーハンドリング

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/api.ts, src/app/api/contact-handler/route.ts

## CurrentState(現状)

### 既存のエラーハンドリング

API関数（src/lib/api.ts）
- try-catchでエラーを捕捉
- console.logでエラー出力
- エラー時はundefinedを返却
- エラーレスポンスの統一なし

API Route（src/app/api/contact-handler/route.ts）
- try-catchでエラーを捕捉
- エラー時: NextResponse.json({ message: '失敗しました' })
- 成功時: NextResponse.json({ message: '成功しました' })

## ErrorTypes(エラータイプ)

### APIエラー

ApiError
- type: 'API_ERROR'
- message: string
- statusCode?: number
- endpoint?: string

NetworkError
- type: 'NETWORK_ERROR'
- message: string
- originalError?: Error

ValidationError
- type: 'VALIDATION_ERROR'
- message: string
- field?: string

### フォームエラー

FormError
- type: 'FORM_ERROR'
- message: string
- field?: string
- errors?: { [key: string]: string }

## ErrorResponse(エラーレスポンス形式)

### 統一エラーレスポンス

```typescript
{
  success: false
  error: {
    type: string
    message: string
    code?: string
    details?: any
  }
}
```

### 成功レスポンス

```typescript
{
  success: true
  data: any
}
```

## ErrorHandlingPatterns(エラーハンドリングパターン)

### API関数

try-catchパターン
- try: API呼び出し
- catch: エラータイプを判定、統一エラーレスポンスを返却
- エラーロギング: 開発環境ではconsole.error、本番環境ではログサービス

### フォーム送信

try-catchパターン
- try: フォーム送信
- catch: エラーメッセージを表示、ユーザーフレンドリーなメッセージ

### ページコンポーネント

エラー境界
- error.tsx: Next.js App Routerのエラー境界
- not-found.tsx: 404エラー

## ErrorLogging(エラーロギング)

### 開発環境

- console.error: エラー詳細を出力
- スタックトレース: エラー発生箇所を特定

### 本番環境

- ログサービス: エラーを記録（将来実装）
- ユーザー向けメッセージ: エラー詳細を非表示

## Implementation(実装)

### エラーハンドリング関数

createApiError
- type, message, statusCode, endpointを受け取り、ApiErrorを生成

createNetworkError
- message, originalErrorを受け取り、NetworkErrorを生成

createValidationError
- message, fieldを受け取り、ValidationErrorを生成

handleApiError
- エラーを受け取り、統一エラーレスポンスを返却
- エラーロギングを実行

## Test(テスト)

- API関数のエラーハンドリング
- フォーム送信のエラーハンドリング
- エラーロギング
- エラーメッセージの表示

## Other(その他)

依存関係
- なし（標準機能）

実装
- 統一エラーレスポンスの実装が必要
- エラーロギングの改善が必要

参考
- docs/plan/frontend_architecture_upgrade_plan.md: アーキテクチャアップグレードプラン