import user from "../auth/user";

const PRODUCT_REQUEST = 'PRODUCT_REQUEST'
const RESET_PRODUCT = 'RESET_PRODUCT'
const PRODUCT_REQUEST_FAIL = 'PRODUCT_REQUEST_FAIL'

const state = {
  productRequestFail: false,
  product: null,
}

const getters = {
  products (state) {
    return state.product
  },
  productRequestFail (state) {
    return state.product
  }
}

const mutations = {
  [PRODUCT_REQUEST] (state) {
    state.product = [{"actors": [
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
      "id": 0,
      "releaseDate": "2019-01-15",
      "synopsis": "string",
      "title": "string",
      "url": "string"
    },
      {
        "actors": [
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
          "id": 4
        },
        "id": 1,
        "releaseDate": "2019-01-15",
        "synopsis": "string",
        "title": "string",
        "url": "string"
      },
      {
        "actors": [
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
          "id": 2
        },
        "id": 5,
        "releaseDate": "2019-01-15",
        "synopsis": "string",
        "title": "string",
        "url": "string"
      },
      {
        "actors": [
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
          "id": 3
        },
        "id": 2,
        "releaseDate": "2019-01-15",
        "synopsis": "string",
        "title": "string",
        "url": "string"
      },
    ]
    state.productRequestFail = false
  },
  [RESET_PRODUCT] (state) {
    state.product = null
  },
  [PRODUCT_REQUEST_FAIL] (state) {
    state.productRequestFail = true
  }
}

const actions = {
  requestProducts ({commit}) {
    console.log('product request')
    setTimeout(function () {
      commit(PRODUCT_REQUEST)},
      1000)
    },
  resetProduct ({commit}) {
    commit(RESET_PRODUCT)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
