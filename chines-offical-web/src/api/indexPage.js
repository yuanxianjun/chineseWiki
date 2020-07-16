import request from './request'

export function videoGet() {
    return request({
        url: '/web/video/video',
        method: 'get',
    })
}

export function bannerList() {
    return request({
        url: '/web/banner/bannerList',
        method: 'post',
    })
}

// 类型 1友情链接 2 合作伙伴 3 其它类目
export function links(params) {
    return request({
        url: '/web/links/list',
        method: 'post',
        params
    })
}
// 大事记
export function bigEvent(params) {
    return request({
        url: '/web/article/eventsList',
        method: 'post',
        params
    })
}
// 新闻中心
export function findNews() {
    return request({
        url: '/web/article/findNews',
        method: 'post',
    })
}

// 首页集团新闻, 行业关注
export function findNewsList(params) {
    return request({
        url: '/web/article/findNewsList',
        method: 'post',
        params
    })
}

// 通用文章列表接口
export function articleList(params) {
    return request({
        url: '/web/article/list',
        method: 'post',
        params
    })
}

/* 问题反馈页面 */
// 常见问题列表
export function problem(params) {
    return request({
        url: '/sys/problem/problemList',
        method: 'post',
        params
    })
}
// 我要留言
export function message(params) {
    return request({
        url: '/web/message/insert',
        method: 'post',
        params
    })
}
// 新闻详情
export function detailText(params) {
    return request({
        url: '/web/article/detail',
        method: 'post',
        params
    })
}