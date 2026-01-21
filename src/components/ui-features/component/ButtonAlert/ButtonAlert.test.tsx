/**
 * ButtonAlert コンポーネントテスト
 * 仕様書: docs/ui/components/ui-features/component/ButtonAlert/specification.md
 */

import { render, screen, fireEvent } from '@testing-library/react'
import { ButtonAlert } from './ButtonAlert'

// window.alertのモック
global.alert = jest.fn()

describe('ButtonAlert', () => {
  // クリック時のアラート表示
  it('shows alert when clicked', () => {
    render(<ButtonAlert />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(global.alert).toHaveBeenCalledWith('alert')
  })
})
