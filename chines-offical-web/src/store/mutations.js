import router from "../router";
export default {
  /**
   * @description 处理菜单
   * @type {sate} 当前状态
   * @type {currentObj}  当前所在的路由
   */
  UPDATA_MENU: (state, currentObj) => {
    state.tabList = state.tabList.map(item => {
      if (item.url == currentObj.parent.url) {
        item.isActive = true;
        state.currentMenu = {
          parent: currentObj.parent,
          child: currentObj.child
        }
        return item;
      } else {
        item.isActive = false;
        return item;
      }
    });
    if (currentObj.child) {
      router.push(currentObj.parent.url + currentObj.child.url)
    } else {
      router.push(currentObj.parent.url)
    }

    // console.log(currentObj, "currentObj")

  },

}