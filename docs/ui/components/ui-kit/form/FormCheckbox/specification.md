# FormCheckbox

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/form/FormCheckbox

## Props(プロパティ)

FormCheckboxGroup
- children: React.ReactNode
- ref?: React.Ref<HTMLFieldSetElement>

FormCheckbox
- name: string
- value: string
- onChange: (event: React.ChangeEvent<HTMLInputElement>) => void

## Style(スタイル)

FormCheckboxGroup共通
- fieldset要素
- Tailwind CSSクラスでスタイリング

FormCheckbox共通
- label要素
- input type="checkbox"
- icon: カスタムチェックアイコン
- text: ラベルテキスト
- Tailwind CSSクラスでスタイリング

## Behavior(動作)

FormCheckboxGroup
- forwardRefでref転送

FormCheckbox
- 制御コンポーネント

## Test(テスト)

- チェック動作
- ref転送

## Other(その他)

依存関係
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用

参考
- docs/ui/variables/colors.md: カラー定義