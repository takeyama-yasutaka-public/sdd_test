# microCMS API

バージョン: v1.0.0（過去PJ）
作成日: 2026-01-22
既存: src/lib/api.ts

## Functions(関数)

### client
- createClient({serviceDomain, apiKey})
- 環境変数: SERVICE_DOMAIN, API_KEY

### getCasePostById
- 実績記事取得（ID指定）
- パラメータ: articleId: string, draftKey?: string
- endpoint: 'case'
- contentId: articleId
- queries: { draftKey }
- 戻り値: 実績記事オブジェクト | undefined

### getCaseAll
- 実績一覧取得（ページネーション対応）
- パラメータ: id: number = 1, PER_PAGE: number = 100
- endpoint: 'case'
- queries: { orders: '-date', offset: (id-1)*PER_PAGE, limit: PER_PAGE }
- 戻り値: { contents: [], totalCount: number } | undefined

### getCaseCategory
- 実績カテゴリー取得
- パラメータ: limit: number = 100
- endpoint: 'category'
- queries: { limit }
- 戻り値: categories.contents | undefined

### getCaseAllByCategory
- カテゴリー絞り込み一覧取得
- パラメータ: catId: number, id: number = 1, PER_PAGE: number = 100
- endpoint: 'case'
- queries: { filters: `category[contains]${catId}`, orders: '-date', offset, limit }
- 戻り値: { contents: [], totalCount: number } | undefined

### getNewsPostById
- ニュース記事取得（ID指定）
- パラメータ: articleId: string, draftKey?: string
- endpoint: 'news'
- contentId: articleId
- queries: { draftKey }
- 戻り値: ニュース記事オブジェクト | undefined

### getNewsAll
- ニュース一覧取得（ページネーション対応）
- パラメータ: id: number = 1, PER_PAGE: number = 100
- endpoint: 'news'
- queries: { orders: '-date', offset: (id-1)*PER_PAGE, limit: PER_PAGE }
- 戻り値: { contents: [], totalCount: number } | undefined

## ErrorHandling(エラーハンドリング)

- try-catchでエラー捕捉
- console.log(err)でエラー出力
- エラー時はundefined返却

## Dependencies(依存関係)

- microcms-js-sdk: createClient
- 環境変数: SERVICE_DOMAIN, API_KEY
