import request from './request'

export function getList(params) {
  return request({
    url: '/api/sys/article/articleList',
    method: 'post',
    params
  })
}

export function channelOneList() {
  return request({
    url: '/api/web/channel/oneList',
    method: 'post',
  })
}

export function channelTwoList(params) {
  return request({
    url: '/api/web/channel/twoList',
    method: 'post',
    params
  })
}

export function create(params) {
  return request({
    url: '/api/sys/article/insert',
    method: 'post',
    params
  })
}

export function upd(params) {
  return request({
    url: '/api/sys/article/upd',
    method: 'post',
    params
  })
}

export function del(params) {
  return request({
    url: '/api/sys/article/del',
    method: 'post',
    params
  })
}

export function detail(params) {
  return request({
    url: '/api/sys/article/detail',
    method: 'post',
    params
  })
}

