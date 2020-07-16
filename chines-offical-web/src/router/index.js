import Vue from 'vue'
import Router from 'vue-router'

const routerPush = Router.prototype.push


Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)
import comHeader from "@/components/header-logo" //其他路由共用的头部
import headerBanner from "@/components/header-banner" //首页的头部
import topbg from "@/components/topbg" //首页的头部
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in  breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */
/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
  path: '/404',
  components: { // key => value
    // 'comHead': comHeader,
    'indexHead': headerBanner,
    default: () => import('@/views/indexPage')
  },
  hidden: true
},
{
  path: '/',
  // name: "indexPage",
  components: { // key => value
    'indexHead': headerBanner,
    'topbg': topbg,
    default: () => import('@/views/indexPage')
  },
  children: [{
    path: '',
    components: { // key => value
      default: () => import('@/views/indexPage')
    },
  }]
},
// 集团概况
{
  path: '/group',
  // name: 'group',
  components: { // key => value
    'comHead': comHeader,
    'topbg': topbg,
    default: () => import('@/views/groupCase')
  },
  children: [{
    path: '',
    components: { // key => value
      default: () => import('@/views/groupCase/groupState')
    },
  },
  {
    // 大事记
    path: 'bigEvent',
    name: "bigEvent",
    components: { // key => value
      default: () => import('@/views/groupCase/bigEvent')
    },
  },
  {
    // 公司简介
    path: 'introduce',
    name: "introduce",
    components: { // key => value
      default: () => import('@/views/groupCase/groupState')
    },
  },
  {
    // 公司文化
    path: 'culture',
    name: "culture",
    components: { // key => value
      default: () => import('@/views/groupCase/cultrue')
    },
  },
  {
    // 公司资质
    path: 'quali',
    name: "quali",
    components: { // key => value
      default: () => import('@/views/groupCase/quali')
    },
  },
  ]
},
// 新闻中心
{
  path: '/news',
  // name: 'news',
  components: { // key => value
    'comHead': comHeader,
    'topbg': topbg,
    default: () => import('@/views/news')
  },
  children: [{
    path: '',
    components: { // key => value
      default: () => import('@/views/news/groupnews')
    },
  },
  {
    path: 'groupNews', //集团新闻
    name: "groupNews",
    components: { // key => value
      default: () => import('@/views/news/groupnews')
    },
  },
  {
    path: 'trends', //行业动态
    name: "trends",
    components: { // key => value
      default: () => import('@/views/news/productState')
    },
  },
  ]
},
{
  path: '/newsDetail', //新闻详情
  name: 'newsDetail',
  components: { // key => value
    'comHead': comHeader,
    default: () => import('@/views/newsDetail')
  }
},
{
  path: '/newsList', //文章列表
  name: 'newsList',
  components: { // key => value
    'comHead': comHeader,
    default: () => import('@/views/newsList')
  }
},
// 出版服务
{
  path: '/publish',
  // name: 'publish',
  components: { // key => value
    'comHead': comHeader,
    'topbg': topbg,
    default: () => import('@/views/publish')
  },
  children: [{
    path: '',
    components: { // key => value
      default: () => import('@/views/publish/serve')
    },
  },
  {
    path: 'product', // 产品推介
    name: "product",
    components: { // key => value
      default: () => import('@/views/publish/product')
    },
  },
  {
    path: 'company', // 服务单位
    name: "company",
    components: { // key => value
      default: () => import('@/views/publish/company')
    },
  },
  {
    path: 'serve', //主要服务
    name: "serve",
    components: { // key => value
      default: () => import('@/views/publish/serve')
    },
  },
  ]
},
// 教育服务 
{
  path: '/education',
  // name: 'education',
  components: { // key => value
    'comHead': comHeader,
    'topbg': topbg,
    default: () => import('@/views/education')
  },
  children: [{
    path: '',
    components: { // key => value
      default: () => import('@/views/education/profile')
    },
  },
  {
    path: 'profile', //业务概况
    name: "profile",
    components: { // key => value
      default: () => import('@/views/education/profile')
    },
  },
  {
    path: 'project', // 项目介绍
    name: "project",
    components: { // key => value
      default: () => import('@/views/education/project')
    },
  },
  {
    path: 'partner', // 合作伙伴
    name: "partner",
    components: { // key => value
      default: () => import('@/views/education/partner')
    },
  },
  {
    path: 'eduThree', // 政策法规 新闻动态 行业热点
    name: "eduThree",
    components: { // key => value
      default: () => import('@/views/education/educationThree')
    },
  },
  ]
},

// 问题反馈 
{
  path: '/question',
  name: 'question',
  components: { // key => value
    'comHead': comHeader,
    'topbg': topbg,
    default: () => import('@/views/question')
  },
},
// 联系我们 
{
  path: '/aboutUs',
  name: 'aboutUs',
  components: { // key => value
    'comHead': comHeader,
    'topbg': topbg,
    default: () => import('@/views/aboutUs')
  },
},

// 404 page must be placed at the end !!!
{
  path: '*',
  redirect: '/404',
  hidden: true
}
]
const createRouter = () => new Router({
  mode: 'history', // require service support
  base: process.env.NODE_ENV === 'production' ?
    '/' : '/guanwang-web/',
  scrollBehavior: (to, from, savedPosition) => {
    return {
      x: 0,
      y: 0
    }
  },
  routes: constantRoutes
})
const router = createRouter()
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  // router.matcher = newRouter.matcher // reset router
}
export default router