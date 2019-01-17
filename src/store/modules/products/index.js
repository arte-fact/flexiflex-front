const PRODUCT_REQUEST = 'PRODUCT_REQUEST'
const RESET_PRODUCT = 'RESET_PRODUCT'
const PRODUCT_REQUEST_FAIL = 'PRODUCT_REQUEST_FAIL'
const SELECT_A_PRODUCT = 'SELECT_A_PRODUCT'
const UNSELECT_A_PRODUCT = 'UNSELECT_A_PRODUCT'
const TOGGLE_IS_PLAYING = 'TOGGLE_IS_PLAYING'

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
    setTimeout(function () {
        let items = []
        for (let i = 0; i < 50; i++) {
          let item = {"actors": [
              {
                "id": 0,
                "identity": {
                  "firstName": "string",
                  "id": 0,
                  "lastName": "string"
                }
              },
              {
                "id": 1,
                "identity": {
                  "firstName": "string",
                  "id": 0,
                  "lastName": "string"
                }
              },
              {
                "id": 2,
                "identity": {
                  "firstName": "string",
                  "id": 0,
                  "lastName": "string"
                }
              }
            ],
            "addDate": "2019-01-15",
            "ageRequired": 0,
            "directors": [
              {
                "id": 0,
                "identity": {
                  "firstName": "string",
                  "id": 0,
                  "lastName": "string"
                }
              },
              {
                "id": 1,
                "identity": {
                  "firstName": "string",
                  "id": 0,
                  "lastName": "string"
                }
              }
            ],
            "genre": {
              "firstName": "string",
              "id": 0
            },
            "id": i,
            "releaseDate": "2019-01-15",
            "synopsis": "string",
            "title": "Titre du film n°" + i,
            "url": "string"
          }

          items.push(item)
        }
        commit(RESET_PRODUCT)
        commit(PRODUCT_REQUEST, items)
      },
      500)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
