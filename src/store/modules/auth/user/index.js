import Vue from 'vue'

const USER_REQUEST = 'USER_REQUEST'
const RESET_USER = 'RESET_USER'
const USER_REQUEST_FAIL = 'USER_REQUEST_FAIL'

const state = {
  user: null,
  userRequestFail: false
}

const getters = {
  user (state) {
    return state.user
  },
  userRequestFail (state) {
    return state.user
  }
}

const mutations = {
  [USER_REQUEST] (state, response) {
    state.user = response.body
    state.userRequestFail = false
  },
  [RESET_USER] (state) {
    state.user = null
  },
  [USER_REQUEST_FAIL] (state) {
    state.userRequestFail = true
  }
}

const actions = {
  requestUser ({commit}) {
    Vue.http.post('user'
    ).then(
      response => {
        console.log("user response ok")
        commit(USER_REQUEST, response)
      },
      response => {
        console.log("user response not ok")
        commit(USER_REQUEST_FAIL)
      }
    )
  },
  resetUser ({commit}) {
    commit(RESET_USER)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
