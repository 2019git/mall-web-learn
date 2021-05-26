/* 数据 */

/* 分类数据 */
const category = [
  {
    "level": 0,
    "name": "热门推荐",
    "cid": "WQR2006",
    "ptag": "138624.10002.9999"
  },
  {
    "level": 0,
    "name": "手机数码",
    "cid": "WQ1980",
    "commonUsed": true,
    "ptag": "138624.10003.9999"
  },
  {
    "level": 0,
    "name": "电脑办公",
    "cid": "WQ1981",
    "commonUsed": true,
    "ptag": "138624.10005.9999"
  },
  {
    "level": 0,
    "name": "家用电器",
    "cid": "WQ1982",
    "commonUsed": true,
    "ptag": "138624.10004.9999"
  },
  {
    "level": 0,
    "name": "计生情趣",
    "cid": "WQ1988",
    "commonUsed": true,
    "ptag": "138624.10006.9999"
  },
  {
    "level": 0,
    "name": "美妆护肤",
    "cid": "WQ2044",
    "ptag": "138624.10008.9999"
  },
  {
    "level": 0,
    "name": "个护清洁",
    "cid": "WQ2046",
    "ptag": "138624.10009.9999"
  },
  {
    "level": 0,
    "name": "汽车生活",
    "cid": "WQ1990",
    "commonUsed": true,
    "ptag": "138624.10010.9999"
  },
  {
    "level": 0,
    "name": "京东超市",
    "cid": "WQ1968",
    "commonUsed": true,
    "ptag": "138624.10011.9999"
  },
  {
    "level": 0,
    "name": "男装",
    "cid": "WQ1972",
    "commonUsed": true,
    "ptag": "138624.10012.9999"
  },
  {
    "level": 0,
    "name": "男鞋",
    "cid": "WQ1974",
    "commonUsed": true,
    "ptag": "138624.10013.9999"
  },
  {
    "level": 0,
    "name": "女装",
    "cid": "WQ1973",
    "commonUsed": true,
    "ptag": "138624.10014.9999"
  },
  {
    "level": 0,
    "name": "女鞋",
    "cid": "WQ1975",
    "ptag": "138624.10015.9999"
  },
  {
    "level": 0,
    "name": "母婴童装",
    "cid": "WQ1985",
    "commonUsed": true,
    "ptag": "138624.10016.9999"
  },
  {
    "level": 0,
    "name": "图书音像",
    "cid": "WQ1996",
    "ptag": "138624.10017.9999"
  },
  {
    "level": 0,
    "name": "运动户外",
    "cid": "WQ1989",
    "ptag": "138624.10018.9999"
  },
  {
    "level": 0,
    "name": "内衣配饰",
    "cid": "WQ1976",
    "commonUsed": true,
    "ptag": "138624.10019.9999"
  },
  {
    "level": 0,
    "name": "食品生鲜",
    "cid": "WQ1983",
    "ptag": "138624.10020.9999"
  },
  {
    "level": 0,
    "name": "酒水饮料",
    "cid": "WQ1984",
    "ptag": "138624.10021.9999"
  },
  {
    "level": 0,
    "name": "家具家装",
    "cid": "WQ1992",
    "ptag": "138624.10022.9999"
  },
  {
    "level": 0,
    "name": "家居厨具",
    "cid": "WQ1991",
    "ptag": "138624.10023.9999"
  },
  {
    "level": 0,
    "name": "箱包手袋",
    "cid": "WQ1977",
    "ptag": "138624.10024.9999"
  },
  {
    "level": 0,
    "name": "钟表珠宝",
    "cid": "WQ1979",
    "ptag": "138624.10025.9999"
  },
  {
    "level": 0,
    "name": "玩具乐器",
    "cid": "WQ1986",
    "ptag": "138624.10026.9999"
  },
  {
    "level": 0,
    "name": "医药保健",
    "cid": "WQ1987",
    "ptag": "138624.10027.9999"
  },
  {
    "level": 0,
    "name": "宠物生活",
    "cid": "WQ1994",
    "ptag": "138624.10028.9999"
  },
  {
    "level": 0,
    "name": "礼品鲜花",
    "cid": "WQ1993",
    "ptag": "138624.10029.9999"
  },
  {
    "level": 0,
    "name": "农资绿植",
    "cid": "WQ1998",
    "ptag": "138624.10030.9999"
  },
  {
    "level": 0,
    "name": "生活旅行",
    "cid": "WQ1995",
    "ptag": "138624.10031.9999"
  },
  {
    "level": 0,
    "name": "奢侈品",
    "cid": "WQ1970",
    "ptag": "138624.10032.9999"
  },
  {
    "level": 0,
    "name": "京东国际",
    "cid": "WQ1971",
    "ptag": "138624.10033.9999"
  },
  {
    "level": 0,
    "name": "艺术邮币",
    "cid": "WQ1997",
    "ptag": "138624.10034.9999"
  },
  {
    "level": 0,
    "name": "二手商品",
    "cid": "WQ2002",
    "ptag": "138624.10035.9999"
  },
  {
    "level": 0,
    "name": "特产馆",
    "cid": "WQ1999",
    "ptag": "138624.10036.9999"
  },
  {
    "level": 0,
    "name": "京东金融",
    "cid": "WQ2000",
    "ptag": "138624.10037.9999"
  },
  {
    "level": 0,
    "name": "国际名牌",
    "cid": "WQ1969",
    "ptag": "138624.10038.9999"
  },
  {
    "level": 0,
    "name": "拍卖",
    "cid": "WQ2001",
    "ptag": "138624.10039.9999"
  },
  {
    "level": 0,
    "name": "房产",
    "cid": "WQ2008",
    "ptag": "138624.10040.9999"
  },
  {
    "level": 0,
    "name": "工业品",
    "cid": "WQ2102",
    "ptag": "138624.10041.9999"
  }
]

const imgUrl = "https://img30.360buyimg.com/focus/s140x140_jfs/";
/* 分类详情 */
const category_details = [
  {
    "cid": "WQR2006",
    "items": [
      {
        "name": '热卖选购',
        productCate: [
          {
            "name": "夹克",
            "img": imgUrl + "t17449/23/1286271766/3527/870ce296/5ac4780cN6087feb5.jpg"
          },
          {
            "name": "T恤",
            "img": imgUrl + "t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg"
          },
          {
            "name": "针织衫",
            "img": imgUrl + "t19783/251/1331277260/4287/bb458049/5ac4781bN48dc86e1.jpg"
          },
          {
            "name": "衬衫",
            "img": imgUrl + "t18397/74/1297264628/2293/fcca865c/5ac47821N48c68336.jpg"
          },
          {
            "name": "卫衣",
            "img": imgUrl + "t18886/239/1308846966/4452/3baec65f/5ac4782aN695a7262.jpg"
          },
          {
            "name": "风衣",
            "img": imgUrl + "/t17890/31/1269777779/2792/917e13d0/5ac47830N63e76af2.jpg"
          },
          {
            "name": "牛仔裤",
            "img": imgUrl + "t19222/87/1339548468/5738/68f3d8aa/5ac47841Nff658599.jpg"
          },
          {
            "name": "休闲裤",
            "img": imgUrl + "t17758/181/1301850814/2848/ad32e7c9/5ac47845N7374a31d.jpg"
          },
          {
            "name": "自营男装",
            "img": imgUrl + "t12229/123/574341075/8851/ee1f0b1c/5a0ebc2fNd418b77e.jpg"
          }
        ]
      },
      {
        "name": '上装',
        productCate: [
          {
            "name": "字母T恤",
            "img": imgUrl + "t17449/23/1286271766/3527/870ce296/5ac4780cN6087feb5.jpg"
          },
          {
            "name": "白衬衫",
            "img": imgUrl + "t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg"
          },
          {
            "name": "百搭衬衫",
            "img": imgUrl + "t19783/251/1331277260/4287/bb458049/5ac4781bN48dc86e1.jpg"
          },
          {
            "name": "雪纺衬衫",
            "img": imgUrl + "t18397/74/1297264628/2293/fcca865c/5ac47821N48c68336.jpg"
          },
          {
            "name": "打底衫",
            "img": imgUrl + "t18886/239/1308846966/4452/3baec65f/5ac4782aN695a7262.jpg"
          },
          {
            "name": "短外套",
            "img": imgUrl + "/t17890/31/1269777779/2792/917e13d0/5ac47830N63e76af2.jpg"
          },
          {
            "name": "小西装",
            "img": imgUrl + "t19222/87/1339548468/5738/68f3d8aa/5ac47841Nff658599.jpg"
          },
          {
            "name": "卫衣",
            "img": imgUrl + "t17758/181/1301850814/2848/ad32e7c9/5ac47845N7374a31d.jpg"
          },
          {
            "name": "棒球衫",
            "img": imgUrl + "t12229/123/574341075/8851/ee1f0b1c/5a0ebc2fNd418b77e.jpg"
          }
        ]
      },
      {
        "name": '图书',
        productCate: [
          {
            "name": "计算机与互联网",
            "img": imgUrl + "t20665/60/264141596/6573/599a8f76/5b07e286N1db53ddf.jpg"
          },
          {
            "name": "科普",
            "img": imgUrl + "t20920/177/270369244/6700/69b32745/5b07e296N9ddfee9c.jpg"
          },
          {
            "name": "医学",
            "img": imgUrl + "t22015/289/258384826/3072/c4acd9d2/5b07e2a5Nd75c9d9e.jpg"
          },
          {
            "name": "文学",
            "img": imgUrl + "t20665/60/264141596/6573/599a8f76/5b07e286N1db53ddf.jpg"
          },
          {
            "name": "童书",
            "img": imgUrl + "t20920/177/270369244/6700/69b32745/5b07e296N9ddfee9c.jpg"
          },
          {
            "name": "艺术",
            "img": imgUrl + "t22015/289/258384826/3072/c4acd9d2/5b07e2a5Nd75c9d9e.jpg"
          },
          {
            "name": "人文科学",
            "img": imgUrl + "t20665/60/264141596/6573/599a8f76/5b07e286N1db53ddf.jpg"
          },
          {
            "name": "生活",
            "img": imgUrl + "t20920/177/270369244/6700/69b32745/5b07e296N9ddfee9c.jpg"
          },
          {
            "name": "小说",
            "img": imgUrl + "t22015/289/258384826/3072/c4acd9d2/5b07e2a5Nd75c9d9e.jpg"
          }
        ]
      }
    ]
  }
]

/**
 * 商品模拟数据
 */
export const goodsData = {
  goodsData1: [
    {
      img: 'http://img14.360buyimg.com/n7/jfs/t1/167017/13/11752/194131/6048d129Ee6994e87/f6619ceae126b328.jpg',
      title: 'DGPZ长袖衬衫女2021夏韩版商务休闲正装衬衣棉质免烫抗皱职业通勤工作服', price: '129.00', cfav: '58', id: '1'
    },
    {
      img: 'http://img12.360buyimg.com/n7/jfs/t1/175289/15/105/153276/605ab33aE9bb80756/071e272747fe80de.jpg',
      title: '心莉美 衬衫女长袖春秋款2021春装新款印花时尚女装洋气宽松显瘦气质雪纺衬衣', price: '98.00', cfav: '200', id: '2'
    },
    {
      img: 'http://img11.360buyimg.com/n7/jfs/t1/160702/10/13069/99386/6050e8a5E39314e87/4dfd7feb302f623f.jpg',
      title: '梵阕 春装2021年新款格子衬衫女长袖春秋韩版休闲时尚大码女装宽松显瘦衬衣外', price: '108.00', cfav: '98', id: '3'
    },
    {
      img: 'http://img14.360buyimg.com/n7/jfs/t1/158098/6/18455/171223/60797924E837bdd91/715d42b2042296d3.jpg',
      title: '心莉美 衬衫女长袖春秋款2021年新品新款早春春时尚女装气质印花雪纺衬衣女女', price: '98.00', cfav: '37', id: '4'
    },
    {
      img: 'http://img10.360buyimg.com/n7/jfs/t1/168583/11/14509/131142/605b51f5Ec262423d/bbcc873d7782a458.jpg',
      title: '惠珈芸 雪纺衬衫女高端黑色长袖职业装春秋气质2021年新款时尚显瘦洋气上衣衬衣', price: '99.00', cfav: '218', id: '5'
    },
    {
      img: 'http://img14.360buyimg.com/n7/jfs/t1/184116/18/539/379557/60827c51E12f189c2/0a4a5a1aeb81f9c9.jpg',
      title: '魅芭琪衬衫女2021春夏新款韩版蓝白色长袖宽松显瘦不规则收腰职业衬衣休闲百搭', price: '108.00', cfav: '29', id: '6'
    }
  ],
  goodsData2: [
    {
      img: 'http://img14.360buyimg.com/n7/jfs/t1/160469/22/19542/136680/60793d55E0ead50d7/68cbfd518b49fbce.jpg',
      title: '南极人 长袖衬衫女春季2021新款复古印花设计感小众上衣灯笼袖宫廷风衬衣女士', price: '128.00', cfav: '29', id: '7'
    },
    {
      img: 'http://img13.360buyimg.com/n7/jfs/t1/172397/19/2502/114806/606d7022E57bbfc00/c455a7a1e7435db6.jpg',
      title: '南极人高档品牌女装 衬衫女2021年春季新款时尚气质长袖衬衣女小衫设计感小众', price: '119.00', cfav: '8', id: '8'
    },
    {
      img: 'http://img11.360buyimg.com/n7/jfs/t1/194949/7/1672/209953/60949ab8Efdf50138/bd1c487543a2c5bf.jpg',
      title: '南极人 衬衫女2021年春季新款长袖衬衣女小衫设计感小众轻熟职业气质优雅复古', price: '128.00', cfav: '14', id: '9'
    },
    {
      img: 'http://img10.360buyimg.com/n2/s372x372_jfs/t1/160854/25/14844/157430/605c4021E5cee00ee/31f19b91280abedd.jpg!q70.dpg.webp',
      title: '南极人 长袖衬衫女2021年春季新款蝴蝶印花衬衣女装小衫设计感小众轻熟POLO', price: '122.00', cfav: '19', id: '10'
    },
    {
      img: 'http://img10.360buyimg.com/n7/jfs/t1/168583/11/14509/131142/605b51f5Ec262423d/bbcc873d7782a458.jpg',
      title: '惠珈芸 雪纺衬衫女高端黑色长袖职业装春秋气质2021年新款时尚显瘦洋气上衣衬衣', price: '499.00', cfav: '22', id: '11'
    },
    {
      img: 'http://img14.360buyimg.com/n7/jfs/t1/184116/18/539/379557/60827c51E12f189c2/0a4a5a1aeb81f9c9.jpg',
      title: '魅芭琪衬衫女2021春夏新款韩版蓝白色长袖宽松显瘦不规则收腰职业衬衣休闲百搭', price: '208.00', cfav: '35', id: '12'
    }
  ],
  goodsData3: [
    {
      img: 'http://img10.360buyimg.com/n7/jfs/t1/143092/35/13594/190914/5fa8ad6aE88a0e466/f9c3ade6aeb69461.jpg',
      title: '尚都比拉尚都比拉撞色翻领雪纺衫秋季长袖OL职业风优雅衬衫上衣 103C31493 灰', price: '160.90', cfav: '55', id: '13'
    },
    {
      img: 'http://img13.360buyimg.com/n7/jfs/t1/165893/23/14115/119951/6057f169Ecc3e7b38/fe0af08b5ac5f26f.jpg',
      title: '尚都比拉撞色立领雪纺衬衫气质春秋上衣设计感女小众百搭103C31848茱萸粉M', price: '232.90', cfav: '9', id: '14'
    },
    {
      img: 'http://img12.360buyimg.com/n7/jfs/t1/191204/31/1679/207157/6094198eEb8493afa/fbf881e1418df845.jpg',
      title: 'G2000时尚女装职业短袖白色衬衫女 新款商务OL简约纯色单排扣衬衣00747001 酒红色/28 165/M', price: '149.00', cfav: '2000+', id: '15'
    },
    {
      img: 'http://img12.360buyimg.com/n7/jfs/t1/183667/20/2407/233504/6092c6a4Ec1ee3d83/93693901705965e1.jpg',
      title: '尚都比拉气质立领纯色条纹提花雪纺女上', price: '122.00', cfav: '19', id: '16'
    },
    {
      img: 'http://img12.360buyimg.com/n7/jfs/t1/183667/20/2407/233504/6092c6a4Ec1ee3d83/93693901705965e1.jpg',
      title: '尚都比拉2021年春季新款简约衬衫领金属扣缎面雪纺衫女 清晨粉 M', price: '151.00', cfav: '73', id: '17'
    },
    {
      img: 'http://img10.360buyimg.com/n2/s270x270_jfs/t1/151316/8/20173/163617/603859a7E16151cd2/310d9c735dbab438.jpg!q70.dpg',
      title: '尚都比拉镂空蕾丝拼接衬衫长袖春秋新款优雅复古纯色显瘦上衣女 黑色 XL', price: '189.00', cfav: '36', id: '18'
    }
  ]
}

/* 推荐数据 */
export const recommendData = [
  {
    title: '尚都比拉尚都比拉撞色翻领雪纺衫秋季长袖OL职业风优雅衬衫上衣 103C31493 灰',
    price: 128.00,
    cfav: '100+',
    info: {
      img: 'http://img10.360buyimg.com/n7/jfs/t1/168583/11/14509/131142/605b51f5Ec262423d/bbcc873d7782a458.jpg',
    }
  },
  {
    title: '尚都比拉尚都比拉撞色翻领雪纺衫秋季长袖OL职业风优雅衬衫上衣 103C31493 灰',
    price: 129.00,
    cfav: '100+',
    info: {
      img: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/157015/22/15794/240144/605ea826Ee0d01985/e04a901b57636f0f.jpg!cc_100x100!q70.dpg.webp',
    }
  },
  {
    title: '尚都比拉尚都比拉撞色翻领雪纺衫秋季长袖OL职业风优雅衬衫上衣 103C31493 灰',
    price: 130.00,
    cfav: '100+',
    info: {
      img: 'http://img10.360buyimg.com/n2/s270x270_jfs/t1/151316/8/20173/163617/603859a7E16151cd2/310d9c735dbab438.jpg!q70.dpg',
    }
  },
  {
    title: '尚都比拉尚都比拉撞色翻领雪纺衫秋季长袖OL职业风优雅衬衫上衣 103C31493 灰',
    price: 128.00,
    cfav: '100+',
    info: {
      img: 'http://img10.360buyimg.com/n7/jfs/t1/143092/35/13594/190914/5fa8ad6aE88a0e466/f9c3ade6aeb69461.jpg',
    }
  },
  {
    title: '尚都比拉尚都比拉撞色翻领雪纺衫秋季长袖OL职业风优雅衬衫上衣 103C31493 灰',
    price: 131.00,
    cfav: '100+',
    info: {
      img: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/160632/4/14989/455564/605f6fceE84e8d749/eaf60c3d96717720.jpg!cc_100x100!q70.dpg.webp',
    }
  },
  {
    title: '尚都比拉尚都比拉撞色翻领雪纺衫秋季长袖OL职业风优雅衬衫上衣 103C31493 灰',
    price: 128.00,
    cfav: '100+',
    info: {
      img: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/156931/6/18314/443508/605f6fcfE15cba2fb/86dbd757ecc925ca.jpg!cc_100x100!q70.dpg.webp',
    }
  },
  {
    title: '尚都比拉尚都比拉撞色翻领雪纺衫秋季长袖OL职业风优雅衬衫上衣 103C31493 灰',
    price: 128.00,
    cfav: '100+',
    info: {
      img: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/159212/6/14173/441823/605f6fceEafcbf954/01bc062b643641c1.jpg!cc_100x100!q70.dpg.webp',
    }
  },
  {
    title: '尚都比拉尚都比拉撞色翻领雪纺衫秋季长袖OL职业风优雅衬衫上衣 103C31493 灰',
    price: 128.00,
    cfav: '100+',
    info: {
      img: 'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/117076/24/11531/176416/5f013be9E56946227/7a85d8cb3669ee43.jpg!q70.dpg.webp',
    }
  },
  {
    title: '尚都比拉尚都比拉撞色翻领雪纺衫秋季长袖OL职业风优雅衬衫上衣 103C31493 灰',
    price: 128.00,
    cfav: '100+',
    info: {
      img: 'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/164859/3/12913/122690/6050ab24E67a247db/0595a00f2e33ffc8.jpg!q70.dpg.webp',
    }
  },
  {
    title: '尚都比拉尚都比拉撞色翻领雪纺衫秋季长袖OL职业风优雅衬衫上衣 103C31493 灰',
    price: 128.00,
    cfav: '100+',
    info: {
      img: 'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/168878/16/14348/216522/60596e12Ed38a9cf7/ca6b688e719cc17f.jpg!q70.dpg.webp'
    }
  }
]




