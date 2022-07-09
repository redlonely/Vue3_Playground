import type { App } from 'vue'
import { createPinia } from 'pinia'

import { useCounterStore } from './actions/counter'

export { useCounterStore }

export function setupStore(app: App) {
  app.use(createPinia())
}
