# Button

バージョン: v1.0.0（過去PJ）
作成日: 2026-01-22
既存: src/components/content/Button

## Props(プロパティ)

Button
- children: React.ReactNode
- href?: string
- type?: 'submit' | 'reset' | 'button' | undefined
- onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
- modifierColor?: string

ButtonCase
- children: React.ReactNode
- href: string
- current?: boolean

ButtonGroup
- children: React.ReactNode
- type?: string

## Style(スタイル)

Button
- position: relative
- display: inline-block
- width: fit-content
- min-width: 150px (pxrem(150))
- max-width: 100%
- padding: 15px 40px (pxrem(15) pxrem(40))
- color: $s-color_text_on-fill (#ffffff)
- text-style: button_m
- text-decoration: none
- text-align: center
- z-index: 0

Button::before
- content: ''
- position: absolute
- inset: 0
- background-color: $p-color_brand-main_primary (#0054d4)
- border: 1px solid transparent
- border-radius: 100px
- transition: $transition_high (0.1s)
- z-index: -1

Button hover/active
- ::before: top/left/right/bottom: -10px (拡大効果)

Button modifierColor='secondary'
- color: $p-color_brand-main_primary (#0054d4)
- ::before: bg: $p-color_white, border: 1px solid $p-color_brand-main_primary

ButtonCase
- position: relative
- display: inline-block
- width: fit-content
- max-width: 100%
- padding: 15px 40px
- color: $p-color_brand-main_primary (#0054d4)
- text-style: button_m
- text-decoration: none
- text-align: center

ButtonCase::before
- bg: $p-color_white (#ffffff)
- border: 1px solid $p-color_brand-main_primary
- border-radius: 100px
- transition: $transition_high

ButtonCase hover/active
- ::before: bg: $p-color_brand-main_tertiary (#e6eefb)

ButtonCase current
- color: $s-color_text_on-fill (#ffffff)
- pointer-events: none
- ::before: bg: $p-color_brand-main_primary, border: transparent

ButtonCase SP (@media sp)
- width: 100%
- padding: 10px 30px
- text-style: button_s

ButtonGroup
- display: flex
- flex-wrap: wrap
- gap: 20px (pxrem(20))

ButtonGroup type='case'
- margin-bottom: 80px
- gap: 10px
- SP: flex-direction: column

## Behavior(動作)

Button
- href指定時: Link要素
- href未指定時: button要素
- data-modifierColor属性でバリアント制御

ButtonCase
- 常にLink要素
- data-modifier='current'でcurrent状態

ButtonGroup
- flexレイアウトで子要素配置
- data-modifierType属性でバリアント制御

## Dependencies(依存関係)

- next/link: ルーティング
- SCSS Modules: スタイリング
- @/styles/global: グローバルSCSS変数・mixin
