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
const FOLDER_PUSH = 'FOLDER_PUSH'
const MINIO_URL = 'http://62.210.148.177:9001/minio/webrpc'

const state = {
  mediaRequestFail: false,
  media: null,
  folder: null,
  selected: null,
  isPlaying: false
}

const getters = {
  getMedias (state) {
    return state.media
  },
  getFolders (state) {
    return state.folder
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
  [FOLDER_PUSH] (state, item) {
    state.folder = item;
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
  requestMedias({commit}, params) {
    Vue.http.post(
      MINIO_URL,
      {
        "id": "1",
        "jsonrpc": "2.0",
        "method": "Web.ListObjects",
        "params": {
          "bucketName": params.bucket,
          "marker": "",
          "prefix": params.prefix
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
          setTimeout(function () {
            if (item.contentType === 'video/mp4') {
              commit(MEDIA_PUSH, {
                title: item.name,
                prefix: params.prefix.replace(params.prefix, '').replace(/\./g, ' '),
                urls: {
                  hdUrl: 'http://62.210.148.177:9001/' + params.bucket.split("/")[0] + '/' + item.name,
                  sdUrl: null,
                  sourceFileUrl: null,
                  coverUrl: 'http://pngimg.com/uploads/filmstrip/filmstrip_PNG125.png',
                },
                synopsis: null,
              })
            } else if (item.contentType === 'video/x-matroska'){
              commit(MEDIA_PUSH, {
                title: item.name.replace(/\./g, ' '),
                prefix: params.prefix.replace(params.prefix, '').replace(/\./g, ' '),
                urls: {
                  hdUrl: null,
                  sdUrl: null,
                  sourceFileUrl: 'http://62.210.148.177:9001/' + params.bucket + '/' + params.prefix.split("/")[1] + item.name,
                  coverUrl: 'http://pngimg.com/uploads/filmstrip/filmstrip_PNG125.png',
                },
                synopsis: null,
              })
            } else if (item.contentType === '') {
              commit(FOLDER_PUSH, {
                title: item.name.replace(/\./g, ' '),
                prefix: params.prefix,
                urls: {
                  hdUrl: null,
                  sdUrl: null,
                  sourceFileUrl: null,
                  coverUrl: 'http://pngimg.com/uploads/folder/folder_PNG8773.png',
                },
                synopsis: null,
              })
            }
          }, 200)
        })
      },
      response => {
        alert("requestFolder error")
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
