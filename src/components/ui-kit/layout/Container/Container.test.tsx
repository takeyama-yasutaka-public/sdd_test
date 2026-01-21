/**
 * Container コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Container/specification.md
 */

import { render, screen } from '@testing-library/react'
import { Container } from './Container'

describe('Container', () => {
  // 通常のコンテナ表示
  it('renders with default styles', () => {
    render(<Container>コンテンツ</Container>)
    expect(screen.getByText('コンテンツ')).toBeInTheDocument()
  })

  // modifier='small'時の表示
  it('applies small modifier styles', () => {
    const { container } = render(<Container modifier="small">小さいコンテナ</Container>)
    const inner = container.querySelector('.max-w-\\[1080px\\]')
    expect(inner).toBeInTheDocument()
  })

  // レスポンシブ表示（スタイル確認）
  it('has responsive padding classes', () => {
    const { container } = render(<Container>コンテンツ</Container>)
    const inner = container.querySelector('.py-20')
    expect(inner).toBeInTheDocument()
  })
})
