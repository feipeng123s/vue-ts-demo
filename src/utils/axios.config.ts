import { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'

const axiosConfig: AxiosRequestConfig = {
  baseURL: '/',
  transformResponse: [ (data: AxiosResponse) => data ],
  paramsSerializer: (params: any) => qs.stringify(params),
  timeout: 10000,
  // 跨域请求时是否需要使用凭证
  withCredentials: true
}
