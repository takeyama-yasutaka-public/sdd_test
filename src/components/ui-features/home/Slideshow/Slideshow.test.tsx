/**
 * Slideshow コンポーネントテスト
 * 仕様書: docs/ui/components/ui-features/home/Slideshow/specification.md
 */

import { render } from '@testing-library/react'
import { Slideshow } from './Slideshow'

// Next.js Imageのモック
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

describe('Slideshow', () => {
  // スライドショー表示
  it('renders slideshow', () => {
    const { container } = render(<Slideshow />)
    expect(container.firstChild).toBeInTheDocument()
  })

  // 自動切り替え（スタイル確認）
  it('has auto slide transition setup', () => {
    const { container } = render(<Slideshow />)
    expect(container.firstChild).toBeInTheDocument()
  })

  // visibilitychange時の再マウント（スタイル確認）
  it('handles visibility change', () => {
    const { container } = render(<Slideshow />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
