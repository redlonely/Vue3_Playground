import './assets/css/base.css'

import { createApp } from 'vue'
import { setupRouter } from './router'
import { setupStore } from './stores'
import App from './App.vue'

import { setupGlobalApi } from './utils'
;(function setupApp() {
  const app = createApp(App)
  setupGlobalApi(app)
  setupRouter(app)
  setupStore(app)
  app.mount('#app')
})()
