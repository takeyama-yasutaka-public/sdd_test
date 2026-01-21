/**
 * Drawer
 * 仕様書: docs/ui/components/ui-kit/layout/Header/Drawer/specification.md
 */

'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useDrawerStore, useHeaderResetStore } from '@/features/utils/zustand/zustand'
import { bodyScrollStop, bodyScrollStart } from '@/features/utils/bodyScroll/bodyScroll'
import { globalNavi, ContactNavi } from '@/features/utils/constants/constants'
import { DrawerItem } from './DrawerItem/DrawerItem'

/**
 * Drawerコンポーネント
 * SPドロワーメニュー
 */
export function Drawer() {
  const { drawerState, drawerDuration, drawerClose, drawerWidthReset } = useDrawerStore()
  const { headerResetState } = useHeaderResetStore()

  // drawerState=true時: bodyScrollStop
  // drawerState=false時: bodyScrollStart
  useEffect(() => {
    if (drawerState) {
      bodyScrollStop()
    } else {
      bodyScrollStart()
    }
  }, [drawerState])

  // ウィンドウリサイズ時: min-width:992pxでdrawerClose
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992 && drawerState) {
        drawerClose()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [drawerState, drawerClose])

  const transitionClass = headerResetState ? 'transition-none' : 'transition-all'
  const drawerWidth = drawerWidthReset ? 0 : 320 // ドロワー幅（仮）
  const right = drawerState ? `${drawerWidth - 1}px` : '0'

  return (
    <ul
      className={`${transitionClass} ${drawerState ? 'active' : ''}`}
      style={{ '--duration': `${drawerDuration}ms`, right } as React.CSSProperties}
    >
      {globalNavi.items.map((item) => (
        <DrawerItem key={item.id} path={item.path} english={item.english} japanese={item.japanese} />
      ))}
      <li className="contactWrapper">
        <Link href={ContactNavi.path} className="contact">
          {ContactNavi.english}
        </Link>
      </li>
    </ul>
  )
}
