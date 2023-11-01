<script setup>
// 获取当前所有的路由信息
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
// console.log(router.options.routes) //得到所有的路由信息
// const route = useRoute()  //只能得到当前的路由信息
// console.log(route, 'route')

//对所有的路由信息进行筛选,得到需要展示的路由信息
const filterRoutes = computed(() => {
  return router.options.routes.filter((item) => {
    return item.hidden != true
  })
})

//获取展示路由的元信息
const getTitle = (item) => {
  if (item.children?.length) {
    return item.children[0].meta
  }
  return item.meta
}
</script>
<template>
  <a-menu class="side-bar" mode="inline" theme="dark">
    <template v-for="item in filterRoutes" :key="item.path">
      <a-menu-item>
        <router-link :to="item.path">
          <!-- 动态组件展示图标组件,而且图标需要进行全局引入 -->
          <component :is="getTitle(item).icon"></component>
          <span>
            {{ getTitle(item).title }}
          </span>
        </router-link>
      </a-menu-item>
    </template>
  </a-menu>
</template>
