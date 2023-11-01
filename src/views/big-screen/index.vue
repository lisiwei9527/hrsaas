<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 动态引入  开始执行start()
  import('@/registerMicroApps.js')
})
</script>
<template>
  <div id="container">大屏</div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>
