import Cookies from 'js-cookies'
export function setName(name) {
  return Cookies.set('name', name)
}
export function getName() {
  return Cookies.get('name')
}
