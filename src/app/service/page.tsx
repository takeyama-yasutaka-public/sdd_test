/**
 * 事業内容ページ
 * 仕様書: docs/ui/pages/service/specification.md
 */

import type { Metadata } from 'next'
import { siteMeta } from '@/features/utils/constants/constants'
import { StructuredData } from '@/components/ui-features/StructuredData/StructuredData'
import { Background } from '@/components/ui-kit/layout/Background/Background'
import { PageVisual } from '@/components/ui-kit/layout/PageVisual/PageVisual'
import { Container } from '@/components/ui-kit/layout/Container/Container'
import { Content, ContentBody } from '@/components/ui-kit/layout/Content/Content'
import { Container as AboutAndServiceContainer } from '@/components/ui-features/aboutAndService/Container/Container'
import { MediaAboutAndService, MediaService } from '@/components/ui-kit/content/Media/Media'
import { HeadingEng } from '@/components/ui-kit/content/HeadingEng/HeadingEng'
import { Heading } from '@/components/ui-kit/content/Heading/Heading'
import { CtaArea } from '@/components/ui-kit/content/CtaArea/CtaArea'
import { Breadcrumb } from '@/components/ui-kit/layout/Breadcrumb/Breadcrumb'

// メタデータ
export const metadata: Metadata = {
  title: `事業内容 | ${siteMeta.siteTitle}`,
  description: '事業内容ページの説明',
  alternates: {
    canonical: '/service',
  },
  openGraph: {
    title: `事業内容 | ${siteMeta.siteTitle}`,
    description: '事業内容ページの説明',
    siteName: siteMeta.siteTitle,
    type: 'article',
    locale: siteMeta.siteLocale,
    url: `${siteMeta.siteUrl}/service`,
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
  twitter: {
    title: `事業内容 | ${siteMeta.siteTitle}`,
    description: '事業内容ページの説明',
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
  { path: '/service', name: '事業内容' },
]

/**
 * 事業内容ページ
 */
export default async function ServicePage() {
  return (
    <>
      <StructuredData
        type="article"
        name="事業内容"
        description="事業内容ページの説明"
        path="/service"
        breadcrumb={breadcrumb}
      />
      <Background />
      <PageVisual english="SERVICE" japanese="事業内容" image="service" />

      {/* BUSINESS MODELセクション */}
      <AboutAndServiceContainer modifier="business-model">
        <ContentBody>
          <MediaAboutAndService modifier="model">
            <Heading h="h2" modifier="second">
              BUSINESS MODEL
            </Heading>
            <p>ビジネスモデルの説明文が入ります。</p>
          </MediaAboutAndService>
        </ContentBody>
      </AboutAndServiceContainer>

      {/* OUR SERVICEセクション */}
      <AboutAndServiceContainer>
        <ContentBody>
          <HeadingEng>OUR SERVICE</HeadingEng>
          <MediaService>
            <Heading h="h3" modifier="third">
              WEBサイト制作
            </Heading>
            <p>WEBサイト制作の説明文が入ります。</p>
          </MediaService>
          <MediaService>
            <Heading h="h3" modifier="third">
              WEBアプリ開発
            </Heading>
            <p>WEBアプリ開発の説明文が入ります。</p>
          </MediaService>
          <MediaService>
            <Heading h="h3" modifier="third">
              デジタルマーケティング
            </Heading>
            <p>デジタルマーケティングの説明文が入ります。</p>
          </MediaService>
        </ContentBody>
      </AboutAndServiceContainer>

      <Container>
        <Content>
          <Breadcrumb breadcrumb={breadcrumb} />
        </Content>
      </Container>

      <CtaArea />
    </>
  )
}
