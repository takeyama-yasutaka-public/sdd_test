/**
 * ButtonAlert
 * 仕様書: docs/ui/components/ui-features/component/ButtonAlert/specification.md
 */

'use client'

import { Button } from '@/components/ui-kit/content/Button/Button'

/**
 * ButtonAlertコンポーネント
 * 開発用コンポーネント
 */
export function ButtonAlert() {
  const handleClick = () => {
    alert('alert')
  }

  return <Button onClick={handleClick}>アラート</Button>
}
