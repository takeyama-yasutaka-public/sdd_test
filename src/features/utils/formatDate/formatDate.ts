/**
 * formatDate
 * 仕様書: docs/features/utils/formatDate/specification.md
 */

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

// dayjsプラグインの有効化
dayjs.extend(utc)
dayjs.extend(timezone)

/**
 * 日付の変換
 * @param date - 日付文字列
 * @returns 'YYYY年M月D日'形式の文字列
 */
export function formatDate(date: string): string {
  return dayjs(date).tz('Asia/Tokyo').format('YYYY年M月D日')
}
