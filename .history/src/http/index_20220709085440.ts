import request from './request'
import type { AxiosResponse } from 'axios'

const http = new request({
  timeout: 30000,
})

type Response = {
  code: String
  height: String
  imgurl: String
  width: String
}

export const getRandomAcatar = (config: { lx: string; format: string }): Promise<Response | {}> => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data }: AxiosResponse = await http.get({
        url: '/avatar',
        params: config,
      })
      data.code ? resolve(data) : resolve({})
    } catch (error) {
      reject(error)
    }
  })
}

export default http
