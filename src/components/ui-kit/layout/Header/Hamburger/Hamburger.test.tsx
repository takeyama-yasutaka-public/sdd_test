/**
 * Hamburger コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Header/Hamburger/specification.md
 */

import { render, screen, fireEvent } from '@testing-library/react'
import { Hamburger } from './Hamburger'

// zustand storeのモック
const mockDrawerToggle = jest.fn()
jest.mock('@/features/utils/zustand/zustand', () => ({
  useDrawerStore: () => ({
    drawerState: false,
    drawerToggle: mockDrawerToggle,
  }),
  useHeaderResetStore: () => ({
    headerResetState: false,
  }),
}))

describe('Hamburger', () => {
  // クリック時のドロワー開閉
  it('toggles drawer when clicked', () => {
    render(<Hamburger />)
    const button = screen.getByRole('button', { name: 'メニューの開閉' })
    fireEvent.click(button)
    expect(mockDrawerToggle).toHaveBeenCalledTimes(1)
  })
})
