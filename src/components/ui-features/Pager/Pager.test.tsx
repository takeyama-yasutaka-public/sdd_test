/**
 * Pager コンポーネントテスト
 * 仕様書: docs/ui/components/ui-features/Pager/specification.md
 */

import { render, screen } from '@testing-library/react'
import { Pager } from './Pager'

describe('Pager', () => {
  // ページ数算出: Math.ceil(totalCount / PER_PAGE)
  it('calculates page count correctly', () => {
    render(<Pager PER_PAGE={10} totalCount={25} id={1} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  // 省略表示パターン: 前半（c<5）
  it('renders front pattern when current page is less than 5', () => {
    render(<Pager PER_PAGE={10} totalCount={100} id={3} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  // 省略表示パターン: 中央
  it('renders middle pattern when current page is in middle', () => {
    render(<Pager PER_PAGE={10} totalCount={100} id={5} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  // 省略表示パターン: 後半（c>n-4）
  it('renders back pattern when current page is greater than n-4', () => {
    render(<Pager PER_PAGE={10} totalCount={100} id={8} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  // prev/next表示/非表示: 最初のページ判定
  it('hides prev button on first page', () => {
    render(<Pager PER_PAGE={10} totalCount={25} id={1} />)
    const prevButton = screen.queryByRole('link', { name: '前へ' })
    expect(prevButton).not.toBeInTheDocument()
  })

  // prev/next表示/非表示: 最後のページ判定
  it('hides next button on last page', () => {
    render(<Pager PER_PAGE={10} totalCount={25} id={3} />)
    const nextButton = screen.queryByRole('link', { name: '次へ' })
    expect(nextButton).not.toBeInTheDocument()
  })

  // 1ページのみ: 非表示
  it('does not render when only one page', () => {
    const { container } = render(<Pager PER_PAGE={10} totalCount={5} id={1} />)
    const pager = container.querySelector('[data-testid="pager"]')
    expect(pager).not.toBeInTheDocument()
  })

  // current状態: クリック不可
  it('renders current page as non-clickable', () => {
    render(<Pager PER_PAGE={10} totalCount={25} id={2} />)
    const current = screen.getByText('2')
    expect(current).toHaveClass('pointer-events-none')
  })
})
