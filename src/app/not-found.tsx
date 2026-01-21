/**
 * 404ページ
 * 仕様書: docs/ui/pages/not-found/specification.md
 */

import type { Metadata } from 'next'
import { siteMeta } from '@/features/utils/constants/constants'
import { StructuredData } from '@/components/ui-features/StructuredData/StructuredData'
import { Background } from '@/components/ui-kit/layout/Background/Background'
import { Container } from '@/components/ui-kit/layout/Container/Container'
import { Content, ContentHeader, ContentBody } from '@/components/ui-kit/layout/Content/Content'
import { Heading } from '@/components/ui-kit/content/Heading/Heading'
import { Breadcrumb } from '@/components/ui-kit/layout/Breadcrumb/Breadcrumb'

// メタデータ
export const metadata: Metadata = {
  title: `ページが見つかりません | ${siteMeta.siteTitle}`,
  description: siteMeta.siteDesc,
  alternates: {
    canonical: '/404',
  },
  openGraph: {
    title: `ページが見つかりません | ${siteMeta.siteTitle}`,
    description: siteMeta.siteDesc,
    siteName: siteMeta.siteTitle,
    type: 'article',
    locale: siteMeta.siteLocale,
    url: `${siteMeta.siteUrl}/404`,
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
  twitter: {
    title: `ページが見つかりません | ${siteMeta.siteTitle}`,
    description: siteMeta.siteDesc,
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
  robots: {
    index: false,
  },
}

// パンくずデータ
const breadcrumb = [
  { path: '/', name: 'TOP' },
  { path: '/404', name: 'ページが見つかりません' },
]

/**
 * 404ページ
 */
export default function NotFoundPage() {
  return (
    <>
      <StructuredData
        type="article"
        name="ページが見つかりません"
        description={siteMeta.siteDesc}
        path="/404"
        breadcrumb={breadcrumb}
      />
      <Background />
      <Container modifier="small">
        <Content>
          <ContentHeader>
            <Heading h="h1" modifier="first">
              ページが見つかりません
            </Heading>
          </ContentHeader>
          <ContentBody>
            <p>お探しのページは見つかりませんでした。</p>
          </ContentBody>
          <Breadcrumb breadcrumb={breadcrumb} />
        </Content>
      </Container>
    </>
  )
}
