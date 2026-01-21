# Component Forms

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/page/component/Forms

## Props(プロパティ)

- なし

## Features(機能)

フォーム状態管理
- inputArea: 入力エリア表示
- confirmArea: 確認エリア表示

入力フィールド
- text: テキスト入力
- textarea: テキストエリア
- radio: ラジオボタン
- checkbox: チェックボックス

バリデーション
- validatText: テキスト判定
- validatRadio: ラジオ判定
- validatCheckbox: チェックボックス判定

## Components(使用コンポーネント)

- Form.FormText: テキスト入力
- Form.FormTextarea: テキストエリア
- Form.FormRadioGroup: ラジオグループ
- Form.FormCheckboxGroup: チェックボックスグループ
- Content.Button: ボタン

## Behavior(動作)

- 'use client'でクライアントコンポーネント
- 確認ボタン: バリデーション実行
- 修正ボタン: 入力画面に戻る
- 送信ボタン: alert('送信しました')

## Test(テスト)

- 入力画面表示
- バリデーション動作
- 確認画面表示

## Other(その他)

依存関係
- validation: バリデーション
- Form: フォームコンポーネント
- Content: コンテンツコンポーネント
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- 'use client'でクライアントコンポーネント
- 開発用コンポーネント

参考
- docs/features/utils/validation/specification.md: バリデーション