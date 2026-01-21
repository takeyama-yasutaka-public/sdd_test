# FormRadio

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/form/FormRadio

## Props(プロパティ)

FormRadioGroup
- children: React.ReactNode
- ref?: React.Ref<HTMLFieldSetElement>

FormRadio
- name: string
- value: string
- onChange: (event: React.ChangeEvent<HTMLInputElement>) => void

## Style(スタイル)

FormRadioGroup共通
- fieldset要素
- Tailwind CSSクラスでスタイリング

FormRadio共通
- label要素
- input type="radio"
- icon: カスタムラジオアイコン
- text: ラベルテキスト
- Tailwind CSSクラスでスタイリング

## Behavior(動作)

FormRadioGroup
- forwardRefでref転送

FormRadio
- 制御コンポーネント

## Test(テスト)

- ラジオ選択動作
- ref転送

## Other(その他)

依存関係
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用

参考
- docs/ui/variables/colors.md: カラー定義