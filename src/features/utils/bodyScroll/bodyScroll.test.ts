/**
 * bodyScroll ユーティリティテスト
 * 仕様書: docs/features/utils/bodyScroll/specification.md
 */

import { bodyScrollStop, bodyScrollStart } from './bodyScroll'

describe('bodyScroll', () => {
  // 各テスト前にDOM状態をリセット
  beforeEach(() => {
    document.body.style.cssText = ''
    document.documentElement.style.cssText = ''
    window.scrollTo = jest.fn()
  })

  describe('bodyScrollStop', () => {
    // iOS/非iOS動作: 非iOS
    it('sets overflow hidden on non-iOS', () => {
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        writable: true,
      })
      bodyScrollStop()
      expect(document.body.style.overflow).toBe('hidden')
    })

    // iOS/非iOS動作: iOS
    it('sets position fixed on iOS', () => {
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
        writable: true,
      })
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      bodyScrollStop()
      expect(document.body.style.position).toBe('fixed')
    })
  })

  describe('bodyScrollStart', () => {
    // スタイル付与/除去
    it('removes styles after stop', () => {
      bodyScrollStop()
      bodyScrollStart()
      expect(document.body.style.overflow).toBe('')
    })

    // スクロール位置保持
    it('restores scroll position', () => {
      Object.defineProperty(window, 'scrollY', { value: 200, writable: true })
      bodyScrollStop()
      bodyScrollStart()
      expect(window.scrollTo).toHaveBeenCalled()
    })

    // NavigationEvents=true時の最上部スクロール
    it('scrolls to top when NavigationEvents is true', () => {
      bodyScrollStop()
      bodyScrollStart(true)
      expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
    })
  })
})
