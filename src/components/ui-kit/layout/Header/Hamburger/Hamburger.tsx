/**
 * Hamburger
 * 仕様書: docs/ui/components/ui-kit/layout/Header/Hamburger/specification.md
 */

'use client'

import { useDrawerStore, useHeaderResetStore } from '@/features/utils/zustand/zustand'

/**
 * Hamburgerコンポーネント
 * drawerToggleでドロワー開閉
 */
export function Hamburger() {
  const { drawerToggle, drawerState } = useDrawerStore()
  const { headerResetState } = useHeaderResetStore()

  const handleClick = () => {
    drawerToggle()
  }

  const transitionClass = headerResetState ? 'transition-none' : 'transition-all duration-300'

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${transitionClass} ${drawerState ? 'active' : ''}`}
      aria-label="メニューの開閉"
    >
      <div className="hamburgerBorder" />
    </button>
  )
}
