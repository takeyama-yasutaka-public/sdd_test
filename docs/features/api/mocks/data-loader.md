# モックデータ読み込み

バージョン: v1.0.0
更新日: 2026-01-21

## DataLoader(データ読み込み)

### 読み込み方法

TypeScriptファイルから直接インポート
```typescript
import { caseMockData } from '@/mocks/data/case'
import { newsMockData } from '@/mocks/data/news'
import { categoryMockData } from '@/mocks/data/category'
```

### データ形式

- TypeScriptファイル（.ts）
- 型定義を使用
- export constでエクスポート

## DataStructure(データ構造)

### ファイル配置

- /src/mocks/data/case.ts
- /src/mocks/data/news.ts
- /src/mocks/data/category.ts

### エクスポート形式

```typescript
export const caseMockData: CasePost[] = [...]
export const newsMockData: NewsPost[] = [...]
export const categoryMockData: Category[] = [...]
```

## Implementation(実装)

### データ読み込み

- モック関数から直接インポート
- 型安全性を保証
- ビルド時にバンドルに含まれる

### データ管理

- バージョン管理: Gitで管理
- データ更新: 必要に応じて更新

## Test(テスト)

- データ読み込みの確認
- 型定義との整合性確認

## Other(その他)

依存関係
- 型定義: CasePost, NewsPost, Category

実装
- /src/mocks/data/ディレクトリの作成が必要
- モックデータファイルの作成が必要

参考
- docs/plan/api_mocking_plan.md: モック化プラン
- docs/features/api/mocks/data-structure.md: モックデータ構造