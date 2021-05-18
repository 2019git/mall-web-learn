import request from './request'
import {GoodsList} from './home'

/**
 * 订单详情信息请求接口
 */
export function getGoodsDetails(id) {
  let goodsList = new GoodsList();
  let good = goodsList.goods.filter(o => o.id === id);

  const details = {
    itemInfo: {
      //轮播图图片
      topImages: [

      ],
      id: id,
      title: '',
      desc: '',
      realPrice: '',
      newPrice: '',
      oldPrice: '',
      discount: '',
      columns : [

      ],
      services: [

      ]
    }
  }
}
