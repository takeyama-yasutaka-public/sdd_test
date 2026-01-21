/**
 * Divider コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/content/Divider/specification.md
 */

import { render } from '@testing-library/react'
import { Divider } from './Divider'

describe('Divider', () => {
  // 区切り線表示
  it('renders as hr element', () => {
    const { container } = render(<Divider />)
    const hr = container.querySelector('hr')
    expect(hr).toBeInTheDocument()
    expect(hr).toHaveClass('w-full', 'border-border-divider')
  })
})
