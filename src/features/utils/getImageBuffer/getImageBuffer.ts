/**
 * getImageBuffer
 * 仕様書: docs/features/utils/getImageBuffer/specification.md
 */

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

/**
 * 画像バッファ取得
 * @param src - 画像ソース（URLまたはパス）
 * @returns 画像バッファ
 */
export async function getImageBuffer(src: string): Promise<Buffer> {
  // srcがhttpで始まる場合: fetchで取得
  if (src.startsWith('http://') || src.startsWith('https://')) {
    const response = await fetch(src)
    const arrayBuffer = await response.arrayBuffer()
    return Buffer.from(arrayBuffer)
  }

  // それ以外: public/パスから読み込み
  const publicPath = join(process.cwd(), 'public', src)
  return await readFile(publicPath)
}
