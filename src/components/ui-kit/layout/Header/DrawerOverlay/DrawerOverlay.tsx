/**
 * DrawerOverlay
 * 仕様書: docs/ui/components/ui-kit/layout/Header/DrawerOverlay/specification.md
 */

'use client'

import { useDrawerStore } from '@/features/utils/zustand/zustand'

/**
 * DrawerOverlayコンポーネント
 * drawerState=true時: 表示、クリックでdrawerClose
 */
export function DrawerOverlay() {
  const { drawerState, drawerClose } = useDrawerStore()

  if (!drawerState) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-20 bg-black bg-opacity-50"
      onClick={drawerClose}
      aria-hidden="true"
    />
  )
}
