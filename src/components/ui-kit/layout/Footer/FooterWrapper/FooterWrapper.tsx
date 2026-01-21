/**
 * FooterWrapper
 * 仕様書: docs/ui/components/ui-kit/layout/Footer/FooterWrapper/specification.md
 */

'use client'

import { useEffect, ReactNode } from 'react'
import { useDrawerStore, useFooterWrapperStore } from '@/features/utils/zustand/zustand'

interface FooterWrapperProps {
  children: ReactNode
}

/**
 * FooterWrapperコンポーネント
 * drawerState=true時: inert属性をtrueに設定
 * スクロール時: FooterWrapperTopをzustandに保存
 */
export function FooterWrapper({ children }: FooterWrapperProps) {
  const { drawerState } = useDrawerStore()
  const { setFooterWrapperTop } = useFooterWrapperStore()

  useEffect(() => {
    const handleScroll = () => {
      const footerWrapper = document.querySelector('[data-footer-wrapper]')
      if (footerWrapper) {
        const rect = footerWrapper.getBoundingClientRect()
        setFooterWrapperTop(rect.top)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初期状態を確認

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setFooterWrapperTop])

  return (
    <footer data-footer-wrapper inert={drawerState ? true : undefined}>
      {children}
    </footer>
  )
}
