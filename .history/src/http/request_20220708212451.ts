import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

import storage from '@/utils/storage'

import { useLoadingBar } from 'naive-ui'

const $loadingBar = useLoadingBar()

class Http {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    // 创建 axios 实例
    this.instance = axios.create(config)

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // $loadingBar.start()
        // 获取 token
        // let token = storage.get('token')
        // if (token) {
        //   config.headers = {
        //     Authorization: `token ${token}`,
        //   }
        // }
        return config
      },
      (error) => {
        console.log(error)
        return Promise.reject(error)
      }
    )

    // 响应拦截器
    this.instance.interceptors.response.use((response: AxiosResponse) => {
      // $loadingBar.finish()
      //响应成功的拦截
      return response
      // if (response.status === 200) {
      //   // 响应成功
      //   return Promise.resolve(response)
      // } else {
      //   return Promise.reject(response)
      // }
    })
  }

  // 封装request方法
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }

  get<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  put<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }

  delete<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default Http
