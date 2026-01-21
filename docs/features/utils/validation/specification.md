# validation

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/validation.ts

## Functions(関数)

validatText
- テキストの判定
- text: string
- 戻り値: エラーメッセージ（空文字列は正常）

validatSelect
- セレクトボックスの判定
- select: string
- defaultSelect: string
- 戻り値: エラーメッセージ（空文字列は正常）

validatRadio
- ラジオの判定
- select: string
- 戻り値: エラーメッセージ（空文字列は正常）

validatCheckbox
- チェックボックスの判定
- checkbox: string[]
- 戻り値: エラーメッセージ（空文字列は正常）

validatRfcEmail
- メールアドレスのRFC判定
- email: string
- 戻り値: エラーメッセージ（空文字列は正常）
- 判定項目: @の有無、@の連続、ローカル部分65文字以下、ドメイン部分254文字以下、全体255文字以下、ドットの連続、ドットの先頭/末尾、ハイフンの先頭/末尾、ハイフンとドットの隣接、数字のみ、特殊文字、ドットの有無

validatKana
- 全角カタカナの判定
- kana: string
- 戻り値: エラーメッセージ（空文字列は正常）

validatNumber
- 半角数字の判定
- number: string
- 戻り値: エラーメッセージ（空文字列は正常）

## Test(テスト)

- validatText: 未入力時のエラー
- validatSelect: デフォルト選択時のエラー
- validatRadio: 未選択時のエラー
- validatCheckbox: 未選択時のエラー
- validatRfcEmail: 各種RFC違反パターン
- validatKana: 全角カタカナ以外のエラー
- validatNumber: 半角数字以外のエラー

## Other(その他)

依存関係
- なし(Pure JavaScript)

実装
- エラーメッセージを返却
- 正常時は空文字列を返却