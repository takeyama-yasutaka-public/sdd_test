/**
 * 実績カテゴリー一覧ページ
 * 仕様書: docs/ui/pages/case/category/[slug]/specification.md
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { siteMeta, prePage, eyecatchLocal } from '@/features/utils/constants/constants'
import { getCaseCategory, getCaseAllByCategory } from '@/features/api/microcms/microcms'
import { getImageBuffer } from '@/features/utils/getImageBuffer/getImageBuffer'
import { getPlaiceholder } from 'plaiceholder'
import { StructuredData } from '@/components/ui-features/StructuredData/StructuredData'
import { Background } from '@/components/ui-kit/layout/Background/Background'
import { PageVisual } from '@/components/ui-kit/layout/PageVisual/PageVisual'
import { Container } from '@/components/ui-kit/layout/Container/Container'
import { Content, ContentBody, ContentFooter } from '@/components/ui-kit/layout/Content/Content'
import { ButtonGroup, ButtonCase } from '@/components/ui-kit/content/Button/Button'
import { CardGroup, Card, ImageData } from '@/components/ui-kit/content/Card/Card'
import { Pager } from '@/components/ui-features/Pager/Pager'
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
  const categories = await getCaseCategory() || []

  return categories.map((category) => ({
    slug: category.slug,
  }))
}

/**
 * メタデータ生成
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const categories = await getCaseCategory() || []
  const category = categories.find((cat) => cat.slug === slug)

  if (!category) {
    return {
      title: `実績 | ${siteMeta.siteTitle}`,
    }
  }

  return {
    title: `${category.name} | ${siteMeta.siteTitle}`,
    description: '実績ページの説明',
    alternates: {
      canonical: `/case/category/${slug}`,
    },
    openGraph: {
      title: `${category.name} | ${siteMeta.siteTitle}`,
      description: '実績ページの説明',
      siteName: siteMeta.siteTitle,
      type: 'article',
      locale: siteMeta.siteLocale,
      url: `${siteMeta.siteUrl}/case/category/${slug}`,
      images: {
        url: siteMeta.siteImgSrc,
        width: siteMeta.siteImgWidth,
        height: siteMeta.siteImgHeight,
      },
    },
    twitter: {
      title: `${category.name} | ${siteMeta.siteTitle}`,
      description: '実績ページの説明',
      images: {
        url: siteMeta.siteImgSrc,
        width: siteMeta.siteImgWidth,
        height: siteMeta.siteImgHeight,
      },
    },
  }
}

/**
 * 実績カテゴリー一覧ページ
 */
export default async function CaseCategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ page?: string }>
}) {
  const { slug } = await params
  const resolvedSearchParams = await searchParams
  // カテゴリー取得
  const categories = await getCaseCategory() || []
  const category = categories.find((cat) => cat.slug === slug)

  if (!category) {
    notFound()
  }

  // ページ番号取得
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page, 10) : 1
  const PER_PAGE = prePage.case

  // カテゴリー絞り込み実績データ取得
  const caseData = await getCaseAllByCategory(parseInt(category.id, 10), page, PER_PAGE)
  const caseList = caseData?.contents || []
  const totalCount = caseData?.totalCount || 0

  // 代替アイキャッチ画像への置換およびブラー画像の生成
  const caseListWithImages = await Promise.all(
    caseList.map(async (caseItem) => {
      const eyecatch = caseItem.eyecatch || eyecatchLocal
      let blurDataURL: string | undefined

      try {
        const imageBuffer = await getImageBuffer(eyecatch.url)
        const { base64 } = await getPlaiceholder(imageBuffer)
        blurDataURL = base64
      } catch (error) {
        console.error('Failed to generate blur image:', error)
      }

      const imageData: ImageData = {
        url: eyecatch.url,
        width: eyecatch.width,
        height: eyecatch.height,
        blurDataURL,
      }

      return {
        ...caseItem,
        imageData,
      }
    })
  )

  // パンくずデータ
  const breadcrumb = [
    { path: '/', name: 'TOP' },
    { path: '/case', name: '実績' },
    { path: `/case/category/${slug}`, name: category.name },
  ]

  return (
    <>
      <StructuredData
        type="article"
        name={category.name}
        description="実績ページの説明"
        path={`/case/category/${slug}`}
        breadcrumb={breadcrumb}
      />
      <Background />
      <PageVisual english="CASE" japanese="実績" image="case" />

      <Container>
        <Content>
          <ContentBody>
            <ButtonGroup type="case">
              <ButtonCase href="/case">すべて</ButtonCase>
              {categories.map((cat) => (
                <ButtonCase
                  key={cat.id}
                  href={`/case/category/${cat.slug}`}
                  current={cat.slug === slug}
                >
                  {cat.name}
                </ButtonCase>
              ))}
            </ButtonGroup>
            <CardGroup>
              {caseListWithImages.map((caseItem) => (
                <Card
                  key={caseItem.id}
                  href={`/case/${caseItem.id}`}
                  image={caseItem.imageData}
                  alt={caseItem.title}
                  category={caseItem.category}
                  text={caseItem.title}
                />
              ))}
            </CardGroup>
          </ContentBody>
          <ContentFooter>
            <Pager
              PER_PAGE={PER_PAGE}
              totalCount={totalCount}
              path={`/case/category/${slug}`}
              id={page}
            />
          </ContentFooter>
          <Breadcrumb breadcrumb={breadcrumb} />
        </Content>
      </Container>

      <CtaArea />
    </>
  )
}
