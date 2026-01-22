/**
 * ニュース一覧ページ
 * 仕様書: docs/ui/pages/news/specification.md
 */

import type { Metadata } from 'next'
import { siteMeta, prePage } from '@/features/utils/constants/constants'
import { getNewsAll } from '@/features/api/microcms/microcms'
import { StructuredData } from '@/components/ui-features/StructuredData/StructuredData'
import { Background } from '@/components/ui-kit/layout/Background/Background'
import { PageVisual } from '@/components/ui-kit/layout/PageVisual/PageVisual'
import { Container } from '@/components/ui-kit/layout/Container/Container'
import { Content, ContentBody, ContentFooter } from '@/components/ui-kit/layout/Content/Content'
import { NewsPosts, NewsPostsItem } from '@/components/ui-kit/content/NewsPosts/NewsPosts'
import { Pager } from '@/components/ui-features/Pager/Pager'
import { CtaArea } from '@/components/ui-kit/content/CtaArea/CtaArea'
import { Breadcrumb } from '@/components/ui-kit/layout/Breadcrumb/Breadcrumb'

// ISR設定
export const revalidate = 60

// メタデータ
export const metadata: Metadata = {
  title: `ニュース | ${siteMeta.siteTitle}`,
  description: 'ニュースページの説明',
  alternates: {
    canonical: '/news',
  },
  openGraph: {
    title: `ニュース | ${siteMeta.siteTitle}`,
    description: 'ニュースページの説明',
    siteName: siteMeta.siteTitle,
    type: siteMeta.siteType,
    locale: siteMeta.siteLocale,
    url: `${siteMeta.siteUrl}/news`,
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
  twitter: {
    title: `ニュース | ${siteMeta.siteTitle}`,
    description: 'ニュースページの説明',
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
}

// パンくずデータ
const breadcrumb = [
  { path: '/', name: 'TOP' },
  { path: '/news', name: 'ニュース' },
]

/**
 * ニュース一覧ページ
 */
export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const resolvedSearchParams = await searchParams
  // ページ番号取得
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page, 10) : 1
  const PER_PAGE = prePage.news

  // ニュースデータ取得
  const newsData = await getNewsAll(page, PER_PAGE)
  const newsList = newsData?.contents || []
  const totalCount = newsData?.totalCount || 0

  return (
    <>
      <StructuredData
        name="ニュース"
        description="ニュースページの説明"
        path="/news"
        breadcrumb={breadcrumb}
      />
      <Background />
      <PageVisual english="NEWS" japanese="お知らせ" image="news" />

      <Container>
        <Content>
          <ContentBody>
            <NewsPosts>
              {newsList.map((news) => (
                <NewsPostsItem
                  key={news.id}
                  href={`/news/${news.id}`}
                  time={news.date}
                  title={news.title}
                />
              ))}
            </NewsPosts>
          </ContentBody>
          <ContentFooter>
            <Pager PER_PAGE={PER_PAGE} totalCount={totalCount} path="/news" id={page} />
          </ContentFooter>
          <Breadcrumb breadcrumb={breadcrumb} />
        </Content>
      </Container>

      <CtaArea />
    </>
  )
}
