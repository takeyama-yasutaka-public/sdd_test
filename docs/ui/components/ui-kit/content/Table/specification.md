# Table

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/content/Table

## Props(プロパティ)

Table
- children: React.ReactNode
- modifierDimension: 'horizontal' | 'vertical' | 'cross'
- modifierScroll?: string

TableAbout
- children: React.ReactNode

## Style(スタイル)

Table共通
- inline-block border-spacing-0 border-separate
- tr:first-child>*: border-t border-border-field
- th: p-[10px] border-r border-b border-border-field bg-brand-main-tertiary leading-s font-normal align-middle
- th:first-child: border-l border-border-field
- td: p-[10px] border-r border-b border-border-field leading-s align-middle
- td:first-child: border-l border-border-field

Table modifierDimension='horizontal'
- md:th: w-auto (SP時)

Table modifierDimension='vertical'
- tbody tr:first-child>*: border-t-0

Table modifierDimension='cross'
- thead tr:first-child>*:first-child: bg-white border-t-0 border-l-0
- tbody tr:first-child>*: border-t-0

Table modifierScroll='spScroll'
- overflow-x-auto
- th,td: whitespace-nowrap

TableAbout共通
- border-spacing-[20px_0] m-0 mx-[-20px]
- th: w-[200px] py-[15px] pb-[13.5px] border-0 border-b border-brand-main-fifthary leading-s font-normal align-middle
- td: py-[15px] pb-[13.5px] border-0 border-b border-brand-main-tertiary leading-s align-middle
- md:th: w-[100px] (SP時)

## Behavior(動作)

Table
- テーブル表示
- modifierDimensionでレイアウト変更
- modifierScroll='spScroll'時: 横スクロール

TableAbout
- ABOUTページ用のテーブルスタイル

## Test(テスト)

- Table: 通常表示
- Table: modifierDimension各パターン
- Table: modifierScroll='spScroll'時の横スクロール
- TableAbout: 通常表示

## Other(その他)

依存関係
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用

参考
- docs/ui/variables/colors.md: カラー定義