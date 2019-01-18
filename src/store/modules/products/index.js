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
  products (state) {
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
    commit(PRODUCT_PUSH, item)
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
  requestProducts ({commit}) {
    commit(RESET_PRODUCT, [])
  }

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
