import { useLoadingBar } from 'naive-ui'

const $loadingBar = useLoadingBar()

export function setupGlobalApi() {
  const that: any = window
  that.$loadingBar = $loadingBar
}
