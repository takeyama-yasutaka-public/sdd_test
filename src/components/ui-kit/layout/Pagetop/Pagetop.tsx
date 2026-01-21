/**
 * Pagetop
 * 仕様書: docs/ui/components/ui-kit/layout/Pagetop/specification.md
 */

'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

/**
 * Pagetopコンポーネント
 * scrollY >= 1で表示
 * クリックでwindow.scroll({ top: 0, behavior: 'smooth' })
 */
export function Pagetop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 1)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初期状態を確認

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 z-10 flex flex-col items-center gap-1"
      aria-label="トップへ戻る"
    >
      <p className="text-sm">top</p>
      <ChevronUp className="w-4 h-4" aria-hidden="true" />
    </button>
  )
}
