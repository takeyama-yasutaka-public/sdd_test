# zustand（状態管理）

バージョン: v1.0.0（過去PJ）
作成日: 2026-01-22
既存: src/lib/zustand.ts

## Stores(ストア)

### useDrawerStore
- Drawerの状態管理

State
- drawerDuration: number = 300（アニメーション時間）
- drawerState: boolean = false（開閉状態）
- drawerWidthReset: boolean = false（幅リセット状態）

Actions
- drawerToggle: () => void（開閉トグル）
- drawerClose: () => void（閉じる）
- drawerWidthResetOn: () => void（幅リセットON）
- drawerWidthResetOff: () => void（幅リセットOFF）

### useFooterWrapperStore
- FooterWrapperの位置管理

State
- FooterWrapperTop: number = 0

Actions
- setFooterWrapperTop: (num: number) => void

### useHeaderResetStore
- Headerのリセット状態管理

State
- headerResetState: boolean = false

Actions
- headerResetOn: () => void
- headerResetOff: () => void

### useLoadingStore
- Loadingの状態管理

State
- loadingState: boolean = true

Actions
- loadingOff: () => void

## Dependencies(依存関係)

- zustand: create
