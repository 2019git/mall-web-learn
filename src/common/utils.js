//防抖函数
export function debounce(func, time) {
  let timer = null;
  if (timer != null) {
    clearTimeout(timer)
  }
  return function () {
    timer = setTimeout(() => {
      func.apply(this)
    }, time)
  }
}
