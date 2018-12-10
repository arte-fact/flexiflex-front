import Vue from 'vue'
import users from './user'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'
const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
const LOGOUT_FAIL = 'LOGOUT_FAIL'
const SET_USER_TOKEN = 'SET_USER_TOKEN'
const RESET_USER_TOKEN = 'RESET_USER_TOKEN'

const state = {
  isAuthenticating: false,
  isAuthenticated: false,
  isRegistered: false,
  hasError: false,
  hasCookie: null,
  token: window.$cookies.get('token')
}

const getters = {

  isAuthenticating (state) {
    return state.isAuthenticating
  },
  isAuthenticated (state) {
    return state.isAuthenticated
  },
  isRegistered (state) {
    return state.isRegistered
  },
  hasError (state) {
    return state.hasError
  },
  hasCookie (state) {
    return state.hasCookie
  },
  token (state) {
    return state.token
  }
}

const mutations = {
  [LOGIN_REQUEST] (state) {
    state.isAuthenticating = true
    state.isAuthenticated = false
    state.hasError = false
  },
  [LOGIN_SUCCESS] (state) {
    state.isAuthenticating = false
    state.isAuthenticated = true
    state.hasError = false
  },
  [REGISTER_SUCCESS] (state) {
    state.isAuthenticating = false
    state.isRegistered = true
    state.hasError = false
  },
  [LOGIN_FAIL] (state) {
    state.isAuthenticating = false
    state.isAuthenticated = false
    state.hasError = true
  },
  [LOGOUT_REQUEST] (state) {
    // Nothing
  },
  [LOGOUT_SUCCESS] (state) {
    state.isAuthenticated = false
  },
  [LOGOUT_FAIL] (state) {
    // Nothing
  },
  [SET_USER_TOKEN] (state, token) {
    window.$cookies.set('token', token)
    state.token = token
    state.hasCookie = true
  },
  [RESET_USER_TOKEN] (state) {
    window.$cookies.remove('token')
    state.token = null
    state.hasCookie = false
  }
}

const actions = {
  login ({commit}, {username, password}) {
    commit(LOGIN_REQUEST)
    Vue.http.post('login', {email: username, password: password}, {emulateJSON: true}
    ).then(
      response => {
        if (response.body.status === 200) {
          console.log(response)
          commit(LOGIN_SUCCESS)
          Vue.http.headers.common['Authorization'] = 'Bearer ' + response.body.data.accessToken
        } else {
          commit(LOGIN_FAIL)
          console.log(response)
        }
      },
      response => {
        commit(LOGIN_FAIL)
        console.log(response)
      }
    )
  },
  register ({commit}, {email, password}) {
    Vue.http.post('auth/register', {email: email, password: password}, {emulateJSON: true}
    ).then(
      response => {
        console.log(response)
        commit(REGISTER_SUCCESS)
      },
      response => {
        console.log(response)
      }
    )
  },
  logout ({commit, dispatch}) {
    commit(LOGOUT_REQUEST)

    Vue.http.post('logout').then(
      response => {
        commit(RESET_USER_TOKEN)
        commit(LOGOUT_SUCCESS)
      },
      response => {
        commit(LOGOUT_FAIL)
      }
    )
  },
  reset ({commit, dispatch}) {
    commit(RESET_USER_TOKEN)
    commit(LOGOUT_SUCCESS)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    users
  }
}
