# Pager

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/function/Pager

## Props(プロパティ)

- PER_PAGE: number
- totalCount: number
- path?: string (デフォルト: "/")
- id?: number (デフォルト: 1)

## Features(機能)

ページ番号配列生成
- range(1, Math.ceil(totalCount / PER_PAGE))
- 1ページのみの場合は非表示

省略表示: 6ページ以上で...表示
- 前半(c<5): [1,2,3,4,5,0,n]
- 中央: [1,0,c-1,c,c+1,0,n]
- 後半(c>n-4): [1,0,n-4,n-3,n-2,n-1,n]

## Components(使用コンポーネント)

Pager
- Content.Pager: ui-kit/navigation

PagerItem
- Content.PagerItem: ui-kit/navigation
- type='number': 通常ページ番号、Link
- type='current': 現在ページ、span、pointer-events-none
- type='dots': ...表示、span、pointer-events-none
- type='prev': 前へボタン、最初のページで非表示
- type='next': 次へボタン、最後のページで非表示

## Behavior(動作)

ページネーションロジック
- totalCountとPER_PAGEから総ページ数を算出
- 現在ページ(id)に応じて表示ページ番号を決定
- 6ページ以上で省略表示
- prev/nextの表示/非表示を制御

## Test(テスト)

- ページ数算出: Math.ceil(totalCount / PER_PAGE)
- 省略表示パターン: 前半/中央/後半
- prev/next表示/非表示: 最初/最後のページ判定
- current状態: クリック不可
- 1ページのみ: 非表示

## Other(その他)

依存関係
- Content.Pager: ui-kit/navigation
- Content.PagerItem: ui-kit/navigation
- Next.js Link: ページ遷移

実装
- ロジックのみ、スタイルはui-kitに委譲
- 0の配列値は...表示として扱う
- idが未指定の場合は1ページ目として扱う

参考
- docs/ui/components/ui-kit/navigation/Pager/specification.md: ui-kit版