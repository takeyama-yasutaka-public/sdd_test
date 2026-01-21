/**
 * Drawer コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Header/Drawer/specification.md
 */

import { render } from '@testing-library/react'
import { Drawer } from './Drawer'

// zustand storeのモック
jest.mock('@/features/utils/zustand', () => ({
  useDrawerStore: () => ({
    drawerState: false,
    drawerWidth: 400,
    drawerDuration: 300,
    headerResetState: false,
    drawerClose: jest.fn(),
  }),
}))

// bodyScrollのモック
jest.mock('@/features/utils/bodyScroll', () => ({
  bodyScrollStop: jest.fn(),
  bodyScrollStart: jest.fn(),
}))

// DrawerItemのモック
jest.mock('./DrawerItem', () => ({
  DrawerItem: ({ path, english, japanese }: any) => (
    <li>
      <a href={path}>{english} {japanese}</a>
    </li>
  ),
}))

// Next.js Linkのモック
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

describe('Drawer', () => {
  // drawerState=true/false時の動作（スタイル確認）
  it('renders with default styles', () => {
    const { container } = render(<Drawer />)
    const drawer = container.querySelector('ul')
    expect(drawer).toBeInTheDocument()
  })
})
