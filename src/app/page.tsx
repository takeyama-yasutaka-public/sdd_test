/**
 * トップページ
 * 仕様書: docs/ui/pages/home/specification.md
 */

import type { Metadata } from 'next'
import { siteMeta } from '@/features/utils/constants/constants'
import { getNewsAll, getCaseAll } from '@/features/api/microcms/microcms'
import { StructuredData } from '@/components/ui-features/StructuredData/StructuredData'
import { Background } from '@/components/ui-kit/layout/Background/Background'
import { MainVisual } from '@/components/ui-features/home/MainVisual/MainVisual'
import { Container as HomeContainer } from '@/components/ui-features/home/Container/Container'
import { HeadingTopEng } from '@/components/ui-kit/content/HeadingEng/HeadingEng'
import { Heading, HeadingJpn } from '@/components/ui-kit/content/Heading/Heading'
import { MediaImage } from '@/components/ui-features/home/MediaImage/MediaImage'
import { MediaTopService } from '@/components/ui-kit/content/Media/Media'
import { CardTopGroup, CardTop } from '@/components/ui-kit/content/CardTop/CardTop'
import { Button } from '@/components/ui-kit/content/Button/Button'
import { NewsPosts, NewsPostsItem } from '@/components/ui-kit/content/NewsPosts/NewsPosts'
import { CtaArea } from '@/components/ui-kit/content/CtaArea/CtaArea'
import { Loading } from '@/components/ui-kit/action/Loading/Loading'

// ISR設定
export const revalidate = 60

// メタデータ
export const metadata: Metadata = {
  title: siteMeta.siteTitle,
  description: siteMeta.siteDesc,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteMeta.siteTitle,
    description: siteMeta.siteDesc,
    siteName: siteMeta.siteTitle,
    type: siteMeta.siteType,
    locale: siteMeta.siteLocale,
    url: `${siteMeta.siteUrl}/`,
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
  twitter: {
    title: siteMeta.siteTitle,
    description: siteMeta.siteDesc,
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
}

/**
 * トップページ
 */
export default async function HomePage() {
  // ニュースデータ取得
  const newsData = await getNewsAll(1, 3)
  const newsList = newsData?.contents || []

  // 実績データ取得（最新3件）
  const caseData = await getCaseAll(1, 3)
  const caseList = caseData?.contents || []

  return (
    <>
      <StructuredData isHome={true} />
      <Background home />
      <MainVisual />

      {/* ABOUTセクション */}
      <HomeContainer modifier="about">
        <HeadingTopEng english="ABOUT" color="white" />
        <HeadingJpn color="white">会社概要</HeadingJpn>
        <p>企業情報の説明文が入ります。</p>
        <MediaImage image={null as any} alt="ABOUT" />
        <Button href="/about" modifierColor="secondary">
          会社概要を見る
        </Button>
      </HomeContainer>

      {/* SERVICEセクション */}
      <HomeContainer modifier="service">
        <HeadingTopEng english="SERVICE" />
        <HeadingJpn>事業内容</HeadingJpn>
        <p>事業内容の説明文が入ります。</p>
        <MediaTopService>
          <Heading h="h3" modifier="third">
            WEBサイト制作
          </Heading>
          <p>WEBサイト制作の説明文が入ります。</p>
        </MediaTopService>
        <MediaTopService>
          <Heading h="h3" modifier="third">
            WEBアプリ開発
          </Heading>
          <p>WEBアプリ開発の説明文が入ります。</p>
        </MediaTopService>
        <MediaTopService>
          <Heading h="h3" modifier="third">
            デジタルマーケティング
          </Heading>
          <p>デジタルマーケティングの説明文が入ります。</p>
        </MediaTopService>
        <Button href="/service">事業内容を見る</Button>
      </HomeContainer>

      {/* CASEセクション */}
      <HomeContainer modifier="case">
        <HeadingTopEng english="CASE" />
        <HeadingJpn>実績</HeadingJpn>
        <p>様々な業界のクライアントと連携し、成功事例を積み重ねてきました。</p>
        <CardTopGroup>
          {caseList.slice(0, 3).map((caseItem) => (
            <CardTop
              key={caseItem.id}
              href={`/case/${caseItem.id}`}
              image={null as any}
              alt={caseItem.title}
              category={caseItem.category}
              text={caseItem.title}
            />
          ))}
        </CardTopGroup>
        <Button href="/case">実績一覧を見る</Button>
      </HomeContainer>

      {/* NEWSセクション */}
      <HomeContainer modifier="news">
        <HeadingTopEng english="NEWS" />
        <HeadingJpn>お知らせ</HeadingJpn>
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
      </HomeContainer>

      <CtaArea />
      <Loading />
    </>
  )
}
