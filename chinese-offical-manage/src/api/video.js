import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/sys/video/videoList',
    method: 'post',
    params
  })
}

export function create(params) {
  return request({
    url: '/sys/video/insert',
    method: 'post',
    params
  })
}


export function upd(params) {
  return request({
    url: '/sys/video/upd',
    method: 'post',
    params
  })
}


export function del(params) {
  return request({
    url: '/sys/video/del',
    method: 'post',
    params
  })
}

export function detail(params) {
  return request({
    url: '/sys/video/detail',
    method: 'post',
    params
  })
}

