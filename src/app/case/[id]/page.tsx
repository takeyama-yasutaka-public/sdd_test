/**
 * 実績詳細ページ
 * 仕様書: docs/ui/pages/case/[id]/specification.md
 */

import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { siteMeta, eyecatchLocal } from '@/features/utils/constants/constants'
import { getCasePostById, getCaseAll } from '@/features/api/microcms/microcms'
import { getImageBuffer } from '@/features/utils/getImageBuffer/getImageBuffer'
import { extractText } from '@/features/utils/extractText/extractText'
import { formatDate } from '@/features/utils/formatDate/formatDate'
import { getPlaiceholder } from 'plaiceholder'
import { StructuredData } from '@/components/ui-features/StructuredData/StructuredData'
import { Background } from '@/components/ui-kit/layout/Background/Background'
import { Container } from '@/components/ui-kit/layout/Container/Container'
import { Content, ContentHeader, ContentBody, ContentFooter } from '@/components/ui-kit/layout/Content/Content'
import { ClassLabelGroup, ClassLabel } from '@/components/ui-kit/content/ClassLabel/ClassLabel'
import { Heading, HeadingJpn } from '@/components/ui-kit/content/Heading/Heading'
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
  const caseData = await getCaseAll()
  const caseList = caseData?.contents || []

  return caseList.map((caseItem) => ({
    id: caseItem.id,
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
  const caseItem = await getCasePostById(params.id)

  if (!caseItem) {
    return {
      title: `実績 | ${siteMeta.siteTitle}`,
    }
  }

  const description = extractText(caseItem.content)
  const eyecatch = caseItem.eyecatch || eyecatchLocal

  return {
    title: `${caseItem.title} | ${siteMeta.siteTitle}`,
    description,
    alternates: {
      canonical: `/case/${params.id}`,
    },
    openGraph: {
      title: `${caseItem.title} | ${siteMeta.siteTitle}`,
      description,
      siteName: siteMeta.siteTitle,
      type: 'article',
      locale: siteMeta.siteLocale,
      url: `${siteMeta.siteUrl}/case/${params.id}`,
      images: {
        url: eyecatch.url,
        width: eyecatch.width,
        height: eyecatch.height,
      },
    },
    twitter: {
      title: `${caseItem.title} | ${siteMeta.siteTitle}`,
      description,
      images: {
        url: eyecatch.url,
        width: eyecatch.width,
        height: eyecatch.height,
      },
    },
  }
}

/**
 * 実績詳細ページ
 */
export default async function CaseDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const caseItem = await getCasePostById(params.id)

  if (!caseItem) {
    notFound()
  }

  const description = extractText(caseItem.content)
  const formattedDate = formatDate(caseItem.date)
  const eyecatch = caseItem.eyecatch || eyecatchLocal

  // ブラー画像生成
  let blurDataURL: string | undefined
  try {
    const imageBuffer = await getImageBuffer(eyecatch.url)
    const { base64 } = await getPlaiceholder(imageBuffer)
    blurDataURL = base64
  } catch (error) {
    console.error('Failed to generate blur image:', error)
  }

  // パンくずデータ
  const breadcrumb = [
    { path: '/', name: 'TOP' },
    { path: '/case', name: '実績' },
    { path: `/case/${params.id}`, name: caseItem.title },
  ]

  return (
    <>
      <StructuredData
        type="article"
        name={caseItem.title}
        description={description}
        imageUrl={eyecatch.url}
        path={`/case/${params.id}`}
        breadcrumb={breadcrumb}
      />
      <Background />
      <Container>
        <Content>
          <ContentHeader>
            {caseItem.category.length > 0 && (
              <ClassLabelGroup>
                {caseItem.category.map((cat) => (
                  <ClassLabel key={cat.id} text={cat.name} />
                ))}
              </ClassLabelGroup>
            )}
            <Heading h="h1" modifier="first">
              {caseItem.title}
            </Heading>
            <HeadingJpn>サブタイトル</HeadingJpn>
            <time dateTime={caseItem.date}>{formattedDate}</time>
          </ContentHeader>
          <ContentBody>
            <Image
              src={eyecatch.url}
              alt={caseItem.title}
              width={eyecatch.width}
              height={eyecatch.height}
              placeholder={blurDataURL ? 'blur' : 'empty'}
              blurDataURL={blurDataURL}
              sizes="(max-width: 767.98px) 100vw, 1080px"
              className="w-full h-auto"
            />
            <ConvertBody contentHTML={caseItem.content} />
          </ContentBody>
          <ContentFooter />
          <Breadcrumb breadcrumb={breadcrumb} />
        </Content>
      </Container>

      <CtaArea />
    </>
  )
}
