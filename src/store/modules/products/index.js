import Vue from 'vue'
import search from './search'

const PRODUCT_REQUEST = 'PRODUCT_REQUEST'
const RESET_PRODUCT = 'RESET_PRODUCT'
const PRODUCT_REQUEST_FAIL = 'PRODUCT_REQUEST_FAIL'
const SELECT_A_PRODUCT = 'SELECT_A_PRODUCT'
const UNSELECT_A_PRODUCT = 'UNSELECT_A_PRODUCT'
const TOGGLE_IS_PLAYING = 'TOGGLE_IS_PLAYING'
const PRODUCT_PUSH = 'PRODUCT_PUSH'

const state = {
  productRequestFail: false,
  product: null,
  selected: null,
  isPlaying: false
}

const getters = {
  getProducts (state) {
    return state.product
  },
  productRequestFail (state) {
    return state.product
  },
  getSelected (state) {
    return state.selected
  },
  isPlaying (state) {
    return state.isPlaying
  }
}

const mutations = {
  [PRODUCT_REQUEST] (state, items) {
    state.product = items
    state.productRequestFail = false
  },
  [PRODUCT_PUSH] (state, item) {
    if (state.product === null) {
      product = []
    }
    state.product.push(item)
  },
  [RESET_PRODUCT] (state) {
    state.product = null
  },
  [PRODUCT_REQUEST_FAIL] (state) {
    state.productRequestFail = true
  },
  [SELECT_A_PRODUCT] (state, product) {
    state.selected = product;
  },
  [UNSELECT_A_PRODUCT] (state) {
    state.selected = null
  },
  [TOGGLE_IS_PLAYING] (state) {
    state.isPlaying = !state.isPlaying
  }
}

const actions = {
  addProduct({commit}, item) {
    console.log(item)
    console.log('coucou')
    commit(PRODUCT_PUSH, item)
  },
  setProducts({commit}, items) {
    commit(PRODUCT_REQUEST, items)
  },
  flushProduct({commit}) {
    commit(PRODUCT_REQUEST, [])
  },
  toggleIsPlaying({commit}) {
    commit(TOGGLE_IS_PLAYING)
  },
  selectProduct({commit}, product) {
    commit(SELECT_A_PRODUCT, product)
  },
  unSelectProduct({commit}) {
    commit(UNSELECT_A_PRODUCT)
  },
  resetProducts({commit}) {
    commit(RESET_PRODUCT)
  },
  requestProducts({commit}) {
    commit(UNSELECT_A_PRODUCT)
    Vue.http.options.credentials = false
    Vue.http.get(
      'api/products',
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + window.$cookies.get('Authorization')
        }
      }).then(
      response => {
        commit(PRODUCT_REQUEST, response.body)
      },
      response => {
        this.isRequesting = false;
      }
    )

    commit(RESET_PRODUCT, [])
  },
  createProduct({commit}, item) {
    console.log(item)
    Vue.http.options.credentials = false
    Vue.http.post(
      'api/products',
      item,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + window.$cookies.get('Authorization')
        }
      }).then(
      response => {
        if (response.status === 201) {
          commit(SELECT_A_PRODUCT, response)
        } else {

        }
      },
      response => {
        //
      }
    )
  }
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    search
  }
}
