import axios from 'axios'

const server = axios.create({
  baseURL: '/api',
  timeout: 30000
})

export default server
