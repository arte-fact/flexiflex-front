import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

const MEDIA_REQUEST = 'MEDIA_REQUEST'
const RESET_MEDIA = 'RESET_MEDIA'
const MEDIA_REQUEST_FAIL = 'MEDIA_REQUEST_FAIL'
const SELECT_A_MEDIA = 'SELECT_A_MEDIA'
const UNSELECT_A_MEDIA = 'UNSELECT_A_MEDIA'
const TOGGLE_IS_PLAYING = 'TOGGLE_IS_PLAYING'
const MEDIA_PUSH = 'MEDIA_PUSH'
const MINIO_URL = 'http://62.210.148.177:9001/minio/webrpc'

const state = {
  mediaRequestFail: false,
  media: null,
  selected: null,
  isPlaying: false
}

const getters = {
  getMedias (state) {
    return state.media
  },
  mediaRequestFail (state) {
    return state.media
  },
  getSelected (state) {
    return state.selected
  },
  isPlaying (state) {
    return state.isPlaying
  }
}

const mutations = {
  [MEDIA_REQUEST] (state, items) {
      state.media = items
  },
  [MEDIA_PUSH] (state, item) {
    state.media = item;
  },
  [RESET_MEDIA] (state) {
    state.media = null
  },
  [MEDIA_REQUEST_FAIL] (state) {
    state.mediaRequestFail = true
  },
  [SELECT_A_MEDIA] (state, media) {
    state.selected = media;
  },
  [UNSELECT_A_MEDIA] (state) {
    state.selected = null
  },
  [TOGGLE_IS_PLAYING] (state) {
    state.isPlaying = !state.isPlaying
  }
}

const actions = {
  addMedia({commit}, item) {
    commit(MEDIA_PUSH, item)
  },
  setMedias({commit}, items) {
    commit(MEDIA_REQUEST, items)
  },
  flushMedia({commit}) {
    commit(MEDIA_REQUEST, [])
  },
  unSelectMedia({commit}) {
    commit(UNSELECT_A_MEDIA)
  },
  resetMedias({commit}) {
    commit(RESET_MEDIA)
  },
  requestMedias({commit}, prefix) {
    Vue.http.post(
      MINIO_URL,
      {
        "id": "1",
        "jsonrpc": "2.0",
        "method": "Web.ListObjects",
        "params": {
          "bucketName": "transmission",
          "marker": "",
          "prefix": "incomplete/"
        }
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + window.$cookies.get("Minio_Authorization")
        }
      }).then(
      response => {
        response.body.result.objects.forEach(function (item) {
          if (item.contentType === 'video/mp4') {
            console.log(item.name)
          }
        })
      },
      response => {
        console.log(response)
      }
    )
  },
  requestFolders({commit}) {
    Vue.http.post(
      MINIO_URL,
      {
        "id": "1",
        "jsonrpc": "2.0",
        "method": "Web.ListObjects",
        "params": {
          "bucketName": "transmission",
          "marker": "",
          "prefix": ""
        }
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + window.$cookies.get("Minio_Authorization")
        }
      }).then(
      response => {
        console.log(response)
        response.body.result.objects.forEach(function (item) {
          console.log(item)
        })
      },
      response => {
        console.log(response)
      }
    )
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
