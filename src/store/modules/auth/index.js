import Vue from 'vue'
import user from './user'
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
  token: window.$cookies.get('token'),
  uuid: window.$cookies.get('uuid')
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
  },
  uuid (state) {
    return state.uuid
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
  [SET_USER_TOKEN] (state, response) {
    window.$cookies.set('uuid', response.uuid)
    window.$cookies.set('token', response.token)
    state.token = response.token
    state.uuid = response.uuid
    state.hasCookie = true
  },
  [RESET_USER_TOKEN] (state) {
    window.$cookies.remove('token')
    window.$cookies.remove('uuid')
    state.token = null
    state.uuid = null
    state.hasCookie = false
  }
}

const actions = {
  login ({commit}, {username, password}) {
    commit(LOGIN_REQUEST)
    Vue.http.post('auth/login', {email: username, password: password}
    ).then(
      response => {
        if (response.ok) {
          commit(LOGIN_SUCCESS)
          commit(SET_USER_TOKEN, response.body)
          Vue.http.headers.put['uuid'] = response.body.uuid;
          Vue.http.headers.put['token'] = response.body.token;
        } else {
          commit(LOGIN_FAIL)
        }
      },
      response => {
        commit(LOGIN_FAIL)
      }
    )
  },
  register ({commit}, {email, password}) {
    Vue.http.post('auth/register', {email: email, password: password}
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
  resetToken ({commit}) {
    commit(RESET_USER_TOKEN)
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
    user
  }
}
