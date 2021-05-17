import {request} from "@/network/request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  let goodsData = null;
  //模拟请求数据
  if (type === 'pop') {
    goodsData = [
        {img: 'http://img14.360buyimg.com/n7/jfs/t1/167017/13/11752/194131/6048d129Ee6994e87/f6619ceae126b328.jpg',
          title: 'DGPZ长袖衬衫女2021夏韩版商务休闲正装衬衣棉质免烫抗皱职业通勤工作服', price: '129.00', cfav: '58',id : '1'},
        {img: 'http://img12.360buyimg.com/n7/jfs/t1/175289/15/105/153276/605ab33aE9bb80756/071e272747fe80de.jpg',
          title: '心莉美 衬衫女长袖春秋款2021春装新款印花时尚女装洋气宽松显瘦气质雪纺衬衣', price: '98.00', cfav: '200',id : '1'},
        {img: 'http://img11.360buyimg.com/n7/jfs/t1/160702/10/13069/99386/6050e8a5E39314e87/4dfd7feb302f623f.jpg',
          title: '梵阕 春装2021年新款格子衬衫女长袖春秋韩版休闲时尚大码女装宽松显瘦衬衣外', price: '108.00', cfav: '98',id : '1'},
        {img: 'http://img14.360buyimg.com/n7/jfs/t1/158098/6/18455/171223/60797924E837bdd91/715d42b2042296d3.jpg',
          title: '心莉美 衬衫女长袖春秋款2021年新品新款早春春时尚女装气质印花雪纺衬衣女女', price: '98.00', cfav: '37',id : '1'},
        {img: 'http://img10.360buyimg.com/n7/jfs/t1/168583/11/14509/131142/605b51f5Ec262423d/bbcc873d7782a458.jpg',
          title: '惠珈芸 雪纺衬衫女高端黑色长袖职业装春秋气质2021年新款时尚显瘦洋气上衣衬衣', price: '99.00', cfav: '218',id : '1'},
        {img: 'http://img14.360buyimg.com/n7/jfs/t1/184116/18/539/379557/60827c51E12f189c2/0a4a5a1aeb81f9c9.jpg',
          title: '魅芭琪衬衫女2021春夏新款韩版蓝白色长袖宽松显瘦不规则收腰职业衬衣休闲百搭', price: '108.00', cfav: '29',id : '1'},
      {img: 'http://img14.360buyimg.com/n7/jfs/t1/160469/22/19542/136680/60793d55E0ead50d7/68cbfd518b49fbce.jpg',
        title: '南极人 长袖衬衫女春季2021新款复古印花设计感小众上衣灯笼袖宫廷风衬衣女士', price: '128.00', cfav: '29',id : '1'},
      {img: 'http://img13.360buyimg.com/n7/jfs/t1/172397/19/2502/114806/606d7022E57bbfc00/c455a7a1e7435db6.jpg',
        title: '南极人高档品牌女装 衬衫女2021年春季新款时尚气质长袖衬衣女小衫设计感小众', price: '119.00', cfav: '8',id : '1'},
      {img: 'http://img11.360buyimg.com/n7/jfs/t1/194949/7/1672/209953/60949ab8Efdf50138/bd1c487543a2c5bf.jpg',
        title: '南极人 衬衫女2021年春季新款长袖衬衣女小衫设计感小众轻熟职业气质优雅复古', price: '128.00', cfav: '14',id : '1'},
      {img: 'http://img13.360buyimg.com/n7/jfs/t1/196122/36/1649/213704/60949aa0E3b3fed5e/32824a51348ca7df.jpg',
        title: '南极人 长袖衬衫女2021年春季新款蝴蝶印花衬衣女装小衫设计感小众轻熟POLO', price: '122.00', cfav: '19',id : '1'},
      {img: 'http://img10.360buyimg.com/n7/jfs/t1/168583/11/14509/131142/605b51f5Ec262423d/bbcc873d7782a458.jpg',
        title: '惠珈芸 雪纺衬衫女高端黑色长袖职业装春秋气质2021年新款时尚显瘦洋气上衣衬衣', price: '499.00', cfav: '22',id : '1'},
      {img: 'http://img14.360buyimg.com/n7/jfs/t1/184116/18/539/379557/60827c51E12f189c2/0a4a5a1aeb81f9c9.jpg',
        title: '魅芭琪衬衫女2021春夏新款韩版蓝白色长袖宽松显瘦不规则收腰职业衬衣休闲百搭', price: '208.00', cfav: '35',id : '1'},
      {img: 'http://img10.360buyimg.com/n7/jfs/t1/143092/35/13594/190914/5fa8ad6aE88a0e466/f9c3ade6aeb69461.jpg',
        title: '尚都比拉尚都比拉撞色翻领雪纺衫秋季长袖OL职业风优雅衬衫上衣 103C31493 灰', price: '160.90', cfav: '55',id : '1'},
      {img: 'http://img13.360buyimg.com/n7/jfs/t1/165893/23/14115/119951/6057f169Ecc3e7b38/fe0af08b5ac5f26f.jpg',
        title: '尚都比拉撞色立领雪纺衬衫气质春秋上衣设计感女小众百搭103C31848茱萸粉M', price: '232.90', cfav: '9',id : '1'},
      {img: 'http://img12.360buyimg.com/n7/jfs/t1/191204/31/1679/207157/6094198eEb8493afa/fbf881e1418df845.jpg',
        title: 'G2000时尚女装职业短袖白色衬衫女 新款商务OL简约纯色单排扣衬衣00747001 酒红色/28 165/M', price: '149.00', cfav: '2000+',id : '1'},
      {img: 'http://img12.360buyimg.com/n7/jfs/t1/183667/20/2407/233504/6092c6a4Ec1ee3d83/93693901705965e1.jpg',
        title: '尚都比拉气质立领纯色条纹提花雪纺女上', price: '122.00', cfav: '19',id : '1'},
      {img: 'http://img12.360buyimg.com/n7/jfs/t1/183667/20/2407/233504/6092c6a4Ec1ee3d83/93693901705965e1.jpg',
        title: '尚都比拉2021年春季新款简约衬衫领金属扣缎面雪纺衫女 清晨粉 M', price: '151.00', cfav: '73',id : '1'},
      {img: 'http://img12.360buyimg.com/n7/jfs/t1/191325/4/1511/272860/6092cefeE8e258a93/c4166c3605dd6996.jpg',
        title: '尚都比拉镂空蕾丝拼接衬衫长袖春秋新款优雅复古纯色显瘦上衣女 黑色 XL', price: '189.00', cfav: '36',id : '1'}
    ]
  }else if (type === 'new') {
    goodsData =  [
        {img: 'http://img14.360buyimg.com/n7/jfs/t1/160469/22/19542/136680/60793d55E0ead50d7/68cbfd518b49fbce.jpg',
          title: '南极人 长袖衬衫女春季2021新款复古印花设计感小众上衣灯笼袖宫廷风衬衣女士', price: '128.00', cfav: '29',id : '2'},
        {img: 'http://img13.360buyimg.com/n7/jfs/t1/172397/19/2502/114806/606d7022E57bbfc00/c455a7a1e7435db6.jpg',
          title: '南极人高档品牌女装 衬衫女2021年春季新款时尚气质长袖衬衣女小衫设计感小众', price: '119.00', cfav: '8',id : '2'},
        {img: 'http://img11.360buyimg.com/n7/jfs/t1/194949/7/1672/209953/60949ab8Efdf50138/bd1c487543a2c5bf.jpg',
          title: '南极人 衬衫女2021年春季新款长袖衬衣女小衫设计感小众轻熟职业气质优雅复古', price: '128.00', cfav: '14',id : '2'},
        {img: 'http://img13.360buyimg.com/n7/jfs/t1/196122/36/1649/213704/60949aa0E3b3fed5e/32824a51348ca7df.jpg',
          title: '南极人 长袖衬衫女2021年春季新款蝴蝶印花衬衣女装小衫设计感小众轻熟POLO', price: '122.00', cfav: '19',id : '2'},
        {img: 'http://img10.360buyimg.com/n7/jfs/t1/168583/11/14509/131142/605b51f5Ec262423d/bbcc873d7782a458.jpg',
          title: '惠珈芸 雪纺衬衫女高端黑色长袖职业装春秋气质2021年新款时尚显瘦洋气上衣衬衣', price: '499.00', cfav: '22',id : '2'},
        {img: 'http://img14.360buyimg.com/n7/jfs/t1/184116/18/539/379557/60827c51E12f189c2/0a4a5a1aeb81f9c9.jpg',
          title: '魅芭琪衬衫女2021春夏新款韩版蓝白色长袖宽松显瘦不规则收腰职业衬衣休闲百搭', price: '208.00', cfav: '35',id : '2'},
      {img: 'http://img14.360buyimg.com/n7/jfs/t1/167017/13/11752/194131/6048d129Ee6994e87/f6619ceae126b328.jpg',
        title: 'DGPZ长袖衬衫女2021夏韩版商务休闲正装衬衣棉质免烫抗皱职业通勤工作服', price: '129.00', cfav: '58',id : '2'},
      {img: 'http://img12.360buyimg.com/n7/jfs/t1/175289/15/105/153276/605ab33aE9bb80756/071e272747fe80de.jpg',
        title: '心莉美 衬衫女长袖春秋款2021春装新款印花时尚女装洋气宽松显瘦气质雪纺衬衣', price: '98.00', cfav: '200',id : '2'},
      {img: 'http://img11.360buyimg.com/n7/jfs/t1/160702/10/13069/99386/6050e8a5E39314e87/4dfd7feb302f623f.jpg',
        title: '梵阕 春装2021年新款格子衬衫女长袖春秋韩版休闲时尚大码女装宽松显瘦衬衣外', price: '108.00', cfav: '98',id : '2'},
      {img: 'http://img14.360buyimg.com/n7/jfs/t1/158098/6/18455/171223/60797924E837bdd91/715d42b2042296d3.jpg',
        title: '心莉美 衬衫女长袖春秋款2021年新品新款早春春时尚女装气质印花雪纺衬衣女女', price: '98.00', cfav: '37',id : '2'},
      {img: 'http://img10.360buyimg.com/n7/jfs/t1/168583/11/14509/131142/605b51f5Ec262423d/bbcc873d7782a458.jpg',
        title: '惠珈芸 雪纺衬衫女高端黑色长袖职业装春秋气质2021年新款时尚显瘦洋气上衣衬衣', price: '99.00', cfav: '218',id : '2'},
      {img: 'http://img14.360buyimg.com/n7/jfs/t1/184116/18/539/379557/60827c51E12f189c2/0a4a5a1aeb81f9c9.jpg',
        title: '魅芭琪衬衫女2021春夏新款韩版蓝白色长袖宽松显瘦不规则收腰职业衬衣休闲百搭', price: '108.00', cfav: '29',id : '2'},
      {img: 'http://img10.360buyimg.com/n7/jfs/t1/143092/35/13594/190914/5fa8ad6aE88a0e466/f9c3ade6aeb69461.jpg',
        title: '尚都比拉尚都比拉撞色翻领雪纺衫秋季长袖OL职业风优雅衬衫上衣 103C31493 灰', price: '160.90', cfav: '55',id : '2'},
      {img: 'http://img13.360buyimg.com/n7/jfs/t1/165893/23/14115/119951/6057f169Ecc3e7b38/fe0af08b5ac5f26f.jpg',
        title: '尚都比拉撞色立领雪纺衬衫气质春秋上衣设计感女小众百搭103C31848茱萸粉M', price: '232.90', cfav: '9',id : '2'},
      {img: 'http://img12.360buyimg.com/n7/jfs/t1/191204/31/1679/207157/6094198eEb8493afa/fbf881e1418df845.jpg',
        title: 'G2000时尚女装职业短袖白色衬衫女 新款商务OL简约纯色单排扣衬衣00747001 酒红色/28 165/M', price: '149.00', cfav: '2000+',id : '2'},
      {img: 'http://img12.360buyimg.com/n7/jfs/t1/183667/20/2407/233504/6092c6a4Ec1ee3d83/93693901705965e1.jpg',
        title: '尚都比拉气质立领纯色条纹提花雪纺女上', price: '122.00', cfav: '19',id : '2'},
      {img: 'http://img12.360buyimg.com/n7/jfs/t1/183667/20/2407/233504/6092c6a4Ec1ee3d83/93693901705965e1.jpg',
        title: '尚都比拉2021年春季新款简约衬衫领金属扣缎面雪纺衫女 清晨粉 M', price: '151.00', cfav: '73',id : '2'},
      {img: 'http://img12.360buyimg.com/n7/jfs/t1/191325/4/1511/272860/6092cefeE8e258a93/c4166c3605dd6996.jpg',
        title: '尚都比拉镂空蕾丝拼接衬衫长袖春秋新款优雅复古纯色显瘦上衣女 黑色 XL', price: '189.00', cfav: '36',id : '2'}
    ]
  }else {
    goodsData =  [
        {img: 'http://img10.360buyimg.com/n7/jfs/t1/143092/35/13594/190914/5fa8ad6aE88a0e466/f9c3ade6aeb69461.jpg',
          title: '尚都比拉尚都比拉撞色翻领雪纺衫秋季长袖OL职业风优雅衬衫上衣 103C31493 灰', price: '160.90', cfav: '55',id : '3'},
        {img: 'http://img13.360buyimg.com/n7/jfs/t1/165893/23/14115/119951/6057f169Ecc3e7b38/fe0af08b5ac5f26f.jpg',
          title: '尚都比拉撞色立领雪纺衬衫气质春秋上衣设计感女小众百搭103C31848茱萸粉M', price: '232.90', cfav: '9',id : '3'},
        {img: 'http://img12.360buyimg.com/n7/jfs/t1/191204/31/1679/207157/6094198eEb8493afa/fbf881e1418df845.jpg',
          title: 'G2000时尚女装职业短袖白色衬衫女 新款商务OL简约纯色单排扣衬衣00747001 酒红色/28 165/M', price: '149.00', cfav: '2000+',id : '3'},
        {img: 'http://img12.360buyimg.com/n7/jfs/t1/183667/20/2407/233504/6092c6a4Ec1ee3d83/93693901705965e1.jpg',
          title: '尚都比拉气质立领纯色条纹提花雪纺女上', price: '122.00', cfav: '19',id : '3'},
        {img: 'http://img12.360buyimg.com/n7/jfs/t1/183667/20/2407/233504/6092c6a4Ec1ee3d83/93693901705965e1.jpg',
          title: '尚都比拉2021年春季新款简约衬衫领金属扣缎面雪纺衫女 清晨粉 M', price: '151.00', cfav: '73',id : '3'},
        {img: 'http://img12.360buyimg.com/n7/jfs/t1/191325/4/1511/272860/6092cefeE8e258a93/c4166c3605dd6996.jpg',
          title: '尚都比拉镂空蕾丝拼接衬衫长袖春秋新款优雅复古纯色显瘦上衣女 黑色 XL', price: '189.00', cfav: '36',id : '3'},
      {img: 'http://img14.360buyimg.com/n7/jfs/t1/167017/13/11752/194131/6048d129Ee6994e87/f6619ceae126b328.jpg',
        title: 'DGPZ长袖衬衫女2021夏韩版商务休闲正装衬衣棉质免烫抗皱职业通勤工作服', price: '129.00', cfav: '58',id : '3'},
      {img: 'http://img12.360buyimg.com/n7/jfs/t1/175289/15/105/153276/605ab33aE9bb80756/071e272747fe80de.jpg',
        title: '心莉美 衬衫女长袖春秋款2021春装新款印花时尚女装洋气宽松显瘦气质雪纺衬衣', price: '98.00', cfav: '200',id : '3'},
      {img: 'http://img11.360buyimg.com/n7/jfs/t1/160702/10/13069/99386/6050e8a5E39314e87/4dfd7feb302f623f.jpg',
        title: '梵阕 春装2021年新款格子衬衫女长袖春秋韩版休闲时尚大码女装宽松显瘦衬衣外', price: '108.00', cfav: '98',id : '3'},
      {img: 'http://img14.360buyimg.com/n7/jfs/t1/158098/6/18455/171223/60797924E837bdd91/715d42b2042296d3.jpg',
        title: '心莉美 衬衫女长袖春秋款2021年新品新款早春春时尚女装气质印花雪纺衬衣女女', price: '98.00', cfav: '37',id : '3'},
      {img: 'http://img10.360buyimg.com/n7/jfs/t1/168583/11/14509/131142/605b51f5Ec262423d/bbcc873d7782a458.jpg',
        title: '惠珈芸 雪纺衬衫女高端黑色长袖职业装春秋气质2021年新款时尚显瘦洋气上衣衬衣', price: '99.00', cfav: '218',id : '3'},
      {img: 'http://img14.360buyimg.com/n7/jfs/t1/184116/18/539/379557/60827c51E12f189c2/0a4a5a1aeb81f9c9.jpg',
        title: '魅芭琪衬衫女2021春夏新款韩版蓝白色长袖宽松显瘦不规则收腰职业衬衣休闲百搭', price: '108.00', cfav: '29',id : '3'},
      {img: 'http://img14.360buyimg.com/n7/jfs/t1/160469/22/19542/136680/60793d55E0ead50d7/68cbfd518b49fbce.jpg',
        title: '南极人 长袖衬衫女春季2021新款复古印花设计感小众上衣灯笼袖宫廷风衬衣女士', price: '128.00', cfav: '29',id : '3'},
      {img: 'http://img13.360buyimg.com/n7/jfs/t1/172397/19/2502/114806/606d7022E57bbfc00/c455a7a1e7435db6.jpg',
        title: '南极人高档品牌女装 衬衫女2021年春季新款时尚气质长袖衬衣女小衫设计感小众', price: '119.00', cfav: '8',id : '3'},
      {img: 'http://img11.360buyimg.com/n7/jfs/t1/194949/7/1672/209953/60949ab8Efdf50138/bd1c487543a2c5bf.jpg',
        title: '南极人 衬衫女2021年春季新款长袖衬衣女小衫设计感小众轻熟职业气质优雅复古', price: '128.00', cfav: '14',id : '3'},
      {img: 'http://img13.360buyimg.com/n7/jfs/t1/196122/36/1649/213704/60949aa0E3b3fed5e/32824a51348ca7df.jpg',
        title: '南极人 长袖衬衫女2021年春季新款蝴蝶印花衬衣女装小衫设计感小众轻熟POLO', price: '122.00', cfav: '19',id : '3'},
      {img: 'http://img10.360buyimg.com/n7/jfs/t1/168583/11/14509/131142/605b51f5Ec262423d/bbcc873d7782a458.jpg',
        title: '惠珈芸 雪纺衬衫女高端黑色长袖职业装春秋气质2021年新款时尚显瘦洋气上衣衬衣', price: '499.00', cfav: '22',id : '3'},
      {img: 'http://img14.360buyimg.com/n7/jfs/t1/184116/18/539/379557/60827c51E12f189c2/0a4a5a1aeb81f9c9.jpg',
        title: '魅芭琪衬衫女2021春夏新款韩版蓝白色长袖宽松显瘦不规则收腰职业衬衣休闲百搭', price: '208.00', cfav: '35',id : '3'}
    ]
  }
  return new Promise((resolve, reject) => {
    resolve(goodsData)
  })
}
