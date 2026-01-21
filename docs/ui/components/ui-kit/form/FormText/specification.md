# FormText

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/form/FormText

## Props(プロパティ)

- name: string
- placeholder: string
- value: string
- onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
- modifier?: string
- ref?: React.Ref<HTMLInputElement>

## Style(スタイル)

FormText共通
- input type="text"
- Tailwind CSSクラスでスタイリング

## Behavior(動作)

- forwardRefでref転送
- 制御コンポーネント

## Test(テスト)

- 入力動作
- ref転送

## Other(その他)

依存関係
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用

参考
- docs/ui/variables/colors.md: カラー定義