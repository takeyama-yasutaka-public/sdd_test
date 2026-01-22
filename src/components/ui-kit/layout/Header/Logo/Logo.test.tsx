/**
 * Logo コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Header/Logo/specification.md
 */

import { render, screen } from '@testing-library/react'
import { Logo } from './Logo'

// Next.js LinkとImageのモック
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

// usePathnameのモック
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

// zustand storeのモック
jest.mock('@/features/utils/zustand/zustand', () => ({
  useHeaderResetStore: () => ({
    headerResetOn: jest.fn(),
    headerResetOff: jest.fn(),
  }),
}))

describe('Logo', () => {
  // トップページ時のh1要素
  it('renders as h1 on home page', () => {
    render(<Logo />)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toBeInTheDocument()
  })
})
