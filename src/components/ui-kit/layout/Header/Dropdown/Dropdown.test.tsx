/**
 * Dropdown コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Header/Dropdown/specification.md
 */

import { render, screen } from '@testing-library/react'
import { Dropdown } from './Dropdown'

// DropdownItemのモック
jest.mock('./DropdownItem', () => ({
  DropdownItem: ({ path, english, japanese }: any) => (
    <li>
      <a href={path}>{english} {japanese}</a>
    </li>
  ),
}))

// Next.js Linkのモック
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

describe('Dropdown', () => {
  // ナビゲーション項目表示
  it('renders navigation items', () => {
    render(<Dropdown />)
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  // お問い合わせリンク表示
  it('renders contact link', () => {
    render(<Dropdown />)
    const contactLink = screen.getByRole('link', { name: /お問い合わせ/i })
    expect(contactLink).toBeInTheDocument()
  })
})
