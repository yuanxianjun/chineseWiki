import request from '@/utils/request'

export function oneList(params) {
  return request({
    url: '/sys/channel/oneList',
    method: 'post',
    params
  })
}
export function twoList(params) {
  return request({
    url: '/sys/channel/twoList',
    method: 'post',
    params
  })
}

export function threeList(params) {
  return request({
    url: '/sys/channel/threeList',
    method: 'post',
    params
  })
}
export function create(params) {
  return request({
    url: '/sys/channel/insert',
    method: 'post',
    params
  })
}

export function upd(params) {
  return request({
    url: '/sys/channel/upd',
    method: 'post',
    params
  })
}

export function del(params) {
  return request({
    url: '/sys/channel/del',
    method: 'post',
    params
  })
}

export function detail(params) {
  return request({
    url: '/sys/channel/detail',
    method: 'post',
    params
  })
}
