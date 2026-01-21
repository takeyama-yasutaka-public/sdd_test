/**
 * microCMS API
 * 仕様書: docs/features/api/microcms/specification.md
 */

import { createClient } from 'microcms-js-sdk'

// microCMSクライアント作成
const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || '',
  apiKey: process.env.API_KEY || '',
})

// 型定義
export type CasePost = {
  id: string
  title: string
  content: string
  date: string
  eyecatch?: {
    url: string
    width: number
    height: number
  }
  category: Array<{
    id: string
    name: string
  }>
}

export type CaseListResponse = {
  contents: CasePost[]
  totalCount: number
  limit: number
  offset: number
}

export type CaseCategory = {
  id: string
  name: string
  slug: string
}

export type NewsPost = {
  id: string
  title: string
  content: string
  date: string
}

export type NewsListResponse = {
  contents: NewsPost[]
  totalCount: number
  limit: number
  offset: number
}

/**
 * 実績記事取得（ID指定）
 * @param articleId - 記事ID
 * @param draftKey - 下書きキー（オプション）
 * @returns 実績記事オブジェクト
 */
export async function getCasePostById(articleId: string, draftKey?: string): Promise<CasePost | undefined> {
  try {
    const response = await client.get<CasePost>({
      endpoint: 'case',
      contentId: articleId,
      ...(draftKey && { draftKey }),
    })
    return response
  } catch (error) {
    console.log('getCasePostById error:', error)
    return undefined
  }
}

/**
 * 実績一覧取得（ページネーション対応）
 * @param id - ページ番号（デフォルト: 1）
 * @param PER_PAGE - 1ページあたりの件数（デフォルト: 100）
 * @returns 実績一覧レスポンス
 */
export async function getCaseAll(id: number = 1, PER_PAGE: number = 100): Promise<CaseListResponse | undefined> {
  try {
    const offset = (id - 1) * PER_PAGE
    const response = await client.get<CaseListResponse>({
      endpoint: 'case',
      queries: {
        limit: PER_PAGE,
        offset,
      },
    })
    return response
  } catch (error) {
    console.log('getCaseAll error:', error)
    return undefined
  }
}

/**
 * 実績カテゴリー取得
 * @param limit - 取得件数（デフォルト: 100）
 * @returns カテゴリー配列
 */
export async function getCaseCategory(limit: number = 100): Promise<CaseCategory[] | undefined> {
  try {
    const response = await client.get<{ contents: CaseCategory[] }>({
      endpoint: 'case-category',
      queries: {
        limit,
      },
    })
    return response.contents
  } catch (error) {
    console.log('getCaseCategory error:', error)
    return undefined
  }
}

/**
 * カテゴリー絞り込み一覧取得
 * @param catId - カテゴリーID
 * @param id - ページ番号（デフォルト: 1）
 * @param PER_PAGE - 1ページあたりの件数（デフォルト: 100）
 * @returns 実績一覧レスポンス
 */
export async function getCaseAllByCategory(
  catId: number,
  id: number = 1,
  PER_PAGE: number = 100
): Promise<CaseListResponse | undefined> {
  try {
    const offset = (id - 1) * PER_PAGE
    const response = await client.get<CaseListResponse>({
      endpoint: 'case',
      queries: {
        filters: `category[equals]${catId}`,
        limit: PER_PAGE,
        offset,
      },
    })
    return response
  } catch (error) {
    console.log('getCaseAllByCategory error:', error)
    return undefined
  }
}

/**
 * ニュース記事取得（ID指定）
 * @param articleId - 記事ID
 * @param draftKey - 下書きキー（オプション）
 * @returns ニュース記事オブジェクト
 */
export async function getNewsPostById(articleId: string, draftKey?: string): Promise<NewsPost | undefined> {
  try {
    const response = await client.get<NewsPost>({
      endpoint: 'news',
      contentId: articleId,
      ...(draftKey && { draftKey }),
    })
    return response
  } catch (error) {
    console.log('getNewsPostById error:', error)
    return undefined
  }
}

/**
 * ニュース一覧取得（ページネーション対応）
 * @param id - ページ番号（デフォルト: 1）
 * @param PER_PAGE - 1ページあたりの件数（デフォルト: 100）
 * @returns ニュース一覧レスポンス
 */
export async function getNewsAll(id: number = 1, PER_PAGE: number = 100): Promise<NewsListResponse | undefined> {
  try {
    const offset = (id - 1) * PER_PAGE
    const response = await client.get<NewsListResponse>({
      endpoint: 'news',
      queries: {
        limit: PER_PAGE,
        offset,
      },
    })
    return response
  } catch (error) {
    console.log('getNewsAll error:', error)
    return undefined
  }
}
