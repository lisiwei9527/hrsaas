//引入项目中需要用到的所有图标
import {
  HomeOutlined,
  SettingFilled,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
  LockOutlined
} from '@ant-design/icons-vue'

// 把所有图标组件整合到一个icons数组中
const icons = [
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
  LockOutlined
]

// 把所有图标通过循环进行全局注册
export default {
  //向外暴露
  install: (app) => icons.forEach((item) => app.component(item.displayName, item))
  // app.component(item.displayName(图标名), item(图标组件))
}
// main.js导入后 app.use(Icons)调用该对象里面的install方法进行全局注册
