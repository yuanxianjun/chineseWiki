import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/sys/links/linksList',
    method: 'post',
    params
  })
}

export function create(params) {
  return request({
    url: '/sys/links/insert',
    method: 'post',
    params
  })
}


export function upd(params) {
  return request({
    url: '/sys/links/upd',
    method: 'post',
    params
  })
}


export function del(params) {
  return request({
    url: '/sys/links/del',
    method: 'post',
    params
  })
}

export function detail(params) {
  return request({
    url: '/sys/links/detail',
    method: 'post',
    params
  })
}

