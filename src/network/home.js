import {request} from "@/network/request";
import {goodsData} from './data'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  let data = [];
  //模拟请求数据
  if (type === 'pop') {
    data.push(...goodsData.goodsData1)
    data.push(...goodsData.goodsData2)
    data.push(...goodsData.goodsData3)
  }else if (type === 'new') {
    data.push(...goodsData.goodsData2)
    data.push(...goodsData.goodsData3)
    data.push(...goodsData.goodsData1)
  }else {
    data.push(...goodsData.goodsData3)
    data.push(...goodsData.goodsData1)
    data.push(...goodsData.goodsData2)
  }
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}


export class GoodsList{
  constructor(){
    let data = [];
    data.push(...goodsData.goodsData1)
    data.push(...goodsData.goodsData2)
    data.push(...goodsData.goodsData3)
    this.goods = data
  }
}
