/**
 * List コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/content/List/specification.md
 */

import { render, screen } from '@testing-library/react'
import { BulletList, OrderList } from './List'

describe('BulletList', () => {
  // BulletList: 箇条書き表示
  it('renders as ul element', () => {
    const { container } = render(
      <BulletList>
        <li>項目1</li>
        <li>項目2</li>
      </BulletList>
    )
    const ul = container.querySelector('ul')
    expect(ul).toBeInTheDocument()
    expect(screen.getByText('項目1')).toBeInTheDocument()
    expect(screen.getByText('項目2')).toBeInTheDocument()
  })
})

describe('OrderList', () => {
  // OrderList: 番号付きリスト表示
  it('renders as ol element', () => {
    const { container } = render(
      <OrderList>
        <li>項目1</li>
        <li>項目2</li>
      </OrderList>
    )
    const ol = container.querySelector('ol')
    expect(ol).toBeInTheDocument()
    expect(screen.getByText('項目1')).toBeInTheDocument()
    expect(screen.getByText('項目2')).toBeInTheDocument()
  })
})
