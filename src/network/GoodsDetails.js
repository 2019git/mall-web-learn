import request from './request'
import {GoodsList} from './home'
import {recommendData} from './data'

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
        shopLogo: require('@/assets/img/goods/head.png'),
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
        desc: '新款上市--尚都比拉撞色立领雪纺衬衫气质春秋上衣设计感女小众百搭103C31848茱萸粉M',
        key: '商品介绍',
        detailImage: gainDetailImage(goodsList.goods)
      },
      itemParams: {
        info: {
          key: '产品参数',
          sets: [
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
      },
      /* 评价信息 */
      comment: {
        count: 8,
        list: [
          {
            userName: '拐角遇见你~',
            userHead: require('@/assets/img/goods/commentUserHead.jpg'),
            content: '衣服收到了，款式好看，尺码标准，穿着很舒服，很合适，非常不错，很有质感，面料摸上去也很舒服，穿上也很显瘦，整体效果很满意',
            createDate: 1621846356000,
            style: '颜色：图片色 型号：M',
            images: [
              'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/162523/9/14830/224578/605ea827Ee7afc940/2aab24632f810b59.jpg!cc_100x100!q70.dpg.webp',
              'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/157015/22/15794/240144/605ea826Ee0d01985/e04a901b57636f0f.jpg!cc_100x100!q70.dpg.webp',
              'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/170250/5/14659/225513/605ea827E4aea5172/f270317f2808ffc5.jpg!cc_100x100!q70.dpg.webp'
            ]
          },
          {
            userName: '低温艺术家之神级文明~',
            userHead: require('@/assets/img/goods/commentUserHead.jpg'),
            content: '款式简单好看，裙子的几何图案很特别不单调，穿上很修身，材质也是不错呢，款式不挑人推荐购买哟。',
            createDate: 1621846356000,
            style: '颜色：图片色 型号：L',
            images: [
              'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/168238/29/14962/315206/605f6fc6Ed32a87f2/238e268de31cc6c8.jpg!cc_100x100!q70.dpg.webp',
              'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/160632/4/14989/455564/605f6fceE84e8d749/eaf60c3d96717720.jpg!cc_100x100!q70.dpg.webp',
              'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/156931/6/18314/443508/605f6fcfE15cba2fb/86dbd757ecc925ca.jpg!cc_100x100!q70.dpg.webp',
              'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/159212/6/14173/441823/605f6fceEafcbf954/01bc062b643641c1.jpg!cc_100x100!q70.dpg.webp'
            ]
          }
        ]
      }
    }
  }

  return new Promise((resolve, reject) => {
    resolve(details)
  })
}

/* 推荐信息 */
export function getRecommend() {
  const data = recommendData;
}


function gainRandom() {
  const items = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  const item = items[Math.floor(Math.random() * items.length) - 1]
  return item;
}

function gainDetailImage(goods) {
  let random = gainRandom();
  let detailImage = goods.filter(o => o.id > parseInt(random) && o.id <= parseInt(random) + 6).map(o => o.img);
  if (detailImage.length === 0) {
    detailImage = goods.filter(o => o.id > 0 && o.id <= 6).map(o => o.img)
  }
  return detailImage;
}
