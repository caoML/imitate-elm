import request from './request'
export function getCustomerList(data) {
  return request({
    url: '/customer',
    method: 'get'
  })
}
export function getAdminList(data) {
  return request({
    url: '/admin',
    method: 'get'
  })
}
export function getBussinessList(data) {
  return request({
    url: '/bussiness',
    method: 'get'
  })
}
