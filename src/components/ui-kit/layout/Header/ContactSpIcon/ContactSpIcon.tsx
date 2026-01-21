/**
 * ContactSpIcon
 * 仕様書: docs/ui/components/ui-kit/layout/Header/ContactSpIcon/specification.md
 */

import Link from 'next/link'
import { ContactNavi } from '@/features/utils/constants/constants'

/**
 * ContactSpIconコンポーネント
 * SP時のみ表示
 */
export function ContactSpIcon() {
  return (
    <Link href={ContactNavi.path} className="hidden md:flex gap-[10px]">
      {ContactNavi.english}
    </Link>
  )
}
