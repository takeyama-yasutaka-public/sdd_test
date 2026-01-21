/*********************************
    インポート
*********************************/

//フック
import type { Metadata } from 'next'
import { siteMeta } from '@/lib/constants'
import { formatDate } from '@/lib/formatDate'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Content from '@/components/content/index'
import * as Action from '@/components/action/index'
import * as Form from '@/components/form/index'
import * as Function from '@/components/function/index'
import * as PageComponent from '@/components/page/component/index'
//画像
import MediaImage from '@/images/no-image.png'
import CardImage from '@/images/no-image.png'

/*********************************
    変数定義
*********************************/

//サイトデータの定義
const pageName = 'コンポーネント一覧'
const pageTitle = `${pageName} | `
//const pageVisual = 'コンポーネント一覧'
const pageDescription = ''
const pageSlug = 'component'
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

//代替アイキャッチ画像データの定義（Case用・componentぺージのみで使用）
const caseEyecatch = {
  url: '/images/no-image.png',
  width: 1080,
  height: 730,
  blurDataURL: '/images/no-image.png',
}

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
      <Layout.PageVisual
        english="SERVICE"
        japanese="事業内容"
        image="service"
      />
      <Layout.PageVisual english="CASE" japanese="実績" image="case" />
      <Layout.PageVisual english="NEWS" japanese="お知らせ" image="news" />
      <Layout.PageVisual
        english="CONTACT"
        japanese="お問い合わせ"
        image="contact"
      />

      <Layout.Container>
        <Layout.Content>
          <Layout.ContentBody>
            <Content.HeadingTopEng english="ENGLISH" />
            <Content.HeadingTopEng english="ENGLISH" color="white" />
            <Content.HeadingEng>ENGLISH</Content.HeadingEng>
            <Content.HeadingEng color="white">ENGLISH</Content.HeadingEng>
            <Content.HeadingJpn>見出し</Content.HeadingJpn>
            <Content.HeadingJpn color="white">見出し</Content.HeadingJpn>
            <Content.Heading h="h1" modifier="first">
              見出し
            </Content.Heading>
            <Content.Heading h="h2" modifier="second">
              見出し
            </Content.Heading>
            <Content.Heading h="h3" modifier="third">
              見出し
            </Content.Heading>
            <Content.ButtonGroup>
              <Content.Button href="/">ボタン</Content.Button>
              <Content.Button href="/" modifierColor="secondary">
                ボタン
              </Content.Button>
              <PageComponent.ButtonAlert />
            </Content.ButtonGroup>
            <Content.ButtonGroup type="case">
              <Content.ButtonCase href="/">ボタン</Content.ButtonCase>
              <Content.ButtonCase href="/" current={true}>
                ボタン
              </Content.ButtonCase>
            </Content.ButtonGroup>
            <Content.ClassLabelGroup>
              <Content.ClassLabel text="分類ラベル" />
              <Content.ClassLabel text="分類ラベル" />
            </Content.ClassLabelGroup>
            <Content.ClassLabelGroup modifier="single">
              <Content.ClassLabel text="分類ラベル" modifier="single" />
              <Content.ClassLabel text="分類ラベル" modifier="single" />
            </Content.ClassLabelGroup>
            <Content.AnnotationText>引用文</Content.AnnotationText>
            <Content.Divider />
            <Content.Table modifierDimension="horizontal">
              <tbody>
                <tr>
                  <th>テーブル</th>
                  <td>テーブル</td>
                  <td>テーブル</td>
                  <td>テーブル</td>
                </tr>
                <tr>
                  <th>テーブル</th>
                  <td>テーブル</td>
                  <td>テーブル</td>
                  <td>テーブル</td>
                </tr>
                <tr>
                  <th>テーブル</th>
                  <td>テーブル</td>
                  <td>テーブル</td>
                  <td>テーブル</td>
                </tr>
              </tbody>
            </Content.Table>
            <Content.Table modifierDimension="vertical">
              <thead>
                <tr>
                  <th>テーブル</th>
                  <th>テーブル</th>
                  <th>テーブル</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>テーブル</td>
                  <td>テーブル</td>
                  <td>テーブル</td>
                </tr>
                <tr>
                  <td>テーブル</td>
                  <td>テーブル</td>
                  <td>テーブル</td>
                </tr>
                <tr>
                  <td>テーブル</td>
                  <td>テーブル</td>
                  <td>テーブル</td>
                </tr>
              </tbody>
            </Content.Table>
            <Content.Table modifierDimension="cross" modifierScroll="spScroll">
              <thead>
                <tr>
                  <th></th>
                  <th>テーブル</th>
                  <th>テーブル</th>
                  <th>テーブル</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>テーブル</th>
                  <td>テーブル</td>
                  <td>テーブル</td>
                  <td>テーブル</td>
                </tr>
                <tr>
                  <th>テーブル</th>
                  <td>テーブル</td>
                  <td>テーブル</td>
                  <td>テーブル</td>
                </tr>
                <tr>
                  <th>テーブル</th>
                  <td>テーブル</td>
                  <td>テーブル</td>
                  <td>テーブル</td>
                </tr>
              </tbody>
            </Content.Table>
            <Content.TableAbout>
              <tbody>
                <tr>
                  <th>テーブル</th>
                  <td>テーブル</td>
                </tr>
                <tr>
                  <th>テーブル</th>
                  <td>テーブル</td>
                </tr>
                <tr>
                  <th>テーブル</th>
                  <td>テーブル</td>
                </tr>
              </tbody>
            </Content.TableAbout>
            <Content.BulletList>
              <li>リスト</li>
              <li>リスト</li>
              <li>リスト</li>
            </Content.BulletList>
            <Content.OrderList>
              <li>リスト</li>
              <li>リスト</li>
              <li>リスト</li>
            </Content.OrderList>
            <Content.Pager>
              <Content.PagerItem type="prev" href="/" />
              <Content.PagerItem type="current" key={0} number={1} />
              <Content.PagerItem type="number" key={0} href="/" number={2} />
              <Content.PagerItem type="number" key={0} href="/" number={3} />
              <Content.PagerItem type="dots" key={0} />
              <Content.PagerItem type="number" key={0} href="/" number={6} />
              <Content.PagerItem type="next" href="/" />
            </Content.Pager>
            <Content.NewsPosts>
              <Content.NewsPostsItem
                href="/"
                time="2023-11-01T09:00:00Z"
                title="ニュースタイトル"
              />
              <Content.NewsPostsItem
                href="/"
                time="2023-11-01T09:00:00Z"
                title="ニュースタイトル"
              />
              <Content.NewsPostsItem
                href="/"
                time="2023-11-01T09:00:00Z"
                title="ニュースタイトル"
              />
            </Content.NewsPosts>
            <Content.MediaTopService image={MediaImage} alt="メディア">
              <h3>見出し</h3>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </Content.MediaTopService>
            <Content.MediaService image={MediaImage} alt="メディア">
              <h3>見出し</h3>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
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
            <Content.MediaAboutAndService image={MediaImage} alt="メディア">
              <Content.HeadingEng>ENGLISH</Content.HeadingEng>
              <Content.Heading h="h3" modifier="second">
                テキストテキストテキストテキスト
              </Content.Heading>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                <br />
                <br />
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                <br />
                <br />
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                <br />
              </p>
            </Content.MediaAboutAndService>
            <Content.MediaAboutAndService
              image={MediaImage}
              alt="メディア"
              modifier="reverse"
            >
              <Content.HeadingEng>ENGLISH</Content.HeadingEng>
              <Content.Heading h="h3" modifier="second">
                テキストテキストテキストテキスト
              </Content.Heading>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                <br />
                <br />
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                <br />
                <br />
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                <br />
              </p>
            </Content.MediaAboutAndService>
            <Content.MediaAboutAndService
              image={MediaImage}
              alt="メディア"
              modifier="massage"
            >
              <Content.HeadingEng>ENGLISH</Content.HeadingEng>
              <Content.Heading h="h3" modifier="second">
                テキストテキストテキストテキスト
              </Content.Heading>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                <br />
                <br />
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                <br />
                <br />
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                <br />
              </p>
            </Content.MediaAboutAndService>
            <Content.MediaAboutAndService
              image={MediaImage}
              alt="メディア"
              modifier="model"
            >
              <Content.HeadingEng>ENGLISH</Content.HeadingEng>
              <Content.Heading h="h3" modifier="second">
                テキストテキストテキストテキスト
              </Content.Heading>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                <br />
                <br />
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                <br />
                <br />
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                <br />
              </p>
            </Content.MediaAboutAndService>
            <Content.CardGroup>
              <Content.Card
                href="/"
                image={caseEyecatch}
                alt="カード"
                category={[
                  { name: '分類ラベル', id: '0' },
                  { name: '分類ラベル', id: '1' },
                ]}
                text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
              />
              <Content.Card
                href="/"
                image={caseEyecatch}
                alt="カード"
                category={[{ name: '分類ラベル', id: '0' }]}
                text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
              />
              <Content.Card
                href="/"
                image={caseEyecatch}
                alt="カード"
                category={[{ name: '分類ラベル', id: '0' }]}
                text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
              />
            </Content.CardGroup>
            <Content.CardTopGroup>
              <Content.CardTop
                href="/"
                image={CardImage}
                alt="カード"
                category={[
                  { name: '分類ラベル', id: '0' },
                  { name: '分類ラベル', id: '1' },
                ]}
                text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
              />
              <Content.CardTop
                href="/"
                image={CardImage}
                alt="カード"
                category={[{ name: '分類ラベル', id: '0' }]}
                text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
              />
              <Content.CardTop
                href="/"
                image={CardImage}
                alt="カード"
                category={[{ name: '分類ラベル', id: '0' }]}
                text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
              />
            </Content.CardTopGroup>
          </Layout.ContentBody>

          <Layout.ContentBody>
            <PageComponent.Forms />
          </Layout.ContentBody>
        </Layout.Content>
      </Layout.Container>

      <Layout.Container>
        <Layout.Content>
          <Layout.ContentHeader>
            <Layout.ContentHeaderTop>
              <time dateTime="2023-11-01T09:00:00Z">
                {formatDate('2023-11-01T09:00:00Z')}
              </time>
            </Layout.ContentHeaderTop>
            <p>test</p>
          </Layout.ContentHeader>
          <Layout.ContentBody>
            <p>test</p>
          </Layout.ContentBody>
          <Layout.ContentFooter>
            <p>test</p>
          </Layout.ContentFooter>
        </Layout.Content>
      </Layout.Container>

      <Layout.Breadcrumb breadcrumb={breadcrumb} />

      <Content.CtaArea />
    </>
  )
}
