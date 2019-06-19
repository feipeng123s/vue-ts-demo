import Axios from 'axios'
import QS from 'qs'
import { Loading } from 'element-ui'
import router from '../router'

const http = Axios.create({
  baseURL: '/api',
  timeout: 5000,
  transformRequest: [
    (data: any) => QS.stringify(data)
  ],
  withCredentials: true
})

http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let hideLoading: boolean = false
let loadingInstance: any = null

// 请求拦截器
http.interceptors.request.use((config: any) => {
  // 显示Loading动画
  hideLoading = config.hideLoading
  if (!hideLoading) {
    loadingInstance = Loading.service({
      text: 'Loading...',
      background: 'rgba(0, 0, 0, 0.8)'
    })
  }

  const token = localStorage.getItem('access_token')
  if (token !== null) {
    config.headers.common.Authorization = 'Bearer ' + token
  }

  return config
}, (error: any) => {
  return Promise.reject(error)
})

// 响应拦截器
http.interceptors.response.use((response: any) => {
  // 关闭Loading动画
  if (!hideLoading) {
    loadingInstance.close()
    hideLoading = false
  }
  if (response.status === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
}, (error: any) => {
  if (!hideLoading) {
    loadingInstance.close()
    hideLoading = false
  }
  // 状态码非2开头响应处理
  if (error.response) {
    switch (error.response.status) {
      case 401:
        toLogin()
        break
      case 404:
      // TODO:跳转到404页面
        break
    }
  } else {
    // TODO:网络断开或请求超时
    // console.log('network is disconnected');
  }
  return Promise.reject(error.response)
})

const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

export default http
