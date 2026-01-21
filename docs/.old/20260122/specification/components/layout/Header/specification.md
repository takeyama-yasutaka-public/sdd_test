# Header

バージョン: v1.0.0（過去PJ）
作成日: 2026-01-22
既存: src/components/layout/Header

## Props(プロパティ)

- なし（内部でZustand storeを使用）

## Style(スタイル)

Header（.header）
- display: flex
- justify-content: center
- position: fixed
- top: 0, left: 0
- width: 100%
- height: $header-height_pc (5rem / 80px)
- z-index: $z-index_header
- transition: $transition_middle (0.3s)

Header hover
- background-color: $p-color_opacity_white_095 (#fffffff2)

Header SP (@media header-sp)
- height: $header-height_sp (5rem / 80px)

Header active（data-modifier='active'）
- background-color: $p-color_opacity_white_095
- transition-delay: 0s

Header .inner
- display: flex
- justify-content: space-between
- align-items: center
- position: relative
- width: 100%
- padding: 0 40px (pxrem(40))
- SP: padding: 0 10px

Header .navPc
- height: 100%
- SP: display: none

Header .iconSP
- display: none
- gap: 10px (pxrem(10))
- SP: display: flex

Header .navSP
- position: absolute
- top: 0, right: 0
- PC: display: none

## Components(子コンポーネント)

- Logo: ロゴ
- Dropdown: PCナビゲーション
- ContactSpIcon: SP用お問い合わせアイコン
- Hamburger: ハンバーガーメニュー
- Drawer: SPドロワーメニュー
- DrawerOverlay: ドロワーオーバーレイ

## Behavior(動作)

- useDrawerStore(Zustand)でドロワー状態管理
- drawerState=trueでdata-modifier='active'付与
- PC/SPでナビゲーション切り替え

## Dependencies(依存関係)

- 'use client': クライアントコンポーネント
- @/lib/zustand: useDrawerStore
- 子コンポーネント: Logo, Dropdown, ContactSpIcon, Hamburger, Drawer, DrawerOverlay
- SCSS Modules: スタイリング
