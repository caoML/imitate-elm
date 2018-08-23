import request from './request'
export function getCustomerList(params) {
  return request({
    url: '/v1/users/list',
    method: 'get',
    params
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
export function login(data) {
  return request({
    url: '/admin/login',
    method: 'post',
    data
  })
}
export function logout(data) {
  return request({
    url: '/admin/singout',
    method: 'get',
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
export function getCustomerNumber(data) {
  return request({
    url: '/v1/users/count',
    method: 'get',
    data
  })
}
export function getBussinessNumber(data) {
  return request({
    url: '/shopping/restaurants/count',
    method: 'get',
    data
  })
}
export function getFoodNumber(params) {
  return request({
    url: 'shopping/v2/foods/count',
    method: 'get',
    params
  })
}
export function getOrderNumber(params) {
  return request({
    url: 'shopping/v2/foods/count',
    method: 'get',
    params
  })
}
export function getAdminNumber(data) {
  return request({
    url: 'admin/count',
    method: 'get',
    data
  })
}
export function updateBussiness(data) {
  return request({
    url: 'shopping/updateshop',
    method: 'post',
    data
  })
}
export function deleteBussiness(val) {
  return request({
    url: `shopping/restaurant/${val}`,
    method: 'delete'
  })
}
export function deleteFood(val) {
  return request({
    url: `shopping/v2/food/${val}`,
    method: 'delete'
  })
}
export function updateFood(data) {
  return request({
    url: '/shopping/v2/updatefood',
    method: 'post',
    data
  })
}
