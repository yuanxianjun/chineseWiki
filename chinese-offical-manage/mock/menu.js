
import Mock from 'mockjs'

const data = Mock.mock({
  'items|10': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['开启', '关闭', '禁用'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

export default [
  {
    url: '/api/menu/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
