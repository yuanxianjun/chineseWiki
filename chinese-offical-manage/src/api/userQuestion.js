import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/sys/message/messageList',
    method: 'post',
    params
  })
}

export function detail(params) {
  return request({
    url: '/sys/message/detail',
    method: 'post',
    params
  })
}

