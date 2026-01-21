/**
 * Card コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/content/Card/specification.md
 */

import { render, screen } from '@testing-library/react'
import { CardGroup, Card } from './Card'

// Next.js LinkとImageのモック
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

const mockImageData = {
  url: '/test-image.jpg',
  width: 400,
  height: 300,
  blurDataURL: 'data:image/jpeg;base64,test',
}

const mockCategory = [{ name: 'カテゴリ1', id: 'cat1' }]

describe('CardGroup', () => {
  // CardGroup: 3カラムレイアウト
  it('renders with 3-column layout', () => {
    const { container } = render(
      <CardGroup>
        <Card
          href="/test1"
          image={mockImageData}
          alt="テスト1"
          category={mockCategory}
          text="テストテキスト1"
        />
        <Card
          href="/test2"
          image={mockImageData}
          alt="テスト2"
          category={mockCategory}
          text="テストテキスト2"
        />
        <Card
          href="/test3"
          image={mockImageData}
          alt="テスト3"
          category={mockCategory}
          text="テストテキスト3"
        />
      </CardGroup>
    )
    const group = container.firstChild
    expect(group).toHaveClass('flex', 'flex-row', 'flex-wrap', 'gap-10')
  })

  // CardGroup: SP時の1カラムレイアウト
  it('has responsive classes for mobile', () => {
    const { container } = render(
      <CardGroup>
        <Card
          href="/test"
          image={mockImageData}
          alt="テスト"
          category={mockCategory}
          text="テストテキスト"
        />
      </CardGroup>
    )
    const group = container.firstChild
    expect(group).toHaveClass('md:flex-col')
  })
})

describe('Card', () => {
  // Card: 画像表示
  it('renders image', () => {
    render(
      <Card
        href="/test"
        image={mockImageData}
        alt="テスト画像"
        category={mockCategory}
        text="テストテキスト"
      />
    )
    const image = screen.getByAltText('テスト画像')
    expect(image).toBeInTheDocument()
  })

  // Card: hover/active時のアニメーション（スタイル確認）
  it('has hover and active transition classes', () => {
    const { container } = render(
      <Card
        href="/test"
        image={mockImageData}
        alt="テスト"
        category={mockCategory}
        text="テストテキスト"
      />
    )
    const card = container.firstChild
    expect(card).toHaveClass('transition-all', 'duration-300')
  })

  // Card: カテゴリーラベル表示
  it('renders category labels', () => {
    render(
      <Card
        href="/test"
        image={mockImageData}
        alt="テスト"
        category={mockCategory}
        text="テストテキスト"
      />
    )
    expect(screen.getByText('カテゴリ1')).toBeInTheDocument()
  })
})
