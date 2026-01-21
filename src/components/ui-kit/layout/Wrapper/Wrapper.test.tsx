/**
 * Wrapper コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Wrapper/specification.md
 */

import { render, screen } from '@testing-library/react'
import { Wrapper } from './Wrapper'

// zustand storeのモック
jest.mock('@/features/utils/zustand', () => ({
  useDrawerStore: () => ({
    drawerState: false,
  }),
}))

describe('Wrapper', () => {
  // 通常表示
  it('renders children', () => {
    render(<Wrapper>コンテンツ</Wrapper>)
    expect(screen.getByText('コンテンツ')).toBeInTheDocument()
  })

  // drawerState=true時のinert属性（スタイル確認）
  it('has padding-top for header', () => {
    const { container } = render(<Wrapper>コンテンツ</Wrapper>)
    const wrapper = container.firstChild
    expect(wrapper).toHaveClass('pt-20')
  })
})
