import { useLoadingBar } from 'naive-ui'

const $loadingBar = useLoadingBar()

export function setupGlobalApi() {
  window['$loadingBar'] = $loadingBar
}
