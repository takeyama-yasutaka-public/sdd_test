# モックデータ型定義

バージョン: v1.0.0
更新日: 2026-01-21

## MockDataTypes(モックデータ型定義)

### CasePost型

```typescript
type CasePost = {
  id: string
  title: string
  content: string
  date: string
  eyecatch?: {
    url: string
    width: number
    height: number
  }
  category: Array<{
    id: string
    name: string
  }>
}
```

### NewsPost型

```typescript
type NewsPost = {
  id: string
  title: string
  content: string
  date: string
}
```

### Category型

```typescript
type Category = {
  id: string
  name: string
  slug: string
}
```

### ApiResponse型

```typescript
type ApiResponse<T> = {
  contents?: T[]
  totalCount?: number
  limit?: number
  offset?: number
}
```

## TypeUsage(型の使用)

### モックデータ

- caseMockData: CasePost[]
- newsMockData: NewsPost[]
- categoryMockData: Category[]

### モック関数

- getCasePostByIdMock: (articleId: string, draftKey?: string) => Promise<CasePost | undefined>
- getCaseAllMock: (id: number, PER_PAGE: number) => Promise<ApiResponse<CasePost>>
- getCaseCategoryMock: (limit: number) => Promise<Category[]>
- getCaseAllByCategoryMock: (catId: number, id: number, PER_PAGE: number) => Promise<ApiResponse<CasePost>>
- getNewsPostByIdMock: (articleId: string, draftKey?: string) => Promise<NewsPost | undefined>
- getNewsAllMock: (id: number, PER_PAGE: number) => Promise<ApiResponse<NewsPost>>

## Implementation(実装)

### 型定義ファイル

- /src/types/api.ts
- モックデータと実APIで共通の型定義を使用

### 型の継承

- 実APIレスポンスの型定義を継承
- モックデータも同じ型定義を使用

## Test(テスト)

- 型定義の正確性確認
- モックデータと型定義の整合性確認

## Other(その他)

依存関係
- 型定義: CasePost, NewsPost, Category, ApiResponse

実装
- /src/types/api.tsの作成が必要
- 型定義の集約が必要

参考
- docs/plan/api_mocking_plan.md: モック化プラン
- docs/schemas/types/specification.md: 型定義仕様
- docs/schemas/api/microcms/: APIレスポンス構造