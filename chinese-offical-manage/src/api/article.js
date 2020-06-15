import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/sys/article/articleList',
    method: 'post',
    params
  })
}

export function channelOneList() {
  return request({
    url: '/web/channel/oneList',
    method: 'post',
  })
}

export function channelTwoList(params) {
  return request({
    url: '/web/channel/twoList',
    method: 'post',
    params
  })
}

export function create(params) {
  return request({
    url: '/sys/article/insert',
    method: 'post',
    params
  })
}

export function upd(params) {
  return request({
    url: '/sys/article/upd',
    method: 'post',
    params
  })
}

export function del(params) {
  return request({
    url: '/sys/article/del',
    method: 'post',
    params
  })
}

export function detail(params) {
  return request({
    url: '/sys/article/detail',
    method: 'post',
    params
  })
}

