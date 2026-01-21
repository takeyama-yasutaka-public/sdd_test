/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import type { Metadata } from 'next'
import { siteMeta } from '@/lib/constants'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Content from '@/components/content/index'
import * as Function from '@/components/function/index'

/*********************************
    変数定義
*********************************/

//サイトデータの定義
const pageName = 'お問い合わせ完了'
const pageTitle = `${pageName} | `
const pageDescription = ''
const pageSlug = 'finish'
const pagePath = `/contact/${pageSlug}`
const pageType = 'article'
const imageUrl = null
const imageWidth = null
const imageHeight = null

//パンくずデータの定義
const breadcrumb = [
  { path: '/', name: 'Top' },
  { path: `/${pageSlug}`, name: pageName },
]

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

export default function Page() {
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

      <Layout.PageVisual
        english="CONTACT"
        japanese="お問い合わせ"
        image="contact"
      />

      <Layout.Container modifier="small">
        <Layout.Content>
          <Layout.ContentBody>
            <p className={styles.strong}>お問い合わせありがとうございます。</p>
            <p>
              このたびは、WEB
              CORPORATIONへお問い合わせ頂き誠にありがとうございます。
              <br />
              お送り頂きました内容を確認の上、5営業日以内に折り返しご連絡させて頂きます。
              <br />
              また、ご記入頂いたメールアドレスへ、自動返信の確認メールをお送りしております。
            </p>
          </Layout.ContentBody>
          <Layout.ContentFooter>
            <Content.Button href="/">トップへ戻る</Content.Button>
          </Layout.ContentFooter>
        </Layout.Content>
      </Layout.Container>

      <Layout.Breadcrumb breadcrumb={breadcrumb} />
    </>
  )
}
