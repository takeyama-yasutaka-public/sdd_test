/**
 * Wrapper
 * 仕様書: docs/ui/components/ui-kit/layout/Wrapper/specification.md
 */

'use client'

import { ReactNode } from 'react'
import { useDrawerStore } from '@/features/utils/zustand/zustand'

interface WrapperProps {
  children: ReactNode
}

/**
 * Wrapperコンポーネント
 * ヘッダー高さ分のpadding-topを設定
 * drawerState=true時: inert属性をtrueに設定
 */
export function Wrapper({ children }: WrapperProps) {
  const drawerState = useDrawerStore((state) => state.drawerState)

  return (
    <div className="relative flex-1 flex flex-col pt-20 md:pt-20" inert={drawerState ? true : undefined}>
      {children}
    </div>
  )
}
