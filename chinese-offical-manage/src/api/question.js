import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/sys/problem/problemList',
    method: 'post',
    params
  })
}

export function create(params) {
  return request({
    url: '/sys/problem/insert',
    method: 'post',
    params
  })
}


export function upd(params) {
  return request({
    url: '/sys/problem/upd',
    method: 'post',
    params
  })
}


export function del(params) {
  return request({
    url: '/sys/problem/del',
    method: 'post',
    params
  })
}

export function detail(params) {
  return request({
    url: '/sys/problem/detail',
    method: 'post',
    params
  })
}

