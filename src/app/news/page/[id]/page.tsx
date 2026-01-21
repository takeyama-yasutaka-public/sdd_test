/*********************************
    インポート
*********************************/

//フック
import type { Metadata } from 'next'
import { siteMeta, prePage, eyecatchLocal } from '@/lib/constants'
import { getNewsAll } from '@/lib/api'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Content from '@/components/content/index'
import * as Function from '@/components/function/index'

/*********************************
    変数定義
*********************************/

type Params = {
  params: { id: number }
}

//サイトデータの定義
const pageName = 'ニュース'
const pageTitle = `${pageName} | `
const pageDescription =
  'WEB CORPORATIONからのお知らせページです。新しいプロジェクトやキャンペーン、業界の最新情報をお届けします。最新のトピックスをご確認ください。'
const pageSlug = 'news'
const pagePath = `/${pageSlug}`
const pageType = 'article'
const imageUrl = null
const imageWidth = null
const imageHeight = null

//パンくずデータの定義
const breadcrumb = [
  { path: '/', name: 'TOP' },
  { path: `/${pageSlug}`, name: pageName },
]

//ページネーションの表示件数
const PER_PAGE = prePage.news

/*********************************
    ダイナミックルーティング
*********************************/

export async function generateStaticParams() {
  //ブログ一覧の取得
  const postsObj = await getNewsAll()

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)
  const posts = range(1, Math.ceil(postsObj.totalCount / PER_PAGE))

  return posts.map((post: number) => ({
    id: `${post}`,
  }))
}

//該当ページがない時404を表示する
export const dynamicParams = false

/*********************************
    メタデータのエクスポート
*********************************/

export const metadata: Metadata = {
  title: pageTitle ? `${pageTitle}${siteMeta.siteTitle}` : siteMeta.siteTitle,
  description: pageDescription || siteMeta.siteDesc,
  alternates: {
    canonical: pagePath ? `${siteMeta.siteUrl}${pagePath}` : siteMeta.siteUrl,
  },
  openGraph: {
    title: pageTitle ? `${pageTitle}${siteMeta.siteTitle}` : siteMeta.siteTitle,
    description: pageDescription || siteMeta.siteDesc,
    siteName: siteMeta.siteTitle,
    type: pageType || siteMeta.siteType,
    locale: siteMeta.siteLocale,
    url: pagePath ? `${siteMeta.siteUrl}${pagePath}` : siteMeta.siteUrl,
    images: {
      url: imageUrl || siteMeta.siteImgSrc,
      width: imageWidth || siteMeta.siteImgWidth,
      height: imageHeight || siteMeta.siteImgHeight,
    },
  },
  twitter: {
    title: pageTitle ? `${pageTitle}${siteMeta.siteTitle}` : siteMeta.siteTitle,
    description: pageDescription || siteMeta.siteDesc,
    images: {
      url: imageUrl || siteMeta.siteImgSrc,
      width: imageWidth || siteMeta.siteImgWidth,
      height: imageHeight || siteMeta.siteImgHeight,
    },
  },
  robots: {
    index: false,
  },
}

/*********************************
   ページデータのエクスポート
*********************************/

export default async function Page({ params }: Params) {
  //ブログ一覧の取得
  const id = params.id
  const postsObj = await getNewsAll(id, PER_PAGE)
  const posts = postsObj.contents
  const totalCount = postsObj.totalCount

  //ページの出力
  return (
    <>
      <Function.StructuredData
        type={pageType}
        name={pageName}
        description={pageDescription}
        path={pagePath}
        breadcrumb={breadcrumb}
      />

      <Layout.Background />

      <Layout.PageVisual english="NEWS" japanese="お知らせ" image="news" />

      <Layout.Container>
        <Layout.Content>
          <Layout.ContentBody>
            <Content.NewsPosts>
              {posts.map(
                (post: {
                  id: string
                  eyecatch: any
                  title: string
                  category: any
                  date: string
                  content: string
                }) => (
                  <Content.NewsPostsItem
                    href={`/news/${post.id}`}
                    time={post.date}
                    title={post.title}
                    key={post.id}
                  />
                )
              )}
            </Content.NewsPosts>
          </Layout.ContentBody>
          <Layout.ContentFooter>
            <Function.Pager
              totalCount={totalCount}
              PER_PAGE={PER_PAGE}
              path={pagePath}
              id={Number(id)}
            />
          </Layout.ContentFooter>
        </Layout.Content>
      </Layout.Container>

      <Layout.Breadcrumb breadcrumb={breadcrumb} />

      <Content.CtaArea />
    </>
  )
}
