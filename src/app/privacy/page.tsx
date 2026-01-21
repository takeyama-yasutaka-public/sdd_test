/**
 * 個人情報保護方針ページ
 * 仕様書: docs/ui/pages/privacy/specification.md
 */

import type { Metadata } from 'next'
import { siteMeta } from '@/features/utils/constants/constants'
import { StructuredData } from '@/components/ui-features/StructuredData/StructuredData'
import { Background } from '@/components/ui-kit/layout/Background/Background'
import { Container } from '@/components/ui-kit/layout/Container/Container'
import { Content, ContentHeader, ContentBody } from '@/components/ui-kit/layout/Content/Content'
import { Heading } from '@/components/ui-kit/content/Heading/Heading'
import { BulletList } from '@/components/ui-kit/content/List/List'
import { Breadcrumb } from '@/components/ui-kit/layout/Breadcrumb/Breadcrumb'

// メタデータ
export const metadata: Metadata = {
  title: `個人情報保護方針 | ${siteMeta.siteTitle}`,
  description: '個人情報保護方針ページの説明',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: `個人情報保護方針 | ${siteMeta.siteTitle}`,
    description: '個人情報保護方針ページの説明',
    siteName: siteMeta.siteTitle,
    type: 'article',
    locale: siteMeta.siteLocale,
    url: `${siteMeta.siteUrl}/privacy`,
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
  twitter: {
    title: `個人情報保護方針 | ${siteMeta.siteTitle}`,
    description: '個人情報保護方針ページの説明',
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
  { path: '/privacy', name: '個人情報保護方針' },
]

/**
 * 個人情報保護方針ページ
 */
export default async function PrivacyPage() {
  return (
    <>
      <StructuredData
        type="article"
        name="個人情報保護方針"
        description="個人情報保護方針ページの説明"
        path="/privacy"
        breadcrumb={breadcrumb}
      />
      <Background />
      <Container modifier="small">
        <Content>
          <ContentHeader>
            <Heading h="h1" modifier="first">
              個人情報保護方針
            </Heading>
          </ContentHeader>
          <ContentBody>
            <Heading h="h2" modifier="second">
              第1条（個人情報）
            </Heading>
            <BulletList>
              <li>個人情報とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報を指します。</li>
            </BulletList>
            <Heading h="h2" modifier="second">
              第2条（個人情報の収集方法）
            </Heading>
            <BulletList>
              <li>当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号、運転免許証番号などの個人情報をお尋ねすることがあります。</li>
            </BulletList>
            {/* 他の条項も同様に追加 */}
          </ContentBody>
          <Breadcrumb breadcrumb={breadcrumb} />
        </Content>
      </Container>
    </>
  )
}
