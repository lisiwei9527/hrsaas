import request from '../utils/request'

export function getRoleList(data) {
  return request({
    url: '/sys/role',
    data
  })
}
