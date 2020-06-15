import request from '@/utils/request'
// 轮播图 banner
export function getList(params) {
  return request({
    url: '/sys/banner/bannerList',
    method: 'post',
    params
  })
}

export function create(params) {
  return request({
    url: '/sys/banner/insert',
    method: 'post',
    params
  })
}


export function upd(params) {
  return request({
    url: '/sys/banner/upd',
    method: 'post',
    params
  })
}


export function del(params) {
  return request({
    url: '/sys/banner/del',
    method: 'post',
    params
  })
}

export function detail(params) {
  return request({
    url: '/sys/banner/detail',
    method: 'post',
    params
  })
}

