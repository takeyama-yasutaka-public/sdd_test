# fonts

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/fonts.ts

## Fonts(フォント)

notojp
- Noto_Sans_JP from 'next/font/google'
- weight: ['300', '400', '500', '700']
- subsets: ['latin']
- variable: '--font-notojp'
- display: 'swap'

montserrat
- Montserrat from 'next/font/google'
- weight: ['300', '400']
- subsets: ['latin']
- variable: '--font-montserrat'
- display: 'swap'

## Other(その他)

依存関係
- next/font/google: Google Fonts

実装
- Next.js Font Optimization使用

参考
- docs/ui/variables/typography.md: タイポグラフィ定義