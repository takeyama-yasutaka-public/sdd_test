/**
 * FooterNav
 * 仕様書: docs/ui/components/ui-kit/layout/Footer/FooterNav/specification.md
 */

import Link from 'next/link'
import { globalNavi, ContactNavi } from '@/features/utils/constants/constants'

/**
 * FooterNavコンポーネント
 * フッターナビゲーション
 */
export function FooterNav() {
  return (
    <nav>
      <ul>
        {globalNavi.items.map((item) => (
          <li key={item.id}>
            <Link href={item.path}>
              {item.english} / {item.japanese}
            </Link>
          </li>
        ))}
        <li>
          <Link href={ContactNavi.path}>
            {ContactNavi.english} / {ContactNavi.japanese}
          </Link>
        </li>
        <li>
          <Link href="/privacy">個人情報保護方針</Link>
        </li>
      </ul>
    </nav>
  )
}
