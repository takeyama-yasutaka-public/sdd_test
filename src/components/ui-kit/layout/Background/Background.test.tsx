/**
 * Background コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Background/specification.md
 */

import { render } from '@testing-library/react'
import { Background } from './Background'

describe('Background', () => {
  // 通常表示
  it('renders with default styles', () => {
    const { container } = render(<Background />)
    const background = container.firstChild
    expect(background).toBeInTheDocument()
  })

  // home=true時の表示
  it('applies home modifier', () => {
    const { container } = render(<Background home />)
    const background = container.firstChild
    expect(background).toBeInTheDocument()
  })
})
