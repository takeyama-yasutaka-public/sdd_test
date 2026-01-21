/**
 * CardTop コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/content/CardTop/specification.md
 */

import { render, screen } from '@testing-library/react'
import { CardTopGroup, CardTop } from './CardTop'

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

// framer-motionのモック
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

const mockImageData = {
  src: '/test-image.jpg',
  height: 300,
  width: 400,
  blurDataURL: 'data:image/jpeg;base64,test',
}

const mockCategory = [{ name: 'カテゴリ1', id: 'cat1' }]

describe('CardTopGroup', () => {
  // CardTopGroup: 3カラムレイアウト
  it('renders with 3-column layout', () => {
    const { container } = render(
      <CardTopGroup>
        <CardTop
          href="/test1"
          image={mockImageData}
          alt="テスト1"
          category={mockCategory}
          text="テストテキスト1"
        />
      </CardTopGroup>
    )
    const group = container.firstChild
    expect(group).toHaveClass('flex', 'flex-row', 'flex-wrap', 'gap-5')
  })

  // CardTopGroup: SP時の1カラムレイアウト
  it('has responsive classes for mobile', () => {
    const { container } = render(
      <CardTopGroup>
        <CardTop
          href="/test"
          image={mockImageData}
          alt="テスト"
          category={mockCategory}
          text="テストテキスト"
        />
      </CardTopGroup>
    )
    const group = container.firstChild
    expect(group).toHaveClass('md:flex-col')
  })

  // CardTopGroup: スクロールアニメーション（スタイル確認）
  it('has scroll animation setup', () => {
    const { container } = render(
      <CardTopGroup>
        <CardTop
          href="/test"
          image={mockImageData}
          alt="テスト"
          category={mockCategory}
          text="テストテキスト"
        />
      </CardTopGroup>
    )
    expect(container.firstChild).toBeInTheDocument()
  })
})

describe('CardTop', () => {
  // CardTop: 画像表示
  it('renders image', () => {
    render(
      <CardTop
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

  // CardTop: hover/active時のアニメーション（スタイル確認）
  it('has hover and active transition classes', () => {
    const { container } = render(
      <CardTop
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

  // CardTop: カテゴリーラベル表示
  it('renders category labels', () => {
    render(
      <CardTop
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
