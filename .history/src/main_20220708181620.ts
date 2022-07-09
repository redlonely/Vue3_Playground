import './assets/css/base.css'

import { createApp } from 'vue'
import { setupRouter } from './router'
import { setupStore } from './stores'
import App from './App.vue'

// import { setupGlobalApi } from './utils'

import { useMessage, useLoadingBar } from 'naive-ui'
const $message = useMessage()
const $loadingBar = useLoadingBar()

;(function setupApp() {
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  app.config.globalProperties.$loadingBar = $loadingBar
  app.config.globalProperties.$message = $message
  app.mount('#app')
  // setupGlobalApi(app)
})()
