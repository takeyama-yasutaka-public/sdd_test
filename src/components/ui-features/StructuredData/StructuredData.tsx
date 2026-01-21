/**
 * StructuredData
 * 仕様書: docs/ui/components/ui-features/StructuredData/specification.md
 */

import { siteMeta } from '@/features/utils/constants/constants'

interface StructuredDataProps {
  type?: string
  name?: string
  description?: string
  imageUrl?: string | null
  path?: string
  breadcrumb?: { path: string; name: string }[]
  isHome?: boolean
}

/**
 * StructuredDataコンポーネント
 * JSON-LD形式で構造化データ出力
 */
export function StructuredData({
  type,
  name,
  description,
  imageUrl,
  path,
  breadcrumb,
  isHome,
}: StructuredDataProps) {
  // JSON-LD生成
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': type || 'WebPage',
    headline: name || siteMeta.siteTitle,
    description: description || siteMeta.siteDesc,
    image: imageUrl || siteMeta.siteImgSrc,
    url: path ? `${siteMeta.siteUrl}${path}` : siteMeta.siteUrl,
  }

  // BreadcrumbList生成（isHome=false時のみ）
  const breadcrumbList: Record<string, unknown>[] = []
  if (!isHome && breadcrumb && breadcrumb.length > 0) {
    breadcrumbList.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumb.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${siteMeta.siteUrl}${item.path}`,
      })),
    })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {breadcrumbList.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList[0]) }}
        />
      )}
    </>
  )
}
