/*********************************
    microCMSのAPIを取得
*********************************/
import { createClient } from 'microcms-js-sdk'

//clientデータの取得
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN!,
  apiKey: process.env.API_KEY!,
})

//実績記事の取得
export async function getCasePostById(articleId: string, draftKey?: string) {
  try {
    const post = await client.get({
      endpoint: 'case',
      contentId: articleId,
      queries: { draftKey },
    })
    return post
  } catch (err) {
    console.log(err)
  }
}

//実績一覧の取得
export async function getCaseAll(id: number = 1, PER_PAGE: number = 100) {
  try {
    const posts = await client.get({
      endpoint: 'case',
      queries: {
        orders: '-date',
        offset: (id - 1) * PER_PAGE,
        limit: PER_PAGE,
      },
    })
    return posts
  } catch (err) {
    console.log(err)
  }
}

//実績カテゴリーの取得
export async function getCaseCategory(limit = 100) {
  try {
    const categories = await client.get({
      endpoint: 'category',
      queries: {
        limit: limit,
      },
    })
    return categories.contents
  } catch (err) {
    console.log(err)
  }
}

//実績カテゴリー絞り込み一覧の取得
export async function getCaseAllByCategory(
  catId: number,
  id: number = 1,
  PER_PAGE: number = 100
) {
  try {
    const posts = await client.get({
      endpoint: 'case',
      queries: {
        filters: `category[contains]${catId}`,
        orders: '-date',
        offset: (id - 1) * PER_PAGE,
        limit: PER_PAGE,
      },
    })
    return posts
  } catch (err) {
    console.log(err)
  }
}

//ニュース記事の取得
export async function getNewsPostById(articleId: string, draftKey?: string) {
  try {
    const post = await client.get({
      endpoint: 'news',
      contentId: articleId,
      queries: { draftKey },
    })
    return post
  } catch (err) {
    console.log(err)
  }
}

//ニュース一覧の取得
export async function getNewsAll(id: number = 1, PER_PAGE: number = 100) {
  try {
    const posts = await client.get({
      endpoint: 'news',
      queries: {
        orders: '-date',
        offset: (id - 1) * PER_PAGE,
        limit: PER_PAGE,
      },
    })
    return posts
  } catch (err) {
    console.log(err)
  }
}
