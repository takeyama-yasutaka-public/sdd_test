# News APIレスポンス構造

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/api.ts

## ResponseStructure(レスポンス構造)

### getNewsPostById（単一記事取得）

```typescript
{
  id: string
  title: string
  content: string
  date: string
}
```

### getNewsAll（一覧取得）

```typescript
{
  contents: Array<{
    id: string
    title: string
    content: string
    date: string
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

## OptionalFields(オプション項目)

- なし

## Other(その他)

依存関係
- microCMS: APIプロバイダー

実装
- 型定義の作成が必要

参考
- docs/plan/api_mocking_plan.md: モック化プラン
- docs/schemas/types/specification.md: 型定義