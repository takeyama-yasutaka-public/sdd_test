/**
 * constants テスト
 * 仕様書: docs/features/utils/constants/specification.md
 */

import { siteMeta, breakpoint, prePage, globalNavi, ContactNavi } from './constants'

describe('constants', () => {
  // siteMeta: サイトメタデータ
  it('has siteMeta constants', () => {
    expect(siteMeta.siteTitle).toBeDefined()
    expect(siteMeta.siteUrl).toBeDefined()
  })

  // breakpoint: ブレークポイント
  it('has breakpoint constants', () => {
    expect(breakpoint.sp).toBeDefined()
    expect(breakpoint.pc).toBeDefined()
  })

  // prePage: ページネーション設定
  it('has prePage constants', () => {
    expect(prePage.case).toBeDefined()
    expect(prePage.news).toBeDefined()
  })

  // globalNavi: グローバルナビゲーション
  it('has globalNavi constants', () => {
    expect(globalNavi.items).toBeDefined()
    expect(globalNavi.items.length).toBeGreaterThan(0)
  })

  // ContactNavi: お問い合わせナビゲーション
  it('has ContactNavi constants', () => {
    expect(ContactNavi.path).toBe('/contact')
  })
})
