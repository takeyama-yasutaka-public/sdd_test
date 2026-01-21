/**
 * コンポーネント一覧ページ
 * 仕様書: docs/ui/pages/component/specification.md
 */

import type { Metadata } from 'next'
import { siteMeta } from '@/features/utils/constants/constants'
import { StructuredData } from '@/components/ui-features/StructuredData/StructuredData'
import { Background } from '@/components/ui-kit/layout/Background/Background'
import { PageVisual } from '@/components/ui-kit/layout/PageVisual/PageVisual'
import { Container } from '@/components/ui-kit/layout/Container/Container'
import { Content, ContentBody } from '@/components/ui-kit/layout/Content/Content'
import { Breadcrumb } from '@/components/ui-kit/layout/Breadcrumb/Breadcrumb'
import { CtaArea } from '@/components/ui-kit/content/CtaArea/CtaArea'
import { ButtonAlert } from '@/components/ui-features/component/ButtonAlert/ButtonAlert'
import { Forms } from '@/components/ui-features/component/Forms/Forms'

// メタデータ
export const metadata: Metadata = {
  title: `コンポーネント一覧 | ${siteMeta.siteTitle}`,
  description: siteMeta.siteDesc,
  alternates: {
    canonical: '/component',
  },
  openGraph: {
    title: `コンポーネント一覧 | ${siteMeta.siteTitle}`,
    description: siteMeta.siteDesc,
    siteName: siteMeta.siteTitle,
    type: 'article',
    locale: siteMeta.siteLocale,
    url: `${siteMeta.siteUrl}/component`,
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
  twitter: {
    title: `コンポーネント一覧 | ${siteMeta.siteTitle}`,
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
  { path: '/component', name: 'コンポーネント一覧' },
]

/**
 * コンポーネント一覧ページ
 */
export default async function ComponentPage() {
  return (
    <>
      <StructuredData
        type="article"
        name="コンポーネント一覧"
        description={siteMeta.siteDesc}
        path="/component"
        breadcrumb={breadcrumb}
      />
      <Background />
      <PageVisual english="ABOUT" japanese="企業情報" image="about" />
      <PageVisual english="SERVICE" japanese="事業内容" image="service" />
      <PageVisual english="CASE" japanese="実績" image="case" />
      <PageVisual english="NEWS" japanese="お知らせ" image="news" />
      <PageVisual english="CONTACT" japanese="お問い合わせ" image="contact" />

      <Container>
        <Content>
          <ContentBody>
            <div className="space-y-20">
              <section>
                <h2>ButtonAlert</h2>
                <ButtonAlert />
              </section>
              <section>
                <h2>Component Forms</h2>
                <Forms />
              </section>
              {/* 他のコンポーネントの表示例も追加 */}
            </div>
          </ContentBody>
          <Breadcrumb breadcrumb={breadcrumb} />
        </Content>
      </Container>

      <CtaArea />
    </>
  )
}
