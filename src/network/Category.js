/* 分类模块数据 */
import {category} from './data'

export function getCategoryList() {
  return new Promise((resolve, reject) => {
    resolve(category);
  })
}
