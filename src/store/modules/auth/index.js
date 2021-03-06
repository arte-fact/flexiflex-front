import Vue from 'vue'
import user from './user'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

const MINIO_URL = 'http://62.210.148.177:9001/minio/webrpc'
const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const REGISTER_FAIL = 'REGISTER_FAIL'
const REGISTER_REQUEST = 'REGISTER_REQUEST'
const LOGIN_FAIL = 'LOGIN_FAIL'
const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
const LOGOUT_FAIL = 'LOGOUT_FAIL'
const SET_USER_TOKEN = 'SET_USER_TOKEN'
const SET_MINIO_TOKEN = 'SET_MINIO_TOKEN'
const RESET_USER_TOKEN = 'RESET_USER_TOKEN'
const RESET_ERRORS = 'RESET_ERRORS'

const state = {
  isAuthenticating: false,
  isAuthenticated: false,
  hasAuthenticationError: false,
  isRegistering: false,
  isRegistered: false,
  hasRegistrationError: false,
  hasCookie: null,
  minioToken: window.$cookies.get('minio'),
  token: window.$cookies.get('token'),
  // token: 'toto',
}

const getters = {

  isAuthenticating (state) {
    return state.isAuthenticating
  },
  isAuthenticated (state) {
    return state.isAuthenticated
  },
  hasAuthenticationError (state) {
    return state.hasAuthenticationError
  },
  isRegistered (state) {
    return state.isRegistered
  },
  isRegistering (state) {
    return state.isRegistering
  },
  hasRegistrationError (state) {
    return state.hasRegistrationError
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
    state.hasAuthenticationError = false
  },
  [LOGIN_SUCCESS] (state) {
    state.isAuthenticating = false
    state.isAuthenticated = true
    state.hasAuthenticationError = false
  },
  [LOGIN_FAIL] (state) {
    state.isAuthenticating = false
    state.isAuthenticated = false
    state.hasAuthenticationError = true
  },
  [REGISTER_REQUEST] (state) {
    state.isRegistering = true
    state.isRegistered = false
    state.hasRegistrationError = false
  },
  [REGISTER_SUCCESS] (state) {
    state.isRegistering = false
    state.isRegistered = true
    state.hasRegistrationError = false
  },
  [REGISTER_FAIL] (state) {
    state.isRegistering = false
    state.isRegistered = false
    state.hasRegistrationError = true
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
    window.$cookies.set('Authorization', response.id_token)
    state.token = response.token
    state.hasCookie = true
  },
  [SET_MINIO_TOKEN] (state, response) {
    window.$cookies.set('Minio_Authorization', response)
    state.minioToken = response
  },
  [RESET_USER_TOKEN] (state) {
    window.$cookies.remove('Authorization')
    state.token = null
    state.uuid = null
    state.hasCookie = false
  },
  [RESET_ERRORS] (state) {
    state.hasAuthenticationError = false
    state.hasRegistrationError = false
  }
}

const actions = {
  login ({commit}, {username, password}) {
    commit(LOGIN_REQUEST)
    Vue.http.post(
      'api/authenticate', {
        password: password,
        rememberMe: true,
        username: username,
        email: username
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json'
        }
      }
    ).then(
      response => {
        if (response.ok) {
          commit(LOGIN_SUCCESS)
          commit(SET_USER_TOKEN, response.body)

        } else {
          commit(LOGIN_FAIL)
        }
      },
      response => {
        commit(LOGIN_FAIL)
      }
    )
  },
  minioLogin ({commit}) {
    Vue.http.post(
      MINIO_URL,
      {
        "id": "1",
        "jsonrpc": "2.0",
        "method": "Web.Login",
        "params": {
          "password": "m2ijavamsa",
          "username": "flexiflexadmin"
        }
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then(
      response => {
        commit(SET_MINIO_TOKEN, response.body.result.token)
        console.log(window.$cookies.get('Minio_Authorization'))
      },
      response => {
        console.log(response)
      }
    )
  },
  register ({commit}, {username, email, password}) {
    commit(REGISTER_REQUEST)
    Vue.http.post(
      'api/register',
      {
        login: username,
        email: email,
        password: password,
        langKey: 'fr'
      },
      {
        headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
        }
      }
      ).then(
      response => {
        if (response.status === 201) {
          commit(REGISTER_SUCCESS)
        } else {
          commit(REGISTER_FAIL)
        }
      },
      response => {
        commit(REGISTER_FAIL)
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
  },
  resetErrors({commit}) {
    commit(RESET_ERRORS)
  },
  setAuthHeader({commit}, uuid, token) {
    Vue.http.headers.put['Authorization'] = token;
  },
  setAuthHeaderFromCookie() {
    Vue.http.headers.put['Authorization'] = window.$cookies.get('Authorization');
  },
  setTokenFromCookie({commit}) {
    let token = window.$cookies.get("Authorization")
    if (token !== null) {
      commit(SET_USER_TOKEN, {'id_token': window.$cookies.get('Authorization')});
    }
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
