import type { Router } from 'vue-router'
import { titleObserver } from './pageTitleObserver'
import { notFoundObserver } from './pageNotFoundObserver'

export function setupRouterGuard(router: Router) {
  titleObserver(router)
  notFoundObserver(router)
  // createPermissionGuard(router)
  // createPageTitleGuard(router)
}
