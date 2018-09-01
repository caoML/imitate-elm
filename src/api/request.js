import axios from 'axios'

const server = axios.create({
  baseURL: 'https://elm.cangdu.org/',
  timeout: 30000
})
// request interceptor
server.interceptors.request.use(request => {
  // console.log(request)
  return request
})
server.interceptors.response.use(response => {
  // console.log(response)
  return response
})

export default server
