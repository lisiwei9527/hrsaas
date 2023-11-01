import request from '../utils/request'

//登录请求
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

//获取用户详情
export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'GET'
  })
}
