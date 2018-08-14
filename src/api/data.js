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
export function getFoodList(data) {
  return request({
    url: '/food',
    method: 'get'
  })
}
export function getOrderList(data) {
  return request({
    url: '/order',
    method: 'get'
  })
}
export function deleteFood(data) {
  return request({
    url: '/food',
    method: 'delete'
  })
}
export function deleteBussiness(data) {
  return request({
    url: '/bussiness',
    method: 'delete'
  })
}
