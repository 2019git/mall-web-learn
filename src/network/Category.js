/* 分类模块数据 */
import {category, category_details} from './data'

export function getCategoryList() {
  return new Promise((resolve, reject) => {
    resolve(category);
  })
}

export function getCategoryItem(cid) {
  return new Promise((resolve, reject) => {
    resolve(category_details[0])
  })
}
