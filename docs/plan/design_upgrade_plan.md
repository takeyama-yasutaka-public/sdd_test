# デザインバージョンアッププラン

バージョン: v1.0.0
更新日: 2026-01-21

## Overview(概要)

過去プロジェクトのデザインをベースに、Tailwind CSSを使用したモダンデザインシステムへのバージョンアップを実施する。

このプランは、SDD（仕様駆動開発）のワークフローに従い、AIが仕様書（specification.md）を作成するための指針である。

目的
- 既存SCSSベースのデザインからTailwind CSS仕様書を生成する基準を定義
- CSS ModulesとSCSSからの完全脱却を前提とした仕様書作成
- 仕様書作成の優先順位と範囲を明確化
- デザイントークンの継承ルールを定義
- モダンUI要素の仕様書への反映方法を定義

方針
- CSS Modules（*.module.scss）の完全削除
- SCSSファイル（*.scss）の完全削除
- Tailwind CSSのみでの実装を前提とした仕様書作成
- グローバルリセットもTailwind CSSで対応

## CurrentState(現状分析)

### 現在の技術スタック

- スタイリング: SCSS Modules
- カラーシステム: Primitive/Semanticカラーの2層構造
- タイポグラフィ: カスタムフォントサイズ・ウェイト
- スペーシング: pxrem()関数によるrem変換
- ブレイクポイント: カスタムmixin

### 現在のデザインシステム

カラー
- Primitiveカラー: 12段階のグレースケール + 12色相のカラーパレット
- Semanticカラー: 用途別カラー（text, link, background, border, button, status）
- ブランドカラー: primary(#0054d4), secondary(#002a6a), tertiary(#e6eefb)

タイポグラフィ
- フォント: Noto Sans JP (primary), Montserrat (secondary)
- フォントサイズ: xxxxxl(36px) ～ xxs(10px)
- 行間: 1.8 (body), 1.4 (heading), 1.0 (same)
- 字間: 0.04em, 0.02em

スペーシング
- コンテンツ幅: 1200px (PC), 1000px (small)
- ヘッダー高さ: 5rem (PC/SP共通)
- カスタム関数: pxrem()によるrem変換

## Goal(目標)

### デザイン目標

- モダンなUI: グラスモーフィズム、マイクロインタラクション、スムーズなアニメーション
- アクセシビリティ: WCAG AA準拠のコントラスト比
- レスポンシブ: モバイルファーストデザイン
- 一貫性: 統一されたデザイントークン

### 技術目標

- Tailwind CSS v3.x導入
- CSS Modules（*.module.scss）の完全削除
- SCSSファイル（*.scss）の完全削除
- Tailwind CSSのみでの実装
- デザイントークンの体系化
- グローバルリセットもTailwind CSSで対応

## SpecificationCreationStrategy(仕様書作成戦略)

### アプローチ

既存コードから仕様書生成
- 既存SCSSファイル（*.module.scss, *.scss）を読み、仕様書としてドキュメント化
- 既存コンポーネントの動作を分析し、仕様書に反映
- Tailwind CSSクラスのみでの実装を前提とした仕様書を作成
- 既存SCSSは参照のみ、最終実装はTailwind CSSのみ

デザイントークン継承
- 既存のカラーパレットを仕様書のvariablesセクションに記載
- Semanticカラーを仕様書で明示的に定義
- タイポグラフィ・スペーシングも仕様書に数値で記載

### 仕様書作成フェーズ

Phase 1: デザイントークン仕様書
- /docs/ui/variables/ にカラー、タイポグラフィ、スペーシングの仕様書作成
- 既存SCSS変数を仕様書化（参照のみ、実装はTailwind CSSのみ）
- Tailwind CSS設定への変換ルールを記載
- グローバルリセットもTailwind CSSで対応する仕様を記載

Phase 2: ui-kitコンポーネント仕様書
- 既存コンポーネントのSCSS（*.module.scss）を読み、仕様書作成
- Tailwind CSSクラスのみでの実装を前提とした記述
- CSS Modulesの完全削除を前提とした仕様書作成
- 優先順位: Button → Heading → Card → その他

Phase 3: ui-features仕様書
- ロジック統合コンポーネントの仕様書作成
- ui-kitの組み合わせ方法を明記

Phase 4: ページ仕様書
- 各ページのスタイル仕様を仕様書化
- レイアウトコンポーネントの仕様書作成

## SpecificationCreationPlan(仕様書作成計画)

### Phase 1: デザイントークン仕様書作成

対象
- /docs/ui/variables/colors.md: カラーシステム
- /docs/ui/variables/typography.md: タイポグラフィ
- /docs/ui/variables/spacing.md: スペーシング
- /docs/ui/variables/breakpoints.md: ブレイクポイント

作成方法
- 既存SCSS変数ファイル（src/styles/global/_variables.scss）を読み込む
- Primitive/Semanticカラーの2層構造を仕様書に反映
- 各カラーコード、フォントサイズ、スペーシング値を数値で明記
- Tailwind CSS設定への変換方法を記載

記述ルール
- specification-example.mdのvariablesセクションを参照
- 簡潔、具体的、実用的な記述
- 数値は必ず明記（px, rem, em等の単位も含む）

### Phase 2: ui-kitコンポーネント仕様書作成

優先順位
1. Button: /docs/ui/components/ui-kit/content/Button/specification.md
2. Heading: /docs/ui/components/ui-kit/content/Heading/specification.md
3. Card: /docs/ui/components/ui-kit/content/Card/specification.md
4. Container: /docs/ui/components/ui-kit/layout/Container/specification.md
5. Wrapper: /docs/ui/components/ui-kit/layout/Wrapper/specification.md
6. Pager: /docs/ui/components/ui-kit/navigation/Pager/specification.md
7. その他コンポーネント

作成方法
- 既存コンポーネントのSCSSファイル（*.module.scss）を読み込む
- 既存コンポーネントのTSXファイルを読み込んでPropsを確認
- 既存の動作（hover, active, disabled等）を全て仕様書に記載
- Tailwind CSSクラスでの実装を前提とした記述

記述内容
- Props: 既存コンポーネントのProps定義を継承
- Style: SCSSのスタイルをTailwindクラスに変換した記述
- Variant: バリアントごとのスタイルを明記
- Behavior: インタラクション（hover, active等）を全て記載
- Test: テストすべき項目を列挙

### Phase 3: ui-features仕様書作成

対象
- Pager: /docs/ui/components/ui-features/Pager/specification.md
- その他ui-featuresコンポーネント

作成方法
- 既存ui-featuresコンポーネントの実装を読み込む
- 使用しているui-kitコンポーネントを明記
- ロジック部分を仕様書に記載
- Tailwind CSSでのスタイリング方法を記載

### Phase 4: ページ仕様書作成

対象
- トップページ: /docs/ui/pages/home/specification.md
- about: /docs/ui/pages/about/specification.md
- service: /docs/ui/pages/service/specification.md
- case: /docs/ui/pages/case/specification.md
- news: /docs/ui/pages/news/specification.md
- contact: /docs/ui/pages/contact/specification.md

作成方法
- 既存ページのTSXファイルとmodule.scssを読み込む（参照のみ）
- 使用しているコンポーネントを明記
- ページ固有のスタイルをTailwindクラスのみで記載
- CSS Modulesの完全削除を前提とした仕様書作成
- レイアウト構造を仕様書に反映

## SpecificationWritingRules(仕様書記述ルール)

### Tailwind CSSクラスの記述方法

基本方針
- SCSSのスタイルをTailwind CSSクラスに完全変換して記述
- CSS Modulesの完全削除を前提とした記述
- カスタムカラーはSemanticカラー名を使用（例: text-body, bg-primary）
- 数値は必ず明記（例: px-6, py-4, text-lg）
- @applyディレクティブは使用しない（ユーティリティクラスのみ使用）

記述例
- SCSS: `padding: pxrem(15) pxrem(40);` → 仕様書: `px-10 py-4` (40px=10*4px, 15px≈4*4px)
- SCSS: `color: $s-color_text_body;` → 仕様書: `text-body`
- SCSS: `background-color: $p-color_brand-main_primary;` → 仕様書: `bg-primary`

状態の記述
- hover: `hover:bg-primary-dark`
- active: `active:scale-95`
- disabled: `disabled:opacity-50 disabled:cursor-not-allowed`
- focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`

### デザイントークンの参照方法

variables仕様書の参照
- カラー: /docs/ui/variables/colors.md を参照
- タイポグラフィ: /docs/ui/variables/typography.md を参照
- スペーシング: /docs/ui/variables/spacing.md を参照

記述方法
- 仕様書内で「variables/colors.mdのtext-bodyを使用」と明記
- 具体的な値（#1a1a1a）も併記する場合あり

### 既存SCSSからの変換ルール

カラー変換
- `$p-color_brand-main_primary` → `bg-primary` または `text-primary`
- `$s-color_text_body` → `text-body`
- `$p-color_white` → `bg-white` または `text-white`

スペーシング変換
- `pxrem(40)` → `px-10` (40px = 10 * 4px)
- `pxrem(15)` → `py-4` (15px ≈ 4 * 4px)
- `gap: pxrem(20)` → `gap-5` (20px = 5 * 4px)

タイポグラフィ変換
- `@include text-style(button_m)` → `text-base font-medium` (variables参照)
- `font-size: $font-size_l` → `text-lg` (18px)

ブレイクポイント変換
- `@include media(sp)` → `md:` プレフィックス（モバイルファースト）
- `@include media(pc)` → デフォルト（PCスタイル）

グローバルリセット
- 既存のdestyle.css（src/styles/base/_reset.scss）をTailwind CSSの@tailwind baseで対応
- カスタムリセットが必要な場合はTailwind CSSの@layer baseで定義
- SCSSファイルは完全削除

## DesignImprovementsInSpecification(仕様書へのデザイン改善反映)

### モダンUI要素の仕様書記載

グラスモーフィズム
- ヘッダー仕様書: `backdrop-blur-md bg-white/95` を記載
- カード仕様書: `shadow-lg backdrop-blur-sm` を記載
- 仕様書に「グラスモーフィズム効果」と明記

マイクロインタラクション
- ボタン仕様書: `hover:scale-105 hover:shadow-lg transition-all duration-200` を記載
- リンク仕様書: `hover:underline decoration-2 underline-offset-4` を記載
- カード仕様書: `hover:-translate-y-1 transition-transform` を記載
- 仕様書のBehaviorセクションに全てのインタラクションを記載

アニメーション
- 仕様書のStyleセクションに `transition-*` クラスを記載
- アニメーション時間: `duration-200`, `duration-300` 等を明記
- イージング: `ease-in-out` 等を明記

### アクセシビリティの仕様書記載

コントラスト比
- 仕様書のOtherセクションに「WCAG AA準拠（コントラスト比4.5:1以上）」と記載
- カラー使用箇所でコントラスト比を確認済みと明記

フォーカス管理
- インタラクティブ要素の仕様書に `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2` を記載
- キーボードナビゲーション対応を明記

### レスポンシブの仕様書記載

モバイルファースト
- 仕様書のStyleセクションで、デフォルト（モバイル）→ `md:`（タブレット以上）→ `lg:`（PC以上）の順で記載
- 例: `text-sm md:text-base lg:text-lg`

ブレイクポイント
- 仕様書のOtherセクションに使用ブレイクポイントを明記
- variables/breakpoints.mdを参照する旨を記載

## SpecificationQualityCriteria(仕様書品質基準)

### 完全性

必須項目
- Props: 全てのプロパティを記載
- Style: 全ての状態（default, hover, active, disabled等）を記載
- Behavior: 全てのインタラクションを記載
- Test: テストすべき項目を列挙

既存機能の網羅
- 既存SCSS（*.module.scss, *.scss）の全てのスタイルを仕様書に反映
- 既存コンポーネントの全ての動作を仕様書に記載
- 既存のバリアント・モディファイアを全て記載
- CSS Modulesの完全削除を前提とした完全な移行

### 正確性

数値の正確性
- SCSSのpxrem()値を正確にTailwindクラスに変換
- カラーコードを正確に記載
- フォントサイズ、行間、字間を正確に記載
- CSS Modulesのスタイルを完全にTailwindクラスに変換

状態の正確性
- hover, active, disabled等の状態を正確に記載
- レスポンシブブレイクポイントを正確に記載

### 実用性

AIが実装可能
- Tailwind CSSクラスのみで実装可能な記述
- CSS ModulesやSCSSへの依存がない記述
- 曖昧な表現（「適度な」「良い感じに」）を使用しない
- 全ての数値を明記

人間が理解可能
- 簡潔で読みやすい記述
- 箇条書き中心
- 冗長な説明を避ける

## SpecificationCreationOrder(仕様書作成順序)

### 第1段階: デザイントークン

1. /docs/ui/variables/colors.md
2. /docs/ui/variables/typography.md
3. /docs/ui/variables/spacing.md
4. /docs/ui/variables/breakpoints.md

### 第2段階: ui-kitコンポーネント

1. Button: 高頻度使用、基本コンポーネント
2. Heading: 高頻度使用、タイポグラフィ確認
3. Card: 高頻度使用、レイアウト確認
4. Container: 基盤コンポーネント
5. Wrapper: 基盤コンポーネント
6. Pager: ナビゲーション
7. その他コンポーネント

### 第3段階: ui-features

1. Pager: ロジック統合コンポーネント
2. その他ui-features

### 第4段階: ページ

1. home: トップページ
2. about: 会社情報
3. service: 事業内容
4. case: 実績
5. news: お知らせ
6. contact: お問い合わせ

## NextSteps(次のステップ)

1. このプランを基に、Phase 1のデザイントークン仕様書作成を開始
2. 既存SCSS変数ファイルを読み込み、仕様書を生成
3. 生成した仕様書をレビュー・修正
4. Phase 2以降の仕様書作成に進む

## References(参考資料)

仕様書作成時の参照
- 仕様書記述ルール: docs/.example/sdd/specification-example.md
- ディレクトリ構造: docs/.example/sdd/directory-example.md
- ワークフロー: docs/.example/sdd/workflow.md

既存コードの参照（仕様書作成時の参照のみ、実装はTailwind CSSのみ）
- SCSS変数: src/styles/global/_variables.scss（参照のみ）
- コンポーネントSCSS: src/components/**/*.module.scss（参照のみ、削除対象）
- グローバルSCSS: src/styles/**/*.scss（参照のみ、削除対象）
- コンポーネント実装: src/components/**/*.tsx

削除対象ファイル
- 全ての*.module.scssファイル
- 全ての*.scssファイル（グローバルスタイル含む）
- src/styles/ディレクトリ内のSCSSファイル

技術資料
- Tailwind CSS公式ドキュメント
- Tailwind CSSクラス一覧