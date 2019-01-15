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
  [PRODUCT_REQUEST] (state, response) {
    state.product = response.body
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
    setTimeout(function () {
      commit(PRODUCT_REQUEST, [
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
            "id": 0
          },
          "id": 2,
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
            "id": 0
          },
          "id": 2,
          "releaseDate": "2019-01-15",
          "synopsis": "string",
          "title": "string",
          "url": "string"
        },
      ], 5000)
    })
    // Vue.http.get('api/products', {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Accept': 'application/json',
    //     'Authorization': 'Bearer ' + window.$cookies.get('Authorization')
    //   }
    // }).then(
    //   response => {
    //     if (response.status === 200) {
    //       commit(PRODUCT_REQUEST, response)
    //     } else {
    //       commit(PRODUCT_REQUEST_FAIL)
    //     }
    //   },
    //   response => {
    //     console.log("product response not ok")
    //     console.log(response)
    //     commit(PRODUCT_REQUEST_FAIL)
    //   }
    // )
  },
  resetProduct ({commit}) {
    commit(RESET_PRODUCT)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
