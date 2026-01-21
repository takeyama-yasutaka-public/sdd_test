//ダイナミックレンダリング
export const dynamic = 'force-dynamic'

/*********************************
    インポート
*********************************/
//フック
import type { Metadata } from 'next'
import { siteMeta, eyecatchLocal } from '@/lib/constants'
import { getNewsPostById, getNewsAll } from '@/lib/api'
import { extractText } from '@/lib/extract-text'
import { formatDate } from '@/lib/formatDate'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Content from '@/components/content/index'
import * as Function from '@/components/function/index'
import Image from 'next/image'

/*********************************
    変数定義
*********************************/

type Params = {
  params: { id: string }
  searchParams: { draftKey: string }
}

//サイトデータの定義
const pageData = function (
  title: string,
  content: string,
  id: string,
  eyecatchUrl?: string,
  eyecatchWidth?: string,
  eyecatchHeight?: string
) {
  const pageName = title
  const pageTitle = `${pageName} | `
  const pageDescription = extractText(content)
  const pageId = id
  const pagePath = `/news/${pageId}`
  const pageType = 'article'
  const imageUrl = null
  const imageWidth = null
  const imageHeight = null

  return {
    pageName: pageName,
    pageTitle: pageTitle,
    pageDescription: pageDescription,
    pageId: pageId,
    pagePath: pagePath,
    pageType: pageType,
    imageUrl: imageUrl,
    imageWidth: imageWidth,
    imageHeight: imageHeight,
  }
}

//パンくずデータの定義
const breadcrumbData = function (id: string, name: string) {
  const breadcrumb = [
    { path: '/', name: 'TOP' },
    { path: '/news', name: 'ニュース' },
    { path: `/news/${id}`, name: name },
  ]

  return breadcrumb
}

/*********************************
    メタデータのエクスポート
*********************************/

export async function generateMetadata({
  params,
  searchParams,
}: Params): Promise<Metadata> {
  //現在IDを取得
  const id = params.id
  //現在ドラフトキーを取得
  const draftKey = searchParams.draftKey
  //ブログ記事の取得
  const post = await getNewsPostById(id, draftKey)

  //サイトデータ
  const pageDatas = pageData(post.title, post.content, id)

  //メタデータの出力
  return {
    title: pageDatas.pageTitle
      ? `${pageDatas.pageTitle}${siteMeta.siteTitle}`
      : siteMeta.siteTitle,
    description: pageDatas.pageDescription || siteMeta.siteDesc,
    alternates: {
      canonical: pageDatas.pagePath
        ? `${siteMeta.siteUrl}${pageDatas.pagePath}`
        : siteMeta.siteUrl,
    },
    openGraph: {
      title: pageDatas.pageTitle
        ? `${pageDatas.pageTitle}${siteMeta.siteTitle}`
        : siteMeta.siteTitle,
      description: pageDatas.pageDescription || siteMeta.siteDesc,
      siteName: siteMeta.siteTitle,
      type: (pageDatas.pageType as 'article' | 'website') || siteMeta.siteType,
      locale: siteMeta.siteLocale,
      url: pageDatas.pagePath
        ? `${siteMeta.siteUrl}${pageDatas.pagePath}`
        : siteMeta.siteUrl,
      images: {
        url: pageDatas.imageUrl || siteMeta.siteImgSrc,
        width: pageDatas.imageWidth || siteMeta.siteImgWidth,
        height: pageDatas.imageHeight || siteMeta.siteImgHeight,
      },
    },
    twitter: {
      title: pageDatas.pageTitle
        ? `${pageDatas.pageTitle}${siteMeta.siteTitle}`
        : siteMeta.siteTitle,
      description: pageDatas.pageDescription || siteMeta.siteDesc,
      images: {
        url: pageDatas.imageUrl || siteMeta.siteImgSrc,
        width: pageDatas.imageWidth || siteMeta.siteImgWidth,
        height: pageDatas.imageHeight || siteMeta.siteImgHeight,
      },
    },
    robots: {
      index: false,
    },
  }
}

/*********************************
   ページデータのエクスポート
*********************************/

export default async function Page({ params, searchParams }: Params) {
  //現在IDを取得
  const { id } = params
  //現在ドラフトキーを取得
  const draftKey = searchParams.draftKey
  //ブログ記事の取得
  const post = await getNewsPostById(id, draftKey)

  //代替アイキャッチ画像への置換
  const eyecatch = post.eyecatch ?? eyecatchLocal

  //サイトデータ
  const pageDatas = pageData(
    post.title,
    post.content,
    id,
    eyecatch.url,
    eyecatch.width,
    eyecatch.height
  )
  //パンくずデータ
  const breadcrumb = breadcrumbData(pageDatas.pageId, pageDatas.pageName)

  //ページの出力
  return (
    <>
      <Function.StructuredData
        type={pageDatas.pageType}
        name={pageDatas.pageName}
        description={pageDatas.pageDescription}
        imageUrl={pageDatas.imageUrl}
        path={pageDatas.pagePath}
        breadcrumb={breadcrumb}
      />

      <Layout.Background />

      <Layout.Container modifier="small">
        <Layout.Content>
          <Layout.ContentHeader>
            <Layout.ContentHeaderTop>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </Layout.ContentHeaderTop>
            <Content.Heading h="h1" modifier="first">
              {post.title}
            </Content.Heading>
          </Layout.ContentHeader>
          <Layout.ContentBody>
            <Content.PostArea>
              <Function.ConvertBody contentHTML={post.content} />
            </Content.PostArea>
          </Layout.ContentBody>
          <Layout.ContentFooter>
            <Content.Button href="/news">一覧へ戻る</Content.Button>
          </Layout.ContentFooter>
        </Layout.Content>
      </Layout.Container>

      <Layout.Breadcrumb breadcrumb={breadcrumb} />

      <Content.CtaArea />
    </>
  )
}
