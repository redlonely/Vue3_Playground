import { useLoadingBar, useMessage } from 'naive-ui'
import type { App } from 'vue'

const $loadingBar = useLoadingBar()
const $message = useMessage()

export function setupGlobalApi(app: App) {
  console.log(useLoadingBar())
  app.config.globalProperties.$loadingBar = $loadingBar
  app.config.globalProperties.$message = $message
  // console.log(app.config.globalProperties)
}
