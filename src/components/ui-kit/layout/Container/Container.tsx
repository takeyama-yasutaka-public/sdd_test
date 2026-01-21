/**
 * Container
 * 仕様書: docs/ui/components/ui-kit/layout/Container/specification.md
 */

import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  modifier?: string
}

/**
 * Containerコンポーネント
 * 中央寄せのコンテナ
 * modifier='small'時: 小さい幅のコンテナ
 */
export function Container({ children, modifier }: ContainerProps) {
  const innerMaxWidth = modifier === 'small' ? 'max-w-[1080px]' : 'max-w-[1280px]'

  return (
    <div className="flex-1 flex justify-center w-full">
      <div className={`flex w-full ${innerMaxWidth} py-20 px-10`}>{children}</div>
    </div>
  )
}
