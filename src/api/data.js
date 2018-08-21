import request from './request'
export function getCustomerList(data) {
  return request({
    url: '/v1/users/list',
    method: 'get',
    data
  })
}
export function getAdminList(params) {
  return request({
    url: 'admin/all',
    method: 'get',
    params
  })
}
export function getBussinessList(params) {
  return request({
    url: '/shopping/restaurants',
    method: 'get',
    params
  })
}
export function getFoodList(params) {
  return request({
    url: '/shopping/v2/foods',
    method: 'get',
    params
  })
}
export function getOrderList(params) {
  return request({
    url: '/bos/orders',
    method: 'get',
    params
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
export function login(data) {
  return request({
    url: '/admin/login',
    method: 'post',
    data
  })
}
export function regist(data) {
  return request({
    url: '/regist',
    method: 'post',
    data
  })
}
