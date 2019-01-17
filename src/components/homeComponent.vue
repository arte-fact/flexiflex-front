<template>
  <div class="centerDisplayFlexColumn">
    <div class="centerDisplayFlexRow">
      <router-link :to="{name: 'home-page'}">
        <div class="flexiflex-logo-HomePage">Flexiflex</div>
      </router-link>
      <div class="centerDisplayFlexRowRight">
        <router-link :to="{name: 'user-account'}">
          <button v-if= "user != null" class="useraccount-button">Compte {{user.firstName}} {{user.lastName}}</button>
        </router-link>
        <div class="useraccount-button" v-on:click="doLogout">Logout</div>
      </div>
    </div>
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


Vue.use(Vuex);
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home-page',
  data() {
    return {
      email: "",
      products: null,
      colorRingLoader: '#2c3e50',
      sizeRingLoader: '200px'
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
    VideoPlayerModal
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
