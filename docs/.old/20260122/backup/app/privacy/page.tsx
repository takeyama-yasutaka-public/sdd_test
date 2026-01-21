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
const pageName = '個人情報保護方針'
const pageTitle = `${pageName} | `
const pageDescription =
  'WEB CORPORATIONの個人情報保護方針ページです。お客様の個人情報をどのように収集・使用・保護しているかについて説明しています。安心して当社サービスをご利用いただけます。'
const pageSlug = 'policy'
const pagePath = `/${pageSlug}`
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

      <Layout.Container modifier="small">
        <Layout.Content>
          <Layout.ContentHeader>
            <Content.Heading h="h1" modifier="first">
              個人情報保護方針
            </Content.Heading>
          </Layout.ContentHeader>
          <Layout.ContentBody>
            <div className={styles.privacyArea}>
              <Content.Heading h="h2" modifier="second">
                第1条 個人情報の収集
              </Content.Heading>
              <p>
                これはサンプルテキストです。適宜変更してご利用ください。当社は、個人情報の保護に関する法律及びその他関連する法令等を遵守し、個人情報の適切な取扱い及び保護に努めます。
              </p>
              <Content.Heading h="h2" modifier="second">
                第2条 個人情報の利用目的
              </Content.Heading>
              <p>
                これはサンプルテキストです。適宜変更してご利用ください。当社は、お客様からご提供いただいた個人情報を以下の目的で利用いたします。
              </p>
              <Content.BulletList>
                <li>商品・サービスの提供</li>
                <li>お問い合わせへの対応</li>
                <li>新商品・サービスのご案内</li>
                <li>アンケート調査などの実施</li>
              </Content.BulletList>
              <Content.Heading h="h2" modifier="second">
                第3条 記載内容はダミーです
              </Content.Heading>
              <p>
                記載されているプライバシーポリシーはダミーです。自社、ご自身で活用されているプライバシーポリシーを反映してください。記載されているプライバシーポリシーはダミーです。自社、ご自身で活用されているプライバシーポリシーを反映してください。記載されているプライバシーポリシーはダミーです。自社、ご自身で活用されているプライバシーポリシーを反映してください。
              </p>
              <Content.Heading h="h2" modifier="second">
                第4条 記載内容はダミーです
              </Content.Heading>
              <p>
                当社の住所・代表者の氏名は、以下のとおりです。
                <br />
                住所：
                <br />
                代表者氏名：
              </p>
              <Content.Heading h="h2" modifier="second">
                第5条 記載内容はダミーです
              </Content.Heading>
              <p>
                個人情報の取扱いに関するお問い合わせは、以下の窓口までご連絡ください。
                <br />
                <br />
                ● 電話番号：XXX-XXXX-XXXX
                <br />● メールアドレス：info@sampleco.jp
                <br />
                第１版 ００００年００月００日　制定
                <br />
                第２版 ００００年００月００日　改定
              </p>
            </div>
          </Layout.ContentBody>
        </Layout.Content>
      </Layout.Container>

      <Layout.Breadcrumb breadcrumb={breadcrumb} />
    </>
  )
}
