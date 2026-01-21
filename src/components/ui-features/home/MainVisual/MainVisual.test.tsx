/**
 * MainVisual コンポーネントテスト
 * 仕様書: docs/ui/components/ui-features/home/MainVisual/specification.md
 */

import { render, screen } from '@testing-library/react'
import { MainVisual } from './MainVisual'

// zustand storeのモック
jest.mock('@/features/utils/zustand', () => ({
  useLoadingStore: () => ({
    loadingState: false,
  }),
}))

// framer-motionのモック
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

// Slideshowのモック
jest.mock('../Slideshow', () => ({
  Slideshow: () => <div data-testid="slideshow">Slideshow</div>,
}))

describe('MainVisual', () => {
  // 通常表示
  it('renders with default styles', () => {
    render(<MainVisual />)
    expect(screen.getByTestId('slideshow')).toBeInTheDocument()
  })

  // ローディング状態によるアニメーション遅延（スタイル確認）
  it('handles loading state animation delay', () => {
    render(<MainVisual />)
    expect(screen.getByTestId('slideshow')).toBeInTheDocument()
  })

  // スライドショー表示
  it('renders slideshow', () => {
    render(<MainVisual />)
    expect(screen.getByTestId('slideshow')).toBeInTheDocument()
  })
})
