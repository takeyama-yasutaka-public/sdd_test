# DrawerOverlay

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/layout/Header/DrawerOverlay

## Props(プロパティ)

- なし

## Style(スタイル)

DrawerOverlay共通
- fixed inset-0
- z-20 (z-index_drawer-overlay)
- modifier='active'時: 表示
- modifier=''時: 非表示

## Behavior(動作)

- useDrawerStoreでドロワー状態を取得
- drawerState=true時: 表示、クリックでdrawerClose
- drawerState=false時: 非表示

## Test(テスト)

- drawerState=true/false時の表示/非表示
- クリック時のdrawerClose

## Other(その他)

依存関係
- zustand: 状態管理
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用

参考
- docs/ui/variables/spacing.md: スペーシング定義