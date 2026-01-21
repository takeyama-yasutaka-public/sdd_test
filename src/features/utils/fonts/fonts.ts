/**
 * fonts
 * 仕様書: docs/features/utils/fonts/specification.md
 */

import { Noto_Sans_JP, Montserrat } from 'next/font/google'

// Noto Sans JPフォント
export const notojp = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-notojp',
  display: 'swap',
})

// Montserratフォント
export const montserrat = Montserrat({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})
