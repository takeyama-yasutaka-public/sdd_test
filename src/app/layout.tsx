/*********************************
    インポート
*********************************/

//スタイル
import './globals.css'
//フック
import type { Metadata } from 'next'
import { siteMeta } from '@/features/utils/constants/constants'
//コンポーネント
import * as Layout from '@/components/ui-kit/layout/index'
import * as Function from '@/components/ui-features/NavigationEvents/NavigationEvents'
import { Suspense } from 'react'
//フォント
import { notojp, montserrat } from '@/features/utils/fonts/fonts'

/*********************************
    メタデータのエクスポート
*********************************/

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.siteUrl),
  title: siteMeta.siteTitle,
  description: siteMeta.siteDesc,
  alternates: {
    canonical: siteMeta.siteUrl,
  },
  openGraph: {
    title: siteMeta.siteTitle,
    description: siteMeta.siteDesc,
    siteName: siteMeta.siteTitle,
    type: siteMeta.siteType,
    locale: siteMeta.siteLocale,
    url: siteMeta.siteUrl,
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
  twitter: {
    title: siteMeta.siteTitle,
    description: siteMeta.siteDesc,
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
  icons: [
    {
      rel: 'icon',
      url: siteMeta.siteFavicon,
    },
    {
      rel: 'apple-touch-icon',
      url: siteMeta.siteAppleTouchIcon,
    },
  ],
  robots: {
    index: false,
  },
}

/*********************************
   レイアウトデータのエクスポート
*********************************/

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  //ページの出力
  return (
    <html lang={siteMeta.siteLang}>
      <body className={`${notojp.variable} ${montserrat.variable}`}>
        <Layout.Header />

        <Layout.Wrapper>
          {children}

          <Layout.Pagetop />
        </Layout.Wrapper>

        <Layout.Footer />

        <Suspense>
          <Function.NavigationEvents />
        </Suspense>
      </body>
    </html>
  )
}
