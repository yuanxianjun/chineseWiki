import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/sys/menu/list',
    method: 'post',
    params
  })
}

export function createMenu(params) {
  return request({
    url: '/sys/menu/insert',
    method: 'post',
    params
  })
}


export function updMenu(params) {
  return request({
    url: '/sys/menu/upd',
    method: 'post',
    params
  })
}


export function delMenu(params) {
  return request({
    url: '/sys/menu/del',
    method: 'post',
    params
  })
}

export function detail(params) {
  return request({
    url: '/sys/menu/detail',
    method: 'post',
    params
  })
}

