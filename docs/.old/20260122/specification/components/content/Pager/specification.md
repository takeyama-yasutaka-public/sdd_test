# Pager (ui-kit)

バージョン: v1.0.0（過去PJ）
作成日: 2026-01-22
既存: src/components/content/Pager

## Props(プロパティ)

Pager
- children: React.ReactNode

PagerItem
- type: string ('number' | 'current' | 'dots' | 'prev' | 'next')
- href?: string
- onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
- number?: number

## Style(スタイル)

Pager（.pager）
- width: fit-content

Pager .inner
- display: flex
- flex-wrap: wrap
- gap: 5px (pxrem(5))

PagerItem（.pagerItem）a, button, span
- display: flex
- justify-content: center
- align-items: center
- width: 40px (pxrem(40))
- height: 40px (pxrem(40))
- color: $p-color_brand-main_primary (#0054d4)
- font-size: $font-size_l (18px)
- line-height: $line-height_same (1.0)
- text-decoration: none
- transition: $transition_high (0.1s)

PagerItem hover/active
- opacity: 0.5

PagerItem current（data-modifier='active'）
- background-color: $p-color_brand-main_primary
- border-radius: 100px
- color: $s-color_text_on-fill (#ffffff)
- pointer-events: none

PagerItem dots（data-modifier='dots'）
- color: $p-color_brand-main_primary
- pointer-events: none

PagerItemLR（.pagerItemLR）a, button, span
- display: flex
- justify-content: center
- align-items: center
- width: 40px (pxrem(40))
- height: 40px (pxrem(40))
- border: 1px solid $p-color_brand-main_primary
- border-radius: 100px
- color: $p-color_brand-main_primary (#0054d4)
- font-size: 12px (pxrem(12))
- line-height: $line-height_same (1.0)
- text-decoration: none
- transition: $transition_high

PagerItemLR hover/active
- background-color: $p-color_brand-main_tertiary (#e6eefb)

## Behavior(動作)

PagerItem type別動作
- 'number': href有→Link、href無→button
- 'current': span要素、data-modifier='active'
- 'dots': span要素、data-modifier='dots'、「…」表示
- 'prev': href有→Link、href無→button、FontAwesome左矢印
- 'next': href有→Link、href無→button、FontAwesome右矢印

## Dependencies(依存関係)

- next/link: ルーティング
- @fortawesome/react-fontawesome: アイコン
- @fortawesome/free-solid-svg-icons: faChevronLeft, faChevronRight
- SCSS Modules: スタイリング
