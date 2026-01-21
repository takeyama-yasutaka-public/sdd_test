/**
 * bodyScroll ユーティリティテスト
 * 過去PJの既存動作を保証するテスト
 * 
 * 注意: DOM操作のテストのため、jsdomでの動作を想定
 */

import { bodyScrollStop, bodyScrollStart } from '@/lib/bodyScroll'

describe('bodyScroll', () => {
  // 各テスト前にDOM状態をリセット
  beforeEach(() => {
    document.body.style.cssText = ''
    document.documentElement.style.cssText = ''
    window.scrollTo = jest.fn()
  })

  describe('bodyScrollStop', () => {
    // 非iOS、スクロールバーなしの場合
    it('sets overflow hidden on non-iOS without scrollbar', () => {
      // userAgentをモック（非iOS）
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        writable: true,
      })

      // スクロールバーなし（innerWidth === clientWidth）
      Object.defineProperty(window, 'innerWidth', { value: 1920, writable: true })
      Object.defineProperty(document.body, 'clientWidth', { value: 1920, writable: true })

      bodyScrollStop()

      expect(document.body.style.overflow).toBe('hidden')
    })
  })

  describe('bodyScrollStart', () => {
    // bodyScrollStop後にスタイルが除去される
    it('removes styles after bodyScrollStop', () => {
      // セットアップ
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        writable: true,
      })
      Object.defineProperty(window, 'innerWidth', { value: 1920, writable: true })
      Object.defineProperty(document.body, 'clientWidth', { value: 1920, writable: true })

      bodyScrollStop()
      expect(document.body.style.overflow).toBe('hidden')

      bodyScrollStart()
      expect(document.body.style.overflow).toBe('')
    })

    // NavigationEvents=trueで最上部へスクロール
    it('scrolls to top when NavigationEvents is true', () => {
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        writable: true,
      })
      Object.defineProperty(window, 'innerWidth', { value: 1920, writable: true })
      Object.defineProperty(document.body, 'clientWidth', { value: 1920, writable: true })

      bodyScrollStop()
      bodyScrollStart(true)

      expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
    })

    // bodyScrollStopを呼ばずにbodyScrollStartを呼んでも何も起きない
    it('does nothing if bodyScrollStop was not called', () => {
      // 新しいテスト環境では bodyScrollFlag が false の状態
      bodyScrollStart()
      
      // スタイルが変更されないことを確認（何もしない）
      expect(document.body.style.overflow).toBe('')
    })
  })
})
