import { createRouter, createWebHashHistory, isNavigationFailure } from 'vue-router'
import routes from './routes'

const router = createRouter({
    // hash 或者 history 模式
    history: createWebHashHistory(),
    routes
})
// 全局路由守卫的方法跟vue-router3一样
//路由全局前置守卫
router.beforeEach((to, from, next) => {
    next()
})
//路由全局后置守卫
router.afterEach((to, from, failure) => {
    if (isNavigationFailure(failure)) {
        console.log('failed navigation', failure)
      }
})

export default router