/**
 * Pager コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/navigation/Pager/specification.md
 */

import { render, screen, fireEvent } from '@testing-library/react'
import { Pager, PagerItem } from './Pager'

// Next.js Linkのモック
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

describe('Pager', () => {
  it('renders children', () => {
    render(
      <Pager>
        <PagerItem type="number" number={1} href="/page/1" />
      </Pager>
    )
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})

describe('PagerItem', () => {
  // PagerItem: type='number'の表示と動作
  it('renders number type as Link when href is provided', () => {
    render(<PagerItem type="number" number={1} href="/page/1" />)
    const link = screen.getByRole('link', { name: '1' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/page/1')
  })

  it('renders number type as button when href is not provided', () => {
    const handleClick = jest.fn()
    render(<PagerItem type="number" number={1} onClick={handleClick} />)
    const button = screen.getByRole('button', { name: '1' })
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  // PagerItem: type='current'の表示
  it('renders current type as span', () => {
    render(<PagerItem type="current" number={2} />)
    const current = screen.getByText('2')
    expect(current).toBeInTheDocument()
    expect(current).toHaveClass('bg-primary', 'rounded-full', 'text-on-fill', 'pointer-events-none')
  })

  // PagerItem: type='dots'の表示
  it('renders dots type', () => {
    render(<PagerItem type="dots" />)
    const dots = screen.getByText('…')
    expect(dots).toBeInTheDocument()
    expect(dots).toHaveClass('pointer-events-none')
  })

  // PagerItem: type='prev'/'next'の表示と動作
  it('renders prev type as Link when href is provided', () => {
    render(<PagerItem type="prev" href="/page/1" />)
    const link = screen.getByRole('link', { name: '前へ' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/page/1')
  })

  it('renders next type as button when href is not provided', () => {
    const handleClick = jest.fn()
    render(<PagerItem type="next" onClick={handleClick} />)
    const button = screen.getByRole('button', { name: '次へ' })
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  // PagerItem: href有無での要素切り替え
  it('switches between Link and button based on href', () => {
    const { rerender } = render(<PagerItem type="number" number={1} href="/page/1" />)
    expect(screen.getByRole('link')).toBeInTheDocument()

    rerender(<PagerItem type="number" number={1} onClick={() => {}} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  // PagerItem: hover/active時のスタイル変化（スタイル確認）
  it('has hover and active transition classes', () => {
    render(<PagerItem type="number" number={1} href="/page/1" />)
    const link = screen.getByRole('link')
    expect(link).toHaveClass('transition-all', 'duration-100')
  })
})
