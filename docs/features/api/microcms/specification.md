# microCMS API

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/api.ts

## Functions(関数)

getCasePostById
- 実績記事取得（ID指定）
- articleId: string
- draftKey?: string
- 戻り値: 実績記事オブジェクト

getCaseAll
- 実績一覧取得（ページネーション対応）
- id: number (デフォルト: 1)
- PER_PAGE: number (デフォルト: 100)
- 戻り値: { contents: [], totalCount: number }

getCaseCategory
- 実績カテゴリー取得
- limit: number (デフォルト: 100)
- 戻り値: カテゴリー配列

getCaseAllByCategory
- カテゴリー絞り込み一覧取得
- catId: number
- id: number (デフォルト: 1)
- PER_PAGE: number (デフォルト: 100)
- 戻り値: { contents: [], totalCount: number }

getNewsPostById
- ニュース記事取得（ID指定）
- articleId: string
- draftKey?: string
- 戻り値: ニュース記事オブジェクト

getNewsAll
- ニュース一覧取得（ページネーション対応）
- id: number (デフォルト: 1)
- PER_PAGE: number (デフォルト: 100)
- 戻り値: { contents: [], totalCount: number }

## ErrorHandling(エラーハンドリング)

- try-catchでエラーを捕捉
- console.logでエラー出力
- エラー時はundefinedを返却

## Other(その他)

依存関係
- microcms-js-sdk: microCMS APIクライアント

環境変数
- SERVICE_DOMAIN: microCMSサービスドメイン
- API_KEY: microCMS APIキー

実装
- エラーハンドリングの改善が必要
- 統一されたエラーレスポンスの実装

参考
- docs/plan/api_mocking_plan.md: モック化プラン