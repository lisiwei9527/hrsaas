import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue' //ant组件
import './styles/main.css' //tailwind
import 'ant-design-vue/dist/reset.css' //ant样式
import App from './App.vue'
import router from './router'
import PluginState from 'pinia-plugin-persistedstate'
import './permission' //导航守卫
import Icons from './components/icons/index.js' //引入图标

const app = createApp(App) //创建Vue3应用
const piniaApp = createPinia() //创建一个pinia应用实例
piniaApp.use(PluginState) //pinia实例注册持久化插件

app.use(piniaApp)
app.use(Icons)
app.use(router)
app.use(Antd).mount('#app')
