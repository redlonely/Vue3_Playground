import type { Router } from 'vue-router'

import { useLoadingBar } from 'naive-ui'

const $loadingBar = useLoadingBar()

/**
 *  监测路由状态，路由改变添加进度条
 *
 *  基于 naive-ui lodingBar 实现 （需要安装）
 */
export function createPageLoadingGuard(router: Router) {
  // 跳转之前
  router.beforeEach(() => {
    $loadingBar?.start()
  })

  // 跳转之后
  router.afterEach(() => {
    $loadingBar?.finish()
  })

  router.onError(() => {
    $loadingBar?.error()
  })
}
