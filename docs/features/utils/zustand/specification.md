# zustand

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/zustand.ts

## Stores(ストア)

useDrawerStore
- drawerDuration: number (300)
- drawerState: boolean (false)
- drawerWidthReset: boolean (false)
- drawerToggle: () => void
- drawerClose: () => void
- drawerWidthResetOn: () => void
- drawerWidthResetOff: () => void

useFooterWrapperStore
- FooterWrapperTop: number (0)
- setFooterWrapperTop: (num: number) => void

useHeaderResetStore
- headerResetState: boolean (false)
- headerResetOn: () => void
- headerResetOff: () => void

useLoadingStore
- loadingState: boolean (true)
- loadingOff: () => void

## Other(その他)

依存関係
- zustand: 状態管理

実装
- zustandでグローバル状態管理

参考
- docs/features/package.md: パッケージ一覧