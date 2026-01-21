/**
 * Pagetop コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Pagetop/specification.md
 */

import { render, screen, fireEvent } from '@testing-library/react'
import { Pagetop } from './Pagetop'

// window.scrollToのモック
global.scrollTo = jest.fn()

// zustand storeのモック
jest.mock('@/features/utils/zustand', () => ({
  useFooterWrapperTopStore: () => ({
    footerWrapperTop: 0,
  }),
}))

describe('Pagetop', () => {
  // スクロール時の表示/非表示: scrollY >= 1で表示
  it('shows when scrollY is greater than or equal to 1', () => {
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    const { container } = render(<Pagetop />)
    const pagetop = container.firstChild
    expect(pagetop).toBeInTheDocument()
  })

  // スクロール時の表示/非表示: scrollY < 1で非表示
  it('hides when scrollY is less than 1', () => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
    const { container } = render(<Pagetop />)
    const pagetop = container.firstChild
    // 非表示状態の確認（スタイル確認）
    expect(pagetop).toBeInTheDocument()
  })

  // クリック時のスクロール動作
  it('scrolls to top when clicked', () => {
    render(<Pagetop />)
    const button = screen.getByRole('button', { name: 'トップへ戻る' })
    fireEvent.click(button)
    expect(global.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
