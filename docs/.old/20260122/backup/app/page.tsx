/*********************************
    インポート
*********************************/

//スタイル
import styles from './page.module.scss'
//フック
import { getNewsAll } from '@/lib/api'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Content from '@/components/content/index'
import * as Action from '@/components/action/index'
import * as Function from '@/components/function/index'
import * as PageHome from '@/components/page/home/index'
//画像
import AbotuImage from '@/images/web-corporation/top_about.png'
import ServiceImage1 from '@/images/web-corporation/top_service_1.png'
import ServiceImage2 from '@/images/web-corporation/top_service_2.png'
import ServiceImage3 from '@/images/web-corporation/top_service_3.png'
import CaseImage1 from '@/images/web-corporation/top_case_1.png'
import CaseImage2 from '@/images/web-corporation/top_case_2.png'
import CaseImage3 from '@/images/web-corporation/top_case_3.png'

/*********************************
    変数定義
*********************************/

//トップページか否か
const isHome = true

/*********************************
   ページデータのエクスポート
*********************************/

export default async function Page() {
  //ブログ一覧の取得
  const postsObj = await getNewsAll(1, 3)
  const posts = postsObj?.contents

  //ページの出力
  return (
    <>
      <Function.StructuredData isHome={isHome} />

      <Layout.Background home />

      <PageHome.MainVisual />

      <PageHome.Container modifier="about">
        <div className={styles.about}>
          <div className={styles.body}>
            <div>
              <Content.HeadingTopEng english="ABOUT" color="white" />
              <Content.HeadingJpn color="white">会社概要</Content.HeadingJpn>
            </div>
            <div className={styles.text}>
              <p className={styles.textStrong}>
                すべてのクライアントに
                <br />
                最適なデジタルソリューションを
              </p>
              <p>
                私たちは、クライアントのビジネス成長をサポートするWEB制作会社です。
                <br />
                WEBサイト制作、WEBアプリ開発、デジタルマーケティングを通じて、中小企業、スタートアップ、EC事業者、教育機関など、多様なニーズに応えます。
              </p>
            </div>
            <div className={styles.bottom}>
              <Content.Button href="/about" modifierColor="secondary">
                会社概要を見る
              </Content.Button>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <PageHome.MediaImage image={AbotuImage} alt="ABOUT" />
          </div>
        </div>
      </PageHome.Container>

      <PageHome.Container modifier="service">
        <div className={styles.service}>
          <div className={styles.body}>
            <div>
              <Content.HeadingTopEng english="SERVICE" />
              <Content.HeadingJpn>事業内容</Content.HeadingJpn>
            </div>
            <div className={styles.text}>
              <p className={styles.textStrong}>デジタルでビジネスを変革する</p>
              <p>
                WEB&nbsp;CORPORATIONでは、各分野の専門家が集まり、クライアントのビジネス目標を達成するための幅広いサービスを提供しています。
              </p>
            </div>
          </div>
          <div className={styles.media}>
            <Content.MediaTopService image={ServiceImage1} alt="WEBサイト制作">
              <h3>WEBサイト制作</h3>
              <p>
                クライアントのブランドイメージを反映し、ユーザー体験を重視したWEBサイトを制作。デジタルマーケティングと連携し、集客力の高いサイトを構築します。
              </p>
            </Content.MediaTopService>{' '}
            <Content.MediaTopService image={ServiceImage2} alt="WEBアプリ開発">
              <h3>WEBアプリ開発</h3>
              <p>
                ビジネスの効率化と顧客満足度向上を目指し、カスタマイズされたWEBアプリを開発。マーケティング戦略に合わせたアプリケーションの設計・実装を行います。
              </p>
            </Content.MediaTopService>{' '}
            <Content.MediaTopService
              image={ServiceImage3}
              alt="デジタルマーケティング"
            >
              <h3>デジタルマーケティング</h3>
              <p>
                市場調査やコンセプト設計、市場分析から戦略設計、実施までを一貫してサポートし、クライアントのビジネス成長を促進します。データに基づいた効果的なマーケティングを展開します。。
              </p>
            </Content.MediaTopService>
          </div>
          <div className={styles.footer}>
            <Content.Button href="/service">事業内容を見る</Content.Button>
          </div>
        </div>
      </PageHome.Container>

      <PageHome.Container modifier="case">
        <div className={styles.case}>
          <div className={styles.body}>
            <div>
              <Content.HeadingTopEng english="CASE" />
              <Content.HeadingJpn>実績</Content.HeadingJpn>
            </div>
            <div className={styles.text}>
              <p>
                様々な業界のクライアントと連携し、成功事例を積み重ねてきました。
              </p>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <Content.CardTopGroup>
              <Content.CardTop
                href="/case/category/site"
                image={CaseImage1}
                alt="WEBサイト制作"
                category={[{ name: 'WEBサイト制作', id: '0' }]}
                text="新規事業の立ち上げを支援するためのWEBサイトを構築し、ビジネスの成長に寄与。"
              />
              <Content.CardTop
                href="/case/category/app"
                image={CaseImage2}
                alt="WEBアプリ開発"
                category={[{ name: 'WEBアプリ開発', id: '0' }]}
                text="クライアントの業務効率を向上させるため、カスタマイズアプリを提供し、成果を上げています。"
              />
              <Content.CardTop
                href="/case/category/marketing"
                image={CaseImage3}
                alt="デジタルマーケティング"
                category={[{ name: 'デジタルマーケティング', id: '0' }]}
                text="新製品の市場投入をサポートし、売上とブランド認知度の向上を実現。"
              />
            </Content.CardTopGroup>
          </div>
          <div className={styles.footer}>
            <Content.Button href="/case">実績一覧を見る</Content.Button>
          </div>
        </div>
      </PageHome.Container>

      <PageHome.Container modifier="news">
        <div className={styles.news}>
          <div className={styles.body}>
            <div>
              <Content.HeadingTopEng english="NEWS" />
              <Content.HeadingJpn>お知らせ</Content.HeadingJpn>
            </div>
          </div>
          <div className={styles.postWrapper}>
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
            <div className={styles.footer}>
              <Content.Button href="/news">お知らせ一覧を見る</Content.Button>
            </div>
          </div>
        </div>
      </PageHome.Container>

      <Content.CtaArea />

      <Action.Loading />
    </>
  )
}
