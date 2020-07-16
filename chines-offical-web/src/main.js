import Vue from 'vue'
import App from './App.vue'

import router from './router'

import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import store from './store'
import request from './api/request'
Vue.config.productionTip = false;
// 请求导航数据
function getData() {
  request({
    url: '/web/channel/tabJson',
    method: 'post',
  }).then(res => {

    store.state.tabList = res.content.json;
    // 刷新或者初始化的时候匹配并且确定路由
    var locationUrl = router.history._startLocation.split("/");
    var localParent = locationUrl[1],
      localChild = locationUrl[2];
    store.state.tabList = store.state.tabList.map(item => {
      // 匹配一级目录
      if (item.channelPath == '/' + localParent) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
      // 是否用匹配二级目录
      if (item.children && localChild) {
        // console.log(item.children)
        item.children = item.children.map(itemChild => {
          if (itemChild.channelPath == '/' + localChild) {
            itemChild.isActive = true
          } else {
            itemChild.isActive = false
          }
          return itemChild;
        })
      }
      return item;
    })


    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
}
getData()