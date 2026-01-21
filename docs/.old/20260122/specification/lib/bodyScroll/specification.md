# bodyScroll

バージョン: v1.0.0（過去PJ）
作成日: 2026-01-22
既存: src/lib/bodyScroll.ts

## Functions(関数)

### bodyScrollStop
- bodyスクロール停止
- bodyScrollFlag = true

iOS判定時（checkiOS() = true）
- document.body.style.position = 'fixed'
- document.body.style.top = `-${windowScroll}px`
- document.body.style.width = '100%'

スクロールバー有り時（checkScrollBar() = true）
- document.body.style.position = 'fixed'
- document.body.style.top = `-${windowScroll}px`
- document.body.style.width = '100%'
- document.querySelector('html').style.overflowY = 'scroll'

その他
- document.body.style.overflow = 'hidden'

### bodyScrollStart
- bodyスクロール再開
- パラメータ: NavigationEvents?: boolean
- bodyScrollFlagがtrueの場合のみ実行
- bodyScrollFlag = false

iOS判定時/スクロールバー有り時
- bodyTop取得
- style.removeProperty('position', 'top', 'width')
- window.scrollTo(0, parseInt(bodyTop) * -1)
- （スクロールバー有り時）html.style.removeProperty('overflow-y')

その他
- document.body.style.removeProperty('overflow')

NavigationEvents=true時
- window.scrollTo(0, 0)（最上部へ）

### checkiOS（内部関数）
- userAgent判定
- 'iphone' | 'ipad' | ('macintosh' && 'ontouchend' in document)
- 戻り値: boolean

### checkScrollBar（内部関数）
- window.innerWidth - document.body.clientWidth > 0
- 戻り値: boolean

## Variables(変数)

- bodyScrollFlag: boolean（モジュールスコープ）

## Dependencies(依存関係)

- なし（Pure JavaScript）

## Usage(使用例)

- モーダル開く時: bodyScrollStop()
- モーダル閉じる時: bodyScrollStart()
- ページ遷移時: bodyScrollStart(true)
