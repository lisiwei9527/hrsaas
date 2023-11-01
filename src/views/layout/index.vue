<script setup>
import SideBar from './components/side-bar.vue'
import NavBar from './components/nav-bar.vue'

import { ref } from 'vue'
const collapsed = ref(false) //控制左侧侧边栏的展开和收缩
</script>

<template>
  <a-layout class="app-layout">
    <!-- 左侧侧边栏 -->
    <a-layout-sider :collapsed="collapsed" collapsible :trigger="null">
      <div class="logo">{{ collapsed ? 'HR' : 'HRSASS' }}</div>
      <!-- 左侧菜单 -->
      <side-bar></side-bar>
    </a-layout-sider>

    <!-- 右侧内容 -->
    <a-layout class="right-layout">
      <!-- 头部 -->
      <a-layout-header>
        <!-- 双向绑定的不是modelValue属性,是collapsed,所以需要加:collapsed-->
        <NavBar v-model:collapsed="collapsed"></NavBar>
      </a-layout-header>

      <!-- 内容 -->
      <a-layout-content>
        <!-- 二级路由 -->
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="less">
.app-layout {
  min-height: 100vh;
  display: flex;
  .ant-layout-sider {
    overflow: auto;
    height: 100vh;
    .logo {
      height: 60px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #fff;
      font-size: 24px;
      text-shadow: 2px 2px 4px #666;
      transform: skewX(-10deg);
    }
  }
  .right-layout {
    flex: 1;
    height: 100vh;
    overflow-y: auto;
  }
  .ant-layout-header {
    background-color: #fff;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .anticon {
      font-size: 20px;
      cursor: pointer;
    }
  }
}

.my-avatar {
  color: #f56a00;
  background-color: #fde3cf;
  cursor: pointer;
}
.my-select {
  margin: -5px -16px;
  .item {
    padding: 5px 20px;
    margin-bottom: 0 !important;
    color: #666;
    &:hover {
      background-color: #fafafa;
      cursor: pointer;
    }
  }
}
</style>
