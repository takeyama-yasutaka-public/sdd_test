# formatDate

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/formatDate.ts

## Functions(関数)

formatDate
- 日付の変換
- date: string
- 戻り値: 'YYYY年M月D日'形式の文字列
- タイムゾーン: Asia/Tokyo

## Test(テスト)

- 日付フォーマット変換
- タイムゾーン変換

## Other(その他)

依存関係
- dayjs: 日付処理
- dayjs/plugin/utc: UTCプラグイン
- dayjs/plugin/timezone: タイムゾーンプラグイン

実装
- dayjsを使用
- UTCからAsia/Tokyoに変換