import { useLoadingBar } from 'naive-ui'

const $loadingBar = useLoadingBar()

export function setupGlobalApi(this: any) {

  this.$loadingBar = $loadingBar
}
