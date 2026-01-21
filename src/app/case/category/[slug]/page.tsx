/*********************************
    インポート
*********************************/

//フック
import type { Metadata } from 'next'
import { siteMeta, prePage, eyecatchLocal } from '@/lib/constants'
import { getCaseAllByCategory, getCaseCategory } from '@/lib/api'
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
  params: { slug: string }
}

//サイトデータの定義
const pageData = function (title: string, slug: string) {
  const pageName = title
  const pageTitle = `${pageName} | `
  const pageDescription =
    'WEB CORPORATIONの過去の実績をご覧いただけます。WEBサイト制作、WEBアプリ開発、デジタルマーケティングにおける成功事例を紹介しています。'
  const pageSlug = slug
  const pagePath = `/case/category/${pageSlug}`
  const pageType = 'article'
  const imageUrl = null
  const imageWidth = null
  const imageHeight = null

  return {
    pageName: pageName,
    pageTitle: pageTitle,
    pageDescription: pageDescription,
    pageSlug: pageSlug,
    pagePath: pagePath,
    pageType: pageType,
    imageUrl: imageUrl,
    imageWidth: imageWidth,
    imageHeight: imageHeight,
  }
}

//パンくずデータの定義
const breadcrumbData = function (slug: string, name: string) {
  const breadcrumb = [
    { path: '/', name: 'Top' },
    { path: '/case', name: '実績' },
    { path: `/case/category/${slug}`, name: name },
  ]

  return breadcrumb
}

//ページネーションの表示件数
const PER_PAGE = prePage.case

/*********************************
    ダイナミックルーティング
*********************************/

export async function generateStaticParams() {
  //カテゴリー一覧の取得
  const allCats = await getCaseCategory()

  return allCats.map((post: { slug: string }) => ({
    slug: post.slug,
  }))
}

//該当ページがない時404を表示する
export const dynamicParams = false

/*********************************
    メタデータのエクスポート
*********************************/

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  //現在スラッグを取得
  const catSlug = params.slug
  //現在カテゴリーを取得
  const allCats = await getCaseCategory()
  const cat = allCats.find(({ slug }: { slug: string }) => slug === catSlug)

  //サイトデータ
  const pageDatas = pageData(cat.name, cat.slug)

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

export default async function Post({ params }: Params) {
  //現在スラッグを取得
  const catSlug = params.slug
  //現在カテゴリーを取得
  const allCats = await getCaseCategory()
  const cat = allCats.find(({ slug }: { slug: string }) => slug === catSlug)

  //カテゴリー絞り込み一覧の取得
  const postsObj = await getCaseAllByCategory(cat.id, 1, PER_PAGE)
  const posts = postsObj?.contents
  const totalCount = postsObj?.totalCount

  //代替アイキャッチ画像への置換およびブラー画像の生成
  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const imageBuffer = await getImageBuffer(post.eyecatch.url)
    const { base64 } = await getPlaiceholder(imageBuffer)
    post.eyecatch.blurDataURL = base64
  }

  //サイトデータ
  const pageDatas = pageData(cat.name, cat.slug)
  //パンくずデータ
  const breadcrumb = breadcrumbData(pageDatas.pageSlug, pageDatas.pageName)

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

      <Layout.PageVisual english="CASE" japanese="実績" image="case" />

      <Layout.Container>
        <Layout.Content>
          <Layout.ContentBody>
            <Content.ButtonGroup type="case">
              <Content.ButtonCase href="/case">すべて</Content.ButtonCase>
              {allCats.map(({ name, slug }: { name: string; slug: string }) => (
                <Content.ButtonCase
                  href={`/case/category/${slug}`}
                  current={catSlug === slug}
                  key={slug}
                >
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
              path={pageDatas.pagePath}
            />
          </Layout.ContentFooter>
        </Layout.Content>
      </Layout.Container>

      <Layout.Breadcrumb breadcrumb={breadcrumb} />

      <Content.CtaArea />
    </>
  )
}
