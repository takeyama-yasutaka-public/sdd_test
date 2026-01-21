/**
 * NewsPosts コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/content/NewsPosts/specification.md
 */

import { render, screen } from '@testing-library/react'
import { NewsPosts, NewsPostsItem } from './NewsPosts'

// Next.js Linkのモック
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

// formatDateのモック
jest.mock('@/features/utils/formatDate', () => ({
  formatDate: (date: string) => '2026年1月22日',
}))

describe('NewsPosts', () => {
  // NewsPosts: リスト表示
  it('renders as ul element', () => {
    const { container } = render(
      <NewsPosts>
        <NewsPostsItem href="/news/1" time="2026-01-22T00:00:00Z" title="ニュース1" />
      </NewsPosts>
    )
    const ul = container.querySelector('ul')
    expect(ul).toBeInTheDocument()
  })
})

describe('NewsPostsItem', () => {
  // NewsPostsItem: 日付表示
  it('renders formatted date', () => {
    render(<NewsPostsItem href="/news/1" time="2026-01-22T00:00:00Z" title="ニュース1" />)
    expect(screen.getByText('2026年1月22日')).toBeInTheDocument()
  })

  // NewsPostsItem: タイトル表示
  it('renders title', () => {
    render(<NewsPostsItem href="/news/1" time="2026-01-22T00:00:00Z" title="ニュース1" />)
    expect(screen.getByText('ニュース1')).toBeInTheDocument()
  })

  // NewsPostsItem: hover/active時のアニメーション（スタイル確認）
  it('has hover and active transition classes', () => {
    const { container } = render(
      <NewsPostsItem href="/news/1" time="2026-01-22T00:00:00Z" title="ニュース1" />
    )
    const link = container.querySelector('a')
    expect(link).toHaveClass('transition-all', 'duration-300')
  })

  // NewsPostsItem: リンク動作
  it('renders as Link with correct href', () => {
    render(<NewsPostsItem href="/news/1" time="2026-01-22T00:00:00Z" title="ニュース1" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/news/1')
  })
})
