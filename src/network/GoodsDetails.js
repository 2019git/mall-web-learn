import request from './request'
import {GoodsList} from './home'

/**
 * 商品详情信息请求接口
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
      ],
      /* 商家信息 */
      shopInfo: {
        shopLogo: '',
        name: '南极人',
        score: [
          {
            score: 4.46,
            name: '描述服务',
            isBetter: false
          },
          {
            score: 5,
            name: '价格合理',
            isBetter: true
          },
          {
            score: 4.62,
            name: '质量满意',
            isBetter: false
          }
        ],
        cSells: 57876,
        cGoods: 99
      },
      /* 详情信息 */
      detailInfo: {
        desc: '新款上市--',
        key: '商品介绍',
        detailImage: gainDetailImage(goodsList.goods)
      },
      itemParams: {
        info: {
          key: '产品参数',
          set: [
            {key: '基础风格', value: '时尚都市'},
            {key: '厚度', value: '薄款'},
            {key: '材质', value: '棉'},
            {key: '图案', value: '字母,其他'},
            {key: '袖长', value: '短袖'},
            {key: '领型', value: '圆领'},
            {key: '版型', value: '标准型'},
            {key: '适用人群', value: '青年,美女'},
            {key: '风格', value: '青春休闲,基础大众'},
            {key: '上市时间', value: '2021年夏季'},
            {key: '适用季节', value: '夏季'},
            {key: '适用场景', value: '休闲'},
            {key: '流行元素', value: '印花,其它'},
          ]
        },
        rule: {
          key: '尺码信息',
          tables: [
            {name: '尺码', param1: 'M', param2: 'L', param3: 'XL', param4: '2XL'},
            {name: '肩宽', param1: '42', param2: '44', param3: '45', param4: '46'},
            {name: '衣长', param1: '67', param2: '69', param3: '71', param4: '73'},
            {name: '胸围', param1: '96', param2: '100', param3: '104', param4: '108'}
          ]
        }

      }
    }
  }

  return new Promise((resolve, reject) => {
    resolve(details)
  })
}

function gainRandom() {
  const items = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  const item = items[Math.floor(Math.random() * items.length) - 1]
  return item;
}

function gainDetailImage(goods) {
  let random = gainRandom();
  let detailImage = goods.filter(o => o.id > parseInt(random) && o.id <= parseInt(random) + 6).map(o => o.img);
  return detailImage;
}
