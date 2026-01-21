/**
 * contact-handler
 * 仕様書: docs/features/api/contact-handler/specification.md
 */

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// メール送信設定
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.yahoo.co.jp',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASSWORD,
  },
})

/**
 * POST: お問い合わせフォーム送信処理
 */
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { company, name, mail, type, content } = reqBody

    // 管理者へのメール送信
    await transporter.sendMail({
      from: process.env.MAIL_ADDRESS,
      to: 'harumiharutaka@yahoo.co.jp',
      subject: 'お問い合わせ',
      text: `
会社名: ${company}
お名前: ${name}
メールアドレス: ${mail}
お問い合わせの種類: ${type}
お問い合わせ内容:
${content}
      `,
    })

    // ユーザーへの自動返信メール送信
    await transporter.sendMail({
      from: process.env.MAIL_ADDRESS,
      to: mail,
      subject: 'お問い合わせありがとうございます',
      text: `
${name} 様

お問い合わせありがとうございます。
内容を確認次第、ご連絡させていただきます。

WEB CORPORATION
      `,
    })

    return NextResponse.json({ message: '成功しました' })
  } catch (error) {
    console.log('contact-handler error:', error)
    return NextResponse.json({ message: '失敗しました' }, { status: 500 })
  }
}
