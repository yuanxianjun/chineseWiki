import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

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
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true
},
{
  path: '/404',
  component: () => import('@/views/404'),
  hidden: true
},
{
  path: '/',
  redirect: '/login',
  component: Layout,
},
{
  path: '/program',
  component: Layout,
  // redirect: '/program',
  children: [{
    path: '/program',
    name: 'program',
    component: () => import('@/views/program/index'),
    meta: {
      title: '菜单列表',
      icon: 'table'
    }
  }]
},
{
  path: '/link',
  component: Layout,
  children: [{
    path: '',
    name: '友情链接',
    component: () => import('@/views/link/index'),
    meta: {
      title: '友情链接',
      icon: 'link'
    }
  },]
},
{
  path: '/question',
  component: Layout,
  children: [{
    path: '',
    name: '常见问题',
    component: () => import('@/views/question/index'),
    meta: {
      title: '常见问题',
      icon: 'email'
    }
  },]
},
{
  path: '/carousel',
  component: Layout,
  children: [{
    path: '',
    name: '轮播图',
    component: () => import('@/views/carousel/index'),
    meta: {
      title: '轮播图',
      icon: 'education'
    }
  },]
},
{
  path: '/channel',
  component: Layout,
  children: [{
    path: '',
    name: '栏目管理',
    component: () => import('@/views/channel/index'),
    meta: {
      title: '栏目管理',
      icon: 'documentation'
    }
  },]
},
{
  path: '/article',
  component: Layout,
  children: [{
    path: '/manage',
    name: '文章管理',
    component: () => import('@/views/article/index'),
    meta: {
      title: '文章管理',
      icon: 'edit'
    }
  },
  {
    path: '/articleEdit',
    name: 'tinymce',
    component: () => import('@/views/components/tinymce'),
    meta: {
      title: 'tinymce'
    },
    hidden: true
  },
  ]
},
{
  path: '/userQuestion',
  component: Layout,
  children: [{
    path: '',
    name: '用户提问',
    component: () => import('@/views/userQuestion/index'),
    meta: {
      title: '用户提问管理',
      icon: 'message'
    }
  },]
},
{
  path: '/uploadVedio',
  component: Layout,
  children: [{
    path: '',
    name: '宣传视频',
    component: () => import('@/views/uploadVedio/index'),
    meta: {
      title: '宣传视频',
      icon: 'eye-open'
    }
  },]
},
// 404 page must be placed at the end !!!
{
  path: '*',
  redirect: '/404',
  hidden: true
}
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})
const router = createRouter()
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  // router.matcher = newRouter.matcher // reset router
}
export default router
