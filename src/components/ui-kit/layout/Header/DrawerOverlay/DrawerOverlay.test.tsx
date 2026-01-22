/**
 * DrawerOverlay コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Header/DrawerOverlay/specification.md
 */

import { render, screen, fireEvent } from '@testing-library/react'
import { DrawerOverlay } from './DrawerOverlay'

// zustand storeのモック
const mockDrawerClose = jest.fn()
jest.mock('@/features/utils/zustand/zustand', () => ({
  useDrawerStore: () => ({
    drawerState: true,
    drawerClose: mockDrawerClose,
  }),
}))

describe('DrawerOverlay', () => {
  // drawerState=true/false時の表示/非表示（スタイル確認）
  it('renders with fixed positioning', () => {
    const { container } = render(<DrawerOverlay />)
    const overlay = container.firstChild
    expect(overlay).toHaveClass('fixed', 'inset-0', 'z-20')
  })

  // クリック時のdrawerClose
  it('closes drawer when clicked', () => {
    render(<DrawerOverlay />)
    const overlay = screen.getByRole('button', { hidden: true })
    fireEvent.click(overlay)
    expect(mockDrawerClose).toHaveBeenCalledTimes(1)
  })
})
