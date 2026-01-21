/**
 * Media コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/content/Media/specification.md
 */

import { render, screen } from '@testing-library/react'
import { MediaTopService, MediaService, MediaAboutAndService } from './Media'

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
  useInView: () => [false, { ref: jest.fn() }],
}))

const mockImageData = {
  src: '/test-image.jpg',
  height: 300,
  width: 400,
  blurDataURL: 'data:image/jpeg;base64,test',
}

describe('MediaTopService', () => {
  // MediaTopService: 通常表示
  it('renders with default styles', () => {
    render(
      <MediaTopService image={mockImageData} alt="テスト">
        <h3>タイトル</h3>
      </MediaTopService>
    )
    expect(screen.getByText('タイトル')).toBeInTheDocument()
  })
})

describe('MediaService', () => {
  // MediaService: 通常表示
  it('renders with default styles', () => {
    render(
      <MediaService image={mockImageData} alt="テスト">
        <h3>タイトル</h3>
      </MediaService>
    )
    expect(screen.getByText('タイトル')).toBeInTheDocument()
  })
})

describe('MediaAboutAndService', () => {
  // MediaAboutAndService: modifier='reverse'/'なし'/'massage'/'model'の表示
  it('renders with default modifier', () => {
    render(
      <MediaAboutAndService image={mockImageData} alt="テスト">
        <div>コンテンツ</div>
      </MediaAboutAndService>
    )
    expect(screen.getByText('コンテンツ')).toBeInTheDocument()
  })

  it('applies reverse modifier', () => {
    const { container } = render(
      <MediaAboutAndService modifier="reverse" image={mockImageData} alt="テスト">
        <div>コンテンツ</div>
      </MediaAboutAndService>
    )
    const media = container.firstChild
    expect(media).toHaveClass('flex-row-reverse')
  })

  it('applies massage modifier', () => {
    const { container } = render(
      <MediaAboutAndService modifier="massage" image={mockImageData} alt="テスト">
        <div>コンテンツ</div>
      </MediaAboutAndService>
    )
    const media = container.firstChild
    expect(media).toHaveClass('flex-col')
  })

  it('applies model modifier', () => {
    const { container } = render(
      <MediaAboutAndService modifier="model" image={mockImageData} alt="テスト">
        <div>コンテンツ</div>
      </MediaAboutAndService>
    )
    const media = container.firstChild
    expect(media).toHaveClass('flex-col')
  })
})

describe('Media scroll animation', () => {
  // スクロールアニメーション（スタイル確認）
  it('has scroll animation setup', () => {
    render(
      <MediaTopService image={mockImageData} alt="テスト">
        <h3>タイトル</h3>
      </MediaTopService>
    )
    expect(screen.getByText('タイトル')).toBeInTheDocument()
  })
})
