/**
 * bodyScroll
 * 仕様書: docs/features/utils/bodyScroll/specification.md
 */

// bodyスクロール停止フラグ
let bodyScrollFlag = false

/**
 * iOS判定
 * @returns iOSかどうか
 */
function checkiOS(): boolean {
  const ua = navigator.userAgent.toLowerCase()
  return /iphone|ipad/.test(ua) || (ua.includes('macintosh') && 'ontouchend' in document)
}

/**
 * スクロールバー判定
 * @returns スクロールバーがあるかどうか
 */
function checkScrollBar(): boolean {
  return window.innerWidth - document.body.clientWidth > 0
}

/**
 * bodyスクロール停止
 */
export function bodyScrollStop(): void {
  if (bodyScrollFlag) {
    return
  }

  const scrollY = window.scrollY

  if (checkiOS()) {
    // iOS: position:fixed + top:負のscrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
  } else if (checkScrollBar()) {
    // スクロールバーがある場合: position:fixed + html overflow-y:scroll
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.documentElement.style.overflowY = 'scroll'
  } else {
    // その他: overflow:hidden
    document.body.style.overflow = 'hidden'
  }

  bodyScrollFlag = true
}

/**
 * bodyスクロール再開
 * @param NavigationEvents - NavigationEvents=trueなら最上部へスクロール
 */
export function bodyScrollStart(NavigationEvents?: boolean): void {
  if (!bodyScrollFlag) {
    return
  }

  const scrollY = window.scrollY

  // スタイル除去
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.width = ''
  document.body.style.overflow = ''
  document.documentElement.style.overflowY = ''

  bodyScrollFlag = false

  // NavigationEvents=trueなら最上部へ、それ以外は元の位置へ
  if (NavigationEvents) {
    window.scrollTo(0, 0)
  } else {
    window.scrollTo(0, scrollY)
  }
}
