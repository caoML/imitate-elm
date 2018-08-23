import axios from 'axios'

const server = axios.create({
  baseURL: 'API_ROOT',
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
