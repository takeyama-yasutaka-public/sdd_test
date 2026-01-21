# フロントエンドアーキテクチャバージョンアップ&リファクタリングプラン

バージョン: v1.0.0
更新日: 2026-01-21

## Overview(概要)

過去プロジェクトの設計を2026年1月現在のベストプラクティスに作り替える。

このプランは、SDD（仕様駆動開発）のワークフローに従い、AIが仕様書（specification.md）を作成するための指針である。

目的
- Next.js最新化（15.x系へのアップグレード）
- Tailwind CSS導入（design_upgrade_plan.mdと連携）
- パッケージの再考・最新化
- 関数のパッケージ化（再利用可能なライブラリとして分離）
- アーキテクチャのモダン化
- パフォーマンス最適化
- 型安全性の向上

方針
- 既存コードを仕様書としてドキュメント化
- 2026/1のベストプラクティスに基づいた仕様書作成
- 段階的な移行を前提とした仕様書作成
- 既存機能の後退を防ぐ仕様書作成

## CurrentState(現状分析)

### 現在の技術スタック

フレームワーク
- Next.js: 14.2.4
- React: 18.x
- TypeScript: 5.x

スタイリング
- SCSS Modules
- カスタムSCSS変数システム

状態管理
- Zustand: 4.5.4

主要パッケージ
- microcms-js-sdk: 3.1.2
- dayjs: 1.11.12
- framer-motion: 11.11.9
- html-react-parser: 5.1.12
- plaiceholder: 3.0.0
- Font Awesome: 6.5.2
- react-intersection-observer: 9.13.1

### 現在のアーキテクチャ

ディレクトリ構造
- /src/app: Next.js App Router
- /src/components: コンポーネント（layout, content, function, form, page, action）
- /src/lib: ユーティリティ関数（api.ts, bodyScroll.ts, validation.ts等）
- /src/styles: グローバルSCSS

関数の配置
- src/lib/に直接配置
- パッケージ化されていない
- 再利用性が低い

エラーハンドリング
- try-catchでconsole.logのみ
- エラーレスポンスの統一なし

型定義
- 一部any型使用
- 厳密な型定義が不足

## Goal(目標)

### 技術目標

Next.js最新化
- Next.js 15.x系へのアップグレード
- React 19対応
- App Routerの最適化
- Server Componentsの積極活用

Tailwind CSS導入
- design_upgrade_plan.mdと連携
- CSS Modules完全削除
- ユーティリティファーストアプローチ

パッケージ最新化
- 全パッケージを最新安定版に更新
- 非推奨パッケージの置き換え検討
- パッケージの必要性再評価

関数のパッケージ化
- 再利用可能な関数をnpmパッケージ化
- または内部パッケージとして分離
- 型定義の提供

アーキテクチャ改善
- クリーンアーキテクチャの適用
- 責務分離の明確化
- 依存関係の整理

### 品質目標

型安全性
- TypeScript strict mode有効化
- any型の排除
- 厳密な型定義

エラーハンドリング
- 統一されたエラーレスポンス
- エラーロギングの改善
- ユーザーフレンドリーなエラー表示

パフォーマンス
- バンドルサイズの最適化
- コード分割の最適化
- 画像最適化の強化

## SpecificationCreationStrategy(仕様書作成戦略)

### アプローチ

既存コードから仕様書生成
- 既存の実装を読み、仕様書としてドキュメント化
- 既存の動作を分析し、仕様書に反映
- 2026/1のベストプラクティスに基づいた改善を仕様書に反映

段階的な移行
- 既存機能を維持しながら改善
- 後方互換性を考慮した仕様書作成
- 段階的な移行を可能にする仕様書作成

### 仕様書作成フェーズ

Phase 1: 基盤仕様書
- Next.js設定仕様書
- パッケージ仕様書（package.md）
- 環境変数仕様書
- ディレクトリ構造仕様書

Phase 2: 関数仕様書
- API関数仕様書
- ユーティリティ関数仕様書
- パッケージ化対象関数の仕様書

Phase 3: コンポーネント仕様書
- design_upgrade_plan.mdと連携
- 既存コンポーネントの仕様書作成

Phase 4: ページ仕様書
- design_upgrade_plan.mdと連携
- 既存ページの仕様書作成

## SpecificationCreationPlan(仕様書作成計画)

### Phase 1: 基盤仕様書作成

Next.js設定仕様書
- /docs/env.example/nextjs/specification.md
- Next.js 15.xの設定項目
- App Router設定
- 画像最適化設定
- パフォーマンス設定

パッケージ仕様書
- /docs/ui/package.md: UI関連パッケージ
- /docs/features/package.md: 機能関連パッケージ
- 各パッケージのバージョン、用途、代替案を記載

環境変数仕様書
- /docs/env.example/specification.md
- 各環境変数の説明、型、必須/任意を記載

ディレクトリ構造仕様書
- /docs/README.md: プロジェクト全体の構造
- /docs/ui/README.md: UIシステムの構造
- /docs/features/README.md: 機能システムの構造

### Phase 2: 関数仕様書作成

API関数仕様書
- /docs/features/api/microcms/specification.md
- 既存のapi.tsを読み、仕様書化
- エラーハンドリングの改善を反映
- 型定義を厳密に記載

ユーティリティ関数仕様書
- /docs/features/utils/bodyScroll/specification.md
- /docs/features/utils/validation/specification.md
- /docs/features/utils/formatDate/specification.md
- /docs/features/utils/extractText/specification.md
- 各関数の仕様、型、使用例を記載

パッケージ化対象関数の仕様書
- 再利用可能な関数を特定
- npmパッケージ化の仕様書作成
- または内部パッケージとして分離する仕様書作成

### Phase 3: コンポーネント仕様書作成

design_upgrade_plan.mdと連携
- ui-kitコンポーネントの仕様書作成
- ui-featuresコンポーネントの仕様書作成
- Tailwind CSS前提の仕様書作成

### Phase 4: ページ仕様書作成

design_upgrade_plan.mdと連携
- 各ページの仕様書作成
- Next.js 15.xの機能を活用した仕様書作成

## NextJSUpgradeSpecification(Next.jsアップグレード仕様)

### バージョンアップ内容

Next.js 15.x
- React 19対応
- 新しいキャッシング戦略
- 改善されたApp Router
- パフォーマンス最適化

移行項目
- next.config.mjsの設定更新
- App Routerの最適化
- Server Componentsの積極活用
- クライアントコンポーネントの最小化

### 仕様書への記載

Next.js設定仕様書
- next.config.mjsの設定項目を全て記載
- 各設定の説明、デフォルト値、推奨値を記載
- パフォーマンス最適化設定を記載

ページ仕様書
- Server Component / Client Componentの指定を記載
- データフェッチング方法を記載
- キャッシング戦略を記載

## PackageUpgradeSpecification(パッケージアップグレード仕様)

### パッケージ再評価

最新化対象
- Next.js: 14.2.4 → 15.x
- React: 18.x → 19.x
- TypeScript: 5.x → 5.x（最新）
- その他全パッケージを最新安定版に

置き換え検討
- Font Awesome → lucide-react（軽量、Tree-shaking対応）
- html-react-parser → 必要性再評価
- react-highlight-words → 必要性再評価

### 仕様書への記載

パッケージ仕様書
- 各パッケージのバージョンを記載
- 用途、代替案、置き換え理由を記載
- 依存関係を記載

## FunctionPackageSpecification(関数パッケージ化仕様)

### パッケージ化対象

候補関数
- bodyScroll: スクロール制御（汎用的）
- validation: バリデーション（汎用的）
- formatDate: 日付フォーマット（汎用的）
- extractText: テキスト抽出（汎用的）

パッケージ化方法
- npmパッケージとして公開
- または内部パッケージ（packages/）として分離
- 型定義（.d.ts）の提供

### 仕様書への記載

関数仕様書
- パッケージ化対象を明記
- パッケージ名、バージョンを記載
- 使用方法、型定義を記載
- 依存関係を記載

## ArchitectureImprovementSpecification(アーキテクチャ改善仕様)

### ディレクトリ構造改善

推奨構造
```
/src
  /app              # Next.js App Router
  /components       # コンポーネント
    /ui-kit         # デザインコンポーネント
    /ui-features    # ロジック統合コンポーネント
  /features         # ビジネスロジック
    /api            # API関数
    /utils           # ユーティリティ関数
  /lib              # ライブラリ（最小限）
  /types            # 型定義
```

### 仕様書への記載

ディレクトリ構造仕様書
- 各ディレクトリの役割を記載
- ファイル配置ルールを記載
- インポートパスの規則を記載

## ErrorHandlingSpecification(エラーハンドリング仕様)

### エラーハンドリング改善

統一エラーレスポンス
- エラータイプの定義
- エラーメッセージの統一
- エラーロギングの改善

### 仕様書への記載

エラーハンドリング仕様書
- /docs/features/error-handling/specification.md
- エラータイプ、エラーレスポンス形式を記載
- エラーハンドリングのパターンを記載

## TypeSafetySpecification(型安全性仕様)

### 型定義改善

TypeScript strict mode
- strict: true
- noImplicitAny: true
- strictNullChecks: true

型定義ファイル
- /src/types/ に型定義を集約
- APIレスポンスの型定義
- コンポーネントPropsの型定義

### 仕様書への記載

型定義仕様書
- /docs/schemas/types/specification.md
- 各型定義の説明、使用箇所を記載
- 型の継承関係を記載

## PerformanceOptimizationSpecification(パフォーマンス最適化仕様)

### 最適化項目

バンドルサイズ
- コード分割の最適化
- 動的インポートの活用
- Tree-shakingの最適化

画像最適化
- Next.js Imageコンポーネントの活用
- 適切な画像フォーマット
- 遅延読み込み

### 仕様書への記載

パフォーマンス仕様書
- /docs/features/performance/specification.md
- 最適化手法を記載
- パフォーマンス指標を記載

## SpecificationWritingRules(仕様書記述ルール)

### 基本ルール

簡潔に
- 実装コードより短く
- 箇条書き中心
- 冗長な説明を避ける

具体的に
- 曖昧な表現禁止
- 数値を明示
- 全ての状態・パターンを記載

実用的に
- AIが実装可能な記述
- 人間が理解可能な記述

### バージョン情報の記載

パッケージ仕様書
- バージョン番号を明記
- アップグレード理由を記載
- 破壊的変更があれば記載

関数仕様書
- 関数のバージョンを記載
- 変更履歴を記載

## SpecificationQualityCriteria(仕様書品質基準)

### 完全性

必須項目
- バージョン情報
- 型定義
- 使用方法
- 依存関係

既存機能の網羅
- 既存コードの全ての機能を仕様書に反映
- 既存の動作を全て記載

### 正確性

バージョン情報の正確性
- パッケージバージョンを正確に記載
- 互換性情報を正確に記載

型定義の正確性
- TypeScriptの型を正確に記載
- 型の継承関係を正確に記載

### 実用性

AIが実装可能
- 具体的な実装方法が記載されている
- 曖昧な表現を使用しない

人間が理解可能
- 簡潔で読みやすい記述
- 技術的な背景が理解できる記述

## SpecificationCreationOrder(仕様書作成順序)

### 第1段階: 基盤仕様書

1. ディレクトリ構造仕様書
2. パッケージ仕様書（全体像）
3. 環境変数仕様書
4. Next.js設定仕様書

### 第2段階: 関数仕様書

1. API関数仕様書
2. ユーティリティ関数仕様書
3. パッケージ化対象関数の仕様書

### 第3段階: コンポーネント仕様書

1. design_upgrade_plan.mdと連携
2. ui-kitコンポーネント仕様書
3. ui-featuresコンポーネント仕様書

### 第4段階: ページ仕様書

1. design_upgrade_plan.mdと連携
2. 各ページの仕様書作成

### 第5段階: 補足仕様書

1. エラーハンドリング仕様書
2. 型定義仕様書
3. パフォーマンス仕様書

## NextSteps(次のステップ)

1. このプランを基に、Phase 1の基盤仕様書作成を開始
2. 既存コードを読み込み、仕様書を生成
3. 2026/1のベストプラクティスに基づいて改善を反映
4. Phase 2以降の仕様書作成に進む

## References(参考資料)

仕様書作成時の参照
- 仕様書記述ルール: docs/.example/sdd/specification-example.md
- ディレクトリ構造: docs/.example/sdd/directory-example.md
- ワークフロー: docs/.example/sdd/workflow.md
- デザインアップグレードプラン: docs/plan/design_upgrade_plan.md

既存コードの参照
- package.json: 現在のパッケージ構成
- src/lib/: ユーティリティ関数
- src/components/: コンポーネント実装
- next.config.mjs: Next.js設定

技術資料
- Next.js 15.x公式ドキュメント
- React 19公式ドキュメント
- TypeScript公式ドキュメント
- 2026/1時点のベストプラクティス