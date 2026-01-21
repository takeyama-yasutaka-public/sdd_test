# Header

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/layout/Header

## Props(プロパティ)

- なし（固定コンテンツ）

## Style(スタイル)

Header共通
- fixed top-0 left-0 w-full
- h-20 (header-height-pc: 80px)
- md:h-20 (header-height-sp: 80px)
- z-30 (z-index_header)
- transition-all duration-300
- hover: bg-opacity-white-095
- modifier='active'時: bg-opacity-white-095 transition-delay-0

Header inner
- flex justify-between items-center relative w-full
- px-10
- md:px-[10px] (SP時)

Header navPc
- h-full
- md:hidden (SP時)

Header iconSP
- hidden gap-[10px]
- md:flex (SP時)

Header navSP
- absolute top-0 right-0
- md:hidden (PC時)

## Components(使用コンポーネント)

- Logo: ロゴ表示
- Dropdown: PCナビゲーション
- ContactSpIcon: SPお問い合わせアイコン
- Hamburger: SPハンバーガーメニュー
- Drawer: SPドロワーメニュー
- DrawerOverlay: ドロワーオーバーレイ

## Behavior(動作)

- 'use client'でクライアントコンポーネント
- useDrawerStoreでドロワー状態を取得
- drawerState=true時: modifier='active'
- PC/SPで表示切り替え

## Test(テスト)

- 通常表示
- drawerState=true時の表示
- PC/SP表示切り替え

## Other(その他)

依存関係
- zustand: 状態管理
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- 'use client'でクライアントコンポーネント

参考
- docs/ui/variables/spacing.md: スペーシング定義
- docs/ui/components/ui-kit/layout/Header/Logo/specification.md: ロゴ
- docs/ui/components/ui-kit/layout/Header/Dropdown/specification.md: ドロップダウン
- docs/ui/components/ui-kit/layout/Header/Hamburger/specification.md: ハンバーガー
- docs/ui/components/ui-kit/layout/Header/Drawer/specification.md: ドロワー