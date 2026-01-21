/**
 * Logo
 * 仕様書: docs/ui/components/ui-kit/layout/Header/Logo/specification.md
 */

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useHeaderResetStore } from '@/features/utils/zustand/zustand'

/**
 * Logoコンポーネント
 * pathname==='/'時: h1要素（SEO）
 * pathname!=='/'時: div要素
 */
export function Logo() {
  const pathname = usePathname()
  const { headerResetOn, headerResetOff } = useHeaderResetStore()

  const handleClick = () => {
    headerResetOn()
    setTimeout(() => {
      headerResetOff()
    }, 100)
  }

  const logoContent = (
    <>
      <Image src="/images/logo.png" alt="WEB CORPORATION" width={120} height={40} priority />
      <p>WEB CORPORATION</p>
    </>
  )

  if (pathname === '/') {
    return (
      <Link href="/" onClick={handleClick}>
        <h1>{logoContent}</h1>
      </Link>
    )
  }

  return (
    <Link href="/" onClick={handleClick}>
      <div>{logoContent}</div>
    </Link>
  )
}
