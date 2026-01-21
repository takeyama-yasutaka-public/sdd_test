# 環境変数

バージョン: v1.0.0
更新日: 2026-01-21

## EnvironmentVariables(環境変数)

SERVICE_DOMAIN
- 型: string
- 必須: true
- 説明: microCMSサービスドメイン

API_KEY
- 型: string
- 必須: true
- 説明: microCMS APIキー

USE_MOCK_API
- 型: boolean
- 必須: false
- デフォルト: false
- 説明: モックAPIを使用するか（開発環境用）

NODE_ENV
- 型: 'development' | 'production'
- 必須: false
- デフォルト: development
- 説明: 実行環境

## Other(その他)

実装
- .env.localファイルに定義
- Next.jsの環境変数として読み込み

参考
- docs/plan/api_mocking_plan.md: モック化プラン