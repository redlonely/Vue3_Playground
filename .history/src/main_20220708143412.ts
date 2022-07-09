import { createApp } from 'vue'

import { setupRouter } from './router'
import { setupStore } from './stores'

import './assets/css/base.css'


import App from './App.vue'
// import router from './router'

(function setupApp() {
  const app = createApp(App)
  
  setupRouter(app)
  setupStore(app)
  
  app.mount('#app')
}())
