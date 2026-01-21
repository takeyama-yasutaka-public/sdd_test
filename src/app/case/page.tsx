/**
 * 実績一覧ページ
 * 仕様書: docs/ui/pages/case/specification.md
 */

import type { Metadata } from 'next'
import { siteMeta, prePage, eyecatchLocal } from '@/features/utils/constants/constants'
import { getCaseAll, getCaseCategory } from '@/features/api/microcms/microcms'
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

// メタデータ
export const metadata: Metadata = {
  title: `実績 | ${siteMeta.siteTitle}`,
  description: '実績ページの説明',
  alternates: {
    canonical: '/case',
  },
  openGraph: {
    title: `実績 | ${siteMeta.siteTitle}`,
    description: '実績ページの説明',
    siteName: siteMeta.siteTitle,
    type: siteMeta.siteType,
    locale: siteMeta.siteLocale,
    url: `${siteMeta.siteUrl}/case`,
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
  twitter: {
    title: `実績 | ${siteMeta.siteTitle}`,
    description: '実績ページの説明',
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
  { path: '/case', name: '実績' },
]

/**
 * 実績一覧ページ
 */
export default async function CasePage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  // ページ番号取得
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1
  const PER_PAGE = prePage.case

  // 実績データ取得
  const caseData = await getCaseAll(page, PER_PAGE)
  const caseList = caseData?.contents || []
  const totalCount = caseData?.totalCount || 0

  // カテゴリー一覧取得
  const categories = await getCaseCategory() || []

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

  return (
    <>
      <StructuredData
        name="実績"
        description="実績ページの説明"
        path="/case"
        breadcrumb={breadcrumb}
      />
      <Background />
      <PageVisual english="CASE" japanese="実績" image="case" />

      <Container>
        <Content>
          <ContentBody>
            <ButtonGroup type="case">
              <ButtonCase href="/case" current={true}>
                すべて
              </ButtonCase>
              {categories.map((category) => (
                <ButtonCase key={category.id} href={`/case/category/${category.slug}`}>
                  {category.name}
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
            <Pager PER_PAGE={PER_PAGE} totalCount={totalCount} path="/case" id={page} />
          </ContentFooter>
          <Breadcrumb breadcrumb={breadcrumb} />
        </Content>
      </Container>

      <CtaArea />
    </>
  )
}
