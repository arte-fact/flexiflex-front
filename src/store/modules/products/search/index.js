import Vue from 'vue'

const SET_PARAMS = 'SET_PARAMS'
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES'
const INC_PAGE = 'INC_PAGE'
const RESET_SEARCH_PARAMS = 'RESET_SEARCH_PARAMS'
const GET_NEXT_PAGE = 'GET_NEXT_PAGE'

const state = {
  page: 1,
  totalPages: 0,
  tmdbParams: null,
  hasError: false,
  results: null
}

const getters = {

  getParams (state) {
    return state.tmdbParams
  },

  getPage (state) {
    return state.tmdbParams
  },

  getTotalPages (state) {
    return state.totalPages
  },

  getResults (state) {
    return state.results
  }
}

const mutations = {
  [SET_PARAMS] (state, params) {
    state.tmdbParams = params
  },
  [INC_PAGE] (state, number) {
    state.page += number
  },
  [SET_TOTAL_PAGES] (state, number) {
    state.totalPages = number
  },
  [RESET_SEARCH_PARAMS] (state) {
    state.tmdbParams = null
    state.totalPages = 0
    state.page = 0
    state.results = null
  },
  [GET_NEXT_PAGE] (state) {
    state.page++
    state.hasError = false
    Vue.http.options.credentials =false
    Vue.http.post(
      'http://api.themoviedb.org/3/search/'
      + state.tmdbParams.media
      + '?api_key=b9e5550676ff70a2c33461f55fac000c&query='
      + state.tmdbParams.input
      + '&language=fr&page='
      + state.page,
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then(
      response => {
        response.body.results.forEach(function (item) {
          if (item.poster_path !== null) {
            setTimeout(function () {
              state.results = {
                title: item.title,
                coverUrl: item.poster_path,
                synopsis: item.overview,
                isTmdb: true
              }
            }, 200)
          }
        })
      },
      response => {
        // console.log(response)
        setTimeout(function (){
          state.hasError = true}
          ,
          2000)
      })
  }
}

const actions = {
  getNextResultPages({commit}, number) {
    for (let i = 0; i < number; i++) {
        commit(GET_NEXT_PAGE)
    }
  },
  setSearchParams({commit}, params){
    commit(RESET_SEARCH_PARAMS)
    commit(SET_PARAMS, params)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
