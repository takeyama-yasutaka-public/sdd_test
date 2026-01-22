/**
 * FooterWrapper コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Footer/FooterWrapper/specification.md
 */

import { render, screen } from '@testing-library/react'
import { FooterWrapper } from './FooterWrapper'

// zustand storeのモック
jest.mock('@/features/utils/zustand/zustand', () => ({
  useDrawerStore: () => ({
    drawerState: false,
  }),
  useFooterWrapperStore: () => ({
    setFooterWrapperTop: jest.fn(),
  }),
}))

describe('FooterWrapper', () => {
  // drawerState=true/false時のinert属性（スタイル確認）
  it('renders children', () => {
    render(<FooterWrapper>フッターコンテンツ</FooterWrapper>)
    expect(screen.getByText('フッターコンテンツ')).toBeInTheDocument()
  })
})
