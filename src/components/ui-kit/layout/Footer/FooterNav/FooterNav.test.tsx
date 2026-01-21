/**
 * FooterNav コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Footer/FooterNav/specification.md
 */

import { render, screen } from '@testing-library/react'
import { FooterNav } from './FooterNav'

// Next.js Linkのモック
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

describe('FooterNav', () => {
  // ナビゲーション項目表示
  it('renders navigation items', () => {
    render(<FooterNav />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  // リンク動作
  it('renders links', () => {
    render(<FooterNav />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })
})
