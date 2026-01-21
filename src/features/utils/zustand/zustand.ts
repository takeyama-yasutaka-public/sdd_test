/**
 * zustand
 * 仕様書: docs/features/utils/zustand/specification.md
 */

import { create } from 'zustand'

// ドロワーストア
export interface DrawerStore {
  drawerDuration: number
  drawerState: boolean
  drawerWidthReset: boolean
  drawerToggle: () => void
  drawerClose: () => void
  drawerWidthResetOn: () => void
  drawerWidthResetOff: () => void
}

export const useDrawerStore = create<DrawerStore>((set) => ({
  drawerDuration: 300,
  drawerState: false,
  drawerWidthReset: false,
  drawerToggle: () => set((state) => ({ drawerState: !state.drawerState })),
  drawerClose: () => set({ drawerState: false }),
  drawerWidthResetOn: () => set({ drawerWidthReset: true }),
  drawerWidthResetOff: () => set({ drawerWidthReset: false }),
}))

// フッターラッパーストア
export interface FooterWrapperStore {
  FooterWrapperTop: number
  setFooterWrapperTop: (num: number) => void
}

export const useFooterWrapperStore = create<FooterWrapperStore>((set) => ({
  FooterWrapperTop: 0,
  setFooterWrapperTop: (num: number) => set({ FooterWrapperTop: num }),
}))

// ヘッダーリセットストア
export interface HeaderResetStore {
  headerResetState: boolean
  headerResetOn: () => void
  headerResetOff: () => void
}

export const useHeaderResetStore = create<HeaderResetStore>((set) => ({
  headerResetState: false,
  headerResetOn: () => set({ headerResetState: true }),
  headerResetOff: () => set({ headerResetState: false }),
}))

// ローディングストア
export interface LoadingStore {
  loadingState: boolean
  loadingOff: () => void
}

export const useLoadingStore = create<LoadingStore>((set) => ({
  loadingState: true,
  loadingOff: () => set({ loadingState: false }),
}))
