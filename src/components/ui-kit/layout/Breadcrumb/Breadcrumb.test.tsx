/**
 * Breadcrumb コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Breadcrumb/specification.md
 */

import { render, screen } from '@testing-library/react'
import { Breadcrumb } from './Breadcrumb'

// Next.js Linkのモック
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

const mockBreadcrumb = [
  { path: '/', name: 'ホーム' },
  { path: '/about', name: '会社概要' },
  { path: '/about/team', name: 'チーム' },
]

describe('Breadcrumb', () => {
  // パンくずリスト表示
  it('renders breadcrumb items', () => {
    render(<Breadcrumb breadcrumb={mockBreadcrumb} />)
    expect(screen.getByText('ホーム')).toBeInTheDocument()
    expect(screen.getByText('会社概要')).toBeInTheDocument()
    expect(screen.getByText('チーム')).toBeInTheDocument()
  })

  // リンク動作
  it('renders links for non-last items', () => {
    render(<Breadcrumb breadcrumb={mockBreadcrumb} />)
    const homeLink = screen.getByRole('link', { name: 'ホーム' })
    expect(homeLink).toHaveAttribute('href', '/')
    const aboutLink = screen.getByRole('link', { name: '会社概要' })
    expect(aboutLink).toHaveAttribute('href', '/about')
  })

  // 最後の項目がリンクなし
  it('renders last item as text without link', () => {
    render(<Breadcrumb breadcrumb={mockBreadcrumb} />)
    const lastItem = screen.getByText('チーム')
    expect(lastItem.tagName).toBe('P')
  })
})
