/**
 * contact-handler API Route テスト
 * 仕様書: docs/features/api/contact-handler/specification.md
 */

import { POST } from './route'

// nodemailerのモック
jest.mock('nodemailer', () => ({
  createTransport: jest.fn(() => ({
    sendMail: jest.fn(() => Promise.resolve()),
  })),
}))

describe('contact-handler POST', () => {
  // フォーム送信処理
  it('handles contact form submission', async () => {
    const request = new Request('http://localhost/api/contact-handler', {
      method: 'POST',
      body: JSON.stringify({
        company: 'テスト会社',
        name: 'テスト太郎',
        mail: 'test@example.com',
        type: 'お問い合わせ',
        content: 'テスト内容',
      }),
    })
    const response = await POST(request)
    expect(response).toBeDefined()
  })
})
