<script setup>
import { onMounted, ref } from 'vue'
import { getUserInfo } from '@/api/user'
import userToken from '../../../stores'
import { useRouter } from 'vue-router'
// collapsed控制侧边栏的展开和收缩
const props = defineProps({
  collapsed: {
    type: Boolean
  }
})
// 获取事件触发器
const emit = defineEmits(['update:collapsed'])
const changeCollapsed = () => {
  emit('update:collapsed', !props.collapsed) // 触发了一个事件- 传出了一个参数 子传父
  // v-model实际上是监听了 子组件触发的事件  update:modelValue
}

//用户信息
const userInfo = ref({})

// 获取用户信息方法
const getUserInfoApi = async () => {
  userInfo.value = await getUserInfo()
}

onMounted(() => {
  getUserInfoApi()
})

// 退出登录
const router = useRouter()
const loginOut = () => {
  const { removeToken } = userToken()
  removeToken()
  router.push('/login')
}
</script>

<template>
  <!-- 左边图标 -->
  <div @click="changeCollapsed">
    <!-- 2个图标组件,切换显示 -->
    <MenuUnfoldOutlined v-if="props.collapsed" />
    <MenuFoldOutlined v-else />
  </div>

  <!-- 右边头像 -->
  <a-popover placement="bottomRight">
    <!-- 头像 -->
    <a-avatar class="my-avatar" :src="userInfo.staffPhoto">
      {{ userInfo.username?.charAt(0) }}
    </a-avatar>
    <!-- 弹窗 -->
    <template #content>
      <div class="my-select" @click="loginOut">
        <p class="item"><LockOutlined /><span> 退出登录</span></p>
      </div>
    </template>
  </a-popover>
</template>

<style scoped>
.my-avatar {
  color: #f56a00;
  background-color: #fde3cf;
  cursor: pointer;
}
</style>
