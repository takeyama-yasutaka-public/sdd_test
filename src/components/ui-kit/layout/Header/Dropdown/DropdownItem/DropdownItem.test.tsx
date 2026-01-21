/**
 * DropdownItem コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Header/Dropdown/DropdownItem/specification.md
 */

import { render, screen } from '@testing-library/react'
import { DropdownItem } from './DropdownItem'

// Next.js Linkのモック
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

describe('DropdownItem', () => {
  // ナビゲーション項目表示
  it('renders navigation item', () => {
    render(<DropdownItem path="/about" english="ABOUT" japanese="会社概要" />)
    expect(screen.getByText('ABOUT')).toBeInTheDocument()
    expect(screen.getByText('会社概要')).toBeInTheDocument()
  })

  // リンク動作
  it('renders as Link with correct href', () => {
    render(<DropdownItem path="/about" english="ABOUT" japanese="会社概要" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/about')
  })
})
