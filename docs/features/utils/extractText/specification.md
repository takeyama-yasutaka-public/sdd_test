# extractText

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/extract-text.ts

## Functions(関数)

extractText
- HTML文字列からテキスト抽出
- html: string
- length: number (デフォルト: 80)
- more: string (デフォルト: '…')
- 戻り値: 抽出テキスト + more
- img要素をスキップ
- a要素のhrefを無視

## Other(その他)

依存関係
- html-to-text: HTML変換

実装
- HTML文字列からテキスト抽出

参考
- docs/features/package.md: パッケージ一覧