# Logo

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/layout/Header/Logo

## Props(プロパティ)

- なし（固定コンテンツ）

## Style(スタイル)

Logo共通
- Link要素
- pathname==='/'時: h1要素でラップ
- pathname!=='/'時: div要素

Logo内
- Image: priority属性
- p: "WEB CORPORATION"テキスト

## Behavior(動作)

- 'use client'でクライアントコンポーネント
- usePathnameでパス名取得
- pathname==='/'時: h1要素（SEO）
- pathname!=='/'時: div要素
- クリック時: headerResetOn/Offでヘッダーリセット

## Test(テスト)

- トップページ時のh1要素
- その他ページ時のdiv要素
- クリック時のヘッダーリセット

## Other(その他)

依存関係
- Next.js Link: ルーティング
- Next.js Image: 画像最適化
- zustand: 状態管理
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- 'use client'でクライアントコンポーネント

参考
- docs/ui/variables/colors.md: カラー定義