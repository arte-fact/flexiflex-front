import Vue from 'vue'
import user from './user'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

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
    window.$cookies.set('token', response.id_token)
    state.token = response.token
    state.hasCookie = true
  },
  [RESET_USER_TOKEN] (state) {
    window.$cookies.remove('token')
    window.$cookies.remove('uuid')
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
    Vue.http.post('api/authenticate', {
      password: password,
      rememberMe: true,
      username: username,
      email: username
      }
    ).then(
      response => {
        if (response.ok) {
          console.log(response)
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
  register ({commit}, {email, password, birthdate}) {
    commit(REGISTER_REQUEST)
    Vue.http.post('api/custom/register', {
      email: email,
      login: email,
      password: password,
      birthDate: birthdate
    }
    ).then(
      response => {
        if (response.status === 201) {
          console.log(response)
          commit(REGISTER_SUCCESS)
        } else {
          console.log(response)
          commit(REGISTER_FAIL)
        }
      },
      response => {
        console.log(response)
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
    Vue.http.headers.put['uuid'] = uuid;
    Vue.http.headers.put['token'] = token;
  },
  setAuthHeaderFromCookie() {
    Vue.http.headers.put['uuid'] = window.$cookies.get('uuid');
    Vue.http.headers.put['token'] = window.$cookies.get('token');
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
