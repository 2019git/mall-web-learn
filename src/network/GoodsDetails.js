import request from './request'
import {GoodsList} from './home'

/**
 * 订单详情信息请求接口
 */
export function getGoodsDetails(id) {
  let goodsList = new GoodsList();
  let good = goodsList.goods.filter(o => o.id === id)[0]
  const details = {
    itemInfo: {
      //轮播图图片
      topImages: [
        good.img, require('@/assets/img/goods/goods0.jpg')
      ],
      id: id,
      title: good.title,
      desc: '',
      realPrice: good.price,
      newPrice: good.price,
      oldPrice: (good.price * 1.50),
      discount: '活动价',
      columns : [
        '销量 ' + good.cfav * 2, '收藏 ' + good.cfav, '72小时发货'
      ],
      services: [
        {
          'icon': require('@/assets/img/goods/serve.svg'),
          'name': '可派送港澳台'
        },
        {
          'icon': require('@/assets/img/goods/serve.svg'),
          'name': '店铺发货&售后'
        },
        {
          'icon': require('@/assets/img/goods/serve.svg'),
          'name': '7天无理由退货'
        },
      ]
    }
  }

  return new Promise((resolve, reject) => {
    resolve(details)
  })
}
