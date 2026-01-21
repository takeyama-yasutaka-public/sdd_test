# Pager (ui-features)

バージョン: v1.0.0（過去PJ）
作成日: 2026-01-22
既存: src/components/function/Pager

## Props(プロパティ)

- PER_PAGE: number - 1ページあたりの表示件数
- totalCount: number - 総件数
- path?: string - ベースパス（デフォルト: "/"）
- id?: number - 現在のページ番号（未指定時は1）

## Features(機能)

ページ番号配列生成
- range(1, Math.ceil(totalCount / PER_PAGE))
- 1ページのみの場合は非表示

省略表示ロジック（6ページ以上で...表示）
- n < 6: 全ページ表示
- c < 5: [1, 2, 3, 4, 5, 0, n]
- c > n - 4: [1, 0, n-4, n-3, n-2, n-1, n]
- その他: [1, 0, c-1, c, c+1, 0, n]
- 0は...表示として扱う

prev/next制御
- prevFlag: idNum === rangeNum[0]（最初のページで非表示）
- nextFlag: idNum === rangeNum.at(-1)（最後のページで非表示）
- prev: idNum - 1
- next: idNum + 1

## Components(使用コンポーネント)

- Content.Pager: navラッパー
- Content.PagerItem: 各ページアイテム
  - type='number': 通常ページ番号
  - type='current': 現在ページ
  - type='dots': ...表示
  - type='prev': 前へボタン
  - type='next': 次へボタン

## Behavior(動作)

- totalCountとPER_PAGEから総ページ数を算出
- 現在ページ(id)に応じて表示ページ番号を決定
- 6ページ以上で省略表示
- hrefは`${path}/page/${number}`形式

## Dependencies(依存関係)

- @/components/content/index: Content.Pager, Content.PagerItem
