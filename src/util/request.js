// 拦截器
import axios from 'axios'
// import { Message, MessageBox } from 'element-ui'
// import store from '@/stores'
const server = axios.create({
  baseURL: '',
  timeout: 30000
})
// request interceptor
server.interceptors.request.use({})
