/**
 * PageVisual コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/PageVisual/specification.md
 */

import { render, screen } from '@testing-library/react'
import { PageVisual } from './PageVisual'

// Next.js Imageのモック
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

// react-intersection-observerのモック
jest.mock('react-intersection-observer', () => ({
  // 実装側は [ref, inView] として利用している
  useInView: () => [jest.fn(), false],
}))

describe('PageVisual', () => {
  // 各imageパターンの表示
  it('renders with about image', () => {
    const { container } = render(<PageVisual english="ABOUT" japanese="会社概要" image="about" />)
    // 英文は1文字ずつ分割されるため、親要素のtextContentで確認
    expect(container).toHaveTextContent('ABOUT')
    expect(screen.getByText('会社概要')).toBeInTheDocument()
  })

  // タイトル表示
  it('renders title', () => {
    const { container } = render(<PageVisual english="SERVICE" japanese="サービス" image="service" />)
    // 英文は1文字ずつ分割されるため、親要素のtextContentで確認
    expect(container).toHaveTextContent('SERVICE')
    expect(screen.getByText('サービス')).toBeInTheDocument()
  })
})
