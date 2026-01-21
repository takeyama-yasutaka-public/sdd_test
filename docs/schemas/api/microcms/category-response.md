# Category APIレスポンス構造

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/api.ts

## ResponseStructure(レスポンス構造)

### getCaseCategory（カテゴリー取得）

```typescript
Array<{
  id: string
  name: string
  slug: string
}>
```

## RequiredFields(必須項目)

- id: カテゴリーID
- name: カテゴリー名
- slug: カテゴリースラッグ

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