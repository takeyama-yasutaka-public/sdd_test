/**
 * Pager (ui-kit) コンポーネントテスト
 * 過去PJの既存動作を保証するテスト
 */

import { render, screen } from '@testing-library/react'
import { Pager, PagerItem } from '@/components/content/Pager'

// Next.js Linkコンポーネントのモック
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

// Font Awesomeのモック
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon }: { icon: unknown }) => <span data-testid="icon" />,
}))

describe('Pager', () => {
  // Pager: 子要素のレンダリング
  it('renders children', () => {
    render(
      <Pager>
        <PagerItem type="number" number={1} href="/page/1" />
      </Pager>
    )
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})

describe('PagerItem', () => {
  // PagerItem type='number': href有りでLink要素
  it('renders Link when type is number and href is provided', () => {
    render(<PagerItem type="number" number={1} href="/page/1" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/page/1')
    expect(link).toHaveTextContent('1')
  })

  // PagerItem type='number': href無しでbutton要素
  it('renders button when type is number and href is not provided', () => {
    const handleClick = jest.fn()
    render(<PagerItem type="number" number={1} onClick={handleClick} />)
    expect(screen.getByRole('button')).toHaveTextContent('1')
  })

  // PagerItem type='current': span要素、data-modifier='active'
  it('renders span with active modifier when type is current', () => {
    render(<PagerItem type="current" number={2} />)
    const span = screen.getByText('2')
    expect(span.tagName).toBe('SPAN')
    expect(span).toHaveAttribute('data-modifier', 'active')
  })

  // PagerItem type='dots': span要素、「…」表示
  it('renders dots span when type is dots', () => {
    render(<PagerItem type="dots" />)
    const span = screen.getByText('…')
    expect(span.tagName).toBe('SPAN')
    expect(span).toHaveAttribute('data-modifier', 'dots')
  })

  // PagerItem type='prev': href有りでLink要素、アイコン表示
  it('renders prev Link with icon when href is provided', () => {
    render(<PagerItem type="prev" href="/page/1" />)
    const link = screen.getByRole('link', { name: '前のページ' })
    expect(link).toHaveAttribute('href', '/page/1')
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  // PagerItem type='next': href有りでLink要素、アイコン表示
  it('renders next Link with icon when href is provided', () => {
    render(<PagerItem type="next" href="/page/3" />)
    const link = screen.getByRole('link', { name: '次のページ' })
    expect(link).toHaveAttribute('href', '/page/3')
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
