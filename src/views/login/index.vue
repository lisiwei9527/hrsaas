<script setup>
import { ref, reactive } from 'vue'
import { login } from '@/api/user.js'
import router from '@/router/index'
import userToken from '../../stores/index.js'

const { setToken } = userToken()

const loginForm = reactive({
  mobile: '13800000002',
  password: 'hm#qd@23!',
  isAgree: false
})

// 校验规则
const validator = (_, value) => {
  return value ? Promise.resolve() : Promise.reject(new Error('请勾选协议'))
}

// 表单提交
const onFinish = async (values) => {
  const { token } = await login(values)
  setToken(token) //将token存入pinia
  router.push('/')
}
</script>
<template>
  <div class="flex h-screen items-stretch">
    <div class="flex-[3] rounded-tr-3xl flex flex-col items-end justify-center px-[100px]">
      <div class="w-80 h-12 mb-14"></div>
      <img src="../../assets/胡桃可爱图标.jpg" class="w-[300px]" alt="" />
      <p class="text-gray-50 text-lg mt-5 w-[300px] text-center">开箱即用的中后台管理系统</p>
    </div>

    <div class="flex-[2] flex flex-col justify-center pl-[50px]">
      <h3 class="pl-[30px] text-2xl">iHRM 人力资源管理系统</h3>
      <a-card class="w-80 border-none p-0">
        <a-form :model="loginForm" @finish="onFinish">
          <a-form-item
            name="mobile"
            :rules="[
              { required: true, message: '手机号不能为空', trigger: 'blur' },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号格式不正确',
                trigger: 'blur'
              }
            ]"
          >
            <!-- a-form-item大都需要name,不然不知道校验的是那个字段 -->
            <a-input v-model:value="loginForm.mobile" placeholder="请输入手机号"></a-input>
          </a-form-item>
          <a-form-item
            name="password"
            :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
          >
            <a-input-password
              v-model:value="loginForm.password"
              placeholder="请输入密码"
            ></a-input-password>
          </a-form-item>
          <a-form-item
            name="isAgree"
            :rules="[{ validator, message: '你需要勾选我的霸王条款', trigger: 'blur' }]"
          >
            <a-checkbox v-model:checked="loginForm.isAgree">请勾选用户协议</a-checkbox>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" class="bg-blue" html-type="submit">登录</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </div>
</template>

<style lang="less"></style>
