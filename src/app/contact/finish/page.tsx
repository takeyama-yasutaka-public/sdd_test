/**
 * お問い合わせ完了ページ
 * 仕様書: docs/ui/pages/contact/finish/specification.md
 */

import type { Metadata } from 'next'
import { siteMeta } from '@/features/utils/constants/constants'
import { StructuredData } from '@/components/ui-features/StructuredData/StructuredData'
import { Background } from '@/components/ui-kit/layout/Background/Background'
import { PageVisual } from '@/components/ui-kit/layout/PageVisual/PageVisual'
import { Container } from '@/components/ui-kit/layout/Container/Container'
import { Content, ContentHeader, ContentBody, ContentFooter } from '@/components/ui-kit/layout/Content/Content'
import { Heading } from '@/components/ui-kit/content/Heading/Heading'
import { Button } from '@/components/ui-kit/content/Button/Button'
import { Breadcrumb } from '@/components/ui-kit/layout/Breadcrumb/Breadcrumb'

// メタデータ
export const metadata: Metadata = {
  title: `お問い合わせ完了 | ${siteMeta.siteTitle}`,
  description: siteMeta.siteDesc,
  alternates: {
    canonical: '/contact/finish',
  },
  openGraph: {
    title: `お問い合わせ完了 | ${siteMeta.siteTitle}`,
    description: siteMeta.siteDesc,
    siteName: siteMeta.siteTitle,
    type: 'article',
    locale: siteMeta.siteLocale,
    url: `${siteMeta.siteUrl}/contact/finish`,
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
  twitter: {
    title: `お問い合わせ完了 | ${siteMeta.siteTitle}`,
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
  { path: '/contact', name: 'お問い合わせ' },
  { path: '/contact/finish', name: 'お問い合わせ完了' },
]

/**
 * お問い合わせ完了ページ
 */
export default async function ContactFinishPage() {
  return (
    <>
      <StructuredData
        type="article"
        name="お問い合わせ完了"
        description={siteMeta.siteDesc}
        path="/contact/finish"
        breadcrumb={breadcrumb}
      />
      <Background />
      <PageVisual english="CONTACT" japanese="お問い合わせ" image="contact" />

      <Container modifier="small">
        <Content>
          <ContentHeader>
            <Heading h="h1" modifier="first">
              お問い合わせありがとうございます。
            </Heading>
          </ContentHeader>
          <ContentBody>
            <p>お問い合わせを受け付けました。担当者より折り返しご連絡いたします。</p>
          </ContentBody>
          <ContentFooter>
            <Button href="/">トップへ戻る</Button>
          </ContentFooter>
          <Breadcrumb breadcrumb={breadcrumb} />
        </Content>
      </Container>
    </>
  )
}
