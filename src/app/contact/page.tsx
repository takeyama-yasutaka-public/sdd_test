/**
 * お問い合わせページ
 * 仕様書: docs/ui/pages/contact/specification.md
 */

import type { Metadata } from 'next'
import { siteMeta } from '@/features/utils/constants/constants'
import { StructuredData } from '@/components/ui-features/StructuredData/StructuredData'
import { Background } from '@/components/ui-kit/layout/Background/Background'
import { PageVisual } from '@/components/ui-kit/layout/PageVisual/PageVisual'
import { Container } from '@/components/ui-kit/layout/Container/Container'
import { Content } from '@/components/ui-kit/layout/Content/Content'
import { Forms } from '@/components/ui-features/contact/Forms/Forms'
import { Breadcrumb } from '@/components/ui-kit/layout/Breadcrumb/Breadcrumb'

// メタデータ
export const metadata: Metadata = {
  title: `お問い合わせ | ${siteMeta.siteTitle}`,
  description: 'お問い合わせページの説明',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `お問い合わせ | ${siteMeta.siteTitle}`,
    description: 'お問い合わせページの説明',
    siteName: siteMeta.siteTitle,
    type: 'article',
    locale: siteMeta.siteLocale,
    url: `${siteMeta.siteUrl}/contact`,
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
  twitter: {
    title: `お問い合わせ | ${siteMeta.siteTitle}`,
    description: 'お問い合わせページの説明',
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
  { path: '/contact', name: 'お問い合わせ' },
]

/**
 * お問い合わせページ
 */
export default async function ContactPage() {
  return (
    <>
      <StructuredData
        type="article"
        name="お問い合わせ"
        description="お問い合わせページの説明"
        path="/contact"
        breadcrumb={breadcrumb}
      />
      <Background />
      <PageVisual english="CONTACT" japanese="お問い合わせ" image="contact" />

      <Container modifier="small">
        <Content>
          <Forms />
          <Breadcrumb breadcrumb={breadcrumb} />
        </Content>
      </Container>
    </>
  )
}
