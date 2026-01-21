/**
 * AboutAndService Container
 * 仕様書: docs/ui/components/ui-features/aboutAndService/Container/specification.md
 */

import { ReactNode } from 'react'
import { ParallaxBg } from '../ParallaxBg/ParallaxBg'

interface ContainerProps {
  children: ReactNode
  modifier?: 'mission-and-vision' | 'massage' | 'business-model' | 'company'
}

/**
 * Containerコンポーネント
 * ABOUT/SERVICEページ用コンテナ
 */
export function Container({ children, modifier }: ContainerProps) {
  return (
    <div>
      {modifier === 'mission-and-vision' && <ParallaxBg />}
      {modifier === 'massage' && (
        <div className="massageBg">
          <div className="backgroundInner">
            <div className="line1" />
            <div className="line2" />
          </div>
        </div>
      )}
      {modifier === 'business-model' && (
        <div className="businessModelBg">
          <div className="backgroundInner">
            <div className="line1" />
            <div className="line2" />
          </div>
          <div className="bottombox" />
        </div>
      )}
      <div className="inner">{children}</div>
    </div>
  )
}
