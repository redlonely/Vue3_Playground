import { useLoadingBar, useMessage } from 'naive-ui'
import type { App } from 'vue'

const $loadingBar = useLoadingBar()
const $message = useMessage()

export function setupGlobalApi(app: App) {
  app.config.globalProperties.$loadingBar = $loadingBar
  app.config.globalProperties.$message = $message
}
