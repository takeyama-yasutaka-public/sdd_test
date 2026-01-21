/**
 * Footer
 * 仕様書: docs/ui/components/ui-kit/layout/Footer/specification.md
 */

import Image from 'next/image'
import { FooterWrapper } from './FooterWrapper/FooterWrapper'
import { FooterNav } from './FooterNav/FooterNav'

/**
 * Footerコンポーネント
 * 固定フッター表示
 */
export function Footer() {
  return (
    <FooterWrapper>
      <footer>
        <div className="inner">
          <div className="top">
            <Image src="/images/logo.png" alt="WEB CORPORATION" width={120} height={40} />
            <p>WEB CORPORATION</p>
          </div>
          <hr className="line" />
          <FooterNav />
          <p className="copyright">© 2024 WEB CORPORATION Company.</p>
        </div>
      </footer>
    </FooterWrapper>
  )
}
