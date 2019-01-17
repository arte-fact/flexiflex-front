<template>
  <div class="centerDisplayFlexColumn">
    <product-list></product-list>
    <product-detail></product-detail>
    <video-player-modal></video-player-modal>
  </div>
</template>

<script>

import Vue from 'vue'
import Vuex from 'vuex'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import ProductList from './productListComponent.vue'
import ProductDetail from './productDetailComponent.vue'
import VideoPlayerModal from './videoPlayerModal.vue'
import headerLayout from './layouts/headerComponent.vue'
import { mapActions, mapGetters } from 'vuex'

Vue.use(Vuex);
export default {
  name: 'home-page',
  data() {
    return {
      email: "",
      products: null,
      colorRingLoader: '#2c3e50',
      sizeRingLoader: '200px',
    }
  },
  computed: {
    ...mapGetters('auth', [
      'token',
      'user',
      'userRequestFail'
    ])
  },
  components: {
    RingLoader,
    ProductList,
    ProductDetail,
    VideoPlayerModal,
    headerLayout
  },
  created () {
    if (this.user === null) {
      this.request()
    }
  },
  methods: {
    ...mapActions('auth', [
      'requestUser',
      'resetUser',
      'resetToken',
      'setAuthHeaderFromCookie',
      'logout'
    ]),
    request () {
      this.requestUser()
    },
    doLogout() {
      this.resetToken()
      this.resetUser()
    }
  }
}
</script>
