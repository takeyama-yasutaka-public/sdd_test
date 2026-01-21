/**
 * Pager (ui-features) コンポーネントテスト
 * 過去PJの既存動作を保証するテスト
 */

import { render, screen } from '@testing-library/react'
import Pager from '@/components/function/Pager'

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

describe('Pager (function)', () => {
  // 1ページのみの場合は非表示
  it('does not render when only one page', () => {
    const { container } = render(
      <Pager totalCount={5} PER_PAGE={10} />
    )
    expect(container.querySelector('nav')).toBeNull()
  })

  // 複数ページの場合はレンダリング
  it('renders when multiple pages exist', () => {
    render(<Pager totalCount={25} PER_PAGE={10} />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  // ページ数の正しい算出（totalCount / PER_PAGE の切り上げ）
  it('calculates correct number of pages', () => {
    render(<Pager totalCount={25} PER_PAGE={10} />)
    // 25件 / 10件 = 3ページ
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  // 現在ページのハイライト（id指定なしは1ページ目）
  it('highlights current page (default is 1)', () => {
    render(<Pager totalCount={30} PER_PAGE={10} />)
    const current = screen.getByText('1')
    expect(current).toHaveAttribute('data-modifier', 'active')
  })

  // 現在ページのハイライト（id指定あり）
  it('highlights specified current page', () => {
    render(<Pager totalCount={30} PER_PAGE={10} id={2} />)
    const current = screen.getByText('2')
    expect(current).toHaveAttribute('data-modifier', 'active')
  })

  // 最初のページでprev非表示
  it('hides prev button on first page', () => {
    render(<Pager totalCount={30} PER_PAGE={10} id={1} />)
    expect(screen.queryByLabelText('前のページ')).toBeNull()
  })

  // 2ページ目以降でprev表示
  it('shows prev button on page 2', () => {
    render(<Pager totalCount={30} PER_PAGE={10} id={2} />)
    expect(screen.getByLabelText('前のページ')).toBeInTheDocument()
  })

  // 最後のページでnext非表示
  it('hides next button on last page', () => {
    render(<Pager totalCount={30} PER_PAGE={10} id={3} />)
    expect(screen.queryByLabelText('次のページ')).toBeNull()
  })

  // 最後のページ以外でnext表示
  it('shows next button on non-last page', () => {
    render(<Pager totalCount={30} PER_PAGE={10} id={1} />)
    expect(screen.getByLabelText('次のページ')).toBeInTheDocument()
  })

  // 6ページ以上で省略表示（...）
  it('shows dots when 6 or more pages (front pattern)', () => {
    render(<Pager totalCount={100} PER_PAGE={10} id={1} />)
    // c < 5: [1, 2, 3, 4, 5, 0, n] → ...が1つ
    expect(screen.getByText('…')).toBeInTheDocument()
  })

  // パスの正しい生成
  it('generates correct href paths', () => {
    render(<Pager totalCount={30} PER_PAGE={10} path="/news" />)
    const link2 = screen.getByText('2').closest('a')
    expect(link2).toHaveAttribute('href', '/news/page/2')
  })

  // デフォルトパス
  it('uses default path "/"', () => {
    render(<Pager totalCount={30} PER_PAGE={10} />)
    const link2 = screen.getByText('2').closest('a')
    expect(link2).toHaveAttribute('href', '//page/2')
  })
})
