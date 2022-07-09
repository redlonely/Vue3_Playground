import './assets/css/base.css'

import { createApp } from 'vue'
import { setupRouter } from './router'
import { setupStore } from './stores'
import App from './App.vue'

import { setupGlobalApi } from './utils'

  ; (function setupApp() {
    setupGlobalApi()
  // dotenv.config()
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  app.mount('#app')
})()
