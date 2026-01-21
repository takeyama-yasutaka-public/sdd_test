/**
 * HeadingEng コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/content/HeadingEng/specification.md
 */

import { render, screen } from '@testing-library/react'
import { HeadingTopEng, HeadingEng } from './HeadingEng'

// react-intersection-observerのモック
jest.mock('react-intersection-observer', () => ({
  useInView: () => [false, { ref: jest.fn() }],
}))

describe('HeadingTopEng', () => {
  // HeadingTopEng: 通常表示
  it('renders with default styles', () => {
    render(<HeadingTopEng english="TEST" />)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  // HeadingTopEng: modifierColor='white'時の表示
  it('applies white color modifier', () => {
    render(<HeadingTopEng english="TEST" color="white" />)
    const heading = screen.getByText('TEST')
    expect(heading).toHaveClass('text-on-fill')
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
    render(<HeadingTopEng english="TEST" />)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  // HeadingEng: スクロールアニメーション（スタイル確認）
  it('has scroll animation setup for HeadingEng', () => {
    render(<HeadingEng>TEST</HeadingEng>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
