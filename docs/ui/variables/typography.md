# タイポグラフィ

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/styles/global/_variables.scss

## FontFamily(フォントファミリー)

primary
- var(--font-notojp), 'YuGothic', 'Yu Gothic', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif
- 日本語フォント、デフォルト

secondary
- var(--font-montserrat), 'YuGothic', 'Yu Gothic', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif
- 英語フォント

## FontSize(フォントサイズ)

- xxxxxl: 2.25rem (36px)
- xxxxl: 2rem (32px)
- xxxl: 1.75rem (28px)
- xxl: 1.5rem (24px)
- xl: 1.25rem (20px)
- l: 1.125rem (18px)
- m: 1rem (16px) デフォルト
- s: 0.875rem (14px)
- xs: 0.75rem (12px)
- xxs: 0.625rem (10px)

## LineHeight(行間)

- m: 1.8 (body用)
- s: 1.4 (heading用)
- same: 1.0 (同一行)

## LetterSpacing(字間)

- m: 0.04em
- s: 0.02em

## FontWeight(フォントウェイト)

- l: 300
- r: 400 デフォルト
- m: 500
- b: 700

## Other(その他)

実装
- tailwind.config.jsのtheme.extendに定義
- fontFamily: primary, secondary
- fontSize: xxxxxl-xxs
- lineHeight: m, s, same
- letterSpacing: m, s
- fontWeight: l, r, m, b

参考
- docs/ui/variables/: 他のデザイントークン