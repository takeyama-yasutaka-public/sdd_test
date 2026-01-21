# カラー

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/styles/global/_variables.scss

## Primitive(基本カラー)

直接使用禁止、Semanticカラー経由でのみ使用

グレースケール
- p-grey-50: #f2f2f2
- p-grey-100: #e6e6e6
- p-grey-200: #cccccc
- p-grey-300: #b3b3b3
- p-grey-400: #999999
- p-grey-417: #959595
- p-grey-500: #7f7f7f
- p-grey-536: #767676
- p-grey-600: #666666
- p-grey-700: #4d4d4d
- p-grey-800: #333333
- p-grey-900: #1a1a1a

ブルー
- p-blue-50: #e8f1fe
- p-blue-100: #d9e6ff
- p-blue-200: #c5d7fb
- p-blue-300: #9db7f9
- p-blue-400: #7096f8
- p-blue-500: #4979f5
- p-blue-600: #3460fb
- p-blue-700: #264af4
- p-blue-800: #0031d8
- p-blue-900: #0017c1
- p-blue-1000: #00118f
- p-blue-1100: #000071
- p-blue-1200: #000060

ライトブルー
- p-light-blue-50: #f0f9ff
- p-light-blue-100: #dcf0ff
- p-light-blue-200: #c0e4ff
- p-light-blue-300: #97d3ff
- p-light-blue-400: #57b8ff
- p-light-blue-500: #39abff
- p-light-blue-600: #008bf2
- p-light-blue-700: #0877d7
- p-light-blue-800: #0066be
- p-light-blue-900: #0055ad
- p-light-blue-1000: #00428c
- p-light-blue-1100: #00316a
- p-light-blue-1200: #00234b

その他色相
- シアン、グリーン、ライム、イエロー、オレンジ、レッド、マゼンタ、パープル: 50-1200の12段階

プロジェクト固有
- p-opacity-white-095: #fffffff2
- p-opacity-black-005: #0000000d
- p-opacity-black-06: #00000099
- p-opacity-grey-900-06: #1a1a1a99

## Brand(ブランドカラー)

ブランドメイン
- brand-main-primary: #0054d4
- brand-main-secondary: #002a6a
- brand-main-tertiary: #e6eefb
- brand-main-quaternary: #fafcfe
- brand-main-fifthary: #80aaea

ブランドサブ
- brand-sub-primary: #0078d4
- brand-sub-secondary: #00bfe9
- brand-sub-tertiary: #d00c5f
- brand-sub-gradation: linear-gradient(0deg, #0078d4, #00bfe9)

## Semantic(用途別カラー)

実装で使用

テキスト
- text-body: p-grey-900 (#1a1a1a)
- text-description: p-grey-700 (#4d4d4d)
- text-placeholder: p-grey-400 (#999999)
- text-on-fill: p-white (#ffffff)
- text-disabled: p-grey-500 (#7f7f7f)

リンク
- link-normal: p-blue-900 (#0017c1)
- link-hover: p-blue-1000 (#00118f)
- link-active: p-blue-1000 (#00118f)
- link-visited: p-magenta-1000 (#6c006c)

メニューリンク
- menu-link-normal: p-grey-900 (#1a1a1a)
- menu-link-hover: p-opacity-grey-900-06 (#1a1a1a99)

背景
- background-primary: p-white (#ffffff)
- background-secondary: p-grey-100 (#e6e6e6)
- background-tertiary: p-grey-50 (#f2f2f2)

ボーダー
- border-field: brand-main-fifthary (#80aaea)
- border-focused: brand-main-primary (#0054d4)
- border-disabled: p-grey-300 (#b3b3b3)
- border-divider: p-grey-500 (#7f7f7f)

ボタン
- button-normal: p-grey-600 (#666666)
- button-hover: p-grey-800 (#333333)
- button-disabled: p-grey-300 (#b3b3b3)

ステータス
- status-success: p-green-600 (#259d63)
- status-alert: p-red-800 (#ec0000)
- status-warning: p-yellow-700 (#b78f00)

## Other(その他)

実装
- tailwind.config.jsのtheme.extend.colorsに定義
- Primitiveカラーは直接使用禁止、Semanticカラーのみ使用
- カスタムカラー名はTailwindクラスで使用（例: text-body, bg-primary）

参考
- WCAG AA準拠（コントラスト比4.5:1以上）
- docs/ui/variables/: 他のデザイントークン