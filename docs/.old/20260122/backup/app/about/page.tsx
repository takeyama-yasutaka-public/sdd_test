/*********************************
    インポート
*********************************/

//スタイル
import styles from './page.module.scss'
//フック
import type { Metadata } from 'next'
import { siteMeta } from '@/lib/constants'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Content from '@/components/content/index'
import * as Function from '@/components/function/index'
import * as PageAboutAndService from '@/components/page/AboutAndService/index'
//画像
import MissionImage from '@/images/web-corporation/about_mission.png'
import VisionImage from '@/images/web-corporation/about_vision.png'
import MessageImage from '@/images/web-corporation/about_message.png'

/*********************************
    変数定義
*********************************/

//サイトデータの定義
const pageName = '会社情報'
const pageTitle = `${pageName} | `
const pageDescription =
  'WEB CORPORATIONの会社情報ページです。当社の理念、ミッション、企業概要をご覧いただけます。デジタルソリューションを通じてお客様の成功を支援します。'
const pageSlug = 'about'
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

      <Layout.PageVisual english="ABOUT" japanese="会社情報" image="about" />

      <PageAboutAndService.Container modifier="mission-and-vision">
        <Content.MediaAboutAndService image={MissionImage} alt="MISSION">
          <Content.HeadingEng>MISSION</Content.HeadingEng>
          <Content.Heading h="h3" modifier="second">
            デジタルの力でビジネスの可能性を広げる
          </Content.Heading>
          <p>
            デジタルの力でビジネスの可能性を広げることを目指し、クライアントのビジネスを新たなステージへ導くことが私たちの目標です。
            <br />
            <br />
            WEBサイト制作、WEBアプリ開発、デジタルマーケティングの各分野で、常に最新の技術とトレンドを取り入れ、革新的なソリューションを提供し、顧客のニーズを深く理解して、それに応じた最適な提案を行い、クライアントの成長を支えます。
            <br />
            <br />
            信頼と透明性を重視し、クライアントとの強いパートナーシップを築きながら、共に目標を達成していくことを大切にし、「デジタルの力でさらなる成長を」をモットーに、オンラインでの存在感を高め、ビジネスの成功を全力で支援します。
          </p>
        </Content.MediaAboutAndService>
        <Content.MediaAboutAndService
          image={VisionImage}
          alt="VISION"
          modifier="reverse"
        >
          <Content.HeadingEng>VISION</Content.HeadingEng>
          <Content.Heading h="h3" modifier="second">
            デジタルソリューションで未来を創造する
          </Content.Heading>
          <p>
            デジタルソリューションで未来を切り開くというビジョンのもと、クライアントのデジタル戦略を通じてビジネスの価値を最大化することを目指しています。
            <br />
            <br />
            最新のWEB制作技術、効果的なデジタルマーケティング戦略、そして高度なWEBアプリ開発を活用しながら、常に顧客の視点に立ち、最善の方法を提案し、クライアントと共に成長していきます。
            <br />
            <br />
            革新的なアプローチと柔軟なサービスを提供し、クライアントがデジタルの未来を切り拓くためのサポートをしていきます。
          </p>
        </Content.MediaAboutAndService>
      </PageAboutAndService.Container>

      <PageAboutAndService.Container modifier="massage">
        <Content.MediaAboutAndService
          image={MessageImage}
          alt="MESSAGE"
          modifier="massage"
        >
          <Content.HeadingEng color="white">MESSAGE</Content.HeadingEng>
          <Content.Heading h="h3" modifier="second" color="white">
            お客様の成功を全力でサポートします
          </Content.Heading>
          <p>
            WEB CORPORATIONは、2020年に創立10周年を迎えました。
            <br />
            <br />
            私たちは、WEB制作、WEBアプリ開発、そしてデジタルマーケティングを軸に「事業の価値を創出する」というビジョンのもと、事業を推進してまいりました。
            <br />
            <br />
            事業を成功させるために必要なことは、圧倒的な顧客理解です。なぜこの事業を展開しているのか、誰の、何のためなのか。
            <br />
            私たちはその理解を深めるために最新のWEB技術とマーケティング戦略を駆使し、創業当時から今まで業界の第一線を走り続けています。
            <br />
            <br />
            現状に満足することなく、今後もさらに価値を高められるよう邁進してまいります。
            <br />
            どうぞよろしくお願い申し上げます。
          </p>
        </Content.MediaAboutAndService>
      </PageAboutAndService.Container>

      <PageAboutAndService.Container modifier="company">
        <Content.HeadingEng>COMPANY</Content.HeadingEng>
        <Content.TableAbout>
          <tbody>
            <tr>
              <th>社名</th>
              <td>WEB CORPORATION</td>
            </tr>
            <tr>
              <th>代表者</th>
              <td>山田 太郎</td>
            </tr>
            <tr>
              <th>設立</th>
              <td>2010年4月</td>
            </tr>
            <tr>
              <th>資本金</th>
              <td>5億円</td>
            </tr>
            <tr>
              <th>本社所在地</th>
              <td>
                〒100-0000
                <br />
                東京都千代田区○○○*-*-* ○○ビル*F
              </td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>03-0000-0000</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>WEBサイト制作、WEBアプリ開発、デジタルマーケティング</td>
            </tr>
            <tr>
              <th>従業員数</th>
              <td>50名</td>
            </tr>
            <tr>
              <th>主要取引先</th>
              <td>
                株式会社ABC
                <br />
                株式会社XYZ
                <br />
                株式会社DEF
              </td>
            </tr>
            <tr>
              <th>取引金融機関</th>
              <td>東京銀行 丸の内支店</td>
            </tr>
          </tbody>
        </Content.TableAbout>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6481.634666194532!2d139.76029514931318!3d35.68149955128271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z44CSMTAwLTAwMDUg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65Li444Gu5YaFMS0x!5e0!3m2!1sja!2sjp!4v1722516824094!5m2!1sja!2sjp"
            loading="lazy"
          ></iframe>
        </div>
      </PageAboutAndService.Container>

      <Layout.Breadcrumb breadcrumb={breadcrumb} />

      <Content.CtaArea />
    </>
  )
}
