import router from "../router";
export default {
  /**
   * @description 处理菜单
   * @type {sate} 当前状态
   * @type {currentObj}  当前所在的路由
   */
  UPDATA_MENU: (state, currentObj) => {

    // 每个页面请求需要的参数 两级 或者 3级  id
    if (currentObj.child) {
      state.requestParams.channelOne = currentObj.child.parentId || '';
      state.requestParams.channelTwo = currentObj.child.id || '';
    } else {
      state.requestParams.channelOne = currentObj.parent.id || '';
      state.requestParams.channelTwo = currentObj.parent.children && currentObj.parent.children[0].id || '';
    }

    // 当前选中的菜单
    state.currentMenu = {
      parent: currentObj.parent,
      child: currentObj.child
    }

    // 更新维护路由大数据表 
    state.tabList = state.tabList.map(item => {
      if (item.channelPath == currentObj.parent.channelPath) {
        item.isActive = true;


        // 如果点击到子级了 就对当前的子级进行isActive绑定
        if (currentObj.child) {
          item.children.forEach(childItem => {
            if (childItem.id == currentObj.child.id) {
              childItem.isActive = true;
            } else {
              childItem.isActive = false;
            }
          });
        } else { //如果没有选择到子集则选择当前子集的第一个
          if (item.children) { //如果存在子集
            item.children.map((childItem, index) => {
              index == 0 ? childItem.isActive = true : childItem.isActive = false;
            })
          }
        }

        return item;
      } else {
        item.isActive = false;
        if (item.children) { //如果存在子集
          item.children[0].isActive = false
        }
        return item;
      }
    });
    // console.log(state.tabList, "tabList")
    if (currentObj.child) {
      router.push(currentObj.parent.channelPath + currentObj.child.channelPath)
    } else {
      router.push(currentObj.parent.channelPath)
    }
    // console.log(currentObj, "currentObj")

    // 当前页面信息存入浏览器
    localStorage.setItem('pageInfo', JSON.stringify(state));
  },

}