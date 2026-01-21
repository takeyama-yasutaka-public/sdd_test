/**
 * AboutAndService Container コンポーネントテスト
 * 仕様書: docs/ui/components/ui-features/aboutAndService/Container/specification.md
 */

import { render, screen } from '@testing-library/react'
import { Container } from './Container'

describe('Container', () => {
  // 各modifierパターンの表示
  it('renders with mission-and-vision modifier', () => {
    render(<Container modifier="mission-and-vision">コンテンツ</Container>)
    expect(screen.getByText('コンテンツ')).toBeInTheDocument()
  })

  it('renders with massage modifier', () => {
    render(<Container modifier="massage">コンテンツ</Container>)
    expect(screen.getByText('コンテンツ')).toBeInTheDocument()
  })
})
