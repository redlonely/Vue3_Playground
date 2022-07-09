import { useMessage } from 'naive-ui'
const $message = useMessage()
export function createPageLoadingGuard(router) {
  router.beforeEach(() => {
    $message.create('Hello World')
    // window.$loadingBar?.start()
  })

  router.afterEach(() => {
    setTimeout(() => {
      // window.$loadingBar?.finish()
    }, 200)
  })

  router.onError(() => {
    // window.$loadingBar?.error()
  })
}
