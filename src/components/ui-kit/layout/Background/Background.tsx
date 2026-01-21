/**
 * Background
 * 仕様書: docs/ui/components/ui-kit/layout/Background/specification.md
 */

import { ReactNode } from 'react'

interface BackgroundProps {
  home?: boolean
}

/**
 * Backgroundコンポーネント
 * 背景装飾表示
 * home=true時: topbox/bottombox非表示
 */
export function Background({ home }: BackgroundProps) {
  return (
    <div className="absolute inset-0">
      {/* 背景装飾要素 */}
      {!home && <div className="topbox" />}
      <div className="line1" />
      <div className="line2" />
      {!home && <div className="bottombox" />}
    </div>
  )
}
