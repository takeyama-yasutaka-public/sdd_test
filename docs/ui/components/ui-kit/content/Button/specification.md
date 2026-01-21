# Button

バージョン: v1.0.0
更新日: 2026-01-21
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

Button共通
- relative inline-block w-fit min-w-[150px] max-w-full
- px-10 py-[15px] (padding: 40px 15px)
- text-on-fill (color: #ffffff)
- text-base font-medium (button_m)
- no-underline text-center z-0

Button::before疑似要素
- absolute inset-0
- bg-primary (background-color: #0054d4)
- border border-transparent
- rounded-full
- transition-all duration-100
- -z-10

Button hover/active
- hover/active時: before疑似要素がtop-[-10px] left-[-10px] right-[-10px] bottom-[-10px]に拡大
- transition-all duration-100

Button modifierColor='secondary'
- text-primary (color: #0054d4)
- before疑似要素: bg-white border border-primary

ButtonCase
- relative inline-block w-fit max-w-full
- px-10 py-[15px] (padding: 40px 15px)
- text-primary (color: #0054d4)
- text-base font-medium (button_m)
- no-underline text-center
- md:w-full md:px-[30px] md:py-[10px] md:text-sm (SP時)

ButtonCase::before疑似要素
- absolute inset-0
- bg-white border border-primary
- rounded-full
- transition-all duration-100
- -z-10

ButtonCase hover/active
- hover/active時: before疑似要素がbg-tertiary (background-color: #e6eefb)
- transition-all duration-100

ButtonCase current
- text-on-fill (color: #ffffff)
- pointer-events-none
- before疑似要素: bg-primary border border-transparent

ButtonGroup
- flex flex-wrap gap-5 (gap: 20px)

ButtonGroup type='case'
- mb-20 (margin-bottom: 80px)
- gap-[10px]
- md:flex-col (SP時は縦並び)

## Behavior(動作)

Button
- href指定時: Next.js Link要素
- href未指定時: button要素
- type属性はbutton要素のみ有効

ButtonCase
- 常にLink要素
- current=true時: pointer-events-none

ButtonGroup
- flexレイアウトで子要素を配置
- type='case'時: SPで縦並び

## Test(テスト)

- Button: href有無での要素切り替え
- Button: modifierColor='secondary'の表示
- Button: hover/active時の拡大アニメーション
- ButtonCase: current状態の表示
- ButtonCase: hover/active時の背景色変化
- ButtonCase: SP時のレスポンシブ
- ButtonGroup: 通常レイアウト
- ButtonGroup: type='case'時のレイアウト

## Other(その他)

依存関係
- Next.js Link: ルーティング
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- before疑似要素はabsolute positioningで実装
- hover/active時の拡大はscaleまたはinset調整で実装
- レスポンシブはmd:プレフィックスで実装

参考
- docs/ui/variables/colors.md: カラー定義
- docs/ui/variables/typography.md: タイポグラフィ定義