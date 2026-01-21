import { NextResponse } from 'next/server'
import nodeMailer from 'nodemailer'

export async function POST(request: any) {
  const reqBody = await request.json()
  const { company, name, mail, type, content } = reqBody

  try {
    const transporter = nodeMailer.createTransport({
      host: 'smtp.mail.yahoo.co.jp', // メールサーバー
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS!, // メールアドレス
        pass: process.env.MAIL_PASSWORD!, // パスワード
      },
    })

    const clientMailOptions = {
      from: 'Next.js<harumiharutaka@yahoo.co.jp>',
      to: 'harumiharutaka@yahoo.co.jp',
      subject: '【Next.js】お問い合わせがありました',
      text: `
お問い合わせ担当各位\n
\n
${company} の ${name} 様よりお問い合わせを頂きました。\n
ご対応をよろしくお願いします。\n
\n
━━━━━━━━━━━━━━━━━━━━━━━━\n
お問い合わせ内容\n
━━━━━━━━━━━━━━━━━━━━━━━━\n
■御社名: ${company} \n
■お名前: ${name} \n
■メールアドレス: ${mail} \n
■お問い合わせの種類: ${type}\n
■お問い合わせ内容:\n
${content}\n
\n
------------ \n
以上
            `,
    }

    const userMailOptions = {
      from: 'Next.js<harumiharutaka@yahoo.co.jp>',
      to: mail,
      subject: '【Next.js】お問い合わせありがとうございます',
      text: `
この度はお問い合わせありがとうございます。\n
お問い合わせ内容により、返信にはお時間を頂く場合もありますがご了承ください。\n
\n
━━━━━━━━━━━━━━━━━━━━━━━━\n
以下の内容でメールを受け付けました。\n
━━━━━━━━━━━━━━━━━━━━━━━━\n
■御社名: ${company} \n
■お名前: ${name} \n
■メールアドレス: ${mail} \n
■お問い合わせの種類: ${type}\n
■お問い合わせ内容:\n
${content}\n
\n
----------------------------------------\n
react_test\n
【お問い合わせ専用ダイヤル】 03-0000-0000\n
※受付時間 9:00～18:00（月～金）\n
----------------------------------------
            `,
    }

    const clientInfo = await transporter.sendMail(clientMailOptions)
    const userInfo = await transporter.sendMail(userMailOptions)
    return NextResponse.json({ message: '成功しました' })
  } catch (err) {
    return NextResponse.json({ message: '失敗しました' })
  }
}
