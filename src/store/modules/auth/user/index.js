import Vue from 'vue'

const USERS_REQUEST = 'USERS_REQUEST'
const RESET_USERS = 'RESET_USERS'
const USERS_REQUEST_FAIL = 'USERS_REQUEST_FAIL'

const state = {
  users: null,
  usersRequestFail: null
}

const getters = {
  users (state) {
    return state.users
  },
  usersRequestFail (state) {
    return state.users
  }
}

const mutations = {
  [USERS_REQUEST] (state, response) {
    state.users = response.body
    state.usersRequestFail = false
  },
  [RESET_USERS] (state) {
    state.users = null
  },
  [USERS_REQUEST_FAIL] (state) {
    state.usersRequestFail = true
  }
}

const actions = {
  requestUsers ({commit}) {
    Vue.http.get('users'
    ).then(
      response => {
        commit(USERS_REQUEST, response)
      },
      response => {
        commit(USERS_REQUEST_FAIL)
      }
    )
  },
  resetUsers ({commit}) {
    commit(RESET_USERS)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
