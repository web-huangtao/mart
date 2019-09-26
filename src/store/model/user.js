const user = {
  state: {
    isLogin: sessionStorage.getItem('isLogin') ? sessionStorage.getItem('isLogin') : false,
    info: ''
  },
  mutations: {
    login(state) {
      state.isLogin = true
      sessionStorage.setItem('isLogin', true)
    },
    logout(state) {
      state.isLogin = false
      sessionStorage.setItem('isLogin', false)
    }
  }
}

export default user
