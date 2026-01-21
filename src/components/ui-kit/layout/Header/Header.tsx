/**
 * Header
 * 仕様書: docs/ui/components/ui-kit/layout/Header/specification.md
 */

'use client'

import { useDrawerStore } from '@/features/utils/zustand/zustand'
import { Logo } from './Logo/Logo'
import { Dropdown } from './Dropdown/Dropdown'
import { ContactSpIcon } from './ContactSpIcon/ContactSpIcon'
import { Hamburger } from './Hamburger/Hamburger'
import { Drawer } from './Drawer/Drawer'
import { DrawerOverlay } from './DrawerOverlay/DrawerOverlay'

/**
 * Headerコンポーネント
 * drawerState=true時: modifier='active'
 */
export function Header() {
  const { drawerState } = useDrawerStore()

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 md:h-20 z-30 transition-all duration-300 hover:bg-opacity-white-095 ${
        drawerState ? 'bg-opacity-white-095 transition-delay-0' : ''
      }`}
    >
      <div className="flex justify-between items-center relative w-full px-10 md:px-[10px]">
        <Logo />

        {/* PCナビゲーション */}
        <nav className="h-full md:hidden">
          <Dropdown />
        </nav>

        {/* SPアイコン */}
        <div className="hidden gap-[10px] md:flex">
          <ContactSpIcon />
          <Hamburger />
        </div>
      </div>

      {/* SPドロワー */}
      <nav className="absolute top-0 right-0 md:hidden">
        <Drawer />
      </nav>

      {/* ドロワーオーバーレイ */}
      <DrawerOverlay />
    </header>
  )
}
