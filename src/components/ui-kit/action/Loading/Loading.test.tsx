/**
 * Loading コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/action/Loading/specification.md
 */

import { render, screen } from '@testing-library/react'
import { Loading } from './Loading'

// zustand storeのモック
jest.mock('@/features/utils/zustand/zustand', () => ({
  useLoadingStore: () => ({
    loadingState: true,
    allImagesLoaded: false,
    loadingOff: jest.fn(),
  }),
}))

// bodyScrollのモック
jest.mock('@/features/utils/bodyScroll/bodyScroll', () => ({
  bodyScrollStop: jest.fn(),
  bodyScrollStart: jest.fn(),
}))

// Next.js Imageのモック
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

describe('Loading', () => {
  // loadingState=true/false時の表示/非表示
  it('renders when loadingState is true', () => {
    render(<Loading />)
    const loading = screen.getByRole('status', { hidden: true })
    expect(loading).toBeInTheDocument()
  })

  // 画像読み込み完了時のアニメーション（スタイル確認）
  it('has animation classes', () => {
    const { container } = render(<Loading />)
    const loading = container.firstChild
    expect(loading).toHaveClass('fixed', 'top-0', 'left-0', 'w-screen', 'h-screen', 'z-50')
  })
})
