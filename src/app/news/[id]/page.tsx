/**
 * ニュース詳細ページ
 * 仕様書: docs/ui/pages/news/[id]/specification.md
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { siteMeta, eyecatchLocal } from '@/features/utils/constants/constants'
import { getNewsPostById, getNewsAll } from '@/features/api/microcms/microcms'
import { extractText } from '@/features/utils/extractText/extractText'
import { formatDate } from '@/features/utils/formatDate/formatDate'
import { StructuredData } from '@/components/ui-features/StructuredData/StructuredData'
import { Background } from '@/components/ui-kit/layout/Background/Background'
import { Container } from '@/components/ui-kit/layout/Container/Container'
import { Content, ContentHeader, ContentBody, ContentFooter } from '@/components/ui-kit/layout/Content/Content'
import { Heading } from '@/components/ui-kit/content/Heading/Heading'
import { ConvertBody } from '@/components/ui-features/ConvertBody/ConvertBody'
import { CtaArea } from '@/components/ui-kit/content/CtaArea/CtaArea'
import { Breadcrumb } from '@/components/ui-kit/layout/Breadcrumb/Breadcrumb'

// ISR設定
export const revalidate = 60

// 動的パラメータ設定
export const dynamicParams = false

/**
 * 静的パラメータ生成
 */
export async function generateStaticParams() {
  const newsData = await getNewsAll()
  const newsList = newsData?.contents || []

  return newsList.map((news) => ({
    id: news.id,
  }))
}

/**
 * メタデータ生成
 */
export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const news = await getNewsPostById(params.id)

  if (!news) {
    return {
      title: `ニュース | ${siteMeta.siteTitle}`,
    }
  }

  const description = extractText(news.content)

  return {
    title: `${news.title} | ${siteMeta.siteTitle}`,
    description,
    alternates: {
      canonical: `/news/${params.id}`,
    },
    openGraph: {
      title: `${news.title} | ${siteMeta.siteTitle}`,
      description,
      siteName: siteMeta.siteTitle,
      type: 'article',
      locale: siteMeta.siteLocale,
      url: `${siteMeta.siteUrl}/news/${params.id}`,
      images: {
        url: eyecatchLocal.url,
        width: eyecatchLocal.width,
        height: eyecatchLocal.height,
      },
    },
    twitter: {
      title: `${news.title} | ${siteMeta.siteTitle}`,
      description,
      images: {
        url: eyecatchLocal.url,
        width: eyecatchLocal.width,
        height: eyecatchLocal.height,
      },
    },
  }
}

/**
 * ニュース詳細ページ
 */
export default async function NewsDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const news = await getNewsPostById(params.id)

  if (!news) {
    notFound()
  }

  const description = extractText(news.content)
  const formattedDate = formatDate(news.date)

  // パンくずデータ
  const breadcrumb = [
    { path: '/', name: 'TOP' },
    { path: '/news', name: 'ニュース' },
    { path: `/news/${params.id}`, name: news.title },
  ]

  return (
    <>
      <StructuredData
        type="article"
        name={news.title}
        description={description}
        path={`/news/${params.id}`}
        breadcrumb={breadcrumb}
      />
      <Background />
      <Container>
        <Content>
          <ContentHeader>
            <time dateTime={news.date}>{formattedDate}</time>
            <Heading h="h1" modifier="first">
              {news.title}
            </Heading>
          </ContentHeader>
          <ContentBody>
            <ConvertBody contentHTML={news.content} />
          </ContentBody>
          <ContentFooter />
          <Breadcrumb breadcrumb={breadcrumb} />
        </Content>
      </Container>

      <CtaArea />
    </>
  )
}
