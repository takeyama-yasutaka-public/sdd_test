/**
 * error-handling
 * 仕様書: docs/features/error-handling/specification.md
 */

// エラータイプ定義
export type ApiError = {
  type: 'API_ERROR'
  message: string
  statusCode?: number
  endpoint?: string
}

export type NetworkError = {
  type: 'NETWORK_ERROR'
  message: string
  originalError?: Error
}

export type ValidationError = {
  type: 'VALIDATION_ERROR'
  message: string
  field?: string
}

export type FormError = {
  type: 'FORM_ERROR'
  message: string
  field?: string
  errors?: { [key: string]: string }
}

// 統一エラーレスポンス
export type ErrorResponse = {
  success: false
  error: {
    type: string
    message: string
    code?: string
    details?: unknown
  }
}

// 成功レスポンス
export type SuccessResponse<T> = {
  success: true
  data: T
}

/**
 * APIエラー生成
 */
export function createApiError(
  message: string,
  statusCode?: number,
  endpoint?: string
): ApiError {
  return {
    type: 'API_ERROR',
    message,
    statusCode,
    endpoint,
  }
}

/**
 * ネットワークエラー生成
 */
export function createNetworkError(message: string, originalError?: Error): NetworkError {
  return {
    type: 'NETWORK_ERROR',
    message,
    originalError,
  }
}

/**
 * バリデーションエラー生成
 */
export function createValidationError(message: string, field?: string): ValidationError {
  return {
    type: 'VALIDATION_ERROR',
    message,
    field,
  }
}

/**
 * エラーハンドリング
 */
export function handleApiError(error: unknown): ErrorResponse {
  // エラーロギング（開発環境）
  if (process.env.NODE_ENV === 'development') {
    console.error('API Error:', error)
  }

  // エラータイプ判定
  if (error instanceof Error) {
    return {
      success: false,
      error: {
        type: 'NETWORK_ERROR',
        message: error.message,
        details: error,
      },
    }
  }

  return {
    success: false,
    error: {
      type: 'API_ERROR',
      message: 'エラーが発生しました',
    },
  }
}
