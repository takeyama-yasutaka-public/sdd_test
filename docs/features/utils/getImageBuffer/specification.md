# getImageBuffer

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/getImageBuffer.ts

## Functions(関数)

getImageBuffer
- 画像バッファ取得
- src: string
- 戻り値: Buffer
- srcがhttpで始まる場合: fetchで取得
- それ以外: public/パスから読み込み

## Other(その他)

依存関係
- node:fs/promises: ファイル読み込み

実装
- 画像バッファ取得

参考
- docs/features/package.md: パッケージ一覧