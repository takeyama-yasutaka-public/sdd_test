/*********************************
    インポート
*********************************/

//フック
import type { Metadata } from 'next'
import { siteMeta } from '@/lib/constants'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Content from '@/components/content/index'
import * as Function from '@/components/function/index'
import * as PageAboutAndService from '@/components/page/AboutAndService/index'
//画像
import MediaImage1 from '@/images/web-corporation/serevice_media_1.png'
import MediaImage2 from '@/images/web-corporation/serevice_media_2.png'
import MediaImage3 from '@/images/web-corporation/serevice_media_3.png'

/*********************************
    変数定義
*********************************/

//サイトデータの定義
const pageName = '事業内容'
const pageTitle = `${pageName} | `
const pageDescription =
  'WEB CORPORATIONの提供サービス、WEBサイト制作、WEBアプリ開発、デジタルマーケティングの詳細をご紹介。中小企業やEC事業者向けに最適なデジタルソリューションを提供します。'
const pageSlug = 'service'
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
        english="SERVICE"
        japanese="事業内容"
        image="service"
      />

      <PageAboutAndService.Container modifier="business-model">
        <Content.MediaAboutAndService modifier="model">
          <Content.HeadingEng>BUSINESS MODEL</Content.HeadingEng>
          <Content.Heading h="h3" modifier="second">
            3つのサービスでビジネスの価値を高める
          </Content.Heading>
          <p>
            WEB
            CORPORATIONは、WEBサイト制作、WEBアプリ開発、デジタルマーケティングの3つのサービスを中心に、クライアントのビジネス成長をサポートする総合的なソリューションを提供しています。
            <br />
            <br />
            私たちはまず、クライアントの課題やニーズをしっかり把握し、それぞれに最適なWEBサイトの構築、アプリの開発、マーケティング戦略を提案します。
            <br />
            <br />
            これにより、クライアントのオンラインでの影響力を高め、ターゲット層への効果的なリーチを可能にします。
          </p>
        </Content.MediaAboutAndService>
      </PageAboutAndService.Container>

      <PageAboutAndService.Container modifier="our-service">
        <Content.HeadingEng>OUR SERVICE</Content.HeadingEng>
        <div>
          <Content.MediaService image={MediaImage1} alt="WEBサイト制作">
            <h3>WEBサイト制作</h3>
            <p>
              クライアントのブランドイメージを活かしながら、ユーザーが使いやすいWEBサイトを制作します。
              <br />
              魅力的なデザインと直感的な操作性を兼ね備えたサイトを構築し、SEO対策やスマホ対応にも力を入れています。
              <br />
              デジタルマーケティングとも連携し、集客力を高め、ビジネスの成長を支援します。
            </p>
            <div>
              <p>
                ・デザインとUI/UX設計
                <br />
                ・レスポンシブ対応
                <br />
                ・SEO対策
                <br />
                ・WordPress導入
                <br />
                ・ランディングページ作成
                <br />
              </p>
            </div>
          </Content.MediaService>
          <Content.MediaService image={MediaImage2} alt="WEBアプリ開発">
            <h3>WEBアプリ開発</h3>
            <p>
              クライアントのニーズに合わせて、効率的で使いやすいWEBアプリを開発します。
              <br />
              最新技術を駆使したフロントエンドとバックエンド開発により、パフォーマンスが高く安全性のあるアプリを提供し、業務の効率化や顧客管理をサポートします。
            </p>
            <div>
              <p>
                ・カスタムUI/UX設計
                <br />
                ・データベース構築と管理
                <br />
                ・APIとサードパーティーサービス連携
                <br />
                ・セキュリティ・パフォーマンス最適化
                <br />
                ・運用と保守サポート
              </p>
            </div>
          </Content.MediaService>
          <Content.MediaService
            image={MediaImage3}
            alt="デジタルマーケティング"
          >
            <h3>デジタルマーケティング</h3>
            <p>
              市場調査から戦略の立案、実行までを一貫してサポートし、クライアントのビジネス成長を促進します。
              <br />
              SEOやコンテンツマーケティング、PPC広告、SNS運用など多様な手法でターゲットにアプローチし、データに基づいた施策で効果的に売上を伸ばします。
            </p>
            <div>
              <p>
                ・SEO対策
                <br />
                ・コンテンツマーケティング
                <br />
                ・PPC広告運用
                <br />
                ・SNSマーケティング
                <br />
                ・メールマーケティング
              </p>
            </div>
          </Content.MediaService>
        </div>
      </PageAboutAndService.Container>

      <Layout.Breadcrumb breadcrumb={breadcrumb} />

      <Content.CtaArea />
    </>
  )
}
