import request from './request'
// isActive 当前页面所在的标签
var tabList = [{
    label: "首页",
    url: "/",
    isActive: true
  },
  {
    label: "集团概况",
    url: "/group",
    isActive: false,
    children: [{
        childName: "公司简介",
        url: "/introduce"
      },
      {
        childName: "大事记",
        url: "/bigEvent"
      },
      {
        childName: "公司资质",
        url: "/quali"
      },
      {
        childName: "企业文化",
        url: "/culture"
      }
    ]
  },
  {
    label: "新闻中心",
    url: "/news",
    isActive: false,
    children: [{
        childName: "集团新闻",
        url: "/groupNews",
        isActive: true,
      },
      {
        childName: "行业动态",
        url: "/trends"
      }
    ]
  },
  {
    label: "出版服务",
    url: "/publish",
    isActive: false,

    children: [{
        childName: "产品推介",
        url: "/product"
      },
      {
        childName: "服务单位",
        url: "/company"
      },
      {
        childName: "主要服务",
        url: "/serve"
      }
    ]
  },
  {
    label: "教育业务",
    url: "/education",
    isActive: false,

    children: [{
        childName: "合作伙伴",
        url: "/partner"
      },
      {
        childName: "项目介绍",
        url: "/project"
      },
      {
        childName: "业务概况",
        url: "/profile"
      }
    ]
  },
  {
    label: "问题反馈",
    url: "/question",
    isActive: false
  },
  {
    label: "联系我们",
    url: "/aboutUs",
    isActive: false
  }
]


function getData() {
  return new Promise(resolve => {
    request({
      url: '/web/channel/oneList',
      method: 'post',
    }).then(res => {
      resolve(res.content.list)
    })
  })
}
// 匹配一级菜单
async function detailData() {
  try {
    let requestMenu = await getData()

    tabList = tabList.map(item => {
      requestMenu.forEach(requestItem => {
        if (requestItem.channelName == item.label) {
          item.id = requestItem.id;
          return item;
        }
      })
    })
  } catch (err) {
    console.log(err)
    alert('请求出错')
  }
}
detailData()



// 获取二级菜单
function getTwoData(id) {
  let params = {
    parentId: id
  }
  return new Promise(resolve => {
    request({
      url: '/web/channel/twoList',
      method: 'post',
      params
    }).then(res => {
      resolve(res.content.list)
    })
  })
}
// 获取三级菜单
function getThreeData(id) {
  let params = {
    parentId: id
  }
  return new Promise(resolve => {
    request({
      url: '/web/channel/threeList',
      method: 'post',
      params
    }).then(res => {
      resolve(res.content.list)
    })
  })
}





// 匹配二级菜单
async function matchTwo(id) {
  var index = id - 2 < 0 ? 0 : id - 2;

  try {
    tabList = tabList;
    let requestMenu = await getTwoData(id);
    console.log(tabList)

    // tabList[index].children.map(item => {
    //   return item
    //   console.log(item, "item")
    // })
    // tabList[index].children = tabList[index].children.map(item => {
    //   console.log(item, "item")
    //   requestMenu.forEach(requestItem => {
    //     if (requestItem.channelName == item.label) {
    //       item.parentId = requestItem.parentId;
    //       item.id = requestItem.id;
    //       return item;
    //     }
    //   })
    // })
  } catch (err) {
    console.log(err)
  }
}
// 匹配三级菜单
async function mathTree(id) {
  let index = id - 2 < 0 ? 0 : id - 2;
  try {
    let requestMenu = await getThreeData(id)
    tabList[index].children = tabList[index].children.map(item => {
      requestMenu.forEach(requestItem => {
        if (requestItem.channelName == item.label) {
          item.parentId = requestItem.parentId;
          item.id = requestItem.id;
          return item;
        }
      })
    })
  } catch (err) {
    console.log(err)
    alert('请求出错')
  }
}

matchTwo(3)




export default tabList;