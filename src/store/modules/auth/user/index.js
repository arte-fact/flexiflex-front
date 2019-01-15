import Vue from 'vue'
import VueCookies from 'vue-cookies'
import userAccountComponent from "../../../../components/userAccountComponent";

Vue.use(VueCookies)

const USER_REQUEST = 'USER_REQUEST'
const RESET_USER = 'RESET_USER'
const USER_REQUEST_FAIL = 'USER_REQUEST_FAIL'

const state = {
  userRequestFail: false,
  user: null,
}

const getters = {
  user (state) {
    return state.user
  },
  userRequestFail (state) {
    return state.user
  },
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
    Vue.http.get('api/account', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + window.$cookies.get('Authorization')
      }
    }).then(
      response => {
        if (response.status === 200) {
          commit(USER_REQUEST, response)
        } else {
          commit(USER_REQUEST_FAIL)
        }
      },
      response => {
        console.log("user response not ok")
        console.log(response)
        commit(USER_REQUEST_FAIL)
      }
    )
  },
  resetUser ({commit}) {
    commit(RESET_USER)
  },
  updateUser({commit}, {login, firstName, lastName}){
    Vue.http.put('api/users',
      {
        login: login,
        firstName: firstName,
        lastName: lastName,
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + window.$cookies.get('Authorization')
        }
      }).then(
      response => {
        if (response.status === 200) {
          console.log(response)
          commit(USER_REQUEST, response)
        } else {
          console.log(response)
          commit(USER_REQUEST_FAIL)
        }
      },
      response => {
        console.log("user response not ok")
        console.log(response)
        commit(USER_REQUEST_FAIL)
      }
    )
  },
  deleteUser({commit}, login){
    Vue.http.delete('api/users/' + login + "'",
      {
        login: login,
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + window.$cookies.get('Authorization')
        }
      }).then(
      response => {
        if (response.status === 200) {
          console.log(response)
          commit(USER_REQUEST, response)
        } else {
          console.log(response)
          commit(USER_REQUEST_FAIL)
        }
      },
      response => {
        console.log("user response not ok")
        console.log(response)
        commit(USER_REQUEST_FAIL)
      }
    )
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
