/**
 * contact-handler API Route テスト
 * 仕様書: docs/features/api/contact-handler/specification.md
 */

// Request/Responseのモック（Jest環境用、importの前に定義）
if (typeof global.Request === 'undefined') {
  global.Request = class Request {
    constructor(public url: string, public init?: RequestInit) {
      this.url = url
      this.init = init
      this.method = init?.method || 'GET'
      this.body = init?.body || null
      this.headers = new Headers(init?.headers)
    }
    headers: Headers
    method: string
    body: BodyInit | null
    bodyUsed = false
    cache: RequestCache = 'default'
    credentials: RequestCredentials = 'same-origin'
    destination: RequestDestination = ''
    integrity = ''
    keepalive = false
    mode: RequestMode = 'cors'
    redirect: RequestRedirect = 'follow'
    referrer = ''
    referrerPolicy: ReferrerPolicy = ''
    signal: AbortSignal | null = null
    async json() {
      return JSON.parse(this.body as string)
    }
    async text() {
      return this.body as string
    }
    async arrayBuffer() {
      return new ArrayBuffer(0)
    }
    async blob() {
      return new Blob()
    }
    async formData() {
      return new FormData()
    }
    clone() {
      return new Request(this.url, this.init)
    }
  } as any
}

// nodemailerのモック（route.tsのインポート前に必要）
jest.mock('nodemailer', () => ({
  createTransport: jest.fn(() => ({
    sendMail: jest.fn(() => Promise.resolve()),
  })),
}))

// Next.js serverのモック
jest.mock('next/server', () => ({
  NextRequest: class NextRequest {
    constructor(public url: string, public init?: RequestInit) {
      this.url = url
      this.init = init
      this.method = init?.method || 'GET'
      this.body = init?.body || null
    }
    method: string
    body: BodyInit | null
    async json() {
      return JSON.parse(this.body as string)
    }
  },
  NextResponse: {
    json: jest.fn((data) => ({ json: () => Promise.resolve(data) })),
  },
}))

import { POST } from './route'

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
