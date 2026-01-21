# Forms

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/page/contact/Forms

## Props(プロパティ)

- なし

## Features(機能)

フォーム状態管理
- inputArea: 入力エリア表示
- confirmArea: 確認エリア表示
- inputError: エラー表示フラグ

入力フィールド
- company: 御社名
- name: お名前
- mail: メールアドレス
- type: お問い合わせの種類
- content: お問い合わせ内容
- consent: 個人情報保護方針への同意

バリデーション
- validatText: テキスト判定
- validatRfcEmail: メールアドレス判定
- validateConsent: 同意判定

確認画面
- 入力内容の確認表示

フォーム送信
- POST /api/contact-handler
- NProgress: 送信インジケーター
- sendGTMEvent: Googleタグマネージャーイベント
- 成功時: /contact/finishへ遷移
- 失敗時: アラート表示

## Components(使用コンポーネント)

- Layout.ContentBody: コンテンツ本文
- Layout.ContentFooter: コンテンツフッター
- Form.FormText: テキスト入力
- Form.FormTextarea: テキストエリア
- Form.FormRadioGroup: ラジオグループ
- Form.FormCheckboxGroup: チェックボックスグループ
- Content.Button: ボタン
- NextTopLoader: トップローダー

## Behavior(動作)

- 'use client'でクライアントコンポーネント
- 確認ボタン: バリデーション実行、エラー時はスクロール
- 修正ボタン: 入力画面に戻る
- 送信ボタン: API送信、成功時は完了ページへ遷移

## Test(テスト)

- 入力画面表示
- バリデーション動作
- 確認画面表示
- フォーム送信

## Other(その他)

依存関係
- validation: バリデーション
- Next.js useRouter: ルーティング
- nprogress: プログレスバー
- @next/third-parties: Googleタグマネージャー
- nextjs-toploader: トップローダー
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- 'use client'でクライアントコンポーネント

参考
- docs/features/utils/validation/specification.md: バリデーション
- docs/features/api/contact-handler/specification.md: API Route