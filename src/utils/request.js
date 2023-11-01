import axios from 'axios'
import { message as Meg } from 'ant-design-vue'
import userToken from '../stores'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  function (config) {
    const { getToken } = userToken()
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器,对返回的数据做处理
service.interceptors.response.use(
  function (response) {
    const { data, message, success } = response.data
    if (success) {
      return data
    } else {
      Meg.error(message)
      return Promise.reject(new Error(message))
    }
  }, //response的处理

  function (error) {
    return Promise.reject(error)
  } //error的处理
)

export default service
