# モックデータ構造

バージョン: v1.0.0
更新日: 2026-01-21

## MockDataStructure(モックデータ構造)

### 基本構造

実APIレスポンスの構造を継承
- contents配列、totalCount、limit、offsetを含む
- 各コンテンツの必須項目を全て含む

### データ量

- 一覧取得: 10-20件のモックデータ
- 詳細取得: 各IDに対応するモックデータ
- カテゴリー: 3-5件のモックデータ

## CaseMockData(実績モックデータ)

### getCasePostById用

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

### getCaseAll用

```typescript
{
  contents: Array<CasePost>
  totalCount: number
  limit: number
  offset: number
}
```

### getCaseAllByCategory用

```typescript
{
  contents: Array<CasePost>
  totalCount: number
  limit: number
  offset: number
}
```

## NewsMockData(ニュースモックデータ)

### getNewsPostById用

```typescript
{
  id: string
  title: string
  content: string
  date: string
}
```

### getNewsAll用

```typescript
{
  contents: Array<NewsPost>
  totalCount: number
  limit: number
  offset: number
}
```

## CategoryMockData(カテゴリーモックデータ)

### getCaseCategory用

```typescript
Array<{
  id: string
  name: string
  slug: string
}>
```

## DataFileLocation(データファイル配置)

- /src/mocks/data/case.ts: 実績モックデータ
- /src/mocks/data/news.ts: ニュースモックデータ
- /src/mocks/data/category.ts: カテゴリーモックデータ

## Implementation(実装)

### モックデータの形式

- TypeScriptファイル（.ts）で管理
- 型定義を使用
- エクスポート可能な形式

### モックデータの内容

- 実APIレスポンスの構造を継承
- 必須項目を全て含む
- オプション項目も含む（可能な限り）

## Test(テスト)

- モックデータの構造確認
- 型定義との整合性確認

## Other(その他)

依存関係
- 型定義: CasePost, NewsPost, Category

実装
- /src/mocks/data/ディレクトリの作成が必要
- モックデータファイルの作成が必要

参考
- docs/plan/api_mocking_plan.md: モック化プラン
- docs/schemas/api/microcms/: APIレスポンス構造