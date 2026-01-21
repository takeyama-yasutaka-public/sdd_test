# Hamburger

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/layout/Header/Hamburger

## Props(プロパティ)

- なし

## Style(スタイル)

Hamburger共通
- button要素
- modifier='active'時: アクティブ状態
- hamburgerBorder: ハンバーガーアイコン

## Behavior(動作)

- 'use client'でクライアントコンポーネント
- useDrawerStoreでドロワー状態を取得
- drawerToggleでドロワー開閉
- headerResetState=true時: transitionを一時的にnoneに設定
- aria-label="メニューの開閉"

## Test(テスト)

- クリック時のドロワー開閉
- headerResetState=true時の動作

## Other(その他)

依存関係
- zustand: 状態管理
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- 'use client'でクライアントコンポーネント

参考
- docs/ui/variables/colors.md: カラー定義