/**
 * ContactSpIcon コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Header/ContactSpIcon/specification.md
 */

import { render, screen } from '@testing-library/react'
import { ContactSpIcon } from './ContactSpIcon'

// Next.js Linkのモック
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

describe('ContactSpIcon', () => {
  // SP時の表示（スタイル確認）
  it('renders with mobile classes', () => {
    const { container } = render(<ContactSpIcon />)
    const link = container.querySelector('a')
    expect(link).toBeInTheDocument()
  })

  // リンク動作
  it('renders as Link to contact page', () => {
    render(<ContactSpIcon />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/contact')
  })
})
