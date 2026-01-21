/**
 * NavigationEvents
 * 仕様書: docs/ui/components/ui-features/NavigationEvents/specification.md
 */

'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { bodyScrollStart } from '@/features/utils/bodyScroll/bodyScroll'

/**
 * NavigationEventsコンポーネント
 * ページ遷移時にbodyScrollStart(true)で最上部へスクロール
 */
export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    bodyScrollStart(true)
  }, [pathname, searchParams])

  return null
}
