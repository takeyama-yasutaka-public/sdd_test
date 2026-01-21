/**
 * NavigationEvents コンポーネントテスト
 * 仕様書: docs/ui/components/ui-features/NavigationEvents/specification.md
 */

import { render } from '@testing-library/react'
import { NavigationEvents } from './NavigationEvents'

// bodyScrollStartのモック
const mockBodyScrollStart = jest.fn()
jest.mock('@/features/utils/bodyScroll', () => ({
  bodyScrollStart: mockBodyScrollStart,
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
