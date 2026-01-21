/**
 * Home Container
 * 仕様書: docs/ui/components/ui-features/home/Container/specification.md
 */

import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  modifier: string
}

/**
 * Containerコンポーネント
 * トップページ用コンテナ
 */
export function Container({ children, modifier }: ContainerProps) {
  return (
    <div className="containerBg">
      <div className="container">
        <div className="inner">
          {modifier === 'service' && (
            <div className="background">
              <div className="backgroundInner">
                <div className="line1" />
                <div className="line2" />
              </div>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}
