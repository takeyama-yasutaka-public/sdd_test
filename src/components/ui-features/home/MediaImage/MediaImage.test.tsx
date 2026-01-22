/**
 * MediaImage コンポーネントテスト
 * 仕様書: docs/ui/components/ui-features/home/MediaImage/specification.md
 */

import { render, screen } from '@testing-library/react'
import { MediaImage } from './MediaImage'

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
}))

// react-intersection-observerのモック
jest.mock('react-intersection-observer', () => ({
  // 実装側は [ref, inView] として利用している
  useInView: () => [jest.fn(), false],
}))

const mockImageData = {
  src: '/test-image.jpg',
  height: 300,
  width: 400,
  blurDataURL: 'data:image/jpeg;base64,test',
}

describe('MediaImage', () => {
  // 画像表示
  it('renders image', () => {
    render(<MediaImage image={mockImageData} alt="テスト画像" />)
    const image = screen.getByAltText('テスト画像')
    expect(image).toBeInTheDocument()
  })
})
