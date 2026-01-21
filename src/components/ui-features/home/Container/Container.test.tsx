/**
 * Home Container コンポーネントテスト
 * 仕様書: docs/ui/components/ui-features/home/Container/specification.md
 */

import { render, screen } from '@testing-library/react'
import { Container } from './Container'

describe('Container', () => {
  // 通常表示
  it('renders children', () => {
    render(<Container modifier="about">コンテンツ</Container>)
    expect(screen.getByText('コンテンツ')).toBeInTheDocument()
  })

  // modifier='service'時の表示
  it('applies service modifier', () => {
    render(<Container modifier="service">サービス</Container>)
    expect(screen.getByText('サービス')).toBeInTheDocument()
  })
})
