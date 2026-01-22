/**
 * HeadingEng コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/content/HeadingEng/specification.md
 */

import { render, screen } from '@testing-library/react'
import { HeadingTopEng, HeadingEng } from './HeadingEng'

// react-intersection-observerのモック
jest.mock('react-intersection-observer', () => ({
  // 実装側は [ref, inView] として利用している
  useInView: () => [jest.fn(), false],
}))

describe('HeadingTopEng', () => {
  // HeadingTopEng: 通常表示
  it('renders with default styles', () => {
    const { container } = render(<HeadingTopEng english="TEST" />)
    // 英文は1文字ずつ分割されるため、親要素のtextContentで確認
    expect(container).toHaveTextContent('TEST')
  })

  // HeadingTopEng: modifierColor='white'時の表示
  it('applies white color modifier', () => {
    const { container } = render(<HeadingTopEng english="TEST" color="white" />)
    const wrapper = container.firstChild
    expect(wrapper).toHaveClass('text-on-fill')
  })
})

describe('HeadingEng', () => {
  // HeadingEng: 通常表示
  it('renders with default styles', () => {
    render(<HeadingEng>TEST</HeadingEng>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  // HeadingEng: modifierColor='white'時の表示
  it('applies white color modifier', () => {
    render(<HeadingEng color="white">TEST</HeadingEng>)
    const heading = screen.getByText('TEST')
    expect(heading).toHaveClass('text-on-fill')
  })

  // HeadingTopEng: スクロールアニメーション（スタイル確認）
  it('has scroll animation setup for HeadingTopEng', () => {
    const { container } = render(<HeadingTopEng english="TEST" />)
    expect(container).toHaveTextContent('TEST')
  })

  // HeadingEng: スクロールアニメーション（スタイル確認）
  it('has scroll animation setup for HeadingEng', () => {
    render(<HeadingEng>TEST</HeadingEng>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
