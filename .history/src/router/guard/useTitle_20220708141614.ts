import type { Router } from 'vue-router'

const baseTitle = import.meta.env.VITE_APP_TITLE

// 监测页面改变，标签标题改变，
export function titleObserver(router: Router) {
  router.afterEach((to) => {
    const title = to.meta?.title
    if (title) {
      document.title = `${title} | ${baseTitle}`
    }
  })
}
