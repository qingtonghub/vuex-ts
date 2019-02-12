/*
 * @Description: 自定义工具类
 * @Author: qingtong
 * @Date: 2019-02-12 13:26:40
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-12 13:29:40
 */


/** 
 * @deprecated 防抖函数
 * @param fn 函数
 * @param delay 推迟时间
 * @param immediate 是否立即执行
*/
let timer: any = null; // 声明计时器
export function debounce(fn: any, delay: number = 1000, immediate: boolean = false) {
  // let timer: any = null; // 声明计时器
  // console.log(timer)
  const rn = function() {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
  if (immediate) {
    return rn();
  } else {
    return rn;
  }
}
