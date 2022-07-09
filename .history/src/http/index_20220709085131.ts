import request from './request'
import type { AxiosResponse } from 'axios'

const http = new request({
  timeout: 30000,
})

export const getRandomAcatar = (config: { lx: string; format: string }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data }: AxiosResponse = await http.get({
        url: '/avatar',
        params: config,
      })
      data.code ? resolve(data) : resolve(null)
    } catch (error) {
      reject(error)
    }
  })
}

export default http
