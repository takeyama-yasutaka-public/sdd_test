# formatDate

バージョン: v1.0.0（過去PJ）
作成日: 2026-01-22
既存: src/lib/formatDate.ts

## Functions(関数)

### formatDate
- 日付文字列を日本語フォーマットに変換
- パラメータ: date: string
- 戻り値: string（'YYYY年M月D日'形式）

## Implementation(実装)

- dayjs.utc(date).tz('Asia/Tokyo').format('YYYY年M月D日')
- UTCからAsia/Tokyoタイムゾーンに変換

## Dependencies(依存関係)

- dayjs: 日付処理ライブラリ
- dayjs/plugin/utc: UTCプラグイン
- dayjs/plugin/timezone: タイムゾーンプラグイン
