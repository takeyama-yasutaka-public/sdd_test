# ブレイクポイント

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/constants.ts

## Breakpoints(ブレイクポイント)

- sp: 767.98px以下（モバイル）
- pc: 768px以上（PC）

## TailwindBreakpoints(Tailwindブレイクポイント)

モバイルファースト
- デフォルト: モバイル（0px以上）
- sm: 640px以上
- md: 768px以上（PC）
- lg: 1024px以上
- xl: 1280px以上

## Other(その他)

実装
- tailwind.config.jsのtheme.extend.screensに定義
- 既存のsp/pcをTailwindのmdにマッピング
- モバイルファーストアプローチ

参考
- docs/ui/variables/: 他のデザイントークン