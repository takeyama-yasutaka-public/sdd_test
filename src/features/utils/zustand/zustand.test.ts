/**
 * zustand ストアテスト
 * 仕様書: docs/features/utils/zustand/specification.md
 */

import { useDrawerStore, useFooterWrapperStore, useHeaderResetStore, useLoadingStore } from './zustand'

describe('zustand stores', () => {
  // useDrawerStore: ドロワー状態管理
  it('useDrawerStore has initial state', () => {
    const state = useDrawerStore.getState()
    expect(state.drawerState).toBe(false)
    expect(state.drawerDuration).toBe(300)
  })

  // useFooterWrapperStore: フッター位置管理
  it('useFooterWrapperStore has initial state', () => {
    const state = useFooterWrapperStore.getState()
    expect(state.FooterWrapperTop).toBe(0)
  })

  // useHeaderResetStore: ヘッダーリセット状態管理
  it('useHeaderResetStore has initial state', () => {
    const state = useHeaderResetStore.getState()
    expect(state.headerResetState).toBe(false)
  })

  // useLoadingStore: ローディング状態管理
  it('useLoadingStore has initial state', () => {
    const state = useLoadingStore.getState()
    expect(state.loadingState).toBe(true)
  })
})
