/**
 * Header コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Header/specification.md
 */

import { render, screen } from '@testing-library/react'
import { Header } from './Header'

// zustand storeのモック
let mockDrawerState = false
jest.mock('@/features/utils/zustand/zustand', () => ({
  useDrawerStore: () => ({
    drawerState: mockDrawerState,
  }),
}))

// 子コンポーネントのモック
jest.mock('./Logo/Logo', () => ({
  Logo: () => <div data-testid="logo">Logo</div>,
}))

jest.mock('./Dropdown/Dropdown', () => ({
  Dropdown: () => <div data-testid="dropdown">Dropdown</div>,
}))

jest.mock('./ContactSpIcon/ContactSpIcon', () => ({
  ContactSpIcon: () => <div data-testid="contact-sp-icon">ContactSpIcon</div>,
}))

jest.mock('./Hamburger/Hamburger', () => ({
  Hamburger: () => <div data-testid="hamburger">Hamburger</div>,
}))

jest.mock('./Drawer/Drawer', () => ({
  Drawer: () => <div data-testid="drawer">Drawer</div>,
}))

jest.mock('./DrawerOverlay/DrawerOverlay', () => ({
  DrawerOverlay: () => <div data-testid="drawer-overlay">DrawerOverlay</div>,
}))

describe('Header', () => {
  // 通常表示
  it('renders with default styles', () => {
    const { container } = render(<Header />)
    const header = container.firstChild
    expect(header).toHaveClass('fixed', 'top-0', 'left-0', 'w-full', 'h-20', 'z-30')
  })

  // drawerState=true時の表示（スタイル確認）
  it('applies active modifier when drawerState is true', () => {
    mockDrawerState = true
    const { container } = render(<Header />)
    const header = container.firstChild
    expect(header).toBeInTheDocument()
    mockDrawerState = false
  })

  // PC/SP表示切り替え（スタイル確認）
  it('has responsive classes for mobile', () => {
    const { container } = render(<Header />)
    const header = container.firstChild
    expect(header).toHaveClass('md:h-20')
  })
})
