# Heading

バージョン: v1.0.0（過去PJ）
作成日: 2026-01-22
既存: src/components/content/Heading

## Props(プロパティ)

HeadingJpn
- children: React.ReactNode
- color?: string

Heading
- children: React.ReactNode
- h: string ('h1' | 'h2' | 'h3' | 'h4' | 'h5')
- modifier: string ('first' | 'second' | 'third')
- color?: string

## Style(スタイル)

HeadingJpn（.japaniseWrapper）
- display: flex
- align-items: center
- gap: 10px (pxrem(10))

HeadingJpn .line
- width: 60px (pxrem(60))
- height: 1px
- background-color: $s-color_text_body (#1a1a1a)

HeadingJpn .japanise
- color: $s-color_text_body (#1a1a1a)
- font-size: min(pxvw(24), $font-size_xxl) / SP: min(pxvw(20), $font-size_xl)
- line-height: $line-height_s (1.4)
- font-weight: $font-weight_r (400)

HeadingJpn color='white'
- .line: bg: $p-color_white
- .japanise: color: $s-color_text_on-fill

Heading modifier='first'
- position: relative
- color: $s-color_text_body (#1a1a1a)
- text-style: heading_first_pc / SP: heading_first_sp
- padding-left: 22px

Heading modifier='first'::before
- position: absolute
- top: 0, left: 0
- width: 4px
- height: 45px / SP: 39px
- background: $p-color_brand-sub_gradation (linear-gradient)
- border-radius: 100px

Heading modifier='second'
- position: relative
- color: $s-color_text_body
- text-style: heading_second_pc / SP: heading_second_sp
- padding-left: 20px

Heading modifier='second'::before
- position: absolute
- top: 0, left: 0
- width: 1px
- height: 39px / SP: 34px
- background-color: $s-color_text_body

Heading modifier='third'
- color: $s-color_text_body
- text-style: heading_third_pc / SP: heading_third_sp

Heading color='white'
- color: $s-color_text_on-fill
- ::before: bg: $p-color_white

## Behavior(動作)

- h属性で見出しレベル（h1-h5）を切り替え
- modifier属性でスタイルバリアント（first/second/third）を切り替え
- data-modifier, data-modifier-color属性で制御

## Dependencies(依存関係)

- SCSS Modules: スタイリング
- @/styles/global: グローバルSCSS変数・mixin
