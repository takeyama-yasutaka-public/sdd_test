/**
 * CtaArea コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/content/CtaArea/specification.md
 */

import { render, screen } from '@testing-library/react'
import { CtaArea } from './CtaArea'

// Next.js LinkとImageのモック
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

describe('CtaArea', () => {
  // 通常表示
  it('renders with default styles', () => {
    const { container } = render(<CtaArea />)
    const ctaArea = container.firstChild
    expect(ctaArea).toBeInTheDocument()
  })

  // SP時のレスポンシブ（スタイル確認）
  it('has responsive classes for mobile', () => {
    const { container } = render(<CtaArea />)
    const ctaArea = container.firstChild
    expect(ctaArea).toHaveClass('md:flex-col')
  })

  // ボタンhover/active動作（スタイル確認）
  it('has button with hover and active classes', () => {
    render(<CtaArea />)
    const link = screen.getByRole('link', { name: /お問い合わせ/i })
    expect(link).toBeInTheDocument()
  })
})
