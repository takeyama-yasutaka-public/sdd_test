/**
 * Breadcrumb
 * 仕様書: docs/ui/components/ui-kit/layout/Breadcrumb/specification.md
 */

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  path: string
  name: string
}

interface BreadcrumbProps {
  breadcrumb: BreadcrumbItem[]
}

/**
 * Breadcrumbコンポーネント
 * パンくずリスト表示
 * 最後の項目はLinkではなくp要素
 */
export function Breadcrumb({ breadcrumb }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2" aria-label="パンくずリスト">
      {breadcrumb.map((item, index) => {
        const isLast = index === breadcrumb.length - 1

        return (
          <div key={item.path} className="flex items-center gap-2">
            {isLast ? (
              <p>{item.name}</p>
            ) : (
              <>
                <Link href={item.path}>{item.name}</Link>
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </>
            )}
          </div>
        )
      })}
    </nav>
  )
}
