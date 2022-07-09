import { useLoadingBar, useMessage } from 'naive-ui'

const $loadingBar = useLoadingBar()
const $message = useMessage()

export function setupGlobalApi() {
  console.log($loadingBar)
  const that: any = window
  that.$loadingBar = $loadingBar
  that.$message = $message
  console.log(that)
}
