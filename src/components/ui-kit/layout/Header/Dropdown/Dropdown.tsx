/**
 * Dropdown
 * 仕様書: docs/ui/components/ui-kit/layout/Header/Dropdown/specification.md
 */

import Link from 'next/link'
import { globalNavi, ContactNavi } from '@/features/utils/constants/constants'
import { DropdownItem } from './DropdownItem/DropdownItem'

/**
 * Dropdownコンポーネント
 * PCナビゲーション
 */
export function Dropdown() {
  return (
    <div className="wrapper">
      <ul className="dropdown">
        {globalNavi.items.map((item) => (
          <DropdownItem key={item.id} path={item.path} english={item.english} japanese={item.japanese} />
        ))}
      </ul>
      <Link href={ContactNavi.path} className="contact">
        {ContactNavi.english}
      </Link>
    </div>
  )
}
