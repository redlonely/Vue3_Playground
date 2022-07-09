import { useLoadingBar, useMessage } from 'naive-ui'

const $loadingBar = useLoadingBar()
const $message = useMessage()

export function setupGlobalApi() {
  const that: any = window
  that.$loadingBar = $loadingBar
  that.$message = $message
}
