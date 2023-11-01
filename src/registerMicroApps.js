import { registerMicroApps, start, initGlobalState } from 'qiankun'
import userToken from './stores'
registerMicroApps(
  [
    {
      name: 'hmzs-big-screen', //子应用名称
      entry: '//localhost:5174', //子应用运行地址
      container: '#container', //挂载容器(子应用挂载到主应用的那个容器)
      activeRule: '/big-screen' //激活路由(当主应用路由地址匹配到该路由的时候,就去entry运行地址找到子应用,加载到container容器中去)
    }
  ],
  {
    afterMount() {
      //说明子应用已经挂载完毕
      const actions = initGlobalState({ token: null }) //初始化状态,返回一个actions
      const { getToken } = userToken()
      const token = getToken()
      if (token) {
        actions.setGlobalState({ token }) //传token
      }
    }
  }
)
start() //开启监听路由变化
