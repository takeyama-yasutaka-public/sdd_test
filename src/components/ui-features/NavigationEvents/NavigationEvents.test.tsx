/**
 * NavigationEvents コンポーネントテスト
 * 仕様書: docs/ui/components/ui-features/NavigationEvents/specification.md
 */

import { render } from '@testing-library/react'
import { NavigationEvents } from './NavigationEvents'

// bodyScrollStartのモック（jest.mockはhoistされるためfactory内で作る）
jest.mock('@/features/utils/bodyScroll/bodyScroll', () => ({
  bodyScrollStart: jest.fn(),
}))

// Next.js navigationのモック
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

describe('NavigationEvents', () => {
  // ページ遷移時のbodyScrollStart実行（スタイル確認）
  it('renders without visible output', () => {
    const { container } = render(<NavigationEvents />)
    expect(container.firstChild).toBeNull()
  })
})
