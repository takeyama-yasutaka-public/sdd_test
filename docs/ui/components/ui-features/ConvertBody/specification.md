# ConvertBody

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/function/ConvertBody

## Props(プロパティ)

- contentHTML: string

## Features(機能)

HTML変換
- html-react-parserでHTML文字列をReact要素に変換
- img要素をNext.js Imageに置換
- src, alt, width, height属性を取得

## Behavior(動作)

- parse関数でHTML変換
- replaceオプションでimg要素をNext.js Imageに置換

## Test(テスト)

- HTML文字列の変換
- img要素のNext.js Image置換

## Other(その他)

依存関係
- html-react-parser: HTML変換
- Next.js Image: 画像最適化

実装
- HTML文字列をReact要素に変換

参考
- docs/ui/variables/colors.md: カラー定義