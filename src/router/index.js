import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      hidden: true, //不显示在左侧菜单
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('@/views/home/index.vue'),
          meta: {
            title: '首页',
            icon: 'HomeOutlined'
          }
        }
      ]
    },
    {
      path: '/big-screen',
      component: Layout,
      children: [
        {
          path: '',
          component: () => import('@/views/big-screen/index.vue'),
          meta: {
            title: '3D大屏',
            icon: 'SmileOutlined'
          }
        }
      ]
    },
    {
      path: '/role',
      component: Layout,
      children: [
        {
          path: '',
          //二级路由的path什么都不写,表示它是默认的二级路由
          //children 中 path 为空字符串的路由，是默认打开的路由(当匹配到某根路由,除了它本身的内容会显示外,它的下一级路由出口不会渲染
          //任何东西,这是因为没有匹配到合适的子路由,如果你想要渲染点什么,可以提供一个空的子路由.)
          component: () => import('@/views/role/index.vue'),
          meta: {
            title: '角色',
            icon: 'SettingFilled'
          }
        }
      ]
    }
  ]
})

export default router
