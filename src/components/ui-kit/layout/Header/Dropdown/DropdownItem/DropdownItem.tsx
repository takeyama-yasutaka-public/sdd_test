/**
 * DropdownItem
 * 仕様書: docs/ui/components/ui-kit/layout/Header/Dropdown/DropdownItem/specification.md
 */

import Link from 'next/link'

interface DropdownItemProps {
  path: string
  english: string
  japanese: string
}

/**
 * DropdownItemコンポーネント
 * ナビゲーション項目表示
 */
export function DropdownItem({ path, english, japanese }: DropdownItemProps) {
  return (
    <Link href={path}>
      <span>{english}</span>
      <span>{japanese}</span>
    </Link>
  )
}
