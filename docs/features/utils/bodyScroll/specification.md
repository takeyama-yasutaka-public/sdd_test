# bodyScroll

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/bodyScroll.ts

## Functions(関数)

bodyScrollStop
- bodyスクロール停止
- iOS判定: position:fixed + top:負のscrollY
- スクロールバー判定: position:fixed + html overflow-y:scroll
- その他: overflow:hidden
- bodyScrollFlag = true

bodyScrollStart
- bodyスクロール再開
- bodyScrollFlagがtrueの場合のみ実行
- スタイル除去 + 元の位置にscrollTo
- NavigationEvents=trueなら最上部へ
- bodyScrollFlag = false

## CheckiOS(iOS判定)

- userAgent判定(iphone/ipad/macintosh+touch)

## CheckScrollBar(スクロールバー判定)

- innerWidth - body.clientWidthで判定

## Test(テスト)

- iOS/非iOS動作
- スクロール位置保持
- スタイル付与/除去
- NavigationEvents=true時の最上部スクロール

## Other(その他)

依存関係
- なし(Pure JavaScript)

注意点
- モーダルやドロワー開閉時に使用
- bodyScrollFlagはモジュールスコープのフラグ
- 複数回呼び出しても安全

使用例
- モーダル開く時: bodyScrollStop()
- モーダル閉じる時: bodyScrollStart()
- ページ遷移時: bodyScrollStart(true)