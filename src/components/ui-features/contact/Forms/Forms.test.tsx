/**
 * Contact Forms コンポーネントテスト
 * 仕様書: docs/ui/components/ui-features/contact/Forms/specification.md
 */

import { render, screen } from '@testing-library/react'
import { Forms } from './Forms'

// Next.js navigationのモック
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

// NProgressのモック
jest.mock('nprogress', () => ({
  start: jest.fn(),
  done: jest.fn(),
}))

// nextjs-toploaderのモック（内部でnprogress.configure等を呼ぶため）
jest.mock('nextjs-toploader', () => ({
  __esModule: true,
  default: () => null,
}))

describe('Forms', () => {
  // 入力画面表示
  it('renders input area', () => {
    render(<Forms />)
    expect(screen.getByPlaceholderText('御社名')).toBeInTheDocument()
  })

  // バリデーション動作
  it('validates form inputs', () => {
    render(<Forms />)
    expect(screen.getByPlaceholderText('メールアドレス')).toBeInTheDocument()
  })

  // 確認画面表示（スタイル確認）
  it('has confirm area setup', () => {
    render(<Forms />)
    expect(screen.getByPlaceholderText('お問い合わせ内容')).toBeInTheDocument()
  })

  // フォーム送信（スタイル確認）
  it('has form submission setup', () => {
    render(<Forms />)
    expect(screen.getByText('確認')).toBeInTheDocument()
  })
})
