/**
 * 会社情報ページ
 * 仕様書: docs/ui/pages/about/specification.md
 */

import type { Metadata } from 'next'
import { siteMeta } from '@/features/utils/constants/constants'
import { StructuredData } from '@/components/ui-features/StructuredData/StructuredData'
import { Background } from '@/components/ui-kit/layout/Background/Background'
import { PageVisual } from '@/components/ui-kit/layout/PageVisual/PageVisual'
import { Container } from '@/components/ui-kit/layout/Container/Container'
import { Content, ContentBody } from '@/components/ui-kit/layout/Content/Content'
import { Container as AboutAndServiceContainer } from '@/components/ui-features/aboutAndService/Container/Container'
import { MediaAboutAndService } from '@/components/ui-kit/content/Media/Media'
import { HeadingEng } from '@/components/ui-kit/content/HeadingEng/HeadingEng'
import { Heading } from '@/components/ui-kit/content/Heading/Heading'
import { TableAbout } from '@/components/ui-kit/content/Table/Table'
import { CtaArea } from '@/components/ui-kit/content/CtaArea/CtaArea'
import { Breadcrumb } from '@/components/ui-kit/layout/Breadcrumb/Breadcrumb'

// メタデータ
export const metadata: Metadata = {
  title: `会社情報 | ${siteMeta.siteTitle}`,
  description: '会社情報ページの説明',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: `会社情報 | ${siteMeta.siteTitle}`,
    description: '会社情報ページの説明',
    siteName: siteMeta.siteTitle,
    type: 'article',
    locale: siteMeta.siteLocale,
    url: `${siteMeta.siteUrl}/about`,
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
  twitter: {
    title: `会社情報 | ${siteMeta.siteTitle}`,
    description: '会社情報ページの説明',
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
  { path: '/about', name: '会社情報' },
]

/**
 * 会社情報ページ
 */
export default async function AboutPage() {
  return (
    <>
      <StructuredData
        type="article"
        name="会社情報"
        description="会社情報ページの説明"
        path="/about"
        breadcrumb={breadcrumb}
      />
      <Background />
      <PageVisual english="ABOUT" japanese="会社情報" image="about" />

      {/* MISSION/VISIONセクション */}
      <AboutAndServiceContainer modifier="mission-and-vision">
        <ContentBody>
          <MediaAboutAndService>
            <Heading h="h2" modifier="second">
              MISSION
            </Heading>
            <p>ミッションの説明文が入ります。</p>
          </MediaAboutAndService>
          <MediaAboutAndService modifier="reverse">
            <Heading h="h2" modifier="second">
              VISION
            </Heading>
            <p>ビジョンの説明文が入ります。</p>
          </MediaAboutAndService>
        </ContentBody>
      </AboutAndServiceContainer>

      {/* MESSAGEセクション */}
      <AboutAndServiceContainer modifier="massage">
        <ContentBody>
          <MediaAboutAndService modifier="massage">
            <Heading h="h2" modifier="second">
              MESSAGE
            </Heading>
            <p>メッセージの説明文が入ります。</p>
          </MediaAboutAndService>
        </ContentBody>
      </AboutAndServiceContainer>

      {/* COMPANYセクション */}
      <AboutAndServiceContainer modifier="company">
        <ContentBody>
          <HeadingEng>COMPANY</HeadingEng>
          <TableAbout>
            <tbody>
              <tr>
                <th>会社名</th>
                <td>株式会社ウェブコーポレーション</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>東京都渋谷区...</td>
              </tr>
              <tr>
                <th>設立</th>
                <td>2020年1月1日</td>
              </tr>
            </tbody>
          </TableAbout>
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
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
