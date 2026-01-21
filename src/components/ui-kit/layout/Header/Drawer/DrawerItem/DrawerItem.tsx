/**
 * DrawerItem
 * 仕様書: docs/ui/components/ui-kit/layout/Header/Drawer/DrawerItem/specification.md
 */

import Link from 'next/link'

interface DrawerItemProps {
  path: string
  english: string
  japanese: string
}

/**
 * DrawerItemコンポーネント
 * ドロワー項目表示
 */
export function DrawerItem({ path, english, japanese }: DrawerItemProps) {
  return (
    <li>
      <Link href={path}>
        <span>{english}</span>
        <span>{japanese}</span>
      </Link>
    </li>
  )
}
