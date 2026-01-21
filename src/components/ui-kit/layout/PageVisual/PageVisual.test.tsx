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
  useInView: () => [false, { ref: jest.fn() }],
}))

describe('PageVisual', () => {
  // 各imageパターンの表示
  it('renders with about image', () => {
    render(<PageVisual english="ABOUT" japanese="会社概要" image="about" />)
    expect(screen.getByText('ABOUT')).toBeInTheDocument()
    expect(screen.getByText('会社概要')).toBeInTheDocument()
  })

  // タイトル表示
  it('renders title', () => {
    render(<PageVisual english="SERVICE" japanese="サービス" image="service" />)
    expect(screen.getByText('SERVICE')).toBeInTheDocument()
    expect(screen.getByText('サービス')).toBeInTheDocument()
  })
})
