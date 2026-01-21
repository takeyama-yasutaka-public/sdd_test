# APIモック化プラン

バージョン: v1.0.0
更新日: 2026-01-21

## Overview(概要)

過去プロジェクトでAPI接続している部分をモック化して、フロントエンドのみで動作するようにする。

このプランは、SDD（仕様駆動開発）のワークフローに従い、AIが仕様書（specification.md）を作成するための指針である。

目的
- バックエンドAPIに依存せずにフロントエンド開発・テストを可能にする
- モックデータの仕様書作成
- モック実装の仕様書作成
- 環境変数によるAPI/モックの切り替え仕様
- 既存API関数の動作を維持したモック実装

方針
- 既存API関数のインターフェースを維持
- モックデータは既存APIレスポンスの構造を継承
- 環境変数でAPI/モックを切り替え可能
- モックデータはJSONファイルまたはTypeScriptファイルで管理

## CurrentState(現状分析)

### 現在のAPI接続状況

APIプロバイダー
- microCMS: ヘッドレスCMS
- エンドポイント: case, news, category

API関数（src/lib/api.ts）
- getCasePostById: 実績記事取得（ID指定）
- getCaseAll: 実績一覧取得（ページネーション対応）
- getCaseCategory: 実績カテゴリー取得
- getCaseAllByCategory: カテゴリー絞り込み一覧取得
- getNewsPostById: ニュース記事取得（ID指定）
- getNewsAll: ニュース一覧取得（ページネーション対応）

API使用箇所
- /app/page.tsx: getNewsAll
- /app/news/page.tsx: getNewsAll
- /app/news/[id]/page.tsx: getNewsPostById
- /app/case/page.tsx: getCaseAll, getCaseCategory
- /app/case/[id]/page.tsx: getCasePostById
- /app/case/category/[slug]/page.tsx: getCaseAllByCategory

### 現在のAPIレスポンス構造

microCMSレスポンス
- contents: 配列（一覧取得時）
- totalCount: 総件数
- limit: 取得件数
- offset: オフセット
- 各コンテンツ: id, title, content, date, eyecatch, category等

## Goal(目標)

### 技術目標

モック化
- 全てのAPI関数をモック化
- 既存API関数のインターフェースを維持
- モックデータで既存の動作を再現

環境切り替え
- 環境変数でAPI/モックを切り替え可能
- 開発環境: モック使用
- 本番環境: 実API使用

モックデータ管理
- JSONファイルまたはTypeScriptファイルで管理
- 型安全性を保証
- モックデータのバージョン管理

### 品質目標

動作の一貫性
- モックと実APIで同じインターフェース
- モックデータは実APIレスポンスの構造を継承
- 既存コードの変更を最小限に

型安全性
- モックデータも型定義を使用
- TypeScriptの型チェックを通過

## SpecificationCreationStrategy(仕様書作成戦略)

### アプローチ

既存APIから仕様書生成
- 既存API関数を読み、仕様書としてドキュメント化
- 既存APIレスポンス構造を分析し、モックデータ仕様書に反映
- モック実装の仕様書作成

段階的なモック化
- API関数ごとにモック化
- 既存コードの動作を維持しながらモック化
- 環境変数による切り替えを仕様書に記載

### 仕様書作成フェーズ

Phase 1: API仕様書作成
- 既存API関数の仕様書作成
- APIレスポンス構造の仕様書作成
- エラーレスポンスの仕様書作成

Phase 2: モックデータ仕様書作成
- モックデータ構造の仕様書作成
- モックデータファイルの仕様書作成
- モックデータの型定義仕様書作成

Phase 3: モック実装仕様書作成
- モック関数の仕様書作成
- 環境変数による切り替え仕様書作成
- モックデータ読み込み仕様書作成

Phase 4: 統合仕様書作成
- API/モック切り替えの仕様書作成
- テスト用モックデータの仕様書作成

## SpecificationCreationPlan(仕様書作成計画)

### Phase 1: API仕様書作成

API関数仕様書
- /docs/features/api/microcms/case/specification.md
- /docs/features/api/microcms/news/specification.md
- /docs/features/api/microcms/category/specification.md
- 各API関数の仕様、パラメータ、レスポンス構造を記載

APIレスポンス構造仕様書
- /docs/schemas/api/microcms/case-response.md
- /docs/schemas/api/microcms/news-response.md
- /docs/schemas/api/microcms/category-response.md
- レスポンスの型定義、必須項目、オプション項目を記載

エラーレスポンス仕様書
- /docs/schemas/api/microcms/error-response.md
- エラーレスポンスの構造を記載

### Phase 2: モックデータ仕様書作成

モックデータ構造仕様書
- /docs/features/api/mocks/data-structure.md
- モックデータの構造、必須項目、オプション項目を記載
- 実APIレスポンスとの対応関係を記載

モックデータファイル仕様書
- /docs/features/api/mocks/case-data.md
- /docs/features/api/mocks/news-data.md
- /docs/features/api/mocks/category-data.md
- 各モックデータファイルの内容、配置場所を記載

モックデータ型定義仕様書
- /docs/schemas/api/mocks/types.md
- モックデータの型定義を記載

### Phase 3: モック実装仕様書作成

モック関数仕様書
- /docs/features/api/mocks/case-mock.md
- /docs/features/api/mocks/news-mock.md
- /docs/features/api/mocks/category-mock.md
- 各モック関数の実装仕様を記載

環境変数切り替え仕様書
- /docs/features/api/mocks/environment-switch.md
- 環境変数によるAPI/モック切り替えの仕様を記載

モックデータ読み込み仕様書
- /docs/features/api/mocks/data-loader.md
- モックデータの読み込み方法を記載

### Phase 4: 統合仕様書作成

API/モック切り替え仕様書
- /docs/features/api/mocks/integration.md
- API関数とモック関数の統合方法を記載
- 環境変数による切り替えロジックを記載

テスト用モックデータ仕様書
- /docs/features/api/mocks/test-data.md
- テスト用のモックデータ仕様を記載

## MockDataSpecification(モックデータ仕様)

### モックデータ構造

基本構造
- 実APIレスポンスの構造を継承
- contents配列、totalCount、limit、offsetを含む
- 各コンテンツの必須項目を全て含む

データ量
- 一覧取得: 10-20件のモックデータ
- 詳細取得: 各IDに対応するモックデータ
- カテゴリー: 3-5件のモックデータ

### 仕様書への記載

モックデータ仕様書
- データ構造を型定義で記載
- 各フィールドの説明、型、必須/任意を記載
- 実APIレスポンスとの対応関係を記載
- モックデータの例を記載

## MockImplementationSpecification(モック実装仕様)

### モック関数の実装

関数インターフェース
- 既存API関数と同じインターフェース
- パラメータ、戻り値の型を一致させる
- 非同期処理を再現（Promise、async/await）

モックデータの返却
- モックデータファイルから読み込み
- パラメータに応じたデータを返却
- ページネーション、フィルタリングを再現

### 仕様書への記載

モック関数仕様書
- 関数シグネチャを記載
- パラメータ、戻り値の型を記載
- モックデータの読み込み方法を記載
- パラメータに応じたデータ返却ロジックを記載

## EnvironmentSwitchSpecification(環境切り替え仕様)

### 環境変数による切り替え

環境変数
- USE_MOCK_API: true/false
- または NODE_ENV: development/production

切り替えロジック
- 環境変数に応じてAPI関数/モック関数を切り替え
- 既存コードの変更を最小限に
- 型安全性を保証

### 仕様書への記載

環境切り替え仕様書
- 環境変数の定義を記載
- 切り替えロジックを記載
- 各環境での動作を記載

## MockDataFileSpecification(モックデータファイル仕様)

### ファイル配置

配置場所
- /src/mocks/data/: モックデータJSONファイル
- /src/mocks/types/: 型定義ファイル
- /src/mocks/functions/: モック関数ファイル

ファイル命名
- case-data.json: 実績データ
- news-data.json: ニュースデータ
- category-data.json: カテゴリーデータ

### 仕様書への記載

モックデータファイル仕様書
- ファイル配置場所を記載
- ファイル命名規則を記載
- ファイル構造を記載

## TypeDefinitionSpecification(型定義仕様)

### 型定義の作成

モックデータ型
- 実APIレスポンスの型を継承
- モックデータ専用の型定義も作成可能
- TypeScriptの型安全性を保証

### 仕様書への記載

型定義仕様書
- モックデータの型定義を記載
- 実APIレスポンス型との関係を記載
- 型の使用方法を記載

## SpecificationWritingRules(仕様書記述ルール)

### 基本ルール

簡潔に
- 実装コードより短く
- 箇条書き中心
- 冗長な説明を避ける

具体的に
- 曖昧な表現禁止
- データ構造を型定義で明示
- 全てのパターンを記載

実用的に
- AIが実装可能な記述
- 人間が理解可能な記述

### データ構造の記載

型定義
- TypeScriptの型定義を使用
- 必須項目、オプション項目を明記
- ネストされた構造も全て記載

データ例
- 実際のモックデータの例を記載
- 複数のパターンを示す

## SpecificationQualityCriteria(仕様書品質基準)

### 完全性

必須項目
- API関数の仕様
- モックデータ構造
- モック実装方法
- 環境切り替え方法

既存機能の網羅
- 既存API関数の全てをモック化
- 既存APIレスポンス構造を全て反映
- 既存の動作を全て再現

### 正確性

データ構造の正確性
- 実APIレスポンス構造を正確に反映
- 型定義を正確に記載
- 必須項目、オプション項目を正確に記載

実装の正確性
- モック関数のインターフェースを正確に記載
- 環境切り替えロジックを正確に記載

### 実用性

AIが実装可能
- 具体的な実装方法が記載されている
- 曖昧な表現を使用しない
- モックデータの例が記載されている

人間が理解可能
- 簡潔で読みやすい記述
- データ構造が理解できる記述

## SpecificationCreationOrder(仕様書作成順序)

### 第1段階: API仕様書

1. API関数仕様書（case, news, category）
2. APIレスポンス構造仕様書
3. エラーレスポンス仕様書

### 第2段階: モックデータ仕様書

1. モックデータ構造仕様書
2. モックデータファイル仕様書（case, news, category）
3. モックデータ型定義仕様書

### 第3段階: モック実装仕様書

1. モック関数仕様書（case, news, category）
2. 環境変数切り替え仕様書
3. モックデータ読み込み仕様書

### 第4段階: 統合仕様書

1. API/モック切り替え仕様書
2. テスト用モックデータ仕様書

## NextSteps(次のステップ)

1. このプランを基に、Phase 1のAPI仕様書作成を開始
2. 既存API関数を読み込み、仕様書を生成
3. Phase 2以降のモックデータ・実装仕様書作成に進む

## References(参考資料)

仕様書作成時の参照
- 仕様書記述ルール: docs/.example/sdd/specification-example.md
- ディレクトリ構造: docs/.example/sdd/directory-example.md
- ワークフロー: docs/.example/sdd/workflow.md

既存コードの参照
- API関数: src/lib/api.ts
- API使用箇所: src/app/**/*.tsx
- 型定義: 既存の型定義（あれば）

技術資料
- microCMS公式ドキュメント
- Next.js API Routes
- TypeScript型定義