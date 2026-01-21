# contact-handler

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/app/api/contact-handler/route.ts

## Functions(関数)

POST
- お問い合わせフォーム送信処理
- reqBody: { company, name, mail, type, content }
- 戻り値: NextResponse.json({ message: '成功しました' | '失敗しました' })

## Features(機能)

メール送信
- nodemailer使用
- 送信先: harumiharutaka@yahoo.co.jp
- 自動返信: ユーザーへ確認メール送信

メール設定
- host: smtp.mail.yahoo.co.jp
- port: 465
- secure: true
- auth: MAIL_ADDRESS, MAIL_PASSWORD

## ErrorHandling(エラーハンドリング)

- try-catchでエラーを捕捉
- エラー時: NextResponse.json({ message: '失敗しました' })

## Other(その他)

依存関係
- nodemailer: メール送信
- Next.js NextResponse: レスポンス

環境変数
- MAIL_ADDRESS: メールアドレス
- MAIL_PASSWORD: メールパスワード

実装
- API Route
- エラーハンドリングの改善が必要

参考
- docs/plan/api_mocking_plan.md: モック化プラン