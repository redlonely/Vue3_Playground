import { titleObserver } from './pageTitleObserver'
import type { Router } from 'vue-router'

export function setupRouterGuard(router: Router) {
  titleObserver(router)
  // createPermissionGuard(router)
  // createPageTitleGuard(router)
}
