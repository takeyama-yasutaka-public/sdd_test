# 過去PJテストコード

バージョン: v1.0.0
作成日: 2026-01-22

## Overview(概要)

このディレクトリは過去プロジェクトの既存動作を保証するテストコードです。
新しい実装が既存機能を後退させていないことを確認するために使用します。

## Structure(構成)

/components
- コンポーネントのレンダリングテスト

/lib
- ユーティリティ関数のユニットテスト

## TestFramework(テストフレームワーク)

- Jest: テストランナー
- React Testing Library: コンポーネントテスト
- @testing-library/jest-dom: DOMマッチャー

## Usage(使用方法)

```bash
npm test
```

## Reference(参照)

- 仕様書: docs/.old/20260122/specification/
- 新仕様書: docs/ui/, docs/features/
