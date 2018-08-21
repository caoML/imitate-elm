import http from '@/api'
// import regist from '@/api'
// import { getToken, setToken } from '@/util/auth'
const user = {
  state: {
    name: '',
    token: ''
  },
  mutations: {
    set_name: (state, name) => {
      state.name = name
    }
    // set_token: (state, token) => {
    //   state.token = token
    //   setToken(token)
    // }
  },
  actions: {
    // 登陆
    Login({ commit }, userInfo) {
      const name = userInfo.name.trim()
      const password = userInfo.pass.trim()
      return new Promise((resolve, reject) => {
        http.login(name, password)
          .then(response => {
            const data = response.data
            commit('set_name', data.name)
            // commit('set_token', data.token)
            // setName(data.name)
            // setToken(data.token)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
    // 注册
    // Regist({ commit }, userInfo) { 
    //   const name = userInfo.name.trim()
    //   const password = userInfo.password.trim()
    //   return new Promise((resolve, reject) => { 
    //     http.regist(name, password).then(response => { 
    //       const data = response.data

    //     })
    //   })
    // }
  }
}
