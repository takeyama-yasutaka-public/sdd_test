/*********************************
    フォント
*********************************/

import { Noto_Sans_JP, Montserrat } from 'next/font/google'

const notojp = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-notojp',
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export { notojp, montserrat }
