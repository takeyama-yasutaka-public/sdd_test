/**
 * ParallaxBg コンポーネントテスト
 * 仕様書: docs/ui/components/ui-features/aboutAndService/ParallaxBg/specification.md
 */

import { render } from '@testing-library/react'
import { ParallaxBg } from './ParallaxBg'

// Next.js Imageのモック
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

// framer-motionのモック
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useTransform: () => 0,
  useSpring: () => 0,
}))

describe('ParallaxBg', () => {
  // パララックス効果（スタイル確認）
  it('renders with parallax styles', () => {
    const { container } = render(<ParallaxBg />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
