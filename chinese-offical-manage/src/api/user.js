import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/log/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/log/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/log/user/logout',
    method: 'post'
  })
}
