# ParallaxBg

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/page/AboutAndService/ParallaxBg

## Props(プロパティ)

- なし（固定コンテンツ）

## Style(スタイル)

ParallaxBg共通
- relative

ParallaxBg sticky
- sticky要素

ParallaxBg motion
- framer-motion要素
- style={{ x: smoothX }}
- initial: filter: 'blur(10px)', opacity: 0
- whileInView: filter: 'blur(0px)', opacity: 1
- viewport: once: true, amount: 0
- transition: duration: 1, ease: 'easeOut'

ParallaxBg img
- Next.js Image
- priority属性

## Behavior(動作)

- 'use client'でクライアントコンポーネント
- framer-motion useScrollでスクロール量取得
- target: parallaxBgRef
- offset: ['start end', 'end end']
- 画像幅 - ビューポート幅で移動量計算
- SP時: 移動量を1/3に
- useTransformでx座標変換
- useSpringでスムーズなアニメーション

## Test(テスト)

- パララックス効果
- SP時の移動量調整

## Other(その他)

依存関係
- framer-motion: アニメーション
- Next.js Image: 画像最適化
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- 'use client'でクライアントコンポーネント

参考
- docs/ui/variables/colors.md: カラー定義