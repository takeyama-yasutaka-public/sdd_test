# Case APIレスポンス構造

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/api.ts

## ResponseStructure(レスポンス構造)

### getCasePostById（単一記事取得）

```typescript
{
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

### getCaseAll（一覧取得）

```typescript
{
  contents: Array<{
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
  }>
  totalCount: number
  limit: number
  offset: number
}
```

### getCaseCategory（カテゴリー取得）

```typescript
Array<{
  id: string
  name: string
  slug: string
}>
```

### getCaseAllByCategory（カテゴリー絞り込み一覧取得）

```typescript
{
  contents: Array<{
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
  }>
  totalCount: number
  limit: number
  offset: number
}
```

## RequiredFields(必須項目)

- id: 記事ID
- title: タイトル
- content: 本文
- date: 公開日（ISO 8601形式）
- category: カテゴリー配列

## OptionalFields(オプション項目)

- eyecatch: アイキャッチ画像
- eyecatch.url: 画像URL
- eyecatch.width: 画像幅
- eyecatch.height: 画像高さ

## Other(その他)

依存関係
- microCMS: APIプロバイダー

実装
- 型定義の作成が必要

参考
- docs/plan/api_mocking_plan.md: モック化プラン
- docs/schemas/types/specification.md: 型定義