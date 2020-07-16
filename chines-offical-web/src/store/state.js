var localPage = JSON.parse(localStorage.getItem("pageInfo"))
export default {
  tabList: [],
  currentMenu: {
    'parentLevel': {},
    'childLevel': {},
  },
  "requestParams": localPage && localPage.requestParams || {
    pageNo: 1,
    title: "",
    channelOne: '',
    channelTwo: ''
  }

}