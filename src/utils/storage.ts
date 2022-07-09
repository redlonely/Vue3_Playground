import { isEmpty } from 'lodash'

class Storage {
  /**
   * @param key 键
   * @param value 值
   * @param expire 有效时间 - 分钟 - 默认5分钟
   */
  setExpireLocal(key: string, value: any, expire: number) {
    if (isNaN(expire) || !expire) {
      // 默认 十分钟
      expire = 1000 * 60 * 10
      // throw new Error(' "expire" 字段应该为一个有效数字值')
    }
    let obj = {
      data: value,
      time: Date.now(),
      expire: 1000 * 60 * expire, // 换算为分钟
    }
    // 注意，localStorage不能直接存储对象类型，sessionStorage也一样
    // 需要先用JSON.stringify()将其转换成字符串，取值时再通过JSON.parse()转换回来
    localStorage.setItem(key, JSON.stringify(obj))
  }

  /**
   *
   * @param key 键
   * @returns 若获取校验过期，清除值并提示过期 否则直接返回 Null
   */
  getExpireLocal(key: string) {
    let val: {
      data: any
      time: number
      expire: number
    } = JSON.parse(localStorage.getItem(key) || '{}')
    // 空值
    if (isEmpty(val)) return null
    if (Date.now() >= val.expire + val.time) {
      localStorage.removeItem(key)
      return '已过期'
    }

    let time = Math.round((val.expire + val.time - Date.now()) / 1000)
    let remaining = ''

    if (Number(time) < 60) {
      // 小于一分钟
      remaining = Math.round(time / 60) + 'm'
    } else {
      // 大于一分钟
      remaining = Math.round(time / 60) + 'm'
    }

    return { val: val.data, remaining }
  }

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  get(key: string) {
    return JSON.parse(localStorage.getItem(key) || '{}')
  }

  del(key: string) {
    localStorage.removeItem(key)
  }
}

export default new Storage()
