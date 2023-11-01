import router from './router/index'
import userToken from './stores' //仓库Token
import nProgress from 'nprogress' //引入进度条
import 'nprogress/nprogress.css' //进度条样式
// 白名单
const whiteList = ['/login', '/register', '/404']
router.beforeEach((to, from, next) => {
  nProgress.start()
  const { getToken } = userToken() //这段代码需要写在守卫里,每次跳转都区重新获取token
  if (getToken()) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  nProgress.done()
})
