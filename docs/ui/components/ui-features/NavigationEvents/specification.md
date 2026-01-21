# NavigationEvents

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/function/NavigationEvents

## Props(プロパティ)

- なし

## Features(機能)

ページ遷移検知
- usePathnameでパス名取得
- useSearchParamsでクエリパラメータ取得
- pathname/searchParams変更時にbodyScrollStart(true)実行

## Behavior(動作)

- 'use client'でクライアントコンポーネント
- useEffectでpathname/searchParams監視
- ページ遷移時にbodyScrollStart(true)で最上部へスクロール
- return null（何も表示しない）

## Test(テスト)

- ページ遷移時のbodyScrollStart実行

## Other(その他)

依存関係
- Next.js usePathname: パス名取得
- Next.js useSearchParams: クエリパラメータ取得
- bodyScrollStart: スクロール制御

実装
- ページ遷移時のスクロール制御

参考
- docs/features/utils/bodyScroll/specification.md: スクロール制御