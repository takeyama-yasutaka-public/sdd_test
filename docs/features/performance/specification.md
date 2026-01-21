# パフォーマンス最適化

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/app/**/*.tsx, src/components/**/*.tsx

## CurrentState(現状)

### 既存のパフォーマンス最適化

画像最適化
- Next.js Imageコンポーネント使用
- placeholder="blur"でブラー画像表示
- priority属性で優先読み込み
- sizes属性でレスポンシブ画像

コード分割
- Next.js App Routerの自動コード分割
- 動的インポート: 一部で使用

キャッシング
- Next.js App Routerのキャッシング
- ISR: revalidate設定（一部ページ）

## OptimizationStrategies(最適化戦略)

### バンドルサイズ最適化

コード分割
- 動的インポート: 大きなコンポーネントを動的インポート
- ページ単位のコード分割: Next.js App Routerで自動

Tree-shaking
- 未使用コードの削除
- パッケージの最小化

### 画像最適化

Next.js Image
- 自動画像最適化
- WebP/AVIF形式への変換
- レスポンシブ画像

画像の遅延読み込み
- loading="lazy"（デフォルト）
- priority属性で優先読み込み

### レンダリング最適化

Server Components
- デフォルトでServer Component
- クライアントコンポーネントの最小化

React Suspense
- データフェッチング時のSuspense
- ローディング状態の管理

### キャッシング戦略

ISR（Incremental Static Regeneration）
- revalidate: 60（60秒）
- 動的ページの静的生成

キャッシュ制御
- fetch cache: 'force-cache' | 'no-store'
- Next.js App Routerのキャッシング

## PerformanceMetrics(パフォーマンス指標)

### Core Web Vitals

LCP（Largest Contentful Paint）
- 目標: 2.5秒以内

FID（First Input Delay）
- 目標: 100ms以内

CLS（Cumulative Layout Shift）
- 目標: 0.1以内

### その他指標

TTFB（Time to First Byte）
- 目標: 800ms以内

FCP（First Contentful Paint）
- 目標: 1.8秒以内

## Implementation(実装)

### 画像最適化

- Next.js Imageコンポーネントの使用
- 適切なsizes属性の設定
- priority属性の適切な使用

### コード分割

- 動的インポートの活用
- 大きなコンポーネントの分割

### キャッシング

- ISRの適切な設定
- キャッシュ制御の最適化

## Test(テスト)

- バンドルサイズの測定
- パフォーマンス指標の測定
- 画像最適化の確認

## Other(その他)

依存関係
- Next.js: 画像最適化、コード分割
- React: Suspense

実装
- パフォーマンス測定ツールの導入が必要
- 継続的な最適化が必要

参考
- docs/plan/frontend_architecture_upgrade_plan.md: アーキテクチャアップグレードプラン