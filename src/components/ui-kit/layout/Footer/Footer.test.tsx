/**
 * Footer コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Footer/specification.md
 */

import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

// Next.js Imageのモック
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

// FooterWrapperのモック
jest.mock('./FooterWrapper', () => ({
  FooterWrapper: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

// FooterNavのモック
jest.mock('./FooterNav', () => ({
  FooterNav: () => <nav data-testid="footer-nav">FooterNav</nav>,
}))

describe('Footer', () => {
  // フッター表示
  it('renders as footer element', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toBeInTheDocument()
  })

  // ロゴ表示
  it('renders logo', () => {
    render(<Footer />)
    expect(screen.getByText(/WEB CORPORATION/i)).toBeInTheDocument()
  })

  // ナビゲーション表示
  it('renders navigation', () => {
    render(<Footer />)
    expect(screen.getByTestId('footer-nav')).toBeInTheDocument()
  })

  // コピーライト表示
  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2024 WEB CORPORATION Company./i)).toBeInTheDocument()
  })
})
