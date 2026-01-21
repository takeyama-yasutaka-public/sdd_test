/*********************************
    インポート
*********************************/

//フック
import type { Metadata } from 'next'
import { siteMeta, prePage, eyecatchLocal } from '@/lib/constants'
import { getCaseAll, getCaseCategory } from '@/lib/api'
import { getImageBuffer } from '@/lib/getImageBuffer'
import { getPlaiceholder } from 'plaiceholder'
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
const pageName = '実績'
const pageTitle = `${pageName} | `
const pageDescription =
  'WEB CORPORATIONの過去の実績をご覧いただけます。WEBサイト制作、WEBアプリ開発、デジタルマーケティングにおける成功事例を紹介しています。'
const pageSlug = 'case'
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
const PER_PAGE = prePage.case

/*********************************
    ダイナミックルーティング
*********************************/

export async function generateStaticParams() {
  //ブログ一覧の取得
  const postsObj = await getCaseAll()

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
  const postsObj = await getCaseAll(id, PER_PAGE)
  const posts = postsObj.contents
  const totalCount = postsObj.totalCount

  //代替アイキャッチ画像への置換およびブラー画像の生成
  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const imageBuffer = await getImageBuffer(post.eyecatch.url)
    const { base64 } = await getPlaiceholder(imageBuffer)
    post.eyecatch.blurDataURL = base64
  }

  //カテゴリー一覧の取得
  const allCats = await getCaseCategory()

  //ページの出力
  return (
    <>
      <Function.StructuredData
        type={pageType}
        name={pageName}
        description={pageDescription}
        imageUrl={imageUrl}
        path={pagePath}
        breadcrumb={breadcrumb}
      />

      <Layout.Background />

      <Layout.PageVisual english="CASE" japanese="実績" image="case" />

      <Layout.Container>
        <Layout.Content>
          <Layout.ContentBody>
            <Content.ButtonGroup type="case">
              <Content.ButtonCase href="/case" current={true}>
                すべて
              </Content.ButtonCase>
              {allCats.map(({ name, slug }: { name: string; slug: string }) => (
                <Content.ButtonCase href={`/case/category/${slug}`} key={slug}>
                  {name}
                </Content.ButtonCase>
              ))}
            </Content.ButtonGroup>
            <Content.CardGroup>
              {posts.map(
                (post: {
                  id: string
                  eyecatch: any
                  title: string
                  category: any
                  date: string
                  content: string
                }) => (
                  <Content.Card
                    href={`/case/${post.id}`}
                    image={post.eyecatch}
                    alt={post.title}
                    category={post.category}
                    text={post.title}
                    key={post.id}
                  />
                )
              )}
            </Content.CardGroup>
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
